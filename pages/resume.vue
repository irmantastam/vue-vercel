<template>
  <div class="resume">
    <img
      class="image"
      alt="Irmantas Tamašauskas resume"
      title="Irmantas Tamašauskas resume"
      src="../assets/Irmantas_Tamašauskas_CV.webp"
    />
  </div>
</template>

<script>
export default {
  name: "ResumeView",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.resume {
  margin: 0 20px 20px;
}

.image {
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid var(--secondary-color);
}
</style>
