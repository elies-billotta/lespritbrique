<template>
  <div class="email-form">
    <form @submit.prevent="sendEmail">
      <div>
        <label for="name">Nom:</label>
        <input type="text" v-model="formData.name" id="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="formData.email" id="email" required />
      </div>
      <div>
        <label for="entity">Je suis :</label>
        <select v-model="selectedEntity" id="entity" required>
          <option value="" disabled>Sélectionnez une entité</option>
          <option value="particulier">Un.e particulier·ère</option>
          <option value="entreprise">Une Entreprise</option>
        </select>
      </div>
      <div>
        <label for="subject">Sujet:</label>
        <select v-model="formData.subject" id="subject" required>
          <option value="" disabled>Sélectionnez un sujet</option>
          <option v-for="subject in availableSubjects" :key="subject" :value="subject">{{ subject }}</option>
        </select>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea v-model="formData.message" id="message" required></textarea>
      </div>
      <div class="g-recaptcha" data-sitekey="6Lc-hlQqAAAAAF9jPADJctPZb2O78WjdNavtxMgE"></div>
      <MyButton type="submit" text="ENVOYER" />
    </form>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import MyButton from '@/components/buttons/MyButton.vue';
import { reactive, ref, watch } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

let successMessage = '';
let errorMessage = '';
const selectedEntity = ref('');

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
  console.log('Nouvelle entité sélectionnée:', newEntity);
  if (newEntity) {
    availableSubjects.value = subjects[newEntity];
    console.log('Sujets disponibles:', availableSubjects.value);
    formData.subject = ''; 
  } else {
    availableSubjects.value = []; 
  }
});

async function sendEmail() {
  const recaptchaToken = grecaptcha.getResponse();
  if (!recaptchaToken) {
    errorMessage = "Veuillez vérifier le reCAPTCHA.";
    return;
  }

  const payload = {
    ...formData,
    recaptchaToken
  };

  try {
    const response = await fetch("https://lespritbrique.com/send-email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      successMessage = "Email envoyé avec succès!";
      errorMessage = '';
      Object.assign(formData, { name: '', email: '', subject: '', message: '' });
      grecaptcha.reset();
    } else {
      throw new Error("Erreur lors de l'envoi de l'e-mail.");
    }
  } catch (error) {
    successMessage = '';
    errorMessage = error.message;
  }
}
</script>

<style scoped>
.email-form {
  max-width: 100%;
  margin: 0 auto;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, select, textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.success-message {
  color: green;
}
.error-message {
  color: red;
}

option.hovered {
  background-color: var(--primary-color);
}

</style>
