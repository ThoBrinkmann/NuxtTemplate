<template>
  <FormContainer :label="login ? 'Anmelden' : 'Registrieren'">
    <!-- slide-controls -->
    <div
      class="relative flex h-[50%] w-full overflow-hidden my-6 justify-between border-2 border-primary-light dark:border-primary-dark rounded-lg"
    >
      <label
        @click="login = true"
        class="h-full w-[50%] text-xl center leading-[40px] cursor-pointer z-10 transition-all text-center rounded-lg"
        :class="
          login
            ? 'text-primary-dark dark:text-primary-light hover:bg-primary-lightAccent'
            : 'text-primary-light dark:text-primary-dark hover:bg-primary-darkAccent'
        "
        for="login"
        >Anmelden</label
      >
      <label
        @click="login = false"
        class="h-full w-[50%] text-xl center leading-[40px] cursor-pointer z-10 transition-all text-center rounded-lg"
        :class="
          login
            ? 'text-primary-light dark:text-primary-dark hover:bg-primary-darkAccent'
            : 'text-primary-dark dark:text-primary-light hover:bg-primary-lightAccent'
        "
        for="signup"
        >Registrieren</label
      >
      <div
        class="absolute h-full w-[50%] left-0 z-0 border rounded-lg bg-primary-light dark:bg-primary-dark transition-all"
        :style="login ? 'left: 0' : 'left: 50%'"
      ></div>
    </div>
    <FormText
      v-if="!login"
      v-model="name"
      type="text"
      id="Name"
      label="Ihr Name"
      placeholder="Vorname Nachname"
      helperText="Bitte geben sie ihren vollständigen Namen ein"
    />
    <FormText
      v-model="email"
      type="email"
      id="email"
      label="Ihre E-Mailadresse"
      placeholder="E-Mailadresse"
    />
    <FormText
      v-model="password"
      type="password"
      id="Passwort"
      label="Ihr Paswwort"
      placeholder="Passwort"
      helperText="Nuten sie ein sicheres Passwort"
    />
    <FormText
      v-if="!login"
      v-model="passwordRepeat"
      type="password"
      id="PasswortRepeat"
      label="Wiederholen sie das Paswwort"
      placeholder="Passwort"
    />
    <FormSubmit @click="handleSubmit" />
  </FormContainer>
</template>

<script setup>
const router = useRouter();

const login = ref();
const email = ref('');
const password = ref('');
const passwordRepeat = ref('');
const name = ref('');

function handleSubmit() {
  router.push({ path: '/' });
}
</script>

<style lang="scss" scoped></style>
