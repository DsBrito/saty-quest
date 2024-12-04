<template>
  <div class="container">
    <h1 class="title">ENCHANT</h1>

    <div class="itens-wrapper items-center text-center">
      <div
        class="enchant-level"
        :class="{ selected: selectedTitle === '1~10' }"
        @click="selectTitle('1~10')"
      >
        <h2 class="group-title">Enchant [1]~[10]</h2>
        <div class="item enchant-level"></div>
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/armor_lapisia.png"
        />
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/assault_lapisia.png"
        />
      </div>

      <div
        class="enchant-level"
        :class="{ selected: selectedTitle === '10~15' }"
        @click="selectTitle('10~15')"
      >
        <h2 class="group-title">Enchant [10]~[15]</h2>
        <div class="item enchant-level"></div>
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/pal.png"
        />
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/plw.png"
        />
      </div>

      <div
        class="enchant-level"
        :class="{ selected: selectedTitle === '15~20' }"
        @click="selectTitle('15~20')"
      >
        <h2 class="group-title">Enchant [15]~[20]</h2>
        <div class="item enchant-level text-center"></div>
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/pal.png"
        />
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/plw.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Armazena o título selecionado como um ref (reativo)
const selectedTitle = ref<string | null>(null);

// Função para selecionar o título
const selectTitle = (title: string | null) => {
  console.log(title);
  selectedTitle.value = title;
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 80%;
  margin: auto;
}

.image-style {
  width: 130px;
  height: auto;
  transform: rotate(90deg);
}
.img-enchant {
  width: 60px;
}

.title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 10px;
}

.itens-wrapper {
  display: flex;
  gap: 20px;
  overflow-x: auto;
}

.item {
  display: flex;
  align-items: center;
  gap: 10px;
  /* background: #f5f5f5; */
  padding: 10px;
  min-width: 270px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.enchant-level {
  /* background: #1e1622; */
  padding: 10px;
  border-radius: 15px;
  text-align: center; /* Centraliza o texto */
}

.enchant-level.selected {
  border: 7px solid #007bff; /* Destaca o item selecionado */
}

.group-title {
  font-size: 1.5em;
  /* color: #fff; */
  margin-bottom: 10px;
  text-align: center;
}
</style>
