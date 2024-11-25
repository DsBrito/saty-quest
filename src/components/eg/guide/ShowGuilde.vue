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
  </div>
</template>

<script setup lang="ts">
import DaysPack from 'components/eg/guide/30_Days_Pack.vue';
import Accessories from 'components/eg/guide/PvPAccessories.vue';
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
