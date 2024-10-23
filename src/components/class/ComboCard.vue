<template>
  <h5 class="test" v-if="props.combos.combo_1"><strong> COMBOS</strong></h5>

  <div class="q-pa-md row items-start q-gutter-md justify-center">
    <!-- Exibir combo 1 -->
    <q-card v-if="props.combos.combo_1" class="my-card">
      <q-img :src="props.combos.combo_1.url"></q-img>
      <q-card-actions>
        <q-space />
        <div class="text-subtitle2">{{ props.combos.combo_1.title }}</div>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded[0] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="toggleExpand(0)"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded[0]">
          <q-separator />
          <q-card-section class="text-justify">
            {{ props.combos.combo_1.description }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>

    <!-- Exibir combo 2 -->
    <q-card v-if="props.combos.combo_2" class="my-card">
      <q-img :src="props.combos.combo_2.url"></q-img>
      <q-card-actions>
        <q-space />
        <div class="text-subtitle2">{{ props.combos.combo_2.title }}</div>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded[1] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="toggleExpand(1)"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded[1]">
          <q-separator />
          <q-card-section class="text-justify">
            {{ props.combos.combo_2.description }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>

    <!-- Exibir combo 3 -->
    <q-card v-if="props.combos.combo_3" class="my-card">
      <q-img :src="props.combos.combo_3.url"></q-img>
      <q-card-actions>
        <q-space />
        <div class="text-subtitle2">{{ props.combos.combo_3.title }}</div>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded[2] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="toggleExpand(2)"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded[2]">
          <q-separator />
          <q-card-section class="text-justify">
            {{ props.combos.combo_3.description }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Definindo a prop 'props.combos' corretamente
const props = defineProps<{
  combos: {
    combo_1: {
      url: string;
      title: string;
      description: string;
    };
    combo_2: {
      url: string;
      title: string;
      description: string;
    };
    combo_3: {
      url: string;
      title: string;
      description: string;
    };
  };
}>();

const expanded = ref([true, true, true]);

// Função para alternar o estado expandido de cada combo
const toggleExpand = (index: number) => {
  expanded.value[index] = !expanded.value[index];
};
</script>

<style scoped>
.test {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  text-align: justify;
  width: 70%;
  margin: 0 auto;
  padding: 16px;
}

.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
