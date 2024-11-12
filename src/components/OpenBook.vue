<template>
  <!-- <div class="book-container test class-book-wrapper"> -->
  <div class="class-book-wrapper">
    <div class="image-row">
      <img
        src="../assets/image/goddes/light/light.png"
        alt="Goddes Light"
        class="small-image"
      />
    </div>

    <div class="book">
      <div class="page left">
        <div class="content">
          <p class="text-center">Cheaper #01</p>
          <img :src="currentImage" alt="Random" class="image" />
        </div>
      </div>

      <div class="page right">
        <div class="content no-padding">
          <div class="content front">
            <p class="description test">{{ nextDescription }}</p>
          </div>
        </div>
      </div>
      <div class="page right" :class="{ flip: isFlipping }">
        <div class="content front">
          <p class="description test">{{ currentDescription }}</p>
        </div>
      </div>
    </div>

    <div class="image-row">
      <img
        src="../assets/image/goddes/fury/furyblack.png"
        alt="Goddes Fury"
        class="align-image"
      />
    </div>
  </div>
  <div align="center">
    <q-btn
      @click="flipPage"
      label="Next Page"
      color="primary"
      class="flip-button"
      icon="arrow_forward"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('../assets/image/eg/history/1-b3cabdcdc7.jpg'),
        require('../assets/image/eg/history/chapter_1.jpg'),
        require('../assets/image/eg/history/chapter_2.jpg'),
        require('../assets/image/eg/history/chapter_3.jpg'),
        require('../assets/image/eg/history/chapter_4.jpg'),
        require('../assets/image/eg/history/chapter_2.jpg'),
        require('../assets/image/eg/history/chapter_1.jpg'),

        require('../assets/image/eg/history/chapter_4.jpg'),
      ],
      descriptions: [
        'welcome',
        'In a time before time, when there was only darkness, the Goddess Etain came to this universe with a heart bearing desire for order and harmony. Immersing herself in a vast ocean of her own creation, she formed the continents of Teos Epeiros from her living flesh. Mountains were made high and rivers ran deep throughout the land in likeness of the veins that ran within her body. She created green forests and plains that engulfed the lands in the likeness of her youthful complexion. The sky and stars inherited their exquisiteness from the likeness of her eyes. This vast, rich world crafted through her strength, will, and desire for perfection, was named Shaiya. All lives began from the hands of the Goddess of Etain. At first, she created the Thelaiosis, Dragon Gods who could help her rule the kingdom of Teos Epeiros. Threemans, leader amongst the Dragons, put forth that further races would aid the growth of the young world. It was with his help that the Nordein were born.',
        "In an act of shocking arrogance and blasphemy, the Dumianas ended the vulnerable Goddess’ life with the stroke of a common sword. Upon her death, her tormented soul was torn into two halves. The land shook and the sky darkened as the living things throughout the world of Shaiya were devoured into the soil, as if to hide the sins they had committed. Nearly all of Teos Epeiros' inhabitants were destroyed. Fate allowed two remaining Dumianas, Proton and Eustatin, to survive. Desiring to keep their line alive, Eustatin approached Proton as he slept. But Proton, once awake, rejected Eustatin and banished her in rash anger to the south of Teos.",
        'Tragically, the first Children of Etain were deemed failures in her eyes. Though strong of body and mind, the Nordein possessed brutal, aggressive forms and were cast back into the soil to be forgotten. Determined to make her next creations with a clear vision, the Dumianas were sculpted in Her own likeness and imbued with the virtues of the Thelaiosis. At last, Teos was complete with life and all prospered in harmony, worshipping the Goddess. But in time, the fledgling world saw troubles the Goddess had never expected. She had given the Dumianas the gift of intelligence and knowledge, not knowing that such blessings would eventually foster ambitions, doubts, and growing disrespect and denial of her authority. The Dumianas rebelled and started a war amongst themselves that lasted for countless years. As the fighting waged on, the Goddess Etaine became depressed with her failed creation and weakened by her link to the bloodied world. Her beauty faded along with her power.',
        'In solitude, Eustatin bore their son, raising him in darkness, filling him with the fury and anguish she held against Proton. When she died, a young woman stepped forth from her cremation ashes to share a life with her son, now grown into adulthood. They became the ancestors of the Vail race. For Proton, his life remained haunted by the actions taken by the Dumianas toward the Goddess Etain. In his loneliness, he created a statue in the image of her in a tree. One day, the wooden figurine turned into a living woman infused with the blood of the Earth, and together with Proton founded the Elven race. The two races of Vail and Elves lived apart for hundreds of years, but as their realms expanded and they came into contact once more, the hatred and resentment of the past rose once again to the fore. The two races pushed into each others’ lands in a constant struggle with untold lives lost on both sides, but were ultimately stalemated.',
        'As for the Goddess Etain, her body vanished with her death, and her spirit remained divided and dormant. But as the ages passed, new energies filled the remnants of her split soul, gathering in power, until one night marked by an eclipse, the world shook in creation once more. The ground cracked wildly and monstrous storms wracked the skies. The Vail and Elves put a hold to their war in fear, for they now beheld two Goddesses never seen before. One of Light and one of Darkness.',
        'A second preternatural eclipse marked the entry of new life into Shaiya. From the oceans came the Humans, seeking new lands for their fast-growing race. The Humans forged a realm for themselves in their home of Teos, and found eager allies in the Elves under the watchful and benevolent eyes of the Goddess of Light. Thus the Alliance of Light was born. In that same eclipse, in the southern lands of the Vail, the ground cracked open and the Nordein that were once cast away emerged from the underworld with an evolved, stronger form- the Deatheaters. Arrogant, aggressive, and reckless at first, they waged war on all the races of Teos as vengeance for their confinement. When they found themselves on the verge of defeat at the hands of the Human-Elf Alliance, the Deatheaters were rescued by the Vail, who aspired to create a unified force against the Alliance of Light. Together the Vail and the Deatheaters founded the Union of Fury and worshipped the seductive and powerful Goddess of Darkness.',
        'During a massive battle in the Canyon of Greed where the Union of Fury was pushing back the Alliance of Light, a bright blue light was seen across the battlegrounds. From this massive wave of light came the Vueltas, a race of advanced metal. Little is known about these metal monsters, but one thing is certain: they are here to destroy the relics and all who follow the goddesses.  It is unknown at this point why these metal beasts appear to have such a hate for the goddesses, but a call to arms has been announced in preparation for war.  Members of the Alliance of Light and the Union of Fury must rid the land of this strange new race or their faction and goddess may fall.',
        "In the aftermath of the Vueltas' metallic onslaught and the ongoing conflict between the Alliance of Light and the Union of Fury, the land of Teos Epeiros stood on the brink of chaos. Both the Goddess of Light and the Goddess of Darkness watched over their respective realms as their followers fought to preserve their faith. But beneath the world's surface, deep in the ancient forests and mountains where the whispers of forgotten powers lingered, a new force began to stir - one that had long been silent, waiting for the right time to emerge. Far to the north and south of Shaiya, hidden in mist-shrouded lands, lay the sacred groves of the **Spirit Bear Clan**, an ancient race deeply connected to the natural elements and the primal forces of Teos. For centuries, they had kept to themselves, watching as the battles of mortals and gods raged across the continents, keeping their balance and strength within the wilderness.",
        'In the rugged lands of the Union of Fury, where the Vail and the Deatheaters fought against the might of the Alliance, the Dark Goddess sought new strength to turn the tide of war. Deep in meditation, she reached out to the spirit of Teos, seeking allies long forgotten by the outside world. In response, the Spirit Bear Clan emerged from the shadows of the southern forests. From this hidden lineage emerged the Druids of the Spirit Bear Clan, fierce fighters who wielded strength and ancient spiritual power. These warriors were shaped by a dual philosophy of power: they were masters of both brute force and agile martial prowess. Their bodies, hardened by nature, channeled the power of the earth through their two distinct combat styles. Armed with staves that delivered crushing blows and gauntlets that allowed them to strike quickly and lethally, the druids were unstoppable in close combat. The Fury embraced these new allies, recognizing the Spirit Bear  Druids as a formidable addition to their forces. With each level of experience gained, the druids’ physical power grew exponentially, gaining additional strength with each victory. As the **Spirit Bear Clan** of the Union of Fury, they took their place as defenders of the shadowlands, devoted to the goddess of vengeance and chaos.',
        'Meanwhile, in the north, within the true lands of the Alliance of Light, the **Spirit Bear Clan** revealed another facet of their ancient legacy. From the peaceful forests of their homeland, the **Monks of the Spirit Bear Clan** emerged, answering the call of the Goddess of Light. Though they shared the same lineage as their southern brethren, these apes followed a path of peace, balance, and harmony. Skilled martial artists, they also wielded staves and gauntlets in battle, but their connection to nature allowed them to strike with grace and precision, blending power with the fluidity of the forest’s movements. Known for their meditative practices and their deep understanding of the spiritual forces that governed Teos, the apes sought to bring balance and protection to the lands under their care. Like the Duids, the Druids gained unique strengths with each level they achieved, growing stronger as they grew in wisdom and combat prowess. They served the Spirit Bear Clan of the Alliance of Light, standing as protectors of their homeland and defenders of the faith, ever loyal to the Goddess of Light’s vision of order and peace.',
      ],
      currentIndex: 0,
      isFlipping: false,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    currentDescription() {
      return this.descriptions[this.currentIndex];
    },
    nextDescription() {
      const nextIndex = (this.currentIndex + 1) % this.descriptions.length;
      return this.descriptions[nextIndex];
    },
  },
  methods: {
    flipPage() {
      this.isFlipping = true;
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.isFlipping = false;
      }, 2000); // Tempo de animação de 2s
    },
  },
};
</script>

<style scoped>
.class-book-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-book-row {
  display: flex;
  align-items: center; /* Alinha verticalmente no centro */
  justify-content: space-between; /* Espaça os itens igualmente */
}

.image-row {
  margin: 0 10px; /* Espaço entre a imagem e o livro */
}

.book {
  display: flex;
  flex-direction: column; /* Permite que as páginas do livro se empilhem verticalmente */
}

.book-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
}

.light-img {
  width: 200px;
  height: auto;
}
.class-home-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.book {
  position: relative;
  width: 820px;
  height: 520px;
  /* width: 60%;
  height: 40%; */
  perspective: 2000px; /* Perspectiva para o efeito 3D */
}

.page {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #fafafa;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
  transform-origin: left;
}

.page.left {
  left: 0;
}

.page.right {
  right: 0;
  transform-origin: left;
  transform: rotateY(0deg);
  z-index: 1;
}

.page.flip {
  animation: flip 2s forwards;
  z-index: 2;
}

.resized-img {
  width: 200px;
  height: auto;
}
/* Animação de virar página */
@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-180deg);
  }
}

/* Define o estilo da parte "de trás" da página que está virando */
.content.back {
  position: absolute;
  top: 0;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  width: 100%;
  height: 100%;
}

/* Define o estilo da frente da página (atual) */
.content.front {
  position: relative;
  backface-visibility: hidden;
}

.content {
  padding: 20px;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.description {
  font-size: 18px;
  color: #333;
  text-align: center;
}

.flip-button {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.test {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  text-align: justify;
  /* width: 70%; */
  margin: 0 auto;
  /* padding: 16px; */
}
.arrow-btn {
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: solid 2px currentColor;
  clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
}

.align-image {
  width: 600px; /* Ajuste o valor conforme desejado */
  height: auto; /* Mantém a proporção */
}

.small-image {
  width: 550px; /* Ajuste o valor conforme necessário */
  height: auto -1px; /* Mantém a proporção */
}
</style>
