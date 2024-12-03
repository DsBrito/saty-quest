<template>
  <div class="container text-justify">
    <h1 class="title">ACCESSORIES</h1>

    <div class="itens-wrapper">
      <!-- PvP 15 -->
      <div
        class="pvp-accs"
        :class="{ selected: selectedTitle === 'PvP 15' }"
        @click="selectTitle('PvP 15')"
      >
        <div class="item pvp-accs text-white">
          <div class="text">
            <span class="text-center">PvP 15</span>
            <p class="description">
              Accessories to PVP 15 <br />
              One Neck, Two rings, Two bracelet.
            </p>
          </div>
        </div>
        <q-img
          class="pvp-accs-img"
          src="../../../../assets/image/eg/guide/accessories/accs/accs_15.png"
        />
      </div>

      <!-- PvP 30 -->
      <div
        class="pvp-accs"
        :class="{ selected: selectedTitle === 'PvP 30' }"
        @click="selectTitle('PvP 30')"
      >
        <div class="item pvp-accs text-white">
          <div class="text">
            <span class="text-center">PvP 30</span>
            <p class="description">
              Accessories to PVP 30 <br />
              One Neck, Two rings, Two bracelet.
            </p>
          </div>
        </div>
        <q-img
          class="pvp-accs-img"
          src="../../../../assets/image/eg/guide/accessories/accs/accs_30.png"
        />
      </div>

      <!-- PvP 60 -->
      <div
        class="pvp-accs"
        :class="{ selected: selectedTitle === 'PvP 60' }"
        @click="selectTitle('PvP 60')"
      >
        <div class="item pvp-accs text-white">
          <div class="text">
            <span class="text-center">PvP 60</span>
            <p class="description">
              Accessories to PVP 60 <br />
              One Neck, Two rings, Two bracelet.
            </p>
          </div>
        </div>
        <q-img
          class="pvp-accs-img"
          src="../../../../assets/image/eg/guide/accessories/accs/accs_60.png"
        />
      </div>

      <!-- PvP 80 -->
      <div
        class="pvp-accs"
        :class="{ selected: selectedTitle === 'PvP 80' }"
        @click="selectTitle('PvP 80')"
      >
        <div class="item pvp-accs text-white">
          <div class="text">
            <span class="text-center">PvP 80</span>
            <p class="description">
              Accessories to PVP 80 <br />
              One Neck, Two rings, Two bracelet.
            </p>
          </div>
        </div>
        <q-img
          class="pvp-accs-img"
          src="../../../../assets/image/eg/guide/accessories/accs/accs_80.png"
        />
      </div>
    </div>

    <!-- Renderização  -->
    <q-img src="../../../../assets/image/icons/next.png" class="image-style" />

    <h3 class="text-center no-margin">{{ selectedTitle }}</h3>
    <div v-if="selectedTitle === 'PvP 15'" class="pvp-zone">
      <Accs15></Accs15>
    </div>
    <div v-if="selectedTitle === 'PvP 30'" class="pvp-zone">
      <Accs30></Accs30>
    </div>
    <div v-if="selectedTitle === 'PvP 60'" class="pvp-zone">
      <Accs60></Accs60>
    </div>
    <div v-if="selectedTitle === 'PvP 80'" class="pvp-zone">
      <Accs80></Accs80>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Accs15 from './PVPAccs15.vue';
import Accs30 from './PVPAccs30.vue';
import Accs60 from './PVPAccs60.vue';
import Accs80 from './PVPAccs80.vue';

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

.npc-quest {
  width: 45%;
  border-radius: 10px;
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
  background: #f5f5f5;
  padding: 10px;
  min-width: 270px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.pvp-accs {
  background: #1e1622;
  padding: 10px;
  border-radius: 15px;
}
.pvp-accs.selected {
  border: 7px solid #007bff; /* Destaca o item selecionado */
}

.description {
  font-size: 0.9em;
}

.pvp-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
