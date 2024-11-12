<template>
  <div class="container">
    <q-img class="logo-img" src="../assets/image/boss/icons/shaiyalogo.png" />
  </div>

  <q-page class="q-pa-md flex flex-center column container">
    <!-- Botões com largura de 70% e altura de 200px -->
    <q-btn
      label="NAMORADOS"
      class="q-mb-md"
      style="width: 70%; height: 200px"
    />
    <q-btn
      label="HALLOWEEN"
      class="q-mb-md"
      style="width: 70%; height: 200px"
    />
    <q-btn label="NATAL" class="q-mb-md" style="width: 70%; height: 200px" />
    <q-btn label="PASCOA" class="q-mb-md" style="width: 70%; height: 200px" />
    <q-btn label="INVERNO" class="q-mb-md" style="width: 70%; height: 200px" />
    <q-btn label="VERAO" class="q-mb-md" style="width: 70%; height: 200px" />
  </q-page>
</template>

<script setup lang="ts">
// Importações, se necessárias
</script>

<style scoped>
/* Garantir que a página tenha 100% da altura da tela */
.q-page {
  height: 100vh;
}

/* Estilo dos botões */
.q-btn {
  font-size: 1.2em; /* Aumentando o tamanho da fonte */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px; /* Garantindo espaçamento entre os botões */
}

/* Para garantir que o conteúdo fique alinhado na coluna */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza os botões verticalmente */
  align-items: center; /* Centraliza os botões horizontalmente */
  height: 100%;
}
.logo-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
}
</style>
