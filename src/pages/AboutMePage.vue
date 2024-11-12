<template>
  <div class="container">
    <q-img
      class="img"
      :src="require('../assets/image/aboutme/image-removebg-preview.png')"
    />
    <div class="drop-img hei"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.img {
  width: 20%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-image: url('../assets/image/class/background/sq_forum_bg.jpg'); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
</style>
