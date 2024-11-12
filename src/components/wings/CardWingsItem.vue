<template>
  <q-page class="flex flex-center font">
    <div
      class="q-gutter-md"
      style="display: flex; flex-wrap: wrap; justify-content: center"
    >
      <q-card
        v-for="id in 151"
        :key="id"
        class="my-card"
        style="width: 300px; margin: 10px"
      >
        <div class="text-center">
          <strong> {{ getNameById(id) }}</strong>
        </div>

        <q-img :src="getImageSrc(id)" alt="Imagem" />
        <q-card-actions>
          <q-btn flat label="Ver Detalhes" @click="viewDetails(id)" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { WINGS } from '../../model/wings/wingsName';

const getImageSrc = (id: number) => {
  return require(`../../assets/image/wings/${id}.webp`);
};

const viewDetails = (id: number) => {
  // Lógica para ver detalhes da imagem (opcional)
  console.log(`Ver detalhes da imagem ${id}`);
};

const getNameById = (id: number) => {
  const nameItem = WINGS.find((item) => item.id === id);
  return nameItem ? nameItem.name : 'Name not found';
};
</script>

<style scoped>
.my-card {
  width: 100%;
}

.font {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  text-align: justify;
  width: 70%;
  margin: 0 auto;
  padding: 16px;
}
</style>
