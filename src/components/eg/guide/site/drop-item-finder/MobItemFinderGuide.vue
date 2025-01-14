<template>
  <div class="container">
    <h1 class="title">Drop List / Item Finder</h1>
    <q-img
      src="../../../../../assets/image/eg/guide/site/droplist-itemfind/droplist-itemfind.png"
      style="width: 250px"
    >
    </q-img>
    <p>Find out who drops what!</p>
    <h6>
      Explicar oque é APs, pra que é usado, como se consegue atráves do jogo,
      porque é interessante comprar As you may know, Shaiya items are divided in
      Mob Drops, Map Drops and Container Drops. In this section you will find
      Map Drops and Mob Drops.
    </h6>

    <div class="q-gutter-lg">
      <q-img
        src="../../../../../assets/image/eg/guide/site/droplist-itemfind/image.png"
        style="width: 500px"
      >
      </q-img>

      <q-img
        src="../../../../../assets/image/eg/guide/site/droplist-itemfind/image.png"
        style="width: 500px"
      >
      </q-img>
      <p class="flex justify-center">
        If you know of an item that should be dropping but you can't find it,
        let us know at discord and we will see to it.
      </p>
    </div>

    <h6>
      item ?? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Voting gives you more benefits! If you keep on
      voting everyday you will unlock new rewards.
    </h6>
    <q-img
      src="../../../../../assets/image/eg/guide/site/droplist-itemfind/item-finder.png"
      style="width: 500px"
    >
    </q-img>
    <h6>
      drop ?? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Voting gives you more benefits! If you keep on
      voting everyday you will unlock new rewards.
    </h6>
    <q-img
      src="../../../../../assets/image/eg/guide/site/droplist-itemfind/mob-finder.png"
      style="width: 500px"
    >
    </q-img>

    <h6>
      drop ?? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Voting gives you more benefits! If you keep on
      voting everyday you will unlock new rewards.
    </h6>
    <q-avatar>
      <img
        src="../../../../../assets/image/eg/guide/site/aps/uzc.png"
        alt="Filter Icon"
      />
    </q-avatar>

    <a
      href="https://docs.google.com/spreadsheets/d/1pQmmyPZnM4UTR-YqvArOhgApzJ4U_JNBkN4b4_LnbzQ/edit?gid=94625457#gid=94625457"
    >
      EG Shaiya Map Drop List</a
    >
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
