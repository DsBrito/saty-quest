<template>
  <div class="container">
    <h1 class="title">Tiered PvP Rewards</h1>
    <h6>
      Embark on an exciting journey where victory on the battlefield not only
      brings you glory but also exclusive treasures every month! Kills earned
      from the start to the end of each month will allow you to unlock plentiful
      of special rewards, but make sure to claim yours before the end of the
      month as rewards will be replaced. Prepare for battle and reap the rewards
      of your triumphs!

      <ul>
        <strong>Notes:</strong>
        <li>Rewards and required kills per tier may/will change each month.</li>
        <li>
          Rewards can be claimed between day 10 and the last day of the month
          until 20hs.
        </li>
        <li>
          The system will only count kills earned in normal maps in the current
          month, not arenas.
        </li>
        <li>
          Updates to this page will occur the first days of each month, before
          the 10.
        </li>
      </ul>
    </h6>
    <span>The more you nerd, the more you get! </span>

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
        <li v-for="tier in TIRED_PVP_REWARDS" :key="tier.id" class="tier-item">
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
      Embark on an exciting journey where victory on the battlefield not only
      brings you glory but also exclusive treasures every month! Kills earned
      from the start to the end of each month will allow you to unlock plentiful
      of special rewards, but make sure to claim yours before the end of the
      month as rewards will be replaced. Prepare for battle and reap the rewards
      of your triumphs!
    </h6>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { TIRED_PVP_REWARDS } from '../../../../../model/guide/site/tired-pvp-rewards/tired';

// const activeTab = ref(TIRED_PVP_REWARDS[0].id); // Inicializar na primeira aba
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
