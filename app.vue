<template>
  <ModeToggleComponent />
  <NuxtPage msg="Hello world! 👋" />
  <FooterComponent />
</template>

<script setup>
import ModeToggleComponent from "./components/ModeToggleComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<style>
:root {
  --main-color: #323232;
  --secondary-color: #a2a2a2;
  --background-color: #ffffff;
}

:root.dark {
  --main-color: #ffffff;
  --secondary-color: #b5b5b5;
  --background-color: #201f1f;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#__nuxt {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-color);
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
