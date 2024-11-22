<template>
  <div class="container">
    <q-img src="../../../assets/image/icons/next.png" class="image-style" />

    <div v-if="props.guide === '30 Days Pack'">
      <!-- {{ props.guide }} -->

      <DaysPack> </DaysPack>
    </div>
  </div>
</template>

<script setup lang="ts">
import DaysPack from 'components/eg/guide/30_Days_Pack.vue';

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
