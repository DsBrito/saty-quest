<template>
  <h6>
    After completing the quest, you will be rewarded with a 1 day pet After
    completing the quest, you will be rewarded with a 1 day pet After completing
    the quest, you will be rewarded with a 1 day pet
  </h6>
  <div class="row justify-center q-gutter-lg text-center">
    <div class="img-map">
      <span class="text-center">AOL</span>
      <q-img
        src="../../../../assets/image/eg/guide/accessories/maps/80/apulune-accs-quest.png"
      />
    </div>

    <div class="img-map">
      <span class="text-center">UOF</span>
      <q-img
        src="../../../../assets/image/eg/guide/accessories/maps/80/iris-accs-quest.png"
      />
    </div>
  </div>

  <h6>
    After completing the quest, you will be rewarded with a 1 day pet After
    completing the quest, you will be rewarded with a 1 day pet After completing
    the quest, you will be rewarded with a 1 day pet
  </h6>
  <q-img
    class="npc-quest"
    src="../../../../assets/image/eg/guide/accessories/npcs/all-npcs.png"
  />
  <h6>
    After completing the quest, you will be rewarded with a 1 day pet After
    completing the quest, you will be rewarded with a 1 day pet After completing
    the quest, you will be rewarded with a 1 day pet
  </h6>

  <div class="justify-center">
    <img
      class="q-pa-sm"
      src="../../../../assets/image/eg/guide/accessories/item/chaos_plate_fragment_description.png"
    />
    <img
      class="q-pa-sm"
      src="../../../../assets/image/eg/guide/accessories/accs/acc-pack-80.png"
    />
  </div>
  <h6>
    After completing the quest, you will be rewarded with a 1 day pet After
    completing the quest, you will be rewarded with a 1 day pet After completing
    the quest, you will be rewarded with a 1 day pet
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
            src="../../../../assets/image/eg/guide/accessories/accs/acc-enock-ghabiel.png"
          />
          <p class="text-center">Enock Ghabiel (x100 Chaos Plate Fragment)</p>

          <q-img
            class="img-acc-quest"
            src="../../../../assets/image/eg/guide/accessories/accs/acc-enock-ghabiel.png"
          />
        </div>
        <!-- Container para as duas imagens -->
        <div class="row items-center justify-around no-wrap">
          <!-- Imagem 1 -->
          <q-img
            src="../../../../assets/image/eg/guide/accessories/npcs/enock-ghabiel.png"
          />
          <!-- Imagem 2 -->
          <q-img
            src="../../../../assets/image/eg/guide/accessories/npcs/quest-enock-ghabiel.png"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="no-padding no-scroll">
        <div class="flex-container">
          <q-img
            class="img-acc-quest"
            src="../../../../assets/image/eg/guide/accessories/accs/acc-elenen-ghabiel.png"
          />
          <p class="text-center">Elenen Ghabiel (x120 Chaos Plate Fragment)</p>

          <q-img
            class="img-acc-quest"
            src="../../../../assets/image/eg/guide/accessories/accs/acc-elenen-ghabiel.png"
          />
        </div>
        <!-- Container para as duas imagens -->
        <div class="row items-center justify-around no-wrap">
          <!-- Imagem 1 -->
          <q-img
            src="../../../../assets/image/eg/guide/accessories/npcs/elenen-ghabiel.png"
          />

          <!-- Imagem 2 -->
          <q-img
            src="../../../../assets/image/eg/guide/accessories/npcs/quest-elenen-ghabiel.png"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="no-padding no-scroll">
        <div class="flex-container">
          <q-img
            class="img-acc-quest"
            src="../../../../assets/image/eg/guide/accessories/accs/acc-nole-torraine.png"
          />
          <p class="text-center">Nole Torraine (x140 Chaos Plate Fragment)</p>
          <q-img
            class="img-acc-quest"
            src="../../../../assets/image/eg/guide/accessories/accs/acc-nole-torraine.png"
          />
        </div>

        <!-- Container para as duas imagens -->
        <div class="row items-center justify-around no-wrap">
          <!-- Imagem 1 -->
          <q-img
            src="../../../../assets/image/eg/guide/accessories/npcs/nole-torraine.png"
          />

          <!-- Imagem 2 -->
          <q-img
            src="../../../../assets/image/eg/guide/accessories/npcs/quest-nole-torraine.png"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="no-padding no-scroll">
        <div class="flex-container">
          <q-img
            class="img-acc-quest"
            src="../../../../assets/image/eg/guide/accessories/accs/acc-patril-sibelan.png"
          />
          <p class="text-center">Patril Siberlan (x100 Chaos Plate Fragment)</p>
          <q-img
            class="img-acc-quest"
            src="../../../../assets/image/eg/guide/accessories/accs/acc-patril-sibelan.png"
          />
        </div>

        <!-- Container para as duas imagens -->
        <div class="row items-center justify-around no-wrap">
          <!-- Imagem 1 -->
          <q-img
            src="../../../../assets/image/eg/guide/accessories/npcs/patril-sibelan.png"
          />
          <!-- Imagem 2 -->
          <q-img
            src="../../../../assets/image/eg/guide/accessories/npcs/quest-patril-sibelan.png"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="5" class="no-padding no-scroll">
        <div class="flex-container">
          <q-img
            class="img-acc-quest"
            src="../../../../assets/image/eg/guide/accessories/accs/acc-cordelan-crane.png"
          />
          <p class="text-center">Cordelan Crane (x120 Chaos Plate Fragment)</p>

          <q-img
            class="img-acc-quest"
            src="../../../../assets/image/eg/guide/accessories/accs/acc-cordelan-crane.png"
          />
        </div>
        <!-- Container para as duas imagens -->
        <div class="row items-center justify-around no-wrap">
          <!-- Imagem 1 -->
          <q-img
            src="../../../../assets/image/eg/guide/accessories/npcs/cordelan-crane.png"
          />
          <!-- Imagem 2 -->
          <q-img
            src="../../../../assets/image/eg/guide/accessories/npcs/quest-cordelan-crane.png"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <h6>
    You need farm this item:
    <img
      src="../../../../assets/image/eg/guide/accessories/item/chaos_plate_fragment.png"
    />
    in Dwater or Panda/Theo
  </h6>

  <div class="row justify-center q-gutter-lg text-center">
    <div class="img-teleport">
      <span class="text-center">Teleport</span>
      <q-img
        src="../../../../assets/image/eg/guide/accessories/maps/80/d_water.png"
      />
    </div>

    <div class="img-map">
      <span class="text-center">Map</span>
      <q-img
        src="../../../../assets/image/eg/guide/accessories/maps/80/map_d_water.png"
      />
    </div>
  </div>

  <h6>
    You need farm this item:
    <img
      src="../../../../assets/image/eg/guide/accessories/item/chaos_plate_fragment.png"
    />
    in Dwater or Panda/Theo
  </h6>
  <div class="row justify-center q-gutter-lg text-center">
    <div class="img-teleport">
      <span class="text-center">Teleport</span>
      <q-img
        src="../../../../assets/image/eg/guide/accessories/maps/80/d_water.png"
      />
    </div>

    <div class="img-map">
      <span class="text-center">Canyo of Greed Portal</span>
      <q-img
        src="../../../../assets/image/eg/guide/accessories/maps/80/x.png"
      />
    </div>
    <div class="img-teleport">
      <span class="text-center">NPC Teleport Seller</span>
      <q-img
        src="../../../../assets/image/eg/guide/accessories/npcs/elenen-ghabiel.png"
      />
    </div>
  </div>

  <h6>
    After completing the quest, you will be rewarded with a 1 day pet After
    completing the quest, you will be rewarded with a 1 day pet After completing
    the quest, you will be rewarded with a 1 day pet
  </h6>

  <div class="row justify-center q-gutter-lg text-center">
    <div class="img-map">
      <span class="text-center">Pantanasa (AOL)</span>
      <q-img
        src="../../../../assets/image/eg/guide/accessories/maps/80/map_pantanasa.png"
      />
    </div>

    <div class="img-map">
      <span class="text-center">Theodores (UOF)</span>
      <q-img
        src="../../../../assets/image/eg/guide/accessories/maps/80/map_theodores.png"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// Armazena o título selecionado como um ref (reativo)
const slide = ref(1);
</script>
<style>
.flex-container {
  display: flex;
  align-items: center;
}
.img-acc-quest {
  width: 60px;
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

.img-teleport {
  width: 200px;
}

.img-mobs {
  width: 100%;
  display: flex;
}
</style>
