<template>
  <component :is="layout" />
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from './layouts/MainLayout.vue';
import NoLayout from './layouts/NoLayout.vue';

const { meta } = toRefs(useRoute());
const layout = computed(() => {
  return meta.value.layout === 'NoLayout' ? NoLayout : MainLayout;
});
</script>
