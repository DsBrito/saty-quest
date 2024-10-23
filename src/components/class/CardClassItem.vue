<template>
  <q-page class="test">
    <!-- <q-page class="q-pa-md test"> -->
    <div class="row justify-center">
      <img class="character-icon" :src="character.icon" alt="Character Icon" />
      <h3>{{ character.class }}</h3>
    </div>

    <!-- <img src="../../assets/image/icons/page_breakg.png" /> -->

    <h5><strong> HISTORY</strong></h5>
    <!-- {{ character }} -->
    {{ character.history }}
    <!-- <img src="../../assets/image/icons/page_breakg.png" /> -->
    <h5><strong> DESCRIPTION</strong></h5>
    <!-- {{ character.description }} -->
    {{
      Object.entries(character.description).find(
        ([key]) => key === 'description'
      )[1]
    }}

    <!-- {{
      Object.fromEntries(
        Object.entries(character.description).find(
          ([key]) => key === 'description'
        )
      )
    }} -->
    <!-- <q-card v-if="character"> -->
    <!-- class="q-mb-md"> -->

    <!--CLASSE-->
    <!-- <img src="character.classUrl" /> -->
    <!-- SKILLS-->

    <!-- <q-card-section>
        <div class="row items-center">
          <div class="col">
            <h4>{{ character.class }}</h4>
            <p>{{ character.type }}</p>
          </div>
          <div class="col text-right">
            <q-badge color="primary" label="{{ character.role }}" />
          </div>
        </div>
      </q-card-section> -->

    <!-- <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>{{ character.description }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label
                ><strong>História:</strong>
                {{ character.history }}</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section> -->
    <!-- </q-card> -->
  </q-page>
  <!--CLASSE-->
  <!-- <img src="../../assets/image/icons/page_breakg.png" /> -->
</template>

<script>
export default {
  components: {},
  name: 'CardClassItem',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.q-card {
  border-radius: 10px;
  box-shadow: 0px 0px rgba(0, 0, 0, 0);
}
.q-card-section h4 {
  font-weight: bold;
  margin-bottom: 5px;
}
.q-card-section p {
  color: #666;
}
.test {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  text-align: justify;
  width: 70%;
  margin: 0 auto;
  padding: 16px;
}
.resized-img {
  width: 200px;
  height: auto;
}
.character-icon {
  width: 100px; /* Defina a largura desejada */
  height: auto; /* Manterá a proporção correta */
  object-fit: contain; /* Garante que a imagem se ajuste sem distorção */
}
</style>
