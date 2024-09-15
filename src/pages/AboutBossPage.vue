<template>
  <q-page class="q-pa-md flex flex-center column">
    <!-- Área dos Drawer -->
    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      width="300px"
      behavior="desktop"
    >
      <q-list>
        <q-item-label header>Respawn Maps </q-item-label>
        <q-expansion-item
          v-for="(respawnMaps, pvpZone) in groupedItems"
          :key="pvpZone"
          :expand-separator="true"
          :label="'PVP Zone: ' + pvpZone"
        >
          <q-item-label
            v-for="(group, respawnMap) in respawnMaps"
            :key="respawnMap"
            style="margin-left: 20px; font-weight: bold"
            class="blue-grey"
          >
            {{ respawnMap }}
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
                  {{ boss.title }}</q-item-section
                >
              </q-item>
            </q-list>
          </q-item-label>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <div class="search-container q-mb-md">
      <q-input
        v-model="search"
        placeholder="Search by card title"
        debounce="300"
        outlined
        class="search-input"
        dense
      >
        <template v-slot:prepend>
          <q-icon name="keyboard_arrow_left" class="search-icon" />
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
    <!-- Área dos Cards -->
    <div class="card-grid no-padding" v-scroll="onScroll">
      <div
        v-for="(respawnMaps, pvpZone) in filteredGroupedItems"
        :key="pvpZone"
        class="q-pa-md grouped-cards"
      >
        <div v-for="(group, respawnMap) in respawnMaps" :key="respawnMap">
          <div v-for="item in group" :key="item.id">
            <!-- Adicionar o ref com base no ID do boss -->
            <h5 :ref="`bossTitle-${item.id}`" class="group-title">
              {{ item.title }}
            </h5>
            <q-item :key="item.id" class="q-mb-md">
              <CardItem
                :title="item.title"
                :description="item.description"
                :imageUrl="item.imageUrl"
                :level="item.level"
                :respawnMap="item.respawnMap"
                :respawnTime="item.respawnTime"
                :pvpzone="item.pvpZone"
                :history="item.history"
                :mapUrl="item.mapUrl"
                @click="viewDetails(item)"
              />
            </q-item>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardItem from 'components/boss/CardItem.vue';
import { BOSS } from '../model/boss';
export default {
  components: {
    CardItem,
  },
  data() {
    return {
      rightDrawerOpen: true,
      search: '',
      items: BOSS.sort((a, b) => a.title.localeCompare(b.title)),
    };
  },
  computed: {
    groupedItems() {
      return this.items.reduce((groups, item) => {
        if (!groups[item.pvpZone]) {
          groups[item.pvpZone] = {};
        }
        if (!groups[item.pvpZone][item.respawnMap]) {
          groups[item.pvpZone][item.respawnMap] = [];
        }
        groups[item.pvpZone][item.respawnMap].push(item);
        return groups;
      }, {});
    },
    filteredGroupedItems() {
      const lowerCaseSearch = this.search.toLowerCase();
      return Object.keys(this.groupedItems).reduce(
        (filteredLevels, pvpZone) => {
          const filteredRespawnMaps = Object.keys(
            this.groupedItems[pvpZone]
          ).reduce((filteredRespawn, respawnMap) => {
            const filteredItems = this.groupedItems[pvpZone][respawnMap].filter(
              (item) => item.title.toLowerCase().includes(lowerCaseSearch)
            );
            if (filteredItems.length) {
              filteredRespawn[respawnMap] = filteredItems;
            }
            return filteredRespawn;
          }, {});
          if (Object.keys(filteredRespawnMaps).length) {
            filteredLevels[pvpZone] = filteredRespawnMaps;
          }
          return filteredLevels;
        },
        {}
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
.q-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.search-container {
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input {
  width: 100%;
}

.search-icon {
  cursor: pointer;
}

.card-grid {
  display: grid;
  gap: 16px;
  width: 100%;
  max-width: 1200px;
}

.grouped-cards {
  border-radius: 8px;
  padding: 16px;
}

.group-title {
  margin-bottom: 16px;
  text-align: center;
}

.resized-img {
  width: 200px;
  height: auto;
}
.resized-img2 {
  width: 100%; /* Faz a imagem se adaptar ao contêiner do card */
  max-width: 200px; /* Define um limite máximo de largura */
  height: auto; /* Mantém a proporção da altura */
  object-fit: cover; /* Garante que a imagem cubra o espaço disponível sem distorção */
  border-radius: 8px; /* Dá bordas arredondadas se desejar */
}
</style>
