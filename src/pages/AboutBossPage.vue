<template>
  <div class="container3">
    <!-- <q-img class="logo-img" src="../assets/image/boss/icons/shaiyalogo.png" /> -->
  </div>

  <q-page class="q-pa-md flex flex-center column container">
    <div class="header-container">
      <!-- Header fora do Drawer -->
      <div
        v-if="!rightDrawerOpen"
        class="drawer-header-closed no-padding text-black"
      >
        <q-item-label class="text-black" header>Respawn Maps</q-item-label>
        <q-btn flat round dense icon="menu" @click="rightDrawerOpen = true" />
      </div>
    </div>
    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      width="300px"
      behavior="desktop"
    >
      <!-- Header dentro do Drawer -->
      <div class="drawer-header">
        <q-item-label header>Respawn Maps</q-item-label>
        <q-btn flat round dense icon="close" @click="rightDrawerOpen = false" />
      </div>

      <q-list>
        <q-expansion-item
          v-for="(respawnMaps, pvpZone) in groupedItems"
          :key="pvpZone"
          :expand-separator="true"
          :label="'PVP Zone: ' + pvpZone"
        >
          <q-expansion-item
            v-for="(group, respawnMap) in respawnMaps"
            :key="respawnMap"
            :expand-separator="true"
            :label="respawnMap"
            style="margin-left: 20px; font-weight: bold"
            class="blue-grey"
          >
            <q-list>
              <q-item
                v-for="boss in group"
                :key="boss.id"
                clickable
                @click="scrollToBoss(boss.id)"
                class="no-padding"
              >
                <q-item-section
                  style="display: flex; margin-left: 10px"
                  class="text-caption"
                >
                  {{ boss.title }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <!-- Contêiner para a barra de pesquisa e o cabeçalho do drawer -->
    <!-- Barra de pesquisa -->
    <div class="search-container q-mb-md full-width">
      <q-input
        v-model="search"
        placeholder="Use this field to search boss by name
"
        debounce="300"
        outlined
        class="full-width"
        dense
        bg-color="white"
      >
        <template v-slot:prepend>
          <q-icon name="keyboard_arrow_left" />
        </template>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-img
        src="../assets/image/boss/icons/rightArrow.png"
        class="resized-img"
        :ratio="1"
      />
    </div>

    <!-- Cards com Bosses -->
    <div class="card-grid no-padding" v-scroll="onScroll">
      <div
        v-for="(respawnMaps, pvpZone) in filteredGroupedItems"
        :key="pvpZone"
        class="q-pa-md no-padding"
      >
        <div v-for="(group, respawnMap) in respawnMaps" :key="respawnMap">
          <div v-for="item in group" :key="item.id">
            <!-- Referência para scroll ao Boss -->
            <h5 :ref="`bossTitle-${item.id}`" class="text-center no-margin">
              <!-- {{ item.title }} -->
            </h5>
            <q-item :key="item.id" class="q-mb-md no-padding">
              <!-- {{ item.drop }} -->
              <CardBossItem
                :title="item.title"
                :description="item.description"
                :imageUrl="item.imageUrl"
                :level="item.level"
                :respawnMap="item.respawnMap"
                :respawnTime="item.respawnTime"
                :pvpzone="item.pvpZone"
                :history="item.history"
                :mapUrl="item.mapUrl"
                @click="item"
                :drop="item.drop"
              />
            </q-item>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardBossItem from 'components/boss/CardBossItem.vue';
import { BOSS } from '../model/monsters/boss';

export default {
  components: {
    CardBossItem,
  },
  data() {
    return {
      rightDrawerOpen: false, // Controla se o drawer está aberto ou fechado
      search: '',
      items: BOSS.sort((a, b) => a.title.localeCompare(b.title)),
    };
  },
  computed: {
    groupedItems() {
      // Agrupar os bosses por zona de PvP e, em seguida, por mapa de respawn
      return this.items.reduce((group, boss) => {
        // Verifica se a zona de PvP já existe no agrupamento
        if (!group[boss.pvpZone]) {
          group[boss.pvpZone] = {};
        }

        // Verifica se o mapa de respawn já existe dentro da zona de PvP
        if (!group[boss.pvpZone][boss.respawnMap]) {
          group[boss.pvpZone][boss.respawnMap] = [];
        }

        // Adiciona o boss ao grupo correspondente
        group[boss.pvpZone][boss.respawnMap].push(boss);

        return group;
      }, {});
    },

    filteredGroupedItems() {
      // Filtrar os bosses com base na pesquisa do usuário
      const searchLower = this.search.toLowerCase();
      return Object.fromEntries(
        Object.entries(this.groupedItems)
          .map(([pvpZone, respawnMaps]) => {
            const filteredMaps = Object.fromEntries(
              Object.entries(respawnMaps)
                .map(([respawnMap, bosses]) => [
                  respawnMap,
                  bosses.filter((boss) =>
                    boss.title.toLowerCase().includes(searchLower)
                  ),
                ])
                .filter(([, bosses]) => bosses.length > 0) // Remove mapas vazios após a filtragem
            );

            return [pvpZone, filteredMaps];
          })
          .filter(([, respawnMaps]) => Object.keys(respawnMaps).length > 0) // Remove zonas de PvP vazias
      );
    },
  },
  methods: {
    scrollToBoss(bossId) {
      this.$nextTick(() => {
        const bossTitle = this.$refs[`bossTitle-${bossId}`];
        if (bossTitle && bossTitle[0]) {
          bossTitle[0].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.search-container {
  max-width: 600px;
}
.resized-img {
  width: 200px;
  height: auto;
}
.card-grid {
  max-width: 50%;
}
.drawer-header {
  display: flex;
  align-items: center;
}
.header-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-container {
  display: flex;
  align-items: center;
}

.drawer-header-closed {
  display: flex;
  margin-left: auto;
  display: flex;
}
.container3 {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza os botões verticalmente */
  align-items: center; /* Centraliza os botões horizontalmente */
  height: 100%;
}
.container {
  /* Adiciona a imagem de background */
  /* background-image: url('../assets/image/class/background/baixo.jpg'); */
  background-size: contain;
  /* background-repeat: no-repeat; */
  min-height: 100vh;

  /* Define a altura mínima da div */
}
.logo-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
}
</style>
