<template>
  <div class="resume">
    <img
      class="logo"
      alt="Irmantas Tamašauskas resume"
      title="Irmantas Tamašauskas resume"
      src="../assets/irmantas_tamasauskas.jpg"
    />
    <h1>{{ msg }}</h1>
    <p>CV</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.resume {
  margin: 0 20px 20px;
}

img.logo {
  width: 300px;
  max-width: calc(100% - 40px);
  margin: auto 20px 0;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: var(--secondary-color);
}
</style>
