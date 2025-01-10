<template>
  <div class="container">
    <h1 class="title">Get More Coins (APs)</h1>
    <q-img
      src="../../../../../assets/image/eg/guide/site/aps/check-ap-shop.png"
      style="width: 250px"
    >
    </q-img>
    <h6>
      Explicar oque é APs, pra que é usado, como se consegue atráves do jogo,
      porque é interessante comprar
    </h6>

    <q-img
      src="../../../../../assets/image/eg/guide/site/aps/first-time-spender.jpg"
      style="width: 700px"
    >
    </q-img>

    <FirstDonation></FirstDonation>
    <h6>
      Explicar oque é o tornad, pra que é usado, como ter um cartão tornado ..
      etc.., porque é interessante comprar
    </h6>
    <!-- <div class="q-pa-md row q-gutter-md flex items-center justify-center"> -->

    <div
      class="itens-wrapper q-pa-md row q-gutter-md flex items-center justify-center"
    >
      <div class="second-row">
        <div class="first-column">
          <div>
            <q-img
              src="../../../../../assets/image/eg/guide/site/aps/tornado-card-logo.png"
              style="width: 250px"
            >
            </q-img>
          </div>
        </div>

        <div class="second-column">
          <div>
            <q-img
              src="../../../../../assets/image/eg/guide/site/aps/tornado-card.png"
              style="width: 500px"
            >
            </q-img>
          </div>

          <div>
            <q-img
              src="../../../../../assets/image/eg/guide/site/aps/tornado-card.png"
              style="width: 500px"
            >
            </q-img>
          </div>
        </div>
      </div>
    </div>

    <ul class="notes">
      <strong
        >To donate in our server you will need to have a TornadoCard Number, and
        to get one just follow these simple steps:</strong
      >
      <li>
        Open the following address in your browser: https://www.tornadocard.com
      </li>
      <li>Create a new account (if you still haven't) and log in.</li>
      <li>
        Done! Now you only need to buy your TornadoCard and use in our system!
      </li>
    </ul>

    <h6>These are the current values and rewards:</h6>
    <q-img
      src="../../../../../assets/image/eg/guide/site/aps/coins-rewards.png"
      style="width: 100%"
    ></q-img>
    <span>Have fun and make @UZC Rich!! lmao</span>
    <q-avatar>
      <img
        src="../../../../../assets/image/eg/guide/site/aps/uzc.png"
        alt="Filter Icon"
      />
    </q-avatar>
  </div>
</template>

<script setup lang="ts">
import FirstDonation from './FirstDonation.vue';
</script>

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

.q-table {
  max-width: 800px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.reward-table .q-tr {
  border-bottom: 1px solid #ddd;
}

.reward-table .q-td {
  padding: 10px 15px;
}

.reward-table .q-th {
  background-color: #f5f5f5;
  text-align: center;
  color: #333;
  font-weight: bold;
  padding: 10px 15px;
}

.card {
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.itens-wrapper {
  display: grid;
  gap: 20px;
}

.second-row {
  display: flex;
  gap: 20px;
}

.second-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
