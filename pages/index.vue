<template>
  <div class="home">
    <img
      class="image"
      alt="Irmantas Tamašauskas profile"
      title="Irmantas Tamašauskas profile"
      src="../assets/irmantas_tamasauskas.webp"
      width="300"
      height="300"
    />
    <h1>{{ msg }}</h1>
    <p>
      My name is Irmantas and I'm a Frontend developer from Kaunas,
      Lithuania.<br />
      I love ☕ and transforming ideas to a stunning digital experiences.
    </p>
    <h2>Reach me up here</h2>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/irmantas-tama%C5%A1auskas-6589272a6/"
          target="_blank"
          rel="noopener"
          title="LinkedIn"
          ><img
            alt="Irmantas Tamašauskas LinkedIn"
            title="LinkedIn"
            src="../assets/linkedin.svg"
            width="50"
            height="50"
        /></a>
      </li>
      <li>
        <a
          href="https://github.com/irmantastam"
          target="_blank"
          rel="noopener"
          title="Github"
          ><img
            v-if="colorMode === 'dark'"
            alt="Irmantas Tamašauskas Github"
            title="Github"
            :src="githubLight"
            width="50"
            height="50" /><img
            v-if="colorMode === 'light'"
            alt="Irmantas Tamašauskas Github"
            title="Github"
            :src="github"
            width="50"
            height="50"
        /></a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/irmantas.tamasauskas.73/"
          target="_blank"
          rel="noopener"
          title="Facebook"
          ><img
            alt="Irmantas Tamašauskas Facebook"
            title="Facebook"
            src="../assets/facebook.svg"
            width="50"
            height="50"
        /></a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/irmantastamasauskas/"
          target="_blank"
          rel="noopener"
          title="Instagram"
          ><img
            alt="Irmantas Tamašauskas Instagram"
            title="Instagram"
            src="../assets/instagram.svg"
            width="50"
            height="50"
        /></a>
      </li>
      <li>
        <a
          href="https://www.quora.com/profile/Irmantas-Tama%C5%A1auskas"
          target="_blank"
          rel="noopener"
          title="Quora"
          ><img
            alt="Irmantas Tamašauskas Quora"
            title="Quora"
            src="../assets/quora.svg"
            width="50"
            height="50"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<script setup>
import github from "../assets/github.svg";
import githubLight from "../assets/github-light.svg";

import { useColorMode } from "@vueuse/core";
const colorMode = useColorMode();
</script>

<style scoped>
.home {
  margin: auto 20px 20px;
}

.image {
  max-width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}

h2 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

li:not(:last-child) {
  margin-right: 10px;
}

a {
  color: var(--main-color);
}

a img {
  position: relative;
  vertical-align: middle;
}
</style>
