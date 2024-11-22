<template>
  <div class="container">
    <h1 class="title">7~30 DAYS ITENS</h1>
    <h6 class="subtitle text-center">NPC: <strong>Mysterious Woman</strong></h6>
    <q-img
      class="npc-image"
      src="../../../assets/image/eg/guide/30_days_packet/30d_npc_bg.png"
    />

    <div class="itens-wrapper">
      <!-- Primeira linha (Dispel Potion) -->
      <div class="dispel-potion">
        <div class="item">
          <q-img
            class="itens-img dispel-potion-img"
            src="../../../assets/image/eg/guide/30_days_packet/dispel_potion.png"
          />
          <div class="text">
            <span class="name">Dissipadora Infinita 7d</span>
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
        <!-- Coluna do Surfe -->
        <div class="first-column">
          <div class="special-item">
            <q-img
              class="itens-img"
              src="../../../assets/image/eg/guide/30_days_packet/mount_30d.png"
            />
            <div class="text">
              <span class="name">Montaria de Prancha de Surfe 30D</span>
              <p class="description">Surfe com estilo por 30 dias!</p>
            </div>
            <q-img
              class="board-image"
              src="../../../assets/image/eg/guide/30_days_packet/1.png"
            />
          </div>
        </div>

        <!-- Coluna dos Outros Itens -->
        <div class="second-column">
          <!-- Outros Itens -->
          <div class="item">
            <q-img
              class="itens-img"
              src="../../../assets/image/eg/guide/30_days_packet/red_phonix_30d.png"
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
              src="../../../assets/image/eg/guide/30_days_packet/incrase_gold_30d.png"
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
              src="../../../assets/image/eg/guide/30_days_packet/endurace_30d.png"
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
    <div class="pet-section">
      <h6 class="pet-title">
        In addition to purchased items, there is a hidden/forgotten quest in the
        game that gives you a pet:
      </h6>

      <div class="img-map-colun">
        <div class="img-item">
          <span class="text-center">AOL</span>
          <q-img
            src="../../../assets/image/eg/guide/30_days_packet/light_pet_quest.png"
          />
        </div>

        <div class="img-item">
          <span class="text-center">UOF</span>
          <q-img
            src="../../../assets/image/eg/guide/30_days_packet/dark_pet_quest.png"
          />
        </div>
      </div>
      <h6 class="pet-title">
        In the maps above, you need to kill a mob to get the quest item and
        continue the mission.
      </h6>

      <div class="img-map-colun">
        <div class="img-item">
          <span class="text-center"> Vueltas Scout (AOL)</span>

          <q-img
            src="../../../assets/image/eg/guide/30_days_packet/vueltas_scout.png"
          />
        </div>

        <div class="img-item">
          <span class="text-center"> Dwarf Bandit (UOF)</span>
          <q-img
            src="../../../assets/image/eg/guide/30_days_packet/dwarf_bandit.png"
          />
        </div>
      </div>

      <h6 class="pet-title">
        The drop is a secret document with a order to execute
        <strong> machine </strong>.
      </h6>
      <div class="dispel-potion">
        <div class="item">
          <q-img
            class="dispel-potion-img"
            src="../../../assets/image/eg/guide/30_days_packet/secret_document.png"
          />
          <div class="text">
            <span class="name">Secret Document</span>
            <p class="description">
              Begins Quest<br />Right-Click the mouse button to start the quest.
            </p>
            <p class="description">
              <strong>Quest<br /></strong>
              [Danger] Execute Drekslur the Watcher.
            </p>
          </div>
          <q-img
            class="dispel-potion-img"
            src="../../../assets/image/eg/guide/30_days_packet/pet_secret_quest.png"
          />
        </div>
      </div>

      <h6 class="pet-title">
        The quest gives the order to execute Drekslur the Watcher, which is a
        machine with a cannon and missiles, very similar
        <strong>Commander Opal Hammer</strong>

        (Maybe this is a member of his family lmao)
      </h6>
      <q-img
        class=""
        src="../../../assets/image/eg/guide/30_days_packet/drekslur_the_watcher.png"
      />

      <h6 class="pet-title">
        After completing the quest, you will be rewarded with a 15-day pet
        called
        <strong>MK-01 +5 (15d)</strong>
        which is a robotic partner ready for the greatest adventures.
      </h6>
      <q-img
        class=""
        src="../../../assets/image/eg/guide/30_days_packet/pet.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemsDisplay',
};
</script>

<style scoped>
.img-map-colun {
  display: flex;
  gap: 20px;
}

.img-title {
  align-items: center;
}
.img-item {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.container {
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: auto;
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
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: 0 auto 20px;
}
.board-image {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: 0 auto 20px;
}
.itens-wrapper {
  display: grid;
  grid-template-columns: 1fr; /* Uma coluna inicialmente */
  gap: 20px;
}

.dispel-potion {
  grid-column: span 1; /* O dispel potion ocupa toda a largura */
}

.second-row {
  display: flex;
  gap: 20px;
}

.first-column {
  flex: 1; /* A coluna de Surfe ocupa a metade da largura */
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.second-column {
  flex: 1; /* A coluna dos outros itens ocupa a outra metade */
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.special-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.item,
.pet-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.itens-img {
  width: 32px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0; /* Evita que a imagem diminua em telas pequenas */
}

.dispel-potion-img {
  width: 200px; /* Aumenta o tamanho da imagem do dispel potion */
  height: auto;
}

.text {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: bold;
  font-size: 1em;
}

.description {
  font-size: 0.9em;
  color: #555;
}

.pet-title {
  text-align: justify;
  margin-bottom: 20px;
  font-size: 1.2em;
  color: #333;
}
</style>
