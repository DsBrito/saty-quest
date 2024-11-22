<template>
  <div class="container">
    <q-img class="logo-img" src="../assets/image/boss/icons/shaiyalogo.png" />
  </div>

  <q-page class="q-pa-md flex flex-center column main-container">
    <!-- Botões com temas personalizados -->
    <q-btn label="NAMORADOS" class="event-btn valentines q-mb-md" />
    <q-btn label="HALLOWEEN" class="event-btn halloween q-mb-md" />
    <q-btn label="NATAL" class="event-btn christmas q-mb-md" />
    <q-btn label="PASCOA" class="event-btn easter q-mb-md" />
    <q-btn label="INVERNO" class="event-btn winter q-mb-md" />
    <q-btn label="VERAO" class="event-btn summer q-mb-md" />
  </q-page>
</template>

<script setup lang="ts">
// Importações, se necessárias
</script>

<style scoped>
/* Container principal */
.main-container {
  width: 100%;
}

/* Botão base */
.event-btn {
  width: 70%;
  height: 200px;
  font-size: 1.5em;
  color: white; /* Cor do texto */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Sombra no texto */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px; /* Cantos arredondados */
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

/* Efeito de hover */
.event-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* Estilizações temáticas */
.valentines {
  background: linear-gradient(135deg, #f06, #ff7f7f);
}
.valentines:hover {
  background: linear-gradient(135deg, #ff7f7f, #f06);
}

.halloween {
  background: url('../assets/image/event/themes/summer.webp') no-repeat
    center/cover;
}
.halloween:hover {
  filter: brightness(1.1);
}

.christmas {
  background: url('../assets/image/event/themes/winter.webp') no-repeat
    center/cover;
}
.christmas:hover {
  filter: brightness(1.1);
}

.easter {
  background: linear-gradient(135deg, #f9c46b, #ffdd99);
}
.easter:hover {
  background: linear-gradient(135deg, #ffdd99, #f9c46b);
}

.winter {
  background: url('../assets/image/event/themes/winter.webp') no-repeat
    center/cover;
}
.winter:hover {
  filter: brightness(1.2);
}

.summer {
  background: linear-gradient(135deg, #ff9800, #ff5722);
}
.summer:hover {
  background: linear-gradient(135deg, #ff5722, #ff9800);
}

/* Centralização do conteúdo */
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
  margin-bottom: 20px;
}
</style>
