<template>
  <q-card class="my-card" flat bordered>
    <q-card-section class="row no-wrap items-start justify-between">
      <q-img :src="imageUrl" class="card-img" />

      <q-card-section class="card-content">
        <q-tabs v-model="tab" class="text-teal" dense>
          <q-tab label=" description" name="description" />
          <q-tab label=" drops" name="drops" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="description">
            <div class="text-h5">{{ title }}</div>
            <div class="text-3">Level: {{ level }}</div>

            <div class="text-3">PvP Zone: {{ pvpzone }}</div>

            <div class="text-subtitle3">Description: {{ description }}</div>
            <div class="text-subtitle3">Respawn Map: {{ respawnMap }}</div>
            <div class="text-subtitle3">Respawn Time: {{ respawnTime }}</div>
          </q-tab-panel>

          <q-tab-panel name="drops">
            <div>Conteúdo adicional para Tab drops</div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card-section>

    <q-card-actions align="center" class="view-more">
      <q-btn flat @click="onClick">View Details</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    title: String,
    imageUrl: String,
    description: String,
    level: Number,
    respawnMap: String,
    respawnTime: String,
    pvpzone: Number,
  },
  data() {
    return {
      tab: 'description',
    };
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style>
.my-card {
  width: 100%;
}

.card-img {
  max-width: 30%;
  max-height: 30%;
}

.card-content {
  flex: 1;
}
</style>
