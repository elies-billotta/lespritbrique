<template>
  <div class="email-form">
    <div class="form-content">
      <form @submit.prevent="sendEmail">
        <div class="line1">
          <div>
            <label for="name">NOM<span class="required-asterisk">*</span>:</label>
            <input type="text" v-model="formData.name" :disabled="formDisabled" id="name" required />
          </div>
          <div>
            <label for="email">EMAIL<span class="required-asterisk">*</span>:</label>
            <input type="email" v-model="formData.email" :disabled="formDisabled" id="email" required />
          </div>
        </div>
        <div class="line2">
          <div>
            <label for="entity">JE SUIS<span class="required-asterisk">*</span>:</label>
            <select v-model="selectedEntity" :disabled="formDisabled" id="entity" required>
              <option value="" disabled>Sélectionnez une entité</option>
              <option value="particulier">Un.e particulier·ère</option>
              <option value="entreprise">Une Entreprise</option>
            </select>
          </div>
          <div>
            <label for="subject">SUJET<span class="required-asterisk">*</span>:</label>
            <select v-model="formData.subject" :disabled="formDisabled" id="subject" required>
              <option value="" disabled>Sélectionnez un sujet</option>
              <option v-for="subject in availableSubjects" :key="subject" :value="subject">{{ subject }}</option>
            </select>
          </div>
        </div>
        <div>
          <label for="message">MESSAGE<span class="required-asterisk">*</span>:</label>
          <textarea class="message" v-model="formData.message" :disabled="formDisabled" id="message" required
            placeholder="Saisissez un message d'au moins 30 caractères"></textarea>
        </div>
        <div class="inline">
          <div class="submit-section">
            <MyButton class="button" v-if="!isSending && !emailSent && !emailError" type="submit" text="ENVOYER"
              :disabled="formDisabled" />
            <div v-if="isSending" class="loader fade-in"></div>
            <MyButton v-if="emailSent && !isSending" :text="'MESSAGE ENVOYÉ'" class="sent fade-in button" disabled />
            <MyButton v-if="emailError && !isSending" :text="'RÉESSAYER'" @click="sendEmail" class="error fade-in button" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import MyButton from '@/components/buttons/MyButton.vue';
import axios from 'axios';

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
    "Kit personnalisé sur mesure",
    "Autre"
  ],
  entreprise: [
    "Demande de devis",
    "Kit personnalisé sur mesure",
    "Maquette personnalisée",
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
  };

  try {
    const response = await axios.post("https://lespritbrique.com/send-email.php", payload);
    if (response.status === 200) {
      emailSent.value = true;
      formDisabled.value = true;
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
  }, 300000);
}
</script>

<style scoped>
.email-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

input, select, .message {
  border: 1px solid var(--black);
  padding: 0.5rem;
  background-color: var(--white);
}

.form-content {
  width: 100%;
}

label {
  font-weight: bold;
  font-size: 1.5rem;
}

.message {
  border-radius: 0px;
  border: 1px solid var(--black);
  width: 100%;
  height: 150px;
  flex-grow: 1;
}

.message::placeholder {
  color: black;
  font-style: italic;
}

.required-asterisk {
  color: var(--red);
  vertical-align: top;
}
</style>
