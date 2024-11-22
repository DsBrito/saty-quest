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
            <p class="description">Uma poção que dissipa efeitos negativos.</p>
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
              <span class="name">Fênix Vermelha</span>
              <p class="description">Uma majestosa montaria por 30 dias.</p>
            </div>
          </div>

          <div class="item">
            <q-img
              class="itens-img"
              src="../../../assets/image/eg/guide/30_days_packet/incrase_gold_30d.png"
            />
            <div class="text">
              <span class="name">Aumento de Gold</span>
              <p class="description">(não vale a pena)</p>
            </div>
          </div>

          <div class="item">
            <q-img
              class="itens-img"
              src="../../../assets/image/eg/guide/30_days_packet/endurace_30d.png"
            />
            <div class="text">
              <span class="name">Martelo de Endurecimento</span>
              <p class="description">Ferramenta para melhorias especiais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção do Pet -->
    <div class="pet-section">
      <h6 class="pet-title">
        Além dos itens comprados, no jogo há uma quest escondida/esquecida que
        dá um pet:
      </h6>
      <div class="pet-item">
        <q-img
          class="itens-img"
          src="../../../assets/image/eg/guide/30_days_packet/30d_npc_bg.png"
        />
        <div class="text">
          <span class="name">Pet Misterioso</span>
          <p class="description">
            Complete a quest secreta para obter este pet especial.
          </p>
        </div>
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
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.2em;
  color: #333;
}
</style>
