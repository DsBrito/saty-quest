<template>
  <div class="container">
    <h1 class="title">Costumes</h1>
    <q-img
      src="../../../../../assets/image/eg/guide/site/costumes/costumer.png"
      style="width: 250px"
    >
    </q-img>
    <span>Helpful friend for your journey who will collect your rewards! </span>

    <h6>
      3 Tipos? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </h6>

    <div class="row justify-center q-gutter-lg text-center">
      <div class="img-map">
        <span class="text-center">[World Club]</span>

        <q-img
          src="../../../../../assets/image/eg/guide/site/costumes/wordclub-costume.png"
        />
      </div>
      <div class="img-map">
        <span class="text-center">[General]</span>

        <q-img
          src="../../../../../assets/image/eg/guide/site/costumes/costume-ss.png"
        />
      </div>

      <div class="img-map">
        <span class="text-center">[Event]</span>

        <q-img
          src="../../../../../assets/image/eg/guide/site/costumes/event-costume.png"
        />
      </div>
    </div>

    <h6>
      Site? Perm e Event Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </h6>

    <q-img
      class="img-map"
      src="../../../../../assets/image/eg/guide/site/costumes/event-costume.png"
    ></q-img>
    <h6>
      Game? Normal e altar Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </h6>
    <div class="row justify-center q-gutter-lg text-center">
      <div class="img-map">
        <span class="text-center">[Boss]</span>

        <q-img
          class="img-map"
          src="../../../../../assets/image/eg/guide/site/costumes/event-costume.png"
        ></q-img>
      </div>
      <div class="img-map">
        <span class="text-center">[Quest Events]</span>

        <q-img
          class="img-map"
          src="../../../../../assets/image/eg/guide/site/costumes/event-costume.png"
        ></q-img>
      </div>
    </div>

    <h6>
      Print usando?? Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </h6>
    <div>
      <q-img
        src="../../../../../assets/image/eg/guide/site/costumes/event-costume.png"
        style="width: 250px"
      >
      </q-img>
    </div>
    <span>FIXME: Add a real pet using image </span>

    <ul class="notes">
      <strong>Notes:</strong>
      <li>Cuidados ao comprar do site??</li>
      <li>Cuidados ao comprar de jogadores??</li>

      <li>Cuidado com prazos de utilidade??</li>
      <li>Vá caçar os bosses e tente a sua sorte!</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 80%;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
}

.title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.notes {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  color: #555;
}

.notes li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

.notes li:before {
  content: '•';
  position: absolute;
  left: 0;
  color: #ff4081;
  font-size: 1.2em;
}
</style>
