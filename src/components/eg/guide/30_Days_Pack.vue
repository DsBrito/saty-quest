<template>
  <div class="container text-justify">
    <h1 class="title">7~30 DAYS ITENS</h1>
    <h6 class="subtitle text-center">NPC: <strong>Mysterious Woman</strong></h6>
    <q-img
      class="npc-image"
      src="../../../assets/image/eg/guide/30_days_packet/npc/30d_npc_bg.png"
    />

    <div class="itens-wrapper">
      <!-- Primeira linha (Dispel Potion) -->
      <div>
        <div class="item">
          <q-img
            class="itens-img img-icon"
            src="../../../assets/image/eg/guide/30_days_packet/itens/dispel_potion.png"
          />
          <div class="text">
            <span class="name">Infinite Potions 7d</span>
            <p class="description">
              Permanent version of the following elixirs: <br />
              Dispel Elixir, Abolishing Elixir,Blessing Elixir, Cure Elixir,
              Holy Elixir.
            </p>
          </div>
        </div>
      </div>

      <!-- Segunda linha (Divisão entre Surfe e Outros Itens) -->
      <div class="second-row">
        <div class="first-column">
          <div class="special-item">
            <q-img
              class="itens-img"
              src="../../../assets/image/eg/guide/30_days_packet/itens/mount_30d.png"
            />
            <div class="text">
              <span class="name">Surfboard Mount 30D</span>
              <p class="description">Surfe com estilo por 30 dias!</p>
            </div>
            <q-img
              class="board-image"
              src="../../../assets/image/eg/guide/30_days_packet/itens/surf_mount.png"
            />
          </div>
        </div>

        <!-- Coluna dos Outros Itens -->
        <div class="second-column">
          <div class="item">
            <q-img
              class="itens-img"
              src="../../../assets/image/eg/guide/30_days_packet/itens/red_phonix_30d.png"
            />
            <div class="text">
              <span class="name">Red Phoenix Charm </span>
              <p class="description">
                After activating the Phoenix Charm prevents EXP loss from dying,
                increases EXP gained by 20 percent, increases gold dropped from
                mobs by 50 percent, gives 4 possible Recorded Points, and
                doubles the warehouse size. Lasts for 30 days.
              </p>
            </div>
          </div>

          <div class="item">
            <q-img
              class="itens-img"
              src="../../../assets/image/eg/guide/30_days_packet/itens/incrase_gold_30d.png"
            />
            <div class="text">
              <span class="name">Large Increase Gold Drop</span>
              <p class="description">
                Increases Gold dropped from mobs by 100 percent for 30 days.
                Restricted to characters currently in use. It only works for the
                gold that drops when killing the mob and not on the coin lv1-5
                drop
              </p>
            </div>
          </div>

          <div class="item">
            <q-img
              class="itens-img"
              src="../../../assets/image/eg/guide/30_days_packet/itens/endurace_30d.png"
            />
            <div class="text">
              <span class="name">Large Eternal Endurance </span>
              <p class="description">
                Retains eternal endurance for 30 days. Effect remains even after
                dying. Restricted to characters currently in use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção do Pet -->
    <div>
      <h6 class="pet-title">
        In addition to purchased items, there is a hidden/forgotten quest in the
        game that gives you a pet:
      </h6>

      <div class="img-colun">
        <div class="img-item">
          <span class="text-center">AOL</span>
          <q-img
            src="../../../assets/image/eg/guide/30_days_packet/maps/light_pet_quest.png"
          />
        </div>

        <div class="img-item">
          <span class="text-center">UOF</span>
          <q-img
            src="../../../assets/image/eg/guide/30_days_packet/maps/dark_pet_quest.png"
          />
        </div>
      </div>
      <h6 class="pet-title">
        In the maps above, you need to kill a mob to get the quest item and
        continue the mission.
      </h6>

      <div class="img-colun img-item">
        <span class="text-center"> Vueltas Scout </span>

        <q-img
          class="quest-mob"
          src="../../../assets/image/eg/guide/30_days_packet/pet/vueltas_scout_group.png"
        />
      </div>

      <h6 class>
        The drop is a secret document with a order to execute
        <strong> machine </strong>.
      </h6>
      <div class="quest-pet">
        <div class="pet-item">
          <q-img
            class="img-drop"
            src="../../../assets/image/eg/guide/30_days_packet/pet/secret_document.png"
          />
          <div>
            <strong>Secret Document</strong>
            <p class="description">
              Begins Quest<br />Right-Click the mouse button to start the quest.
            </p>
            <p class="description">
              <strong>Quest<br /></strong>
              [Danger] Execute Drekslur the Watcher.
            </p>
          </div>
          <q-img
            class="img-icon"
            src="../../../assets/image/eg/guide/30_days_packet/pet/pet_secret_quest.png"
          />
        </div>
      </div>

      <h6 class="pet-title">
        The quest gives the order to execute Drekslur the Watcher, which is a
        machine with a cannon and missiles, very similar
        <strong>Commander Opal Hammer</strong>

        (Maybe this is a member of his family lmao)
      </h6>

      <div class="img-colun img-item">
        <q-img
          class="quest-mob"
          src="../../../assets/image/eg/guide/30_days_packet/pet/drekslur_the_watcher.png"
        />
      </div>

      <h6 class="pet-title">
        After completing the quest, you will be rewarded with a 1 day pet

        <strong> +5 (1d)</strong>
        which is a robotic partner ready for the greatest adventures.
      </h6>

      <div class="img-colun img-item">
        <q-img
          class="quest-mob"
          src="../../../assets/image/eg/guide/30_days_packet/pet/robots_reward.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemsDisplay',
};
</script>

<style scoped>
.container {
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 800px;
}
.title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 10px;
}
.subtitle {
  font-size: 1em;
  margin-bottom: 20px;
}

.npc-image {
  border-radius: 10px;
  margin-bottom: 20px;
}
.itens-wrapper {
  display: grid;
  gap: 20px;
}
.item,
.special-item {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: #f5f5f5;
}

.item,
.pet-item {
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 8px;
  padding: 15px;
}

.img-colun {
  display: flex;
  gap: 20px;
}

.img-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.quest-pet {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.quest-mob {
  display: flex;
  flex-direction: center;
  width: 60%;
  height: auto;
}

.img-drop {
  width: 15%;
}

.board-image {
  border-radius: 10px;
}

.second-row {
  display: flex;
  gap: 20px;
}

.first-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.second-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.special-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
  border-radius: 8px;
}

.itens-img {
  width: 32px;
  flex-shrink: 0;
}

.img-icon {
  width: 200px;
  height: auto;
}

.description {
  font-size: 0.9em;
  color: #555;
}

.img-robots {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
}
</style>
