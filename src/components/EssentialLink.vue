<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
      <!-- <a :href="props.link">Link</a> -->
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EssentialLink',
});

import { defineProps } from 'vue';
import { EssentialLinkProps } from '../components/models';

const props = defineProps({
  title: String,
  caption: { type: String, default: '' },
  link: { type: String, default: '#' },
  icon: { type: String, default: '' },
}) as EssentialLinkProps;
</script>
