<template>
  <!-- <img :src="props.class" class="" /> -->

  <h6 class="text-center"><strong>SKILLS | LINKS | ATTIBUTES </strong></h6>

  <div class="class-skill-wrapper">
    <AttributesTable></AttributesTable>

    <!-- <img :src="props.class" class="class-image" /> -->
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      swipeable
      control-color="white"
      class="carousel-custom no-padding"
    >
      <!-- Skill Basic Slide -->
      <q-carousel-slide :name="1" class="no-padding">
        <q-card class="skill-card">
          <q-card-section class="no-padding">
            <img
              :src="props.skillBasic"
              alt="Skill Basic"
              class="skill-image"
            />
          </q-card-section>
        </q-card>
      </q-carousel-slide>

      <!-- Skill Single Slide -->
      <q-carousel-slide :name="2" class="no-padding">
        <q-card class="skill-card">
          <q-card-section class="no-padding">
            <img
              :src="props.skillSingle"
              alt="Skill Single"
              class="skill-image"
            />
          </q-card-section>
        </q-card>
      </q-carousel-slide>

      <!-- Skill Buff Slide -->
      <q-carousel-slide :name="3" class="no-padding">
        <q-card class="skill-card">
          <q-card-section class="no-padding">
            <img :src="props.skillBuff" alt="Skill Buff" class="skill-image" />
          </q-card-section>
        </q-card>
      </q-carousel-slide>

      <!-- Skill Ranger Slide -->
      <q-carousel-slide :name="4" class="no-padding">
        <q-card class="skill-card">
          <q-card-section class="no-padding">
            <img
              :src="props.skillRanger"
              alt="Skill Ranger"
              class="skill-image"
            />
          </q-card-section>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
    <q-img
      src="../../assets/image/boss/icons/rightArrow.png"
      class="resized-img"
      :ratio="1"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AttributesTable from 'components/class/AttributesTable.vue';

const slide = ref(1);

const props = defineProps<{
  class: string;
  skillBasic: string;
  skillSingle: string;
  skillBuff: string;
  skillRanger: string;
}>();
</script>

<style scoped>
.class-skill-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.class-image {
  max-width: 200px; /* Ajuste o tamanho da imagem da classe */
  height: auto;
  /* margin-right: 20px; Espaçamento entre a imagem e o carrossel */
}

.carousel-custom {
  max-width: 350px;
  flex-grow: 1;
}

.skill-card {
  overflow: hidden;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.skill-image {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  border-radius: 8px;
}

.resized-img {
  width: 200px;
  height: auto;
}
</style>
