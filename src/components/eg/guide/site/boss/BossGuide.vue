<template>
  <div class="container">
    <h1 class="title">Hunt Boss</h1>
    <q-img
      src="../../../../../assets/image/eg/guide/site/boss/boss-time.png"
      style="width: 250px"
    >
    </q-img>
    <span>If UP, call our friends to kill! </span>
    <h6>
      Porque fazer bosses? Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
      <ul class="notes">
        <strong>Actives Boss???:</strong>
        <li>>Boss 15??.</li>
        <li>Boss 30??.</li>
        <li>Boss 60??.</li>
        <li>Boss 80??.</li>
      </ul>
    </h6>
    <h6>
      Kill log, oque é? Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </h6>
    <q-img
      src="../../../../../assets/image/eg/guide/site/boss/boss-kill-log.png"
      style="width: 600px"
    >
    </q-img>

    <ul class="notes">
      <strong>Notes:</strong>
      <li>>Boss 64ks.</li>
      <li>60 boss.</li>
      <li>nobility boss.</li>
      <li>Boss 80??.</li>
    </ul>
    <span>If UP, call our friends to kill! </span>
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

.text-box {
  width: 650px;
  height: 520px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-family: Arial, sans-serif;
  font-size: 1em;
  resize: none;
  background-color: #f9f9f9;
}

.copy-button {
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
}

.copy-button:hover {
  background-color: #e0356e;
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

/* .card {
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
} */
</style>
