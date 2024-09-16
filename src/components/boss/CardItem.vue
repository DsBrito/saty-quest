<template>
  <q-card class="my-card" flat bordered>
    <q-card-section class="row no-wrap items-start justify-between">
      <q-img :src="imageUrl" class="card-img" />

      <q-card-section class="card-content">
        <q-tabs v-model="tab" class="text-teal" dense>
          <q-tab label="Description" name="description" />
          <q-tab label="Drops" name="drops" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="description">
            <div class="text-h5">{{ title }}</div>
            <div class="text-3">Level: {{ level }}</div>
            <div class="text-3">PvP Zone: {{ pvpzone }}</div>
            <div class=" ">Description: {{ description }}</div>
            <div class=" ">Respawn Map: {{ respawnMap }}</div>
            <div class=" ">Respawn Time: {{ respawnTime }}</div>
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

    <!-- Diálogo para View Details com tabs divididas -->
    <q-dialog v-model="dialogVisible">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">{{ title }}</div>
        </q-card-section>

        <q-separator />

        <!-- Tabs para História e Respawn -->
        <q-tabs v-model="dialogTab" class="text-teal" dense>
          <q-tab label="História" name="history" />
          <q-tab label="Respawn" name="respawn" />
        </q-tabs>

        <q-separator />

        <q-tab-panels
          v-model="dialogTab"
          animated
          style="width: 50vh; height: 50vh"
          class="text-justify"
        >
          <!-- Conteúdo da aba História -->
          <q-tab-panel name="history">
            <q-card-section>
              <div
                class="bg-grey-8 text-white flex justify-center items-center"
              >
                Made by Saty (not official history)
              </div>

              <div class="q-pt-sm">{{ history }}</div>
            </q-card-section>
          </q-tab-panel>

          <!-- Conteúdo da aba Respawn -->
          <q-tab-panel name="respawn">
            <q-card-section>

              <q-img :src="mapUrl" />
            </q-card-section>
          </q-tab-panel>
        </q-tab-panels>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    title: String,
    imageUrl: String,
    mapUrl: String,
    description: String,
    level: Number,
    respawnMap: String,
    respawnTime: String,
    pvpzone: Number,
    history: String,
  },
  data() {
    return {
      tab: 'description', // Aba principal do card
      dialogVisible: false, // Visibilidade do diálogo
      dialogTab: 'history', // Aba inicial do diálogo
    };
  },
  methods: {
    onClick() {
      this.dialogVisible = true; // Mostrar o diálogo ao clicar no botão
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

.view-more {
  margin-top: 16px;
}
</style>
