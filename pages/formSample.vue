<template>
  <FormContainer label="Ein Beispiel-Formular" :small="false">
    <FormText
      v-model="formData.email"
      type="text"
      id="email"
      label="Ein Textfeld für die Email"
      placeholder="mail@mail.com"
      helperText="Ein Hilfetext"
    />
    <FormText
      v-model="formData.password"
      type="password"
      id="password"
      label="Das Eingabefeld für das Passwort"
      placeholder="password"
      helperText="Ein Hilfetext"
    />
    <FormText
      v-model="formData.confirmPassword"
      type="password"
      id="passwordConfirm"
      label="Das Eingebafeld für die Passwort Wiederholung"
      placeholder="password"
      helperText="Ein Hilfetext"
    />
    <!-- <FormDropdown
      v-model="dropdown"
      type="text"
      id="Drowpdown"
      label="Eine Dropdownlist"
      helperText="Ein Hilfetext"
    /> -->

    <FormSubmit @click="handleSubmit" />
  </FormContainer>
</template>

<script setup>
const formData = reactive({
  email: '',
  password: '',
  confirmPassword: null
});

const router = useRouter();

function handleSubmit() {
  router.push({ path: '/' });
}
</script>

<style lang="scss" scoped></style>
