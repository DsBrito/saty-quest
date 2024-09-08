<template>
  <q-page class="q-pa-md flex flex-center column">
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
        v-for="(group, level) in filteredGroupedItems"
        :key="level"
        class="q-pa-md grouped-cards"
      >
        <h3 class="group-title">Level {{ level }}</h3>
        <q-item v-for="item in group" :key="item.id" class="q-mb-md">
          <CardItem
            :title="item.title"
            :subtitle="item.subtitle"
            :imageUrl="item.imageUrl"
            :level="item.level"
            @click="viewDetails(item)"
          />
        </q-item>
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
      items: [
        {
          id: '15_Assaultron_9000',
          title: 'Assaultron 9000',
          subtitle: 'Subtitle 1',
          imageUrl: require('../assets/image/boss/15/15_Assaultron_9000.png'),
          level: 15,
        },
        {
          id: '15_Mobile_Siege_Mech',
          title: 'Mobile Siege Mech',
          subtitle: 'Subtitle 2',
          imageUrl: require('../assets/image/boss/15/15_Mobile_SIege_Mech.png'),
          level: 15,
        },
        {
          id: '15_Strategist_AI',
          title: 'Strategist AI',
          subtitle: 'Subtitle 3',
          imageUrl: require('../assets/image/boss/15/15_Strategist_AI.png'),
          level: 15,
        },
        {
          id: '15_Guardian_AI',
          title: 'Guardian AI',
          subtitle: 'Subtitle 4',
          imageUrl: require('../assets/image/boss/15/15_Guardian_AI.png'),
          level: 15,
        },
        {
          id: '15_Not_A_Bot',
          title: 'Not a Bot',
          subtitle: 'Subtitle 5',
          imageUrl: require('../assets/image/boss/15/15_Not_A_Bot.png'),
          level: 15,
        },
        {
          id: '30_Kalayavan_The_Undying',
          title: 'Kalayavan The Undying',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/30/30_Kalayavan_The_Undying.png'),
          level: 30,
        },
        {
          id: '80_raigo_Raptor_Slayer',
          title: 'Raptor Slayer',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_raigo_Raptor_Slayer.png'),
          level: 80,
        },
        {
          id: '80_raigo_Luminous_Brigand',
          title: 'Luminous Brigand',
          subtitle: 'Subtitle 6',
          imageUrl: requiere(
            '../assets/image/boss/80/80_raigo_Luminous_Brigand.png'
          ),
          level: 80,
        },
        {
          id: '80_raigoCaver_Greendieta_Seraphim',
          title: 'Greendieta Seraphim',
          subtitle: 'Subtitle 6',
          imageUrl: requiere(
            '../assets/image/boss/80/80_raigoCaver_Greendieta_Seraphim.png'
          ),
          level: 80,
        },
        {
          id: '80_raigoCaver_Dios_Exiel',
          title: 'Dios Exiel',
          subtitle: 'Subtitle 6',
          imageUrl: requiere(
            '../assets/image/boss/80/80_raigoCaver_Dios_Exiel.png'
          ),
          level: 80,
        },
        {
          id: '80_event_Gaia',
          title: 'Gaia ',
          subtitle: 'Subtitle 6',
          imageUrl: requiere('../assets/image/boss/80/80_event_Gaia.png'),
          level: 80,
        },
        {
          id: '80_Princess_Rirumu',
          title: 'Princess Rirumu',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_Princess_Rirumu.png'),
          level: 80,
        },
        // {
        //   id: '80_kanosCaver_Cryptic_the_Last',
        //   title: 'Cryptic the Last',
        //   subtitle: 'Subtitle 6',
        //   imageUrl: require('../assets/image/boss/80/80_kanosCaver_Cryptic_the_Last.png '),
        //   level: 80,
        // },
        {
          id: '80_kanosCaver_Cryptic_Bulldozer',
          title: 'Cryptic Bulldozer',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Cryptic_Bulldozer.png'),
          level: 80,
        },
        {
          id: '80_kanosCaver_Cannibal_Hydra',
          title: 'Cannibal Hydra',
          subtitle: 'Subtitle 6',
          imageUrl: requiere(
            '../assets/image/boss/80/80_kanosCaver_Cannibal_Hydra.png'
          ),
          level: 80,
        },
        {
          id: '80_kanosCaver_Cryptic_Back',
          title: 'Cryptic Back',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Cryptic_Back.png'),
          level: 80,
        },
        {
          id: '80_kanosCaver_Cryptic_the_Immortal',
          title: 'Fierce_Nantarios',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Cryptic_the_Immortal.png'),
          level: 80,
        },
        {
          id: '80_kanosCaver_Fury_Kirihiross',
          title: 'Fury Kirihiross',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Fury_Kirihiross.png'),
          level: 80,
        },
        {
          id: '80_kanosCaver_Dlizabeth_Eathory',
          title: 'Dlizabeth_Eathory',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Dlizabeth_Eathory.png'),
          level: 80,
        },
        {
          id: '80_kanosCaver_Fierce_Nantarios',
          title: 'Fierce_Nantarios',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_kanosCaver_Fierce_Nantarios.png'),
          level: 80,
        },
        {
          id: '80_kanos_Lumen',
          title: 'Lumen',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_kanos_Lumen.png'),
          level: 80,
        },
        {
          id: '80_kanos_Ales',
          title: 'Ales',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_kanos_Ales.png'),
          level: 80,
        },
        {
          id: '80_kanos_Dentatus',
          title: 'Dentatus',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_kanos_Dentatus.png'),
          level: 80,
        },
        {
          id: '80_kanos_Secreta',
          title: 'Secreta',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_kanos_Secreta.png'),
          level: 80,
        },
        {
          id: '80_jungle_Commander_Opal_Hammer',
          title: 'Commander Opal Hammer',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_jungle_Commander_Opal_Hammer.png'),
          level: 80,
        },
        {
          id: '80_locus_Graveyard_Terror',
          title: 'Graveyard Terror',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_locus_Graveyard_Terror.png'),
          level: 80,
        },
        {
          id: '80_locus_Dark_Lord',
          title: 'Dark Lord',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_locus_Dark_Lord.png'),
          level: 80,
        },
        {
          id: '80_dragon_Abyssal_Eclipser_Umbraxis',
          title: 'Abyssal Eclipser Umbraxis',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Abyssal_Eclipser_Umbraxis.png'),
          level: 80,
        },
        {
          id: '80_dragon_Tempest_Guardian_Terravane',
          title: 'Tempest Guardian Terravane',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Tempest_Guardian_Terravane.png'),
          level: 80,
        },
        {
          id: '80_dragon_Pestilent_Tyrant_Nidhogg',
          title: 'Pestilent Tyrant Nidhogg',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Pestilent_Tyrant_Nidhogg.png'),
          level: 80,
        },
        {
          id: '80_dragon_Firestorm_Warden_Pyralis',
          title: 'Firestorm Warden Pyralis',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Firestorm_Warden_Pyralis.png'),
          level: 80,
        },
        {
          id: '80_dragon_Eternitys_Vanquisher_Stygion',
          title: 'Eternitys Vanquisher Stygion',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Eternitys_Vanquisher_Stygion.png'),
          level: 80,
        },
        {
          id: '80_dragon_Eternitys_Vanquisher_Stygion',
          title: 'Eternitys Vanquisher Stygion',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_dragon_Eternitys_Vanquisher_Stygion.png'),
          level: 80,
        },
        {
          id: '80_map1Caver_Cloron_Dragon',
          title: 'Cloron Dragon',
          subtitle: 'Subtitle 6',
          imageUrl: require('../assets/image/boss/80/80_map1Caver_Cloron_Dragon.png'),
          level: 80,
        },
        // {
        //   id: '80_map1Caver_Fantasma_Dragon',
        //   title: 'Fantasma Dragon',
        //   subtitle: 'Subtitle 6',
        //   imageUrl: require('../assets/image/boss/80/80_map1Caver_Fantasma_Dragon'),
        //   level: 80,
        // },
      ],
      search: '', // Valor do campo de pesquisa
    };
  },
  computed: {
    groupedItems() {
      return this.items.reduce((groups, item) => {
        if (!groups[item.level]) {
          groups[item.level] = [];
        }
        groups[item.level].push(item);
        return groups;
      }, {});
    },
    filteredGroupedItems() {
      const lowerCaseSearch = this.search.toLowerCase();
      return Object.keys(this.groupedItems).reduce((filteredGroups, level) => {
        const filteredItems = this.groupedItems[level].filter((item) =>
          item.title.toLowerCase().includes(lowerCaseSearch)
        );
        if (filteredItems.length) {
          filteredGroups[level] = filteredItems;
        }
        return filteredGroups;
      }, {});
    },
  },
  methods: {
    viewDetails(item) {
      console.log('View details for:', item);
      // Implement navigation or details view logic here
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
  align-items: center; /* Alinha verticalmente o ícone e a barra de pesquisa */
  justify-content: center;
}

.search-input {
  width: 100%;
}

.search-icon {
  cursor: pointer; /* Opcional: mudar o cursor para indicar que o ícone é clicável */
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
  width: 200px; /* Ajuste o tamanho da imagem conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
}
</style>
