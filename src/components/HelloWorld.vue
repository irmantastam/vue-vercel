<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      My name is Irmantas and I'm a Frontend developer based in Kaunas,
      Lithuania.<br />
      I love ☕ and creativity.
    </p>
    <h3>Look me up here</h3>
    <ul>
      <li>
        <a
          href="https://github.com/irmantastam"
          target="_blank"
          rel="noopener"
          title="Github"
          ><img
            alt="Irmantas Tamašauskas Github"
            title="Github"
            src="../assets/github.svg"
          />irmantastam</a
        >
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
          />Irmantas-Tamašauskas</a
        >
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
          />irmantas.tamasauskas.73</a
        >
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
          />@irmantastamasauskas</a
        >
      </li>
    </ul>
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
.hello {
  margin: 0 20px 20px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li:not(:last-child) {
  margin-bottom: 4px;
}

a {
  color: var(--secondary-color);
}

a img {
  width: 30px;
  margin-right: 8px;
  top: -1px;
  position: relative;
  vertical-align: middle;
}
</style>
