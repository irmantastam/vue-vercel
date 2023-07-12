<template>
  <img
    class="logo"
    alt="Irmantas Tamašauskas coffee break"
    title="Irmantas Tamašauskas coffee break"
    src="./assets/irmantas_tamasauskas.jpg"
  />
  <HelloWorld msg="Welcome Folks!" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
:root {
  --main-color: #323232;
  --secondary-color: #222222;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-color);
  margin-top: 60px;
}

img.logo {
  width: 350px;
  max-width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}
</style>
