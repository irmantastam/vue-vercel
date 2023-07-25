<template>
  <ModeToggle />
  <RouterView />
  <footer>irmantastamasauskas.com<br />{{ new Date().getFullYear() }}</footer>
</template>

<script setup>
import ModeToggle from "./components/ModeToggle.vue";
import { RouterView } from "vue-router";
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

#app {
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
  padding-top: 40px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

footer {
  margin-top: auto;
  width: 100%;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--secondary-color);
}
</style>
