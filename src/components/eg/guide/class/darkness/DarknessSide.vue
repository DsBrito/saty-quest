<template>
  {{ props }}
  <h6>
    Lorem ipsum dolor sit amet. Sit enim nesciunt est iusto dolorem et earum
    temporibus sit repellat exercitationem! Qui error ipsam quo rerum nostrum
    qui doloribus aliquam eum temporibus velit.
  </h6>
  <div class="row justify-center q-gutter-lg text-center">
    <div class="my-card">
      <q-card
        class="q-mb-xl"
        :class="{
          selected: selectedTitle === 'Fighter' || selectedTitle === 'Warrior',
        }"
        @click="selectTitle(props.faction == 'Light' ? 'Fighter' : 'Warrior')"
      >
        <q-img
          src="../../../../../assets/image/class/human/fight/icon/fighter_icon.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ props.faction === 'Light' ? 'Fighter' : 'Warrior' }}
          </div>
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

  <q-img src="../../../../../assets/image/icons/next.png" class="image-style" />

  <h3 class="text-center no-margin">{{ selectedTitle }}</h3>

  <div v-if="selectedTitle === 'Fighter'" class="pvp-zone">
    <h6>{{ currentCharacter.class }}</h6>
    <p>{{ currentCharacter.description }}</p>
  </div>
  <div v-if="selectedTitle === 'Defender'" class="pvp-zone">
    <h6>{{ currentCharacter.class }}</h6>
    <p>{{ currentCharacter.description }}</p>
  </div>
  <div v-if="selectedTitle === 'Priest'" class="pvp-zone">
    <h6>{{ currentCharacter.class }}</h6>
    <p>{{ currentCharacter.description }}</p>
  </div>
  <div v-if="selectedTitle === 'Archer'" class="pvp-zone">
    <h6>{{ currentCharacter.class }}</h6>
    <p>{{ currentCharacter.description }}</p>
  </div>
  <div v-if="selectedTitle === 'Ranger'" class="pvp-zone">
    <h6>{{ currentCharacter.class }}</h6>
    <p>{{ currentCharacter.description }}</p>
  </div>
  <div v-if="selectedTitle === 'Mage'" class="pvp-zone">
    <h6>{{ currentCharacter.class }}</h6>
    <p>{{ currentCharacter.description }}</p>
  </div>
  <div v-if="selectedTitle === 'Druid'" class="pvp-zone">
    <h6>{{ currentCharacter.class }}</h6>
    <p>{{ currentCharacter.description }}</p>
  </div>
  <div v-if="selectedTitle === 'Warrior'" class="pvp-zone">
    <h6>{{ currentCharacter.class }}</h6>
    <p>{{ currentCharacter.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, watch } from 'vue';
import { CHARACTER } from '../../../../../model/class/character';

// const props = defineProps<{ faction: string; classByFaction: string[] }>();

// // Armazena o título selecionado como um ref (reativo)
// const selectedTitle = ref<string | null>(null);
// // Função para selecionar o título
// const selectTitle = (title: string | null) => {
//   console.log(title);

//   selectedTitle.value = title;
// };
const currentCharacter = computed(() => {
  console.log('essa eh a classe: ', selectedTitle.value);

  return (
    CHARACTER.find((character) => character.class === selectedTitle.value) ||
    null
  );
});

const props = defineProps<{
  faction: string; // 'Light' or 'Dark'
}>();

const selectedTitle = ref<string>('');

// Atualiza `selectedTitle` quando a facção muda
watch(
  () => props.faction,
  (newFaction) => {
    selectedTitle.value = newFaction === 'Light' ? 'Fighter' : 'Warrior';
  },
  { immediate: true } // Executa no carregamento inicial
);

// Função para alterar manualmente o título ao clicar
const selectTitle = (title: string) => {
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
