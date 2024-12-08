<template>
  <div class="container text-justify">
    <h1 class="title">ELEMENTS</h1>
    <h6>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </h6>
    <div class="itens-wrapper items-center text-center">
      <div
        class="enchant-level"
        :class="{ selected: selectedTitle === 'Armor' }"
        @click="selectTitle('Armor')"
      >
        <h2 class="group-title">Armor</h2>
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
        :class="{ selected: selectedTitle === 'Weapon' }"
        @click="selectTitle('Weapon')"
      >
        <h2 class="group-title">Weapon</h2>
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

    <!-- Renderização -->
    <q-img src="../../../../assets/image/icons/next.png" class="image-style" />

    <h3 class="text-center no-margin">{{ selectedTitle }}</h3>
    <div v-if="selectedTitle === 'Armor'" class="pvp-zone">
      <Armor></Armor>
    </div>
    <div v-if="selectedTitle === 'Weapon'" class="pvp-zone">
      <Weapon></Weapon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Armor from './ElementArmor.vue';
import Weapon from './ElementWeapon.vue';
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
.img-guide {
  width: 50%;
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
  background: #1e1622;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
}

.enchant-level.selected {
  border: 7px solid #007bff;
}

.group-title {
  font-size: 1.5em;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
}
</style>
