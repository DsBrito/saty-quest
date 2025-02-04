<template>
  <div class="container">
    <h1 class="title">New Shop Items</h1>
    <q-img
      src="../../../../../assets/image/eg/guide/site/new-shop-items/new-shop-items-menu.png"
      style="width: 250px"
    >
    </q-img>
    <span>???Seja o mais rápido a ter as coisas novas ??</span>

    <h6>
      Oque é isso? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
      <ul class="notes">
        <strong>Notes:</strong>
        <li>MOunts??.</li>
        <li>Costumes??.</li>
        <li>Pets??</li>
      </ul>
    </h6>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import { PRIZE_LIST } from '../../../../../model/guide/site/spin-to-win/price';
// const expanded = ref(true);

// const columns = [
//   {
//     name: 'invites',
//     required: true,
//     label: 'Invites',
//     align: 'center',
//     field: 'invites',
//   },
//   { name: 'rewards', label: 'Rewards', align: 'left', field: 'rewards' },
// ];
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 80%;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
}

.title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.notes {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  color: #555;
}

.notes li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

.notes li:before {
  content: '•';
  position: absolute;
  left: 0;
  color: #ff4081;
  font-size: 1.2em;
}

.my-card {
  width: 100%;
  max-width: 350px;
}
title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 10px;
}
/* .img-guide {
  width: 50%;
  margin: 20px auto;
  display: block;
} */
.tier-list {
  list-style-type: none;
  padding: 0;
}
.tier-item {
  margin-bottom: 10px;
}
.tier-dropdown {
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  max-width: 800px;
}
.img-reward {
  width: 32px;
  height: 32px;
  margin-right: 10px; /* Espaço entre a imagem e o texto */
}

.reward-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px; /* Para dar um espaço entre os itens */
}

.reward-text {
  display: flex;
  flex-direction: column; /* Para manter o nome e a descrição em colunas */
}

.reward-text div {
  margin: 2px 0; /* Adiciona um pequeno espaço entre o nome e a descrição */
}
.reward-scrollable {
  max-height: 300px; /* Ajuste a altura conforme necessário */
  overflow-y: auto;
  padding-right: 10px; /* Para evitar a sobreposição com a barra de rolagem */
}
</style>
