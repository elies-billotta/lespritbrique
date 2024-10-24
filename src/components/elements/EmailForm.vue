<template>
  <div class="email-form">
    <div class="form-content">
      <Title class="title-form" :title="'CONTACT'" :description="'UNE DEMANDE ? CONTACTEZ NOUS !'" :icon="Brick"/>
      <form @submit.prevent="sendEmail">
        <div class="line1">
          <div>
            <label for="name">Nom<span class="required-asterisk">*</span>:</label>
            <input type="text" v-model="formData.name" :disabled="formDisabled" id="name" required />
          </div>
          <div>
            <label for="email">Email<span class="required-asterisk">*</span>:</label>
            <input type="email" v-model="formData.email" :disabled="formDisabled" id="email" required />
          </div>
        </div>
        <div class="line2">
          <div>
            <label for="entity">Je suis<span class="required-asterisk">*</span>:</label>
            <select v-model="selectedEntity" :disabled="formDisabled" id="entity" required>
              <option value="" disabled>Sélectionnez une entité</option>
              <option value="particulier">Un.e particulier·ère</option>
              <option value="entreprise">Une Entreprise</option>
            </select>
          </div>
          <div>
            <label for="subject">Sujet<span class="required-asterisk">*</span>:</label>
            <select v-model="formData.subject" :disabled="formDisabled" id="subject" required>
              <option value="" disabled>Sélectionnez un sujet</option>
              <option v-for="subject in availableSubjects" :key="subject" :value="subject">{{ subject }}</option>
            </select>
          </div>
        </div>
        <div>
          <label for="message">Message<span class="required-asterisk">*</span>:</label>
          <textarea v-model="formData.message" :disabled="formDisabled" id="message" required
            placeholder="Saisissez un message d'au moins 30 caractères"></textarea>
        </div>
        <div class="inline">
          <div class="submit-section">
            <MyButton v-if="!isSending && !emailSent && !emailError" type="submit" text="ENVOYER"
              :disabled="formDisabled" />
            <div v-if="isSending" class="loader fade-in"></div>
            <MyButton v-if="emailSent && !isSending" :text="'MESSAGE ENVOYÉ'" class="sent fade-in" disabled />
            <MyButton v-if="emailError && !isSending" :text="'Réessayer'" @click="sendEmail" class="error fade-in" />
          </div>
        </div>
      </form>
      <CardRow :title="'CONTACT'" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import MyButton from '@/components/buttons/MyButton.vue';
import Title from '@/components/elements/Title.vue';
import Brick from '@/assets/icons/brick.svg';
import axios from 'axios';
import CardRow from './CardRow.vue';

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const selectedEntity = ref('');
const isSending = ref(false);
const emailSent = ref(false);
const emailError = ref(false);
const formDisabled = ref(false);

const subjects = {
  particulier: [
    "Demande de briques personnalisées sur mesure",
    "Autre"
  ],
  entreprise: [
    "Demande de devis",
    "Kit en brique personnalisé sur mesure",
    "Goodies personnalisés",
    "Autre"
  ]
};

const availableSubjects = ref([]);

watch(selectedEntity, (newEntity) => {
  if (newEntity) {
    availableSubjects.value = subjects[newEntity];
    formData.subject = '';
  } else {
    availableSubjects.value = [];
  }
});

async function sendEmail() {
  // Retirer la validation du reCAPTCHA
  // const recaptchaToken = grecaptcha.getResponse();
  // if (!recaptchaToken) {
  //   emailError.value = true;
  //   return;
  // }

  const form = document.querySelector('form');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (formData.message.length < 30) {
    emailError.value = true;
    return;
  }

  isSending.value = true;
  emailError.value = false;

  const payload = {
    ...formData,
    // recaptchaToken // Retirer le token du payload
  };

  try {
    const response = await axios.post("https://lespritbrique.com/beta/send-email.php", payload);
    if (response.status === 200) {
      emailSent.value = true;
      formDisabled.value = true;
      // grecaptcha.reset(); // Retirer la réinitialisation du reCAPTCHA
      startResetTimer();
    } else {
      throw new Error('Échec lors de l\'envoi de l\'email.');
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi : ", error.response?.data || error.message);
    emailError.value = true;
    emailSent.value = false;
  } finally {
    isSending.value = false;
  }
}

function startResetTimer() {
  setTimeout(() => {
    emailSent.value = false;
    formDisabled.value = false;
    emailError.value = false;
    formData.name = '';
    formData.email = '';
    formData.subject = '';
    formData.message = '';
  }, 300000); // Réinitialiser après 5 minutes
}
</script>

<style scoped>
.email-form {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('@/assets/images/paperboard-yellow-texture.png');
  background-size: cover;
  padding: 10px;
  border-radius: 3px;
  transform: rotate(-2deg);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.form-content {
  padding: 10px;
  border: 3px solid var(--black);
  border-radius: 3px;
  
}

.title-form {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.required-asterisk {
  color: red;
  margin-right: 5px;
}

textarea {
  resize: none;
  height: 150px;
}

.inline {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.line1,
.line2 {
  display: flex;
  flex-direction: row;
  justify-content: flex;
  gap: 10px;
}

.line1>div,
.line2>div {
  flex: 1;
}

.inline>div {
  flex: 1;
}

.submit-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--secondary-color);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.loader.fade-in {
  opacity: 1;
}

.sent,
.error {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.sent.fade-in,
.error.fade-in {
  opacity: 1;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.sent {
  color: var(--black);
  cursor: not-allowed;
}

.error {
  background-color: transparent;
  color: var(--black);
}
</style>
