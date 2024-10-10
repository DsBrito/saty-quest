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
            <div class="text-3"><strong>Level:</strong> {{ level }}</div>
            <div class="text-3"><strong>PvP Zone:</strong> {{ pvpzone }}</div>

            <!-- Caixa com barra de rolagem para descrição -->
            <div class="scrollable-content text-justify">
              <div class="text-3">
                <strong>Description: </strong>{{ description }}
              </div>
            </div>

            <div class=""><strong>Respawn Map: </strong>{{ respawnMap }}</div>
            <div class=""><strong>Respawn Time: </strong>{{ respawnTime }}</div>
          </q-tab-panel>

          <q-tab-panel name="drops">
            <div>Conteúdo adicional para Tab drops</div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card-section>

    <q-card-actions align="center">
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
        <q-scroll v-model="dialogTab" class="text-teal" dense>
          <q-tab label="História" name="history" />
          <q-tab label="Respawn" name="respawn" />
        </q-scroll>
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
    pvpzone: String,
    history: String,
  },
  data() {
    return {
      tab: 'description',
      dialogVisible: false,
      dialogTab: 'history',
    };
  },
  methods: {
    onClick() {
      this.dialogVisible = true;
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

.scrollable-content {
  max-height: 150px;
  overflow-y: auto;
}
</style>
