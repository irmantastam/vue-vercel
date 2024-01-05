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
      My name is <strong>Irmantas</strong>, a
      <strong>Frontend Developer</strong> from
      <strong>Kaunas, Lithuania</strong>.<br />
      I love ☕ and transforming ideas to a stunning digital experiences.
    </p>
    <h2>Reach me up here</h2>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/irmantas-tama%C5%A1auskas-6589272a6"
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
          <Github v-show="colorMode !== 'dark'" />
          <GithubLight v-show="colorMode === 'dark'" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/irmantas.tamasauskas.73"
          target="_blank"
          rel="noopener"
          title="Facebook"
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/irmantastamasauskas"
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
      <li>
        <a
          href="https://stackshare.io/irmantastam/my-stack"
          target="_blank"
          rel="noopener"
          title="Stackshare"
        >
          <Stackshare />
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
      <Resume /> Read CV
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
import Stackshare from "../assets/stackshare.svg";
import Resume from "../assets/resume.svg";

import { useColorMode } from "@vueuse/core";
const colorMode = useColorMode({ disableTransition: false });
</script>

<style scoped>
.home {
  margin: auto 16px 16px;
}

p {
  font-weight: 300;
}

p strong {
  font-weight: 500;
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
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

ul a {
  display: block;
}

ul a svg {
  vertical-align: bottom;
  transition: transform 0.3s ease;
}

ul a:hover svg {
  transform: translateY(-2px);
}

a.resume-link {
  display: inline-flex;
  margin: 40px 0 0;
  gap: 8px;
  align-items: flex-start;
  font-weight: 600;
  color: var(--main-color);
  text-decoration: none;
}

a.resume-link:hover {
  text-decoration: underline;
}
</style>
