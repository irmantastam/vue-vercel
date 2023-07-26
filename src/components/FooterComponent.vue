<template>
  <footer>irmantastamasauskas.com<br />{{ date }}</footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<script setup>
const date = new Date().getFullYear();
</script>

<style>
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
