<template>
  <div class="container">
    <h1 class="title">Server Rules</h1>
    <q-img
      src="../../../../../assets/image/eg/guide/site/rules/rules_option.png"
      style="width: 250px"
    >
    </q-img>
    <span>Be sure to read our rules!</span>

    <h6>
      Porque ler? como é sepaado? Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
      <ul class="notes">
        <strong>Notes:</strong>
        <li>Spin our wheel of fortune to get a free random item.</li>
        <li>You get 1 free spin every 6 hours so don't miss your chance.</li>
        <li>There is a limit of 3 spins by IP Address.</li>
      </ul>
    </h6>

    <RulesInfo></RulesInfo>
    <h6>
      Punishments All our rules are considered as guidelines to preserve a fair
      and friendly experience in our server and its services. This means that
      the punishments you receive will be according to what is stipulated here
      and/or our staff view of the offense. These punishments will go from
      warnings to jail time or even suspension of the account / shared accounts.
      <ul class="notes">
        <strong>Notes:</strong>
        <li>
          <strong>First Offense </strong> might receive a warning, depending on
          the offense you also could get mute, jail time or even temporal
          suspension.
        </li>
        <li>
          <strong>Second Offense </strong>Means you did not learn by your
          mistakes, this will include even more extensive mute, jail time and/or
          temporal suspension.
        </li>
        <li>
          <strong>Third or more </strong>Seems you can't learn, expect extended
          mute, jail time, temporal or permanent suspension, depending on the
          offense.
        </li>
      </ul>
    </h6>
    <span>
      Please report all players breaking any of these rules to any of our staff
      members in our discord server. To effectively make a report, your must
      present hard evidence: Screenshots (multiple will be appreciated) or
      Videos. Reports that are only a tale of what you saw are not valid, except
      as reference in case a solid report is made.
      <strong
        >Join our discord server to make your reports by submiting a new ticket
        or by sending a private message to any of our staff members.</strong
      ></span
    >
  </div>
</template>

<script setup lang="ts">
import RulesInfo from './RulesInfo.vue';

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
