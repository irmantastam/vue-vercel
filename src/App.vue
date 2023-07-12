<template>
  <img
    class="logo"
    alt="Irmantas Tamašauskas coffee break"
    title="Irmantas Tamašauskas coffee break"
    src="./assets/irmantas_tamasauskas.jpg"
  />
  <HelloWorld msg="Welcome Folks!" />
  <footer>irmantastamasauskas.com<br />{{ new Date().getFullYear() }}</footer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding-top: 40px;
}

img.logo {
  width: 300px;
  max-width: calc(100% - 40px);
  margin: auto 20px 0;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}

footer {
  margin-top: auto;
  width: 100%;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--main-color);
}
</style>
