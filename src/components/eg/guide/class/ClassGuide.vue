<template>
  <div class="container">
    <h6>
      Lorem ipsum dolor sit amet. Sit enim nesciunt est iusto dolorem et earum
      temporibus sit repellat exercitationem! Qui error ipsam quo rerum nostrum
      qui doloribus aliquam eum temporibus velit.
    </h6>
    <h1 class="title">CLASS</h1>

    <q-img
      class="img-choose-faction"
      src="../../../../assets/image/icons/both-sides.webp"
    >
    </q-img>
    <div>
      <q-btn class="faction" @click="selectFaction('Light')"> Light</q-btn>
      <q-btn @click="selectFaction('Dark')"> Dark</q-btn>
    </div>

    <!-- <Darkness :faction="selectedFaction" :character="classByFaction"></Darkness> -->
    <Darkness :faction="selectedFaction"></Darkness>

    <div>
      <h3>Titles for {{ selectedFaction }}</h3>
      <ul>
        <li v-for="title in classByFaction" :key="title">{{ title }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Darkness from './darkness/DarknessSide.vue';

// const props = defineProps<{ faction: string; class: string }>();

const selectedFaction = ref<string | null>(null);
const selectFaction = (faction: string | null) => {
  selectedFaction.value = faction;
};

// Computed to return an array of strings based on the selected faction
const classByFaction = computed(() => {
  return selectedFaction.value === 'Light'
    ? ['Fighter', 'Archer', 'Mage', 'Priest', 'Ranger', 'Druid']
    : ['Warrior', 'Hunter', 'Sorcerer', 'Oracle', 'Assassin', 'Shaman'];
});
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 80%;
  margin: auto;
}
.faction {
  width: 50%;
  background-color: #007bff;
}
.img-choose-faction {
  width: 50%;
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
