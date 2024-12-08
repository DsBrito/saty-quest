<template>
  <div class="container">
    <q-img class="logo-img" src="../assets/image/boss/icons/shaiyalogo.png" />
    <!-- Board container -->

    <div class="board-container">
      <q-img class="board-image" src="../assets/image/icons/board.png" />

      <!-- Texto sobre a imagem do board -->
      <div class="board-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
      </div>
      <div class="board-text2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
      </div>
    </div>

    <!-- ..botões aqui -->
    <div>
      <div class="button-container-right-one">
        <q-btn
          label="30 Days Pack"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('30 Days Pack')"
        />
        <q-btn
          label="accessories"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('accessories')"
        />
        <q-btn
          label="Enchant"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Enchant')"
        />
        <q-btn
          label="Elements"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Elements')"
        />
        <q-btn
          label="Microchip 64k"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Microchip 64k')"
        />
        <q-btn
          label="Events"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Events')"
        />
        <q-btn
          label="Farm/Drop"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Farm/Drop')"
        />
        <q-btn
          label="GRB"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('GRB')"
        />
        <q-btn
          label="Class"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Class')"
        />
        <q-btn
          label="Commands"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Commands')"
        />
        <q-btn
          label="Core"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Core')"
        />
        <q-btn
          label="Wings"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Wings')"
        />
      </div>

      <div class="button-container-right-two">
        <q-btn
          label="Game Config"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Game Config')"
        />
        <q-btn
          label="Capes"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Capes')"
        />
        <q-btn
          label="Link/Extract"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Link/Extract')"
        />
        <q-btn
          label="NPCS"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('NPCS')"
        />
        <q-btn
          label="PVP Gear"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('PVP Gear')"
        />
        <q-btn
          label="Rec Rune"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Rec Rune')"
        />

        <q-btn
          label="Relics"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Relics')"
        />
        <q-btn
          label="WardMode"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('WardMode')"
        />
        <q-btn
          label="Weapons"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Weapons')"
        />
      </div>
    </div>
    <div>
      <div class="button-container-left-one">
        <q-btn
          label="Recrut friends"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Recrut friends')"
        />
        <q-btn
          label="APs"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('APs')"
        />
        <q-btn
          label="Bosses"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Bosses')"
        />
        <q-btn
          label="Custumer"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Custumer')"
        />
        <q-btn
          label="Game Discord"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Game Discord')"
        />
        <q-btn
          label="Download"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Download')"
        />
        <q-btn
          label="Drop List"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Drop List')"
        />
        <q-btn
          label="EG Information"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('EG Information')"
        />
        <q-btn
          label="itens with discount"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('itens with discount')"
        />
        <q-btn
          label="Mounts"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Mounts')"
        />
      </div>
      <div class="button-container-left-two">
        <q-btn
          label="PVP rewards"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('PVP rewards')"
        />
        <q-btn
          label="Pets"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Pets')"
        />
        <q-btn
          label="Roulet"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Roulet')"
        />
        <q-btn
          label="Rules"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Rules')"
        />
        <q-btn
          label="Share opinions"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Share opinions')"
        />
        <q-btn
          label="services"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('services')"
        />
        <q-btn
          label="Vote"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Vote')"
        />
        <q-btn
          label="Events Calendar"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('Events Calendar')"
        />
        <q-btn
          label="New Shop Items"
          outline
          style="color: goldenrod"
          size="15px"
          @click="handleButtonClick('New Shop Items')"
        />
      </div>
    </div>
    <q-img src="../assets/image/icons/next.png" class="image-style" />
    <div v-if="!selectedButton" class="guide">
      <strong>Select the guide</strong>
    </div>

    <div v-else class="guide-selected">
      <strong>{{ selectedButton }}</strong>
    </div>

    <div v-if="selectedButton">
      <showGuilde :guide="selectedButton"></showGuilde>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import showGuilde from 'components/eg/guide/ShowGuilde.vue';

const selectedButton = ref('');

const handleButtonClick = (buttonLabel: string) => {
  selectedButton.value = buttonLabel;
  console.log(`Button clicked: ${buttonLabel}`);
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-image: url('../assets/image/class/background/sq_forum_bg.jpg'); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.board-container {
  position: relative;
  width: 36%;
  /* max-width: 1000px; */
  display: flex;
}

.board-image {
  width: 100%;
}

.logo-img {
  width: 30%;
}

.board-text2 {
  position: absolute;
  top: 50%;
  left: 15%;
  text-align: justify;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: #fff;
  width: 70%;
}

.board-text {
  position: absolute;
  top: 11%;
  left: 15%;
  text-align: justify;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: #fff;
  width: 70%;
}

.button-container-right-one {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 250px;
  left: 10%;
  gap: 10px;
  width: 130px;
}
.button-container-right-two {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 250px;
  left: 20%;
  gap: 10px;
  width: 130px;
}
.button-container-left-one {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 250px;
  right: 10%;
  gap: 10px;
  width: 130px;
}
.button-container-left-two {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 250px;
  right: 20%;
  gap: 10px;
  width: 130px;
}
.guide {
  background-image: url('../assets/image/icons/tab_bg_active.png');
  justify-content: center;

  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  height: 80px;
  width: 20%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 10px;
}
.guide-selected {
  background-image: url('../assets/image/icons/tab_bg_active.png');
  justify-content: center;

  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  height: 80px;
  width: 20%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 10px;
}
.image-style {
  width: 130px;
  height: auto;
  transform: rotate(90deg);
}
</style>
