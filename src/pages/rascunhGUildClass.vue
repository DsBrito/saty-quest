<template>
  <div class="container">
    <q-img class="logo-img" src="../assets/image/boss/icons/shaiyalogo.png" />
  </div>

  <div class="test">
    Welcome to Shaiya, an MMORPG filled with epic adventures and intense
    battles! In Shaiya, you’ll dive into a vibrant and dynamic world divided
    between Light and Darkness, where a variety of character classes await you
    to explore. Each class offers a unique experience and contributes in a
    special way to Shaiya’s epic battles and rich storytelling. Choose your
    class, prepare for thrilling adventures, and join the fight for the balance
    between light and darkness!
  </div>

  <div class="test">
    Below is a presentation of the classes available in the world of Shaiya. To
    access the guide for the class shown in the current slide, click the button
    next to "Choose the Class".
  </div>

  <div class="container">
    <div class="carousel-container">
      <q-carousel
        class="custom-carousel"
        animated
        v-model="slide"
        arrows
        infinite
        swipeable
        thumbnails
      >
        <q-carousel-slide
          v-for="(img, index) in images"
          :key="index"
          :name="index + 1"
          :img-src="img.src"
        />
      </q-carousel>
    </div>
    <div class="choose-class">
      <h6>Choose the Class:</h6>
      <q-btn
        @click="logCurrentSlide"
        :label="getSlideLabel(slide)"
        class="centered-btn"
      />
      <q-img
        src="../assets/image/boss/icons/rightArrow.png"
        class="resized-img"
        :ratio="1"
      />
    </div>
  </div>

  <!-- ... -->
  <div class="class-info" v-if="classInfo">
    <!-- <h3>{{ classInfo.title }}</h3>
    <p>{{ classInfo.description }}</p> -->

    <CardClassItem v-if="currentCharacter" :character="currentCharacter" />
  </div>
  <!-- ... -->
</template>
<script>
import { ref, computed } from 'vue';
import { CHARACTER } from '../model/class/character';
import CardClassItem from 'components/class/CardClassItem.vue'; // Importa o componente

export default {
  components: {
    CardClassItem,
  },
  setup() {
    const slide = ref(1);
    const classInfo = ref(null);
    const selectedClass = ref('');

    const images = [
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
      { src: require('../assets/image/class/background/bgclass.png') },
    ];

    const slideLabels = [
      'Fight ',
      'Defender',
      'Priest',
      'Ranger',
      'Archer',
      'Mage',
      'Guardian',
      'Warrior',
      'Oracle',
      'Assassin',
      'Hunter',
      'Pagan ',
      'Monkey',
      'Druid',
    ];

    // const classDetails = {
    //   'Assassin | Ranger': { title: 'Assassin and Ranger', description: '...' },
    //   'Guardian | Defender': {
    //     title: 'Guardian and Defender',
    //     description: '...',
    //   },
    //   // Continue com os detalhes das outras classes
    // };

    // Função para obter o personagem baseado no slide atual
    const currentCharacter = computed(() => {
      return (
        CHARACTER.find((character) => character.id === slide.value) || null
      );
    });

    const getSlideLabel = (currentSlide) => {
      return slideLabels[currentSlide - 1] || 'No Label';
    };

    const logCurrentSlide = () => {
      const currentLabel = getSlideLabel(slide.value);
      selectedClass.value = currentLabel;
      classInfo.value = currentCharacter; //classDetails[currentLabel] || null;
    };

    return {
      slide,
      images,
      selectedClass,
      classInfo,
      logCurrentSlide,
      getSlideLabel,
      currentCharacter, // Personagem atual
    };
  },
};
</script>

<style scoped>
/* Seus estilos continuam os mesmos */

.choose-class {
  display: flex;
  align-items: center;
  justify-content: center;
}

.choose-class h6 {
  margin-right: 16px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel-container {
  display: flex;
  justify-content: center;
  width: 80%;
}

.custom-carousel {
  width: 80%;
}

.centered-btn {
  margin-top: 16px;
  margin-left: 16px;
}

.resized-img {
  width: 200px;
  height: auto;
}

.test {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  text-align: justify;
  width: 70%;
  margin: 0 auto;
  padding: 16px;
}

.class-info {
  margin-top: 24px;
  text-align: center;
}

.class-info h3 {
  font-size: 24px;
  margin-bottom: 8px;
}

.class-info p {
  font-size: 18px;
  color: #555;
}
</style>
