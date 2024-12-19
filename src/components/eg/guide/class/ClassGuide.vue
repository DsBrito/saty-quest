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
        @click="selectTitle(props.classByFaction[0])"
      >
        <q-img
          src="../../../../assets/image/class/human/fight/icon/fighter_icon.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ props.classByFaction[0] }}
          </div>
        </q-img>
      </q-card>
      <q-card
        :class="{
          selected: selectedTitle === 'Archer' || selectedTitle === 'Hunter',
        }"
        @click="selectTitle(props.classByFaction[5])"
      >
        <q-img
          src="../../../../assets/image/class/elf/archer/icon/archer_icon.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ props.classByFaction[5] }}
          </div>
        </q-img>
      </q-card>
    </div>

    <div class="my-card">
      <q-card
        class="q-mb-xl"
        :class="{
          selected: selectedTitle === 'Mage' || selectedTitle === 'Pagan',
        }"
        @click="selectTitle(props.classByFaction[3])"
      >
        <q-img src="../../../../assets/image/class/elf/mage/icon/mage_icon.png">
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ props.classByFaction[3] }}
          </div>
        </q-img>
      </q-card>
      <q-card
        :class="{
          selected: selectedTitle === 'Ranger' || selectedTitle === 'Assassin',
        }"
        @click="selectTitle(props.classByFaction[4])"
      >
        <q-img
          src="../../../../assets/image/class/elf/ranger/icon/rager_icon.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ props.classByFaction[4] }}
          </div>
        </q-img>
      </q-card>
    </div>
    <div class="my-card">
      <q-card
        class="q-mb-xl"
        :class="{
          selected: selectedTitle === 'Priest' || selectedTitle === 'Oracle',
        }"
        @click="selectTitle(props.classByFaction[2])"
      >
        <q-img
          src="../../../../assets/image/class/human/priest/icon/priest_icon.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ props.classByFaction[2] }}
          </div>
        </q-img>
      </q-card>
      <q-card
        :class="{
          selected: selectedTitle === 'Druid' || selectedTitle === 'Monkey',
        }"
        @click="selectTitle(props.classByFaction[6])"
      >
        <q-img
          src="../../../../assets/image/class/spirity/druid/icon/druid_icon.png"
        >
          <div class="absolute-bottom text-center">
            {{ props.classByFaction[6] }}
          </div>
        </q-img>
      </q-card>
    </div>
  </div>

  <q-img src="../../../../assets/image/icons/next.png" class="image-style" />

  <h3 class="text-center no-margin">{{ selectedTitle }}</h3>

  <div v-if="currentGuide">
    <h6>Guia:</h6>

    <!-- Customization -->
    <div>
      <h6>Customization:</h6>
      <img :src="currentGuide.customization.hight" alt="Height Customization" />
      <img :src="currentGuide.customization.hair" alt="Hair Customization" />
      <img :src="currentGuide.customization.face" alt="Face Customization" />
    </div>

    <!-- Weapons and Stats -->
    <div>
      <h6>Weapons:</h6>
      <img :src="currentGuide.weapons" alt="Weapons" />
      <h6>Stats:</h6>
      <img :src="currentGuide.stats" alt="Stats" />
    </div>

    <!-- Sex Options -->
    <div>
      <h6>Sex:</h6>
      <div>
        <img :src="currentGuide.sex.male" alt="Male" />
        <img :src="currentGuide.sex.female" alt="Female" />
      </div>
    </div>

    <!-- Video -->
    <div>
      <h6>Video:</h6>
      <a :href="currentGuide.video.link" target="_blank">
        <img :src="currentGuide.video.tumb" :alt="currentGuide.video.name" />
      </a>
      <p>{{ currentGuide.video.name }}</p>
    </div>
  </div>

  <div v-else>
    <p>No guide available for this character.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, watch } from 'vue';
import { CHARACTER } from '../../../../model/class/character';

const props = defineProps<{ faction: string; classByFaction: string[] }>();

const currentGuide = computed(() => {
  const character = CHARACTER.find(
    (character) => character.class === selectedTitle.value
  );
  console.log(character);
  return character?.guide || null;
});

const selectedTitle = ref<string>('');

watch(
  () => props.faction,
  (newFaction) => {
    selectedTitle.value = newFaction === 'Light' ? 'Fighter' : 'Warrior';
  },
  { immediate: true }
);

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
