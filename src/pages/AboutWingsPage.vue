<template>
  <div class="container">
    <q-img class="logo-img" src="../assets/image/boss/icons/shaiyalogo.png" />
  </div>
  <q-page class="q-pa-md flex flex-center column container">
    <!-- Barra de pesquisa -->
    <div class="search-container q-mb-md full-width">
      <!-- <q-input
        v-model="search"
        placeholder="Use this field to search wings by name
"
        debounce="300"
        outlined
        class="full-width"
        dense
        bg-color="white"
      >
        <template v-slot:prepend>
          <q-icon name="keyboard_arrow_left" />
        </template>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input> -->
      <!-- <q-img
        src="../assets/image/boss/icons/rightArrow.png"
        class="resized-img"
        :ratio="1" -->
      <!-- /> -->
    </div>
    <CardWingsItem></CardWingsItem>
  </q-page>
</template>

<script setup lang="ts">
import CardWingsItem from 'components/wings/CardWingsItem.vue';
</script>

<style scoped>
.search-container {
  max-width: 600px;
}
.resized-img {
  width: 200px;
  height: auto;
}
.card-grid {
  max-width: 50%;
}
.drawer-header {
  display: flex;
  align-items: center;
}
.header-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-container {
  display: flex;
  align-items: center;
}

.drawer-header-closed {
  display: flex;
  margin-left: auto;
  display: flex;
}
.logo-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza os botões verticalmente */
  align-items: center; /* Centraliza os botões horizontalmente */
  height: 100%;
}
.container {
  /* Adiciona a imagem de background */
  /* background-image: url('../assets/image/class/background/baixo.jpg'); */
  background-size: contain;
  /* background-repeat: no-repeat; */
  /* min-height: 100vh; */

  /* Define a altura mínima da div */
}
</style>
