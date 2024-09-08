<template>
  <q-page class="q-pa-md flex flex-center column">
    <q-drawer
      side="right"
      show-if-above
      v-model="rightDrawerOpen"
      width="300px"
      class="bg-gray-1 text-black"
    >
      <q-list>
        <q-item-label header>Respawn Maps</q-item-label>
        <q-expansion-item
          v-for="(respawnMaps, pvpZone) in groupedItems"
          :key="pvpZone"
          :label="'PVP Zone: ' + pvpZone"
        >
          <q-item-label
            v-for="(group, respawnMap) in respawnMaps"
            :key="respawnMap"
          >
            {{ respawnMap }}
            <q-list>
              <q-item
                v-for="boss in group"
                :key="boss.id"
                clickable
                @click="viewDetails(boss)"
              >
                <q-item-section>{{ boss.title }} </q-item-section>
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
        src="../assets/image/boss/download.png"
        class="resized-img"
        :ratio="1"
      />
    </div>

    <!-- Área dos Cards -->
    <div class="card-grid">
      <div
        v-for="(respawnMaps, pvpZone) in filteredGroupedItems"
        :key="pvpZone"
        class="q-pa-md grouped-cards"
      >
        <div
          v-for="(group, respawnMap) in respawnMaps"
          :key="respawnMap"
          :ref="`respawnMap-${respawnMap}`"
        >
          <h5 class="group-title">{{ respawnMap }}</h5>
          <q-item v-for="item in group" :key="item.id" class="q-mb-md">
            <CardItem
              :title="item.title"
              :description="item.description"
              :imageUrl="item.imageUrl"
              :level="item.level"
              :respawnMap="item.respawnMap"
              :respawnTime="item.respawnTime"
              :pvpzone="item.pvpZone"
              @click="viewDetails(item)"
            />
          </q-item>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardItem from 'components/CardItem.vue';

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      rightDrawerOpen: true,
      search: '',
      items: [
        {
          id: 1,
          title: 'Assaultron 9000',
          description: 'description 1',
          imageUrl: require('../assets/image/boss/15/15_Assaultron_9000.png'),
          level: 17,
          respawnMap: 'Proelium Frontier (lV1~15)',
          respawnTime: '17:00 ~ 17:20 Hs(s)',
          pvpZone: 15,
        },
        {
          id: 2,
          title: 'Mobile Siege Mech',
          description: 'description 2',
          imageUrl: require('../assets/image/boss/15/15_Mobile_SIege_Mech.png'),
          level: 17,
          respawnMap: 'Proelium Frontier (lV1~15)',
          respawnTime: '17:00 ~ 17:20 Hs(s)',
          pvpZone: 15,
        },
        {
          id: 3,
          title: 'Strategist AI',
          description: 'description 3',
          imageUrl: require('../assets/image/boss/15/15_Strategist_AI.png'),
          level: 17,
          respawnMap: 'Proelium Frontier (lV1~15)',
          respawnTime: '17:00 ~ 17:20 Hs(s)',
          pvpZone: 15,
        },
        {
          id: 4,
          title: 'Guardian AI',
          description: 'description 4',
          imageUrl: require('../assets/image/boss/15/15_Guardian_AI.png'),
          level: 17,
          respawnMap: 'Proelium Frontier (lV1~15)',
          respawnTime: '17:00 ~ 17:20 Hs(s)',
          pvpZone: 15,
        },
        {
          id: 5,
          title: 'Not a Bot',
          description: 'description 5',
          imageUrl: require('../assets/image/boss/15/15_Not_A_Bot.png'),
          level: 17,
          respawnMap: 'Proelium Frontier (lV1~15)',
          respawnTime: '17:00 ~ 17:20 Hs(s)',
          pvpZone: 15,
        },
        {
          id: 6,
          title: 'Kalayavan The Undying',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/30/30_Kalayavan_The_Undying.png'),
          level: 17,
          respawnMap: 'Cantabilian (lV20~30)',
          respawnTime: '9:00 ~ 9:20 Hs(s)',
          pvpZone: 30,
        },
        {
          id: 7,
          title: 'Raptor Slayer',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_raigo_Raptor_Slayer.png'),
          level: 82,
          respawnMap: 'D-Water Borderland (lV31~80)',
          respawnTime: '12:00 ~ 12:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 8,
          title: 'Luminous Brigand',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_raigo_Luminous_Brigand.png'),
          level: 82,
          respawnMap: 'D-Water Borderland (lV31~80)',
          respawnTime: '12:00 ~ 12:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 9,
          title: 'Greendieta Seraphim',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_raigoCaver_Greendieta_Seraphim.png'),
          level: 84,
          respawnMap: 'Caelum Greendieta (lV31~80)',
          respawnTime: '10:00 ~ 10:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 10,
          title: 'Dios Exiel',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_raigoCaver_Dios_Exiel.png'),
          level: 84,
          respawnMap: 'Caelum Sacra (lV31~80)',
          respawnTime: '15:00 ~ 15:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 11,
          title: 'Gaia ',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_event_Gaia.png'),
          level: 84,
          respawnMap: 'Event ??',
          respawnTime: 'Event ??',
          pvpZone: 80,
        },
        {
          id: 12,
          title: 'Princess Rirumu',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_Princess_Rirumu.png'),
          level: 83,
          respawnMap: 'Volcano Island (lV80)',
          respawnTime: '9:00 ~ 12:00 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 13,
          title: 'Cryptic the Last',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Cryptic_the_Last.png'),
          level: 75,
          respawnMap: '??',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 14,
          title: 'Cryptic Bulldozer',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Cryptic_Bulldozer.png'),
          level: 75,
          respawnMap: '??',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 15,
          title: 'Cannibal Hydra',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Cannibal_Hydra.png'),
          level: 75,
          respawnMap: '??',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 16,
          title: 'Cryptic Back',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Cryptic_Back.png'),
          level: 75,
          respawnMap: '??',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 17,
          title: 'Fierce_Nantarios',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Cryptic_the_Immortal.png'),
          level: 75,
          respawnMap: '??',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 18,
          title: 'Fury Kirihiross',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Fury_Kirihiross.png'),
          level: 75,
          respawnMap: '??',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 19,
          title: 'Dlizabeth_Eathory',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Dlizabeth_Eathory.png'),
          level: 75,
          respawnMap: '??',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 20,
          title: 'Fierce_Nantarios',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Fierce_Nantarios.png'),
          level: 75,
          respawnMap: '??',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 21,
          title: 'Lumen',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanos_Lumen.png'),
          level: 82,
          respawnMap: 'Kanos Illium (lV70-80)',
          respawnTime: '17:00 ~ 17:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 22,
          title: 'Ales',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanos_Ales.png'),
          level: 82,
          respawnMap: 'Kanos Illium (lV70-80)',
          respawnTime: '17:00 ~ 17:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 23,
          title: 'Dentatus',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanos_Dentatus.png'),
          level: 82,
          respawnMap: 'Kanos Illium (lV70-80)',
          respawnTime: '17:00 ~ 17:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 24,
          title: 'Secreta',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_kanos_Secreta.png'),
          level: 82,
          respawnMap: 'Kanos Illium (lV70-80)',
          respawnTime: '17:00 ~ 17:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 25,
          title: 'Commander Opal Hammer',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_jungle_Commander_Opal_Hammer.png'),
          level: 84,
          respawnMap: 'Stable Erde (lV55-80)',
          respawnTime: '10:00 ~ 10:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 26,
          title: 'Graveyard Teroro',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_locus_Graveyard_Terror.png'),
          level: 85,
          respawnMap: 'Locus Graveyard (lV80)',
          respawnTime: '9:00 ~ 9:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 27,
          title: 'Dark Lord',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_locus_Dark_Lord.png'),
          level: 85,
          level: 85,
          respawnMap: 'Locus Graveyard (lV80)',
          respawnTime: '8:00 ~ 8:20 Hs(s)',
          pvpZone: 80,
        },
        {
          id: 28,
          title: 'Abyssal Eclipser Umbraxis',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Abyssal_Eclipser_Umbraxis.png'),
          level: 83,
          respawnMap: 'Dragonspine Enclave (lV80)',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 29,
          title: 'Tempest Guardian Terravane',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Tempest_Guardian_Terravane.png'),
          level: 82,
          respawnMap: 'Dragonspine Enclave (lV80)',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 30,
          title: 'Pestilent Tyrant Nidhogg',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Pestilent_Tyrant_Nidhogg.png'),
          level: 82,
          respawnMap: 'Dragonspine Enclave (lV80)',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 31,
          title: 'Firestorm Warden Pyralis',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Firestorm_Warden_Pyralis.png'),
          level: 82,
          respawnMap: 'Dragonspine Enclave (lV80)',
          respawnTime: '??',
          pvpZone: 80,
        },
        {
          id: 32,
          title: 'Eternitys Vanquisher Stygion',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Eternitys_Vanquisher_Stygion.png'),
          level: 84,
          respawnMap: 'Dragonspine Enclave (lV80)',
          respawnTime: '??',
          pvpZone: 80,
        },

        {
          id: 33,
          title: 'Cloron Dragon',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_map1Caver_Cloron_Dragon.png'),
          level: 64,
          respawnMap: 'Cloron´s Lair (~map1)',
          respawnTime: '??',
          pvpZone: 1,
        },
        {
          id: 34,
          title: 'Fantasma Dragon',
          description: 'description 6',
          imageUrl: require('../assets/image/boss/80/80_map1Caver_Fantasma_Dragon.png'),
          level: 64,
          respawnMap: 'Fantasma´s Lair (~map1)',
          respawnTime: '??',
          pvpZone: 1,
        },
      ].sort((a, b) => a.title.localeCompare(b.title)),
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
    viewDetails(item) {
      this.$nextTick(() => {
        const refName = `respawnMap-${item.respawnMap}`;
        const element = this.$refs[refName];
        if (element && element.length > 0) {
          element[0].scrollIntoView({
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
</style>
