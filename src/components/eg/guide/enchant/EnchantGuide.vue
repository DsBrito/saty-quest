<template>
  <div class="container">
    <h6>
      Lorem ipsum dolor sit amet. Sit enim nesciunt est iusto dolorem et earum
      temporibus sit repellat exercitationem! Qui error ipsam quo rerum nostrum
      qui doloribus aliquam eum temporibus velit.
    </h6>
    <h1 class="title">ENCHANT</h1>

    <div class="itens-wrapper items-center text-center">
      <div
        class="enchant-level"
        :class="{ selected: selectedTitle === '1~10' }"
        @click="selectTitle('1~10')"
      >
        <h2 class="group-title">Enchant [1]~[10]</h2>
        <div class="item enchant-level"></div>
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/armor_lapisia.png"
        />
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/assault_lapisia.png"
        />
      </div>

      <div
        class="enchant-level"
        :class="{ selected: selectedTitle === '10~15' }"
        @click="selectTitle('10~15')"
      >
        <h2 class="group-title">Enchant [10]~[15]</h2>
        <div class="item enchant-level"></div>
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/pal.png"
        />
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/plw.png"
        />
      </div>

      <div
        class="enchant-level"
        :class="{ selected: selectedTitle === '15~20' }"
        @click="selectTitle('15~20')"
      >
        <h2 class="group-title">Enchant [15]~[20]</h2>
        <div class="item enchant-level text-center"></div>
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/pal.png"
        />
        <q-img
          class="img-enchant"
          src="../../../../assets/image/eg/guide/enchant/item/plw.png"
        />
      </div>
    </div>
    <h6>
      Lorem ipsum dolor sit amet. Sit enim nesciunt est iusto dolorem et earum
      temporibus sit repellat exercitationem! Qui error ipsam quo rerum nostrum
      qui doloribus aliquam eum temporibus velit.
    </h6>
    <div>
      <h2 class="group-title">Perfect Lapis Cube</h2>

      <q-img
        class="img-enchant"
        src="../../../../assets/image/eg/guide/enchant/item/perfect_lapis_cube.png"
      />
      <q-img
        class="img-guide"
        src="../../../../assets/image/eg/guide/enchant/guide/enchant_guide.png"
      />
    </div>
    <h6>
      Lorem ipsum dolor sit amet. Sit enim nesciunt est iusto dolorem et earum
      temporibus sit repellat exercitationem! Qui error ipsam quo rerum nostrum
      qui doloribus aliquam eum temporibus velit.
    </h6>
    <q-img
      class="img-guide"
      src="../../../../assets/image/eg/guide/enchant/guide/enchant_guide.png"
    />

    <h6>
      Lorem ipsum dolor sit amet. Sit enim nesciunt est iusto dolorem et earum
      temporibus sit repellat exercitationem! Qui error ipsam quo rerum nostrum
      qui doloribus aliquam eum temporibus velit.
    </h6>
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TaGO5cd4QZU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Armazena o título selecionado como um ref (reativo)
const selectedTitle = ref<string | null>(null);

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

.image-style {
  width: 130px;
  height: auto;
  transform: rotate(90deg);
}
.img-enchant {
  width: 60px;
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
.img-guide {
  width: 50%;
}
.item {
  display: flex;
  align-items: center;
  gap: 10px;
  /* background: #f5f5f5; */
  padding: 10px;
  min-width: 270px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.enchant-level {
  background: #1e1622;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
}

.enchant-level.selected {
  border: 7px solid #007bff;
}

.group-title {
  font-size: 1.5em;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
}
</style>
