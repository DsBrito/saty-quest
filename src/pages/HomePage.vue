<template>
  <div class="container">
    <q-img class="logo-img" src="../assets/image/boss/icons/shaiyalogo.png" />
    <!-- <OpenBook /> -->
  </div>
  <div class="container2">
    <OpenBook />
  </div>

  <!--  -->
  <!--
  <q-toolbar>
    <q-toolbar-title class="text-center">Shaiya Lore</q-toolbar-title>
  </q-toolbar> -->
</template>

<script setup lang="ts">
import OpenBook from 'components/OpenBook.vue';

OpenBook;
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Adiciona a imagem de background */
  /* background-image: url('../assets/image/class/background/cima.jpg'); */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat;
  background-size: cover; /* Faz a imagem preencher o fundo */

  /* Define a altura mínima da div */
  min-height: 100vh; /* Ajusta para o tamanho da tela */
}
.container2 {
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

  /* Adiciona a imagem de background */
  /* background-image: url('../assets/image/class/background/sq_forum_bg.jpg'); */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat;
  background-size: cover; /* Faz a imagem preencher o fundo */

  /* Define a altura mínima da div */
  min-height: 100vh; /* Ajusta para o tamanho da tela */
}

.test {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  text-align: justify;
  width: 70%;
  margin: 0 auto;
  padding: 16px;
}
</style>
