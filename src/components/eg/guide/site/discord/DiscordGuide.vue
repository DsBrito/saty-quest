<template>
  <div class="container">
    <h6 class="text-center">Come To Discord</h6>

    <h6>
      Why join in discord?? Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </h6>
    <div class="row q-gutter-lg">
      <q-img
        src="../../../../../assets/image/eg/guide/site/discord/discord-giff.gif"
        style="width: 100px"
      ></q-img>
      <q-img
        src="../../../../../assets/image/eg/guide/site/discord/discord-button.png"
        style="width: 500px"
      ></q-img>
      <q-img
        src="../../../../../assets/image/eg/guide/site/discord/discord-giff.gif"
        style="width: 100px"
      ></q-img>
    </div>
    <span>Fazer o botão interativo aqui</span>
    <q-img
      src="../../../../../assets/image/icons/next.png"
      class="image-style"
    />

    <h6>
      Why join in discord?? Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </h6>
    <div class="x full-width">
      <q-img
        src="../../../../../assets/image/eg/guide/site/discord/discord-invit.png"
        style="width: s500px"
      ></q-img>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 80%;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
}

.image-style {
  width: 130px;
  height: auto;
  transform: rotate(90deg);
}
.x {
  background-image: url('../../../../../assets/image/eg/guide/site/discord/background-discord.jpg');
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  border-radius: 10%;
}

.title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
.my-card {
  width: 100%;
  max-width: 300px;
}

.notes {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  /* color: #555; */
}

.notes li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

.notes li:before {
  content: '•';
  position: absolute;
  left: 0;
  color: #ff4081;
  font-size: 1.2em;
}
</style>
