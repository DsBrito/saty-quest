<template>
  <main class="container">
    <h1 class="title">EG Shaiya EP8+ Server Information</h1>

    <q-img
      src="../../../../../assets/image/eg/guide/site/new-shop-items/new-shop-items-menu.png"
      class="server-image"
    />

    <section class="intro" aria-labelledby="intro-title">
      <h2 id="intro-title" class="subtitle">About EG Shaiya</h2>
      <p class="text">
        EG Shaiya is an exclusive and fully updated
        <strong>Episode 8</strong> Shaiya Server. We have the tools to keep
        updating the server and making changes based on player suggestions.
      </p>
    </section>

    <div class="features-updates-container">
      <section class="features" aria-labelledby="features-title">
        <h2 id="features-title" class="subtitle">Server Features</h2>
        <q-list class="notes">
          <q-item v-for="feature in features" :key="feature">
            <q-icon name="star" color="pink" />
            <q-item-section>{{ feature }}</q-item-section>
          </q-item>
        </q-list>
      </section>

      <section class="updates" aria-labelledby="updates-title">
        <h2 id="updates-title" class="subtitle">Recent Updates and Fixes</h2>
        <p>
          Here are some of the things we've been working on so far, but there’s
          much more to discover!
        </p>
        <q-list class="notes">
          <q-item v-for="update in updates" :key="update">
            <q-icon name="check_circle" color="green" />
            <q-item-section>{{ update }}</q-item-section>
          </q-item>
        </q-list>
      </section>
    </div>

    <section class="discord" aria-labelledby="discord-title">
      <h2 id="discord-title" class="subtitle">Join Our Discord</h2>
      <p>
        Feel free to join our <strong>Discord</strong> server and poke any of
        our staff members if you have any more questions.
      </p>
    </section>

    <section class="footer">
      <p class="footer-text">
        We keep updating the server every day, so there might be some new things
        to discover!
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const features = ref([
  'First stable Episode 8+ private server',
  'XP Rate x50 (Boosted on weekends)',
  'Balanced PvP/PvE content',
  'Free rewards via Vote, Recruit, Refer, etc.',
  'All items accessible via drop, quests, and events',
  'Dedicated staff team',
]);

const updates = ref([
  'Several fixes to prevent exploits/cheats',
  'Bug fixes including damage exploit and GRB reset',
  'Multiclient block',
  'NPCs in Auction House selling basic supplies',
  'Lower level PvP gear drops in specific zones',
  'Boss summon stones added for Guild Ranking Battle rewards',
]);
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f7f9;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.subtitle {
  font-size: 1.8rem;
  margin-top: 20px;
  margin-bottom: 10px;
}

.text {
  font-size: 1.1rem;
  line-height: 1.6;
}

.q-list {
  padding: 0;
}

.q-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.q-icon {
  margin-right: 10px;
}

.server-image {
  width: 250px;
  display: block;
  margin: 20px auto;
  border-radius: 8px;
}

.footer-text {
  font-size: 1.2rem;
  text-align: center;
}

.features-updates-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.features,
.updates {
  flex: 1;
}
</style>
