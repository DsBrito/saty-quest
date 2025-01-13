<template>
  <div class="container">
    <h1 class="title">VOTE FOR US</h1>

    <q-img
      src="../../../../../assets/image/eg/guide/site/votes/vote_option.png"
      style="width: 250px"
    >
    </q-img>
    <h6>
      Oque é ?? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Voting gives you more benefits! If you keep on
      voting everyday you will unlock new rewards.
    </h6>

    <div class="row items-start q-gutter-x-sm">
      <q-img
        class="img-guide rounded-borders"
        src="../../../../../assets/image/eg/guide/site/pvp-reward/tier1.png"
        style="width: 250px"
      />
      <q-img
        class="img-guide rounded-borders"
        src="../../../../../assets/image/eg/guide/site/pvp-reward/tier2.png"
        style="width: 250px"
      />
      <q-img
        class="img-guide rounded-borders"
        src="../../../../../assets/image/eg/guide/site/pvp-reward/tier3.png"
        style="width: 250px"
      />
      <q-img
        class="img-guide rounded-borders"
        src="../../../../../assets/image/eg/guide/site/pvp-reward/tier4.png"
        style="width: 250px"
      />
      <q-img
        class="img-guide rounded-borders"
        src="../../../../../assets/image/eg/guide/site/pvp-reward/tier5.png"
        style="width: 245px"
      />
    </div>

    <h1 class="title">Rewards</h1>
    <div>
      <ul class="tier-list">
        <li v-for="tier in VOTE_REWARDS" :key="tier.id" class="tier-item">
          <q-expansion-item
            :label="tier.title"
            icon="arrow_drop_down"
            expand-icon="arrow_drop_up"
            class="tier-dropdown"
          >
            <ul class="reward-list reward-scrollable">
              <li
                class="reward-item reward-container"
                v-for="(reward, index) in tier.reward"
                :key="index"
              >
                <q-img class="img-reward" :src="reward.img" />
                <div class="reward-text">
                  <div>
                    <strong> {{ reward.name || 'Unknown Reward' }}</strong>
                  </div>
                  <div class="reward-description text-caption">
                    {{ reward.description || 'Unknown Reward' }}
                  </div>
                </div>
              </li>
            </ul>
          </q-expansion-item>
        </li>
      </ul>
    </div>
    <h6>
      How to vote???
      <ul>
        <strong>Notes:</strong>
        <li>
          Click on the image and after a few seconds you will be redirected to
          the site. Go and vote.
        </li>
        <li>
          Once done, find our server and click on the link so you can come back
          here.
        </li>
        <li>
          You will have a few minutes to claim your vote otherwise it won't
          count.
        </li>
        <li>Each vote will grant you 10 Coins as a reward.</li>
        <li>
          If you rank #1 at the end of the month you will be able to claim the
          special prize!
        </li>
      </ul>
    </h6>
    <div class="row items-start q-gutter-x-sm">
      <q-img
        class="img-guide rounded-borders"
        src="../../../../../assets/image/eg/guide/site/votes/image.png"
        style="width: 700px"
      />
      <q-img
        class="img-guide rounded-borders"
        src="../../../../../assets/image/eg/guide/site/votes/image.png"
        style="width: 700px"
      />
      <q-img
        class="img-guide rounded-borders"
        src="../../../../../assets/image/eg/guide/site/votes/image.png"
        style="width: 700px"
      />
      <q-img
        class="img-guide rounded-borders"
        src="../../../../../assets/image/eg/guide/site/votes/image.png"
        style="width: 700px"
      />
    </div>
    <p>Atenção???</p>
  </div>
</template>

<script setup lang="ts">
import { VOTE_REWARDS } from '../../../../../model/guide/site/vote/vote';
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 80%;
  margin: auto;
}
.title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 10px;
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

.q-table {
  max-width: 800px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background: white;
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
  max-height: 200px; /* Ajuste a altura conforme necessário */
  overflow-y: auto;
  padding-right: 10px; /* Para evitar a sobreposição com a barra de rolagem */
}
</style>
