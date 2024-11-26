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
  </div>
  <div v-if="selectedTitle === 'PvP 60'" class="pvp-zone">
    <h3 class="text-center no-margin">{{ selectedTitle }}</h3>
    <!-- <p>Content for {{ selectedTitle }} PvP.</p> -->

    <!-- Description -->
    <h6>
      Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp
      60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60
    </h6>
    <!-- TELEPORT -->
    <q-img
      class="img-teleport"
      src="../../../assets/image/eg/guide/accessories/maps/60/teleport60.png"
    />
    <!-- Description -->
    <h6>
      Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp 60 Texto pvp
      60 Texto pvp 60 Texto pvp 60 Texto pvp 60
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
    <!-- <p>Content for {{ selectedTitle }} PvP.</p> -->

    <!-- Description -->
    <h6>
      Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp
      80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto
      pvp 80 Texto pvp 80
    </h6>
    <!-- TELEPORT -->
    <q-img
      class="img-teleport"
      src="../../../assets/image/eg/guide/accessories/maps/80/teleport80.png"
    />
    <!-- Description -->
    <h6>
      Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp
      80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto
      pvp 80 Texto pvp 80 Texto pvp 80
    </h6>
    <!-- MAP -->
    <q-img
      class="img-map"
      src="../../../assets/image/eg/guide/accessories/maps/60/map60.png"
    />
    <!-- MOBS -->
    <!-- Description -->
    <h6>
      Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp
      80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80 Texto pvp 80
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
</template>
<script setup lang="ts">
import { ref } from 'vue';

// Armazena o título selecionado como um ref (reativo)
const selectedTitle = ref<string | null>(null);

// Função para selecionar o título
const selectTitle = (title) => {
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
.image-style {
  width: 130px;
  height: auto;
  transform: rotate(90deg);
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
  gap: 15px;
  background: #f5f5f5;
  padding: 15px;
  min-width: 300px;
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
  width: 20%;
}
.img-map {
  width: 30%;
}
.img-mobs {
  width: 100%;
  display: flex; /* Coloca os itens em uma linha */
}
</style>
