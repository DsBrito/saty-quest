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
        >
          <!-- <template v-slot:caption>
            <div class="carousel-description">
              <h6>{{ img.title }}</h6>
              <p>{{ img.description }}</p>
            </div>
          </template> -->
          <div class="overlay">
            <h6>{{ img.title }}</h6>
            <p>{{ img.description }}</p>

            <!-- <h6>{{ currentCharacter.class }}</h6>
            <p>{{ currentCharacter.description }}</p> -->
          </div>
        </q-carousel-slide>
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

  <div class="class-info" v-if="classInfo">
    <!-- SKILLS | STATUS -->
    <CardClassItem :character="currentCharacter" />
    <!-- SKILL COMBBO-->
    <ComboCard :combos="currentCharacter.combos"></ComboCard>
    <SkillCarousel :skills="currentCharacter.skills"></SkillCarousel>

    <!-- LINKS -->
    <LinksTable :links="currentCharacter.links" />
    <ClassVideo :videos="currentCharacter.videos"></ClassVideo>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { CHARACTER } from '../model/class/character';
import CardClassItem from 'components/class/CardClassItem.vue';
import LinksTable from 'components/class/LinksTable.vue';
import ComboCard from 'src/components/class/ComboCard.vue';
import SkillCarousel from 'components/class/SkillCarousel.vue';
import ClassVideo from 'components/class/ClassVideo.vue';

export default {
  components: {
    CardClassItem,
    LinksTable,
    ComboCard,
    SkillCarousel,
    ClassVideo,
  },
  setup() {
    const slide = ref(1);
    const classInfo = ref(null);
    const selectedClass = ref('');
    const images = [
      {
        src: require('../assets/image/class/human/fight/fight_carousell.png'),
        title: 'Fighter',
        description:
          'The Fighter is a powerful melee class excelling in close combat.',
      },
      {
        src: require('../assets/image/class/human/defender/defender_carousell.png'),
        title: 'Defender',
        description:
          'The Defender specializes in protecting allies and holding the front line.',
      },
      {
        src: require('../assets/image/class/human/priest/priest_carousell.png'),
        title: 'Priest',
        description:
          'The Priest is a support class that heals and buffs allies.',
      },
      {
        src: require('../assets/image/class/elf/ranger/ranger_carousell.png'),
        title: 'Ranger',
        description:
          'The Ranger is a skilled archer who excels in long-range combat.',
      },
      {
        src: require('../assets/image/class/elf/archer/archer_carousell.png'),
        title: 'Archer',
        description:
          'The Archer is a versatile ranged class with powerful bow skills.',
      },
      {
        src: require('../assets/image/class/elf/mage/mage_carousell.png'),
        title: 'Mage',
        description:
          'The Mage is a master of elemental magic, dealing powerful spells.',
      },
      {
        src: require('../assets/image/class/spirity/monkey/monkey_carousell.png'),
        title: 'Monkey',
        description:
          'The Monkey is an agile fighter, known for its speed and acrobatics.',
      },
      {
        src: require('../assets/image/class/nordein/warrior/warrior_carousell.png'),
        title: 'Warrior',
        description:
          'The Warrior is a frontline fighter, known for brute strength.',
      },
      {
        src: require('../assets/image/class/nordein/guardian/guardian_carousell.png'),
        title: 'Guardian',
        description:
          'The Guardian is a robust protector, skilled in defensive tactics.',
      },

      {
        src: require('../assets/image/class//nordein/oracle/oracle_carousell.png'),
        title: 'Oracle',
        description: 'The Oracle uses ancient wisdom to aid allies in battle.',
      },
      {
        src: require('../assets/image/class/vail/assassin/assassin_carousell.png'),
        title: 'Assassin',
        description:
          'The Assassin is a stealthy killer, striking from the shadows.',
      },
      {
        src: require('../assets/image/class/vail/hunter/hunter_carousell.png'),
        title: 'Hunter',
        description:
          'The Hunter is a skilled tracker, adept at capturing prey.',
      },
      {
        src: require('../assets/image/class/vail/pagan/pagan_carousell.png'),
        title: 'Pagan',
        description: 'The Pagan harnesses the power of nature in combat.',
      },

      {
        src: require('../assets/image/class/spirity/druid/druid_carousell.png'),
        title: 'Druid',
        description:
          'The Druid is a shapeshifter, able to adapt to various situations.',
      },
    ];

    const slideLabels = [
      'Fight',
      'Defender',
      'Priest',
      'Ranger',
      'Archer',
      'Mage',
      'Monkey',
      'Warrior',
      'Guardian',
      'Oracle',
      'Assassin',
      'Hunter',
      'Pagan',
      'Druid',
    ];

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
      classInfo.value = currentCharacter;
    };

    return {
      slide,
      images,
      selectedClass,
      classInfo,
      logCurrentSlide,
      getSlideLabel,
      currentCharacter,
    };
  },
};
</script>

<style scoped>
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
  width: 55%;
}

.centered-btn {
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
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

.carousel-description {
  text-align: center;
  margin-top: 10px;
}
.q-carousel-slide img {
  border-radius: 15px;
}

/* .custom-carousel img {
  border-radius: 15px;
} */

.background {
  /* background-image: url('../assets/image/class/bgclass.jpg');  */
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
