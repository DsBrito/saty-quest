<template>
  <h2 class="table-title">Combo</h2>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax2.jpg" />

        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <!-- <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax2.jpg" /> -->
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
