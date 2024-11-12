<template>
  <q-item
    clickable
    tag="a"
    :href="isInternalLink"
    :target="isExternalLink ? '_blank' : undefined"
    @click="handleClick"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { EssentialLinkProps } from 'src/components/models';

const props = defineProps({
  title: String,
  caption: { type: String, default: '' },
  link: { type: [String, Function], default: '#' },
  icon: { type: String, default: '' },
}) as EssentialLinkProps;

const isExternalLink = typeof props.link === 'string';

const isInternalLink = computed(() => {
  if (typeof props.link === 'string') {
    return props.link;
  }
  return undefined;
});

function handleClick(event: Event) {
  if (typeof props.link === 'function') {
    event.preventDefault();
    (props.link as () => void)();
  }
}
</script>
