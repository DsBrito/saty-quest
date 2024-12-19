<template>
  <div class="container">
    {{ props.guide }}
    <q-img src="../../../assets/image/icons/next.png" class="image-style" />

    <div v-if="props.guide === '30 Days Pack'">
      <DaysPack> </DaysPack>
    </div>
    <div v-if="props.guide === 'accessories'">
      <Accessories> </Accessories>
    </div>
    <div v-if="props.guide === 'Enchant'">
      <Enchant> </Enchant>
    </div>
    <div v-if="props.guide === 'Elements'">
      <Element> </Element>
    </div>
    <div v-if="props.guide === 'Microchip 64k'">
      <Microchip> </Microchip>
    </div>
    <div v-if="props.guide === 'Events'">
      <Event> </Event>
    </div>
    <div v-if="props.guide === 'Class'">
      <Class> </Class>
    </div>
  </div>
</template>

<script setup lang="ts">
import DaysPack from './days-pack/DaysGuide.vue';
import Accessories from './pvp-accessories/AcessoriesGuide.vue';
import Enchant from './enchant/EnchantGuide.vue';
import Element from './elements/ElementGuide.vue';
import Microchip from './64k-lapis/MicrochipGuide.vue';
import Event from './event/EventGuide.vue';
import Class from './class/CharacterGuide.vue';

const props = defineProps<{
  guide: string;
}>();
</script>

<style scoped>
.image-style {
  width: 130px;
  height: auto;
  transform: rotate(90deg);
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
