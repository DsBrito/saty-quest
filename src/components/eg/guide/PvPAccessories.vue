<template>
  <div class="container text-justify">
    <h1 class="title">ACCESSORIES</h1>

    <div class="itens-wrapper">
      <!-- PvP 15 -->
      <div
        class="pvp-accs"
        :class="{ selected: selectedTitle === 'PvP 15' }"
        @click="selectTitle('PvP 15')"
      >
        <div class="item pvp-accs text-white">
          <div class="text">
            <span class="text-center">PvP 15</span>
            <p class="description">
              Accessories to PVP 15 <br />
              One Neck, Two rings, Two bracelet.
            </p>
          </div>
        </div>
        <q-img
          class="pvp-accs-img"
          src="../../../assets/image/eg/guide/accessories/accs/accs_15.png"
        />
      </div>

      <!-- PvP 30 -->
      <div
        class="pvp-accs"
        :class="{ selected: selectedTitle === 'PvP 30' }"
        @click="selectTitle('PvP 30')"
      >
        <div class="item pvp-accs text-white">
          <div class="text">
            <span class="text-center">PvP 30</span>
            <p class="description">
              Permanent version of the following elixirs: <br />
              Dispel Elixir, Abolishing Elixir, Blessing Elixir, Cure Elixir,
              Holy Elixir.
            </p>
          </div>
        </div>
        <q-img
          class="pvp-accs-img"
          src="../../../assets/image/eg/guide/accessories/accs/accs_30.png"
        />
      </div>

      <!-- PvP 60 -->
      <div
        class="pvp-accs"
        :class="{ selected: selectedTitle === 'PvP 60' }"
        @click="selectTitle('PvP 60')"
      >
        <div class="item pvp-accs text-white">
          <div class="text">
            <span class="text-center">PvP 60</span>
            <p class="description">
              Permanent version of the following elixirs: <br />
              Dispel Elixir, Abolishing Elixir, Blessing Elixir, Cure Elixir,
              Holy Elixir.
            </p>
          </div>
        </div>
        <q-img
          class="pvp-accs-img"
          src="../../../assets/image/eg/guide/accessories/accs/accs_60.png"
        />
      </div>

      <!-- PvP 80 -->
      <div
        class="pvp-accs"
        :class="{ selected: selectedTitle === 'PvP 80' }"
        @click="selectTitle('PvP 80')"
      >
        <div class="item pvp-accs text-white">
          <div class="text">
            <span class="text-center">PvP 80</span>
            <p class="description">
              Permanent version of the following elixirs: <br />
              Dispel Elixir, Abolishing Elixir, Blessing Elixir, Cure Elixir,
              Holy Elixir.
            </p>
          </div>
        </div>
        <q-img
          class="pvp-accs-img"
          src="../../../assets/image/eg/guide/accessories/accs/accs_80.png"
        />
      </div>
    </div>

    <!-- Renderização  -->
    <q-img src="../../../assets/image/icons/next.png" class="image-style" />

    <div v-if="selectedTitle === 'PvP 15'" class="pvp-zone">
      <h3 class="text-center no-margin">{{ selectedTitle }}</h3>
      <!-- <p>Content for {{ selectedTitle }} PvP.</p> -->

      <!-- Description -->
      <h6>
        After completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet
      </h6>
      <!-- TELEPORT -->
      <q-img
        class="img-teleport"
        src="../../../assets/image/eg/guide/accessories/maps/15/teleport15.png"
      />
      <!-- Description -->
      <h6>
        After completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet
      </h6>
      <!-- MAP -->
      <q-img
        class="img-map"
        src="../../../assets/image/eg/guide/accessories/maps/15/map15.png"
      />
      <!-- MOBS -->
      <!-- Description -->
      <h6>
        After completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet
      </h6>
      <!-- MAP -->
      <div class="img-mobs">
        <h1>COLOCAR MOBS NORMAIS AQUI (TODOS JUNTOS)</h1>
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/15/frost-breath-succubus.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/15/leopardess-adventurer.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/15/mountain-ridge-brown-bear.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/15/vagabond-big-brown-bear.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/15/viper-demonworshipper.png"
        />
      </div>
      <!-- Description -->
      <h6>
        After completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet
      </h6>
      <!-- MAP -->
      <div class="img-mobs">
        <h1>COLOCAR MOBS ROBÔS AQUI (TODOS JUNTOS)</h1>
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/15/frost-breath-succubus.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/15/leopardess-adventurer.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/15/mountain-ridge-brown-bear.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/15/vagabond-big-brown-bear.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/15/viper-demonworshipper.png"
        />
      </div>
    </div>
    <div v-if="selectedTitle === 'PvP 30'" class="pvp-zone">
      <h3 class="text-center no-margin">{{ selectedTitle }}</h3>
      <!-- <p>Content for {{ selectedTitle }} PvP.</p> -->

      <!-- Description -->
      <h6>
        Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp
        30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp
        30Texto pvp 30Texto pvp 30
      </h6>
      <!-- TELEPORT -->
      <q-img
        class="img-teleport"
        src="../../../assets/image/eg/guide/accessories/maps/30/teleport30.png"
      />
      <!-- Description -->
      <h6>
        Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp
        30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp
        30Texto pvp 30
      </h6>
      <!-- MAP -->
      <q-img
        class="img-map"
        src="../../../assets/image/eg/guide/accessories/maps/30/map30.png"
      />
      <!-- MOBS -->
      <!-- Description -->
      <h6>
        Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp
        30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp
        30Texto pvp 30Texto pvp 30
      </h6>
      <!-- MAP -->
      <div class="img-mobs">
        <h1>COLOCAR MOBS NORMAIS AQUI (TODOS JUNTOS)</h1>
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/burning-stone-dwarf-digger.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/demonStone_troll_guardian.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/drago-evil -spirit.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/drago-eye-medic.png"
        />
      </div>
      <!-- Description -->
      <h6>
        Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp
        30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp
        30Texto pvp 30Texto pvp 30
      </h6>
      <!-- MAP -->
      <div class="img-mobs">
        <h1>COLOCAR MOBS ROBÔS AQUI (TODOS JUNTOS)</h1>
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/burning-stone-dwarf-digger.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/demonStone_troll_guardian.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/drago-evil -spirit.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/drago-eye-medic.png"
        />
      </div>
    </div>
    <div v-if="selectedTitle === 'PvP 60'" class="pvp-zone">
      <h3 class="text-center no-margin">{{ selectedTitle }}</h3>
      <!-- <p>Content for {{ selectedTitle }} PvP.</p> -->

      <!-- Description -->
      <h6>
        Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto
        pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60
      </h6>
      <!-- TELEPORT -->
      <q-img
        class="img-teleport"
        src="../../../assets/image/eg/guide/accessories/maps/60/teleport60.png"
      />
      <!-- Description -->
      <h6>
        Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto
        pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60
      </h6>
      <!-- MAP -->
      <q-img
        class="img-map"
        src="../../../assets/image/eg/guide/accessories/maps/60/map60.png"
      />
      <!-- MOBS -->
      <!-- Description -->
      <h6>
        Texto pvp 60 v Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto
        pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60
        Texto pvp 60 s
      </h6>
      <!-- MAP -->
      <div class="img-mobs">
        <h1>COLOCAR MOBS NORMAIS AQUI (TODOS JUNTOS)</h1>
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/burning-stone-dwarf-digger.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/demonStone_troll_guardian.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/drago-evil -spirit.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/drago-eye-medic.png"
        />
      </div>
      <!-- Description -->
      <h6>
        Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp
        30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp 30Texto pvp
        30Texto pvp 30Texto pvp 30
      </h6>
      <!-- MAP -->
      <div class="img-mobs">
        <h1>COLOCAR Mini BOSSS AQUI (TODOS JUNTOS)</h1>
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/burning-stone-dwarf-digger.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/demonStone_troll_guardian.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/drago-evil -spirit.png"
        />
        <q-img
          src="../../../assets/image/eg/guide/accessories/mobs/30/drago-eye-medic.png"
        />
      </div>
    </div>
    <div v-if="selectedTitle === 'PvP 80'" class="pvp-zone">
      <h3 class="text-center no-margin">{{ selectedTitle }}</h3>
      <!-- Description -->
      <h6>
        After completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet
      </h6>
      <div class="row justify-center q-gutter-lg text-center">
        <div class="img-map">
          <span class="text-center">AOL</span>
          <q-img
            src="../../../assets/image/eg/guide/accessories/maps/80/apulune-accs-quest.png"
          />
        </div>

        <div class="img-map">
          <span class="text-center">UOF</span>
          <q-img
            src="../../../assets/image/eg/guide/accessories/maps/80/iris-accs-quest.png"
          />
        </div>
      </div>

      <h6>
        After completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet
      </h6>
      <q-img
        class="npc-quest"
        src="../../../assets/image/eg/guide/accessories/npcs/all-npcs.png"
      />
      <h6>
        After completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet
      </h6>

      <div class="img-quest">
        <q-carousel
          v-model="slide"
          swipeable
          animated
          control-color="amber"
          navigation
          padding
          arrows
        >
          <!-- Slide 1 -->
          <q-carousel-slide :name="1" class="no-padding no-scroll">
            <div class="flex-container">
              <q-img
                class="img-acc-quest"
                src="../../../assets/image/eg/guide/accessories/accs/acc-enock-ghabiel.png"
              />
              <p class="text-center">
                Enock Ghabiel (x100 Chaos Plate Fragment)
              </p>

              <q-img
                class="img-acc-quest"
                src="../../../assets/image/eg/guide/accessories/accs/acc-enock-ghabiel.png"
              />
            </div>
            <!-- Container para as duas imagens -->
            <div class="row items-center justify-around no-wrap">
              <!-- Imagem 1 -->
              <q-img
                src="../../../assets/image/eg/guide/accessories/npcs/enock-ghabiel.png"
              />
              <!-- Imagem 2 -->
              <q-img
                src="../../../assets/image/eg/guide/accessories/npcs/quest-enock-ghabiel.png"
              />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="no-padding no-scroll">
            <div class="flex-container">
              <q-img
                class="img-acc-quest"
                src="../../../assets/image/eg/guide/accessories/accs/acc-elenen-ghabiel.png"
              />
              <p class="text-center">
                Elenen Ghabiel (x120 Chaos Plate Fragment)
              </p>

              <q-img
                class="img-acc-quest"
                src="../../../assets/image/eg/guide/accessories/accs/acc-elenen-ghabiel.png"
              />
            </div>
            <!-- Container para as duas imagens -->
            <div class="row items-center justify-around no-wrap">
              <!-- Imagem 1 -->
              <q-img
                src="../../../assets/image/eg/guide/accessories/npcs/elenen-ghabiel.png"
              />

              <!-- Imagem 2 -->
              <q-img
                src="../../../assets/image/eg/guide/accessories/npcs/quest-elenen-ghabiel.png"
              />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="no-padding no-scroll">
            <div class="flex-container">
              <q-img
                class="img-acc-quest"
                src="../../../assets/image/eg/guide/accessories/accs/acc-nole-torraine.png"
              />
              <p class="text-center">
                Nole Torraine (x140 Chaos Plate Fragment)
              </p>
              <q-img
                class="img-acc-quest"
                src="../../../assets/image/eg/guide/accessories/accs/acc-nole-torraine.png"
              />
            </div>

            <!-- Container para as duas imagens -->
            <div class="row items-center justify-around no-wrap">
              <!-- Imagem 1 -->
              <q-img
                src="../../../assets/image/eg/guide/accessories/npcs/nole-torraine.png"
              />

              <!-- Imagem 2 -->
              <q-img
                src="../../../assets/image/eg/guide/accessories/npcs/quest-nole-torraine.png"
              />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="no-padding no-scroll">
            <div class="flex-container">
              <q-img
                class="img-acc-quest"
                src="../../../assets/image/eg/guide/accessories/accs/acc-patril-sibelan.png"
              />
              <p class="text-center">
                Patril Siberlan (x100 Chaos Plate Fragment)
              </p>
              <q-img
                class="img-acc-quest"
                src="../../../assets/image/eg/guide/accessories/accs/acc-patril-sibelan.png"
              />
            </div>

            <!-- Container para as duas imagens -->
            <div class="row items-center justify-around no-wrap">
              <!-- Imagem 1 -->
              <q-img
                src="../../../assets/image/eg/guide/accessories/npcs/patril-sibelan.png"
              />
              <!-- Imagem 2 -->
              <q-img
                src="../../../assets/image/eg/guide/accessories/npcs/quest-patril-sibelan.png"
              />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="5" class="no-padding no-scroll">
            <div class="flex-container">
              <q-img
                class="img-acc-quest"
                src="../../../assets/image/eg/guide/accessories/accs/acc-cordelan-crane.png"
              />
              <p class="text-center">
                Cordelan Crane (x120 Chaos Plate Fragment)
              </p>

              <q-img
                class="img-acc-quest"
                src="../../../assets/image/eg/guide/accessories/accs/acc-cordelan-crane.png"
              />
            </div>
            <!-- Container para as duas imagens -->
            <div class="row items-center justify-around no-wrap">
              <!-- Imagem 1 -->
              <q-img
                src="../../../assets/image/eg/guide/accessories/npcs/cordelan-crane.png"
              />
              <!-- Imagem 2 -->
              <q-img
                src="../../../assets/image/eg/guide/accessories/npcs/quest-cordelan-crane.png"
              />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>

      <img
        class="q-pa-sm"
        src="../../../assets/image/eg/guide/accessories/item/chaos_plate_fragment_description.png"
      />
      <h6>
        You need farm this item:
        <img
          src="../../../assets/image/eg/guide/accessories/item/chaos_plate_fragment.png"
        />
        in Dwater or Panda/Theo
      </h6>

      <div class="row justify-center q-gutter-lg text-center">
        <div class="img-teleport">
          <span class="text-center">Teleport</span>
          <q-img
            src="../../../assets/image/eg/guide/accessories/maps/80/d_water.png"
          />
        </div>

        <div class="img-map">
          <span class="text-center">Map</span>
          <q-img
            src="../../../assets/image/eg/guide/accessories/maps/80/map_d_water.png"
          />
        </div>
      </div>

      <h6>
        You need farm this item:
        <img
          src="../../../assets/image/eg/guide/accessories/item/chaos_plate_fragment.png"
        />
        in Dwater or Panda/Theo
      </h6>
      <div class="row justify-center q-gutter-lg text-center">
        <div class="img-teleport">
          <span class="text-center">Teleport</span>
          <q-img
            src="../../../assets/image/eg/guide/accessories/maps/80/d_water.png"
          />
        </div>

        <div class="img-map">
          <span class="text-center">Map</span>
          <q-img
            src="../../../assets/image/eg/guide/accessories/maps/80/cog-portal.png"
          />
        </div>
      </div>

      <h6>
        After completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet After
        completing the quest, you will be rewarded with a 1 day pet
      </h6>

      <div class="row justify-center q-gutter-lg text-center">
        <div class="img-map">
          <span class="text-center">Pantanasa (AOL)</span>
          <q-img
            src="../../../assets/image/eg/guide/accessories/maps/80/map_pantanasa.png"
          />
        </div>

        <div class="img-map">
          <span class="text-center">Theodores (UOF)</span>
          <q-img
            src="../../../assets/image/eg/guide/accessories/maps/80/map_theodores.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// Armazena o título selecionado como um ref (reativo)
const selectedTitle = ref<string | null>(null);
const slide = ref(1);

// Função para selecionar o título
const selectTitle = (title: string | null) => {
  console.log(title);
  selectedTitle.value = title;
};
</script>
<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 80%;
  margin: auto;
}
.flex-container {
  display: flex;
  align-items: center;
}
.img-acc-quest {
  width: 60px;
}
.image-style {
  width: 130px;
  height: auto;
  transform: rotate(90deg);
}

.img-map {
  width: 400px;
}

.img-quest {
  width: 450px;
}

.npc-quest {
  width: 45%;
  border-radius: 10px;
}
.title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 10px;
}

.itens-wrapper {
  display: flex;
  gap: 20px;
  overflow-x: auto;
}

.item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f5f5f5;
  padding: 10px;
  min-width: 270px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.pvp-accs {
  background: #1e1622;
  padding: 10px;
  border-radius: 15px;
}
.pvp-accs.selected {
  border: 7px solid #007bff; /* Destaca o item selecionado */
}

.description {
  font-size: 0.9em;
}

.pvp-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.img-teleport {
  width: 200px;
}

.img-mobs {
  width: 100%;
  display: flex; /* Coloca os itens em uma linha */
}
</style>
