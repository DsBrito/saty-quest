<template>
  <div class="container text-justify">
    <h1 class="title">64 Microchip</h1>
    <h6>
      Oqueé?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </h6>
    <div class="itens-wrapper items-center text-center">
      <div>
        <h2 class="group-title">Item</h2>

        <q-img
          class="img-enchant"
          src="../../../../assets/image/boss/drop-icons/64k.png"
        />
      </div>
      <div>
        <h2 class="group-title">Description</h2>
        <q-img
          class="img-enchant"
          src="../../../../assets/image/boss/drop-icons/64k.png"
        />
      </div>
    </div>
    <h6>
      Como conseguir?Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </h6>
    <!-- IMAGEM DE TODOS OS BOSSES? -->
    <q-img src="../../../../assets/image/boss/30/halloween/crazy_hatter.png" />

    <h6>
      Quest? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </h6>

    <div>
      <h6>
        15? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </h6>
    </div>
    <div>
      <h6>
        30? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </h6>
    </div>
    <div>
      <h6>
        80? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </h6>
    </div>
  </div>
</template>
<script setup lang="ts">
// Armazena o título selecionado como um ref (reativo)
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
  margin-bottom: 10px;
  text-align: center;
}
</style>
