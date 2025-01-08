<template>
  <div class="container">
    <h1 class="title">Recruit a Friend</h1>
    <q-img
      src="../../../../../assets/image/eg/guide/site/refer-our-server/share_option.png"
      style="width: 250px"
    >
    </q-img>
    <span>Share your opinion and get rewards! </span>
    <h6>
      Porque invitar? Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
      <ul class="notes">
        <strong
          >To share in our server you will need to have... just follow these
          simple steps:</strong
        >
        <li>
          You must copy the text in the box below and paste it in your favourite
          forum, blog or website.
        </li>
        <li>
          Once done, come back here and post the full link to the site
          containing the message and click the check button.
        </li>
        <li>
          Our system will check your link and search for the message. If the
          message is found, you will 150 AP as reward!
        </li>
      </ul>
    </h6>

    <div class="card">
      <textarea id="copy-text" class="text-box" readonly>

        Hello my friends!

          I am playing Shaiya at the first Shaiya EP8+ Private Server!
          I want to invite you all to join me in this adventure starting at
          EG Shaiya EP8+ - Free To Play Shaiya Episode 8+ Private Server - EterniaGames.com.

          Information:
            - The First and Only Private Server with Episode 8+
            - XP Rate x 50 (double on weekends)
            - Services that will give you Free Rewards (Vote, Recruit, Refer, Etc)
            - PvP, Grinding, Farming, Boss Hunting and much more!

          If you would like to join me, please click on the following links:
            EG Shaiya EP8+ Website: https://shaiya.eterniagames.com/register
            EterniaGames.com: https://eterniagames.com

          Note:
          This message was provided by 'EterniaGames.com' to be used in our advertising system.
          We take no responsibility for the misuse of this system.

      </textarea>
      <button @click="copyToClipboard" class="copy-button">Copy Text</button>
    </div>

    <ul class="notes">
      <strong>Notes:</strong>
      <li>
        Make sure the message and its links are readable, otherwise you won't
        get your rewards.
      </li>
      <li>
        If you get an error message saying "url already used", do not post on
        that site anymore.
      </li>
      <li>
        Misuse of this service could derive in your account being blocked.
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
function copyToClipboard() {
  const text = document.getElementById('copy-text');
  text?.select();
  document.execCommand('copy');
  alert('Texto copiado para a área de transferência!');
}
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
