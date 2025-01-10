<template>
  <div class="container">
    <h1 class="title">Recruit a Friend</h1>
    <q-img
      src="../../../../../assets/image/eg/guide/site/recrut-a-friend/recrut-a-friend.png"
      style="width: 250px"
    >
    </q-img>
    <span>Receive useful rewards for your help! </span>
    <h6>
      By inviting your friends to the game, you will be rewarded with amazing
      prizes! All you have to do is fill the form, and your friend will get an
      email with a link in it.
    </h6>

    <ul class="notes">
      <strong>Notes:</strong>
      <li>
        Remember, once your friend has created an account using that link, both
        accounts will be bound.
      </li>
      <li>
        Your friend needs to reach the System Requirements for you to get the
        special rewards. Once they have, you can claim your prize here on the
        website!
      </li>
      <li>
        You have an unlimited number of invites, but after the 5th invite, you
        will only be able to receive your reward if your friend makes a donation
        worth 850 AP.
      </li>
    </ul>

    <h6 class="title">Requirements for the rewards</h6>

    <ul class="notes">
      <li>Your friend must reach level 30 with at least one character.</li>
      <li>
        Your friend must have been playing for 20 hours or more. (online time)
      </li>
    </ul>

    <h1 class="title">Rewards</h1>
    <div>
      <q-card class="card">
        <q-table
          :rows="rewards"
          :columns="columns"
          row-key="id"
          flat
          bordered
          class="reward-table"
          :pagination="{ rowsPerPage: 0 }"
        />
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const columns = [
  {
    name: 'invites',
    required: true,
    label: 'Invites',
    align: 'center',
    field: 'invites',
  },
  { name: 'rewards', label: 'Rewards', align: 'left', field: 'rewards' },
];

const rewards = ref([
  {
    id: 1,
    invites: '1 Friend(s) Invited',
    rewards: '1 Mini Mystery Box, 1 Love TNT, 500 Coins',
  },
  {
    id: 2,
    invites: '2 Friend(s) Invited',
    rewards: '1 Mini Mystery Box, 1 Love TNT, 500 Coins',
  },
  {
    id: 3,
    invites: '3 Friend(s) Invited',
    rewards: '1 Mini Mystery Box, 1 Love TNT, 500 Coins',
  },
  {
    id: 4,
    invites: '4 Friend(s) Invited',
    rewards: '1 Mini Mystery Box, 1 Love TNT, 500 Coins',
  },
  {
    id: 5,
    invites: '5 Friend(s) Invited',
    rewards: '1 Mini Mystery Box, 1 Love TNT, 500 Coins',
  },
  {
    id: 6,
    invites: '6 Friend(s) Invited',
    rewards: '1 Mini Mystery Box, 1 Love TNT, 500 Coins',
  },
]);
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
</style>
