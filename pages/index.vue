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
        >
          <Linkedin />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/irmantastam"
          target="_blank"
          rel="noopener"
          title="Github"
        >
          <Github v-if="colorMode === 'light'" />
          <GithubLight v-else />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/irmantas.tamasauskas.73/"
          target="_blank"
          rel="noopener"
          title="Facebook"
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/irmantastamasauskas/"
          target="_blank"
          rel="noopener"
          title="Instagram"
        >
          <Instagram />
        </a>
      </li>
      <li>
        <a
          href="https://www.quora.com/profile/Irmantas-Tama%C5%A1auskas"
          target="_blank"
          rel="noopener"
          title="Quora"
        >
          <Quora />
        </a>
      </li>
    </ul>
    <a
      href="/resume"
      target="_blank"
      rel="noopener"
      title="Irmantas Tamašauskas Resume"
      class="resume-link"
    >
      <Resume /> CV
    </a>
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
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import GithubLight from "../assets/github-light.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Quora from "../assets/quora.svg";
import Resume from "../assets/resume.svg";

import { useColorMode } from "@vueuse/core";
const colorMode = useColorMode({ disableTransition: false });
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

a img,
a svg {
  position: relative;
  vertical-align: middle;
}

a.resume-link {
  display: inline-flex;
  margin: 40px 0 0;
  gap: 8px;
  align-items: center;
  font-weight: 600;

  svg {
    width: 30px;
    height: 30px;
  }
}
</style>
