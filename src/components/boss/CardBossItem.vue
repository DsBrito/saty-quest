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
            <!-- Verifica se o array de drops existe e tem elementos -->
            <div v-if="drop && drop.length" class="scrollable-drops">
              <div
                class="drop-item drop-container"
                v-for="(item, index) in drop"
                :key="index"
              >
                <div>
                  <q-img class="drop-img" :src="item.img" />
                </div>
                <div class="drop-text">
                  <div>
                    <strong>{{ item.name }}</strong>
                  </div>
                  <div class="drop-description text-caption">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
            <!-- Mensagem caso não haja drops -->
            <div v-else>No drops available.</div>
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
    pvpzone: String,
    history: String,
    drop: Array, // Adicionada a prop drop
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
.drop-container {
  border: 1px solid #ccc; /* Cor e espessura da borda */
  padding: 10px; /* Espaço interno */
  border-radius: 5px; /* Bordas arredondadas, opcional */
}
.card-content {
  flex: 1;
}
.scrollable-drops {
  max-height: 300px; /* Ajuste a altura conforme necessário */
  overflow-y: auto;
  padding-right: 10px; /* Para evitar a sobreposição com a barra de rolagem */
}

.scrollable-content {
  max-height: 150px;
  overflow-y: auto;
}

.drop-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px; /* Para dar um espaço entre os itens */
}

.drop-img {
  width: 32px;
  height: 32px;
  margin-right: 10px; /* Espaço entre a imagem e o texto */
}

.drop-text {
  display: flex;
  flex-direction: column; /* Para manter o nome e a descrição em colunas */
}

.drop-text div {
  margin: 2px 0; /* Adiciona um pequeno espaço entre o nome e a descrição */
}
</style>
