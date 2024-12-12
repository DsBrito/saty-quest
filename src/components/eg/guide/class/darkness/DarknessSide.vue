<template>
  <h6>
    Lorem ipsum dolor sit amet. Sit enim nesciunt est iusto dolorem et earum
    temporibus sit repellat exercitationem! Qui error ipsam quo rerum nostrum
    qui doloribus aliquam eum temporibus velit.
  </h6>
  <div class="row justify-center q-gutter-lg text-center">
    <div class="my-card">
      <q-card
        class="q-mb-xl"
        :class="{ selected: selectedTitle === 'Fighter' }"
        @click="selectTitle('Fighter')"
      >
        <q-img
          src="../../../../../assets/image/class/human/fight/icon/fighter_icon.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">Fighter</div>
        </q-img>
      </q-card>
      <q-card
        :class="{ selected: selectedTitle === 'Archer' }"
        @click="selectTitle('Archer')"
      >
        <q-img
          src="../../../../../assets/image/class/elf/archer/icon/archer_icon.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">Archer</div>
        </q-img>
      </q-card>
    </div>

    <div class="my-card">
      <q-card
        class="q-mb-xl"
        :class="{ selected: selectedTitle === 'Mage' }"
        @click="selectTitle('Mage')"
      >
        <q-img
          src="../../../../../assets/image/class/elf/mage/icon/mage_icon.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">Mage</div>
        </q-img>
      </q-card>
      <q-card
        :class="{ selected: selectedTitle === 'Ranger' }"
        @click="selectTitle('Ranger')"
      >
        <q-img
          src="../../../../../assets/image/class/elf/ranger/icon/rager_icon.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">Ranger</div>
        </q-img>
      </q-card>
    </div>
    <div class="my-card">
      <q-card
        class="q-mb-xl"
        :class="{ selected: selectedTitle === 'Priest' }"
        @click="selectTitle('Priest')"
      >
        <q-img
          src="../../../../../assets/image/class/human/priest/icon/priest_icon.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">Priest</div>
        </q-img>
      </q-card>
      <q-card
        :class="{ selected: selectedTitle === 'Druid' }"
        @click="selectTitle('Druid')"
      >
        <q-img
          src="../../../../../assets/image/class/spirity/druid/icon/druid_icon.png"
        >
          <div class="absolute-bottom text-center">Druid</div>
        </q-img>
      </q-card>
    </div>
  </div>

  <!-- Renderização  -->
  <q-img src="../../../../../assets/image/icons/next.png" class="image-style" />

  <h3 class="text-center no-margin">{{ selectedTitle }}</h3>
  <div v-if="selectedTitle === 'Fighter'" class="pvp-zone">
    <!-- <Accs15></Accs15> -->
  </div>
  <div v-if="selectedTitle === 'Defender'" class="pvp-zone">
    <!-- <Accs30></Accs30> -->
  </div>
  <div v-if="selectedTitle === 'Priest'" class="pvp-zone">
    <!-- <Accs60></Accs60> -->
  </div>
  <div v-if="selectedTitle === 'Archer'" class="pvp-zone">
    <!-- <Accs80></Accs80> -->
  </div>
  <div v-if="selectedTitle === 'Ranger'" class="pvp-zone">
    <!-- <Accs80></Accs80> -->
  </div>
  <div v-if="selectedTitle === 'Mage'" class="pvp-zone">
    <!-- <Accs80></Accs80> -->
  </div>
  <div v-if="selectedTitle === 'Druid'" class="pvp-zone">
    <!-- <Accs80></Accs80> -->
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
.my-card {
  width: 150px;
}
.image-style {
  width: 130px;
  height: auto;
  transform: rotate(90deg);
}
.selected {
  border: 7px solid #007bff; /* Destaca o item selecionado */
}
</style>
