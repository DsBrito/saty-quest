<template>
  <div class="container">
    <div class="q-pa-md row q-gutter-md flex items-center justify-center">
      <div>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">
              Character Names Exchange
            </div>
          </q-card-section>

          <q-card-actions>
            <q-space />

            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded[0] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="toggleExpand(0)"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded[0]">
              <q-separator />
              <q-card-section class="text-subtitle2">
                <q-img
                  src="./../../../../../assets/image/eg/guide/site/services/service1.png"
                >
                </q-img>
                <ul class="notes">
                  <li>
                    <strong>Description:</strong> service will allow you to
                    exchange or switch 2 names within your own account without
                    the need of in game name cards. Only names that belong to
                    the same account can be exchanged.
                  </li>
                </ul>
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">
              Kill Redistribution Service
            </div>
          </q-card-section>

          <q-card-actions>
            <q-space />

            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded[1] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="toggleExpand(1)"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded[1]">
              <q-separator />
              <q-card-section class="text-subtitle2">
                <q-img
                  src="./../../../../../assets/image/eg/guide/site/services/service1.png"
                >
                </q-img>
                <ul class="notes">
                  <li>
                    <strong>Description:</strong>
                    This service will allow you to redistribute your stats
                    points in the way you like. After completing the process,
                    all your stats will be reset and you will have to claim
                    again your rank reward points. Make sure your game is closed
                    before starting this service.
                  </li>
                </ul>
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
      <div>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">
              Name Availability Check
            </div>
          </q-card-section>

          <q-card-actions>
            <q-space />

            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded[2] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="toggleExpand(2)"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded[2]">
              <q-separator />
              <q-card-section class="text-subtitle2">
                <q-img
                  src="./../../../../../assets/image/eg/guide/site/services/service1.png"
                >
                </q-img>
                <ul class="notes">
                  <li>
                    <strong>Description:</strong>
                    This service will allow you to check if a character name can
                    be taken or not, by also displaying the amount of days you
                    have to wait for it to be usable.
                  </li>
                </ul>
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const expanded = ref([false, false, false, false]);

// Função para alternar o estado expandido de cada combo
const toggleExpand = (index: number) => {
  expanded.value[index] = !expanded.value[index];
};
</script>

<style scoped>
.my-card {
  width: 100%;
  width: 400px;
}

.notes {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  /* color: #555; */
}

/* .notes li {
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
} */
</style>
