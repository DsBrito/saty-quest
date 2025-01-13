<template>
  <div class="container">
    <h1 class="title">Services</h1>

    <q-img
      src="../../../../../assets/image/eg/guide/site/services/services.png"
      style="width: 250px"
    >
    </q-img>
    <h6>
      Oque é ?? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </h6>

    <ServicesInfo></ServicesInfo>
    <p>Atenção ???</p>
  </div>
</template>

<script setup lang="ts">
import ServicesInfo from './ServicesInfo.vue';
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
