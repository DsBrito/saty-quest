<template>
  <div class="container">
    <div class="q-pa-md row q-gutter-md justify-center">
      <!-- Loop para criar cards dos eventos -->
      <div v-for="event in EVENTS" :key="event.id">
        <q-card class="my-card" flat bordered>
          <q-card-actions>
            <q-space />
            <q-card-section>
              <div class="text-h5 q-mt-sm q-mb-xs text-center text-primary">
                {{ event.title }}
              </div>
            </q-card-section>
            <q-space />
            <q-btn
              color="primary"
              round
              flat
              dense
              :icon="
                expanded === event.id
                  ? 'keyboard_arrow_up'
                  : 'keyboard_arrow_down'
              "
              @click="toggleExpand(event.id)"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded === event.id" class="q-pa-md">
              <div
                v-for="subEvent in event.events"
                :key="subEvent.id"
                class="event-card q-mb-md"
              >
                <q-card-section>
                  <div class="text-subtitle1">
                    <strong>Title:</strong>
                    {{ subEvent.title || 'Unknown Event' }}
                  </div>
                  <div class="text-caption text-grey">
                    <strong>Time:</strong>
                    {{ subEvent.time || 'Unknown Time' }}
                  </div>
                  <div class="text-body2 q-mt-sm">
                    <strong>Description:</strong>
                    {{ subEvent.description || 'No description available.' }}
                  </div>
                </q-card-section>
              </div>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { EVENTS } from '../../../../../model/guide/site/events-calendar/event';

// Estado para expandir/colapsar eventos
const expanded = ref<number | null>(null);

const toggleExpand = (id: number) => {
  expanded.value = expanded.value === id ? null : id;
};
</script>

<style scoped>
.my-card {
  width: 100%;
  width: 350px;
  transition: all 0.3s ease-in-out;
}

.text-primary {
  color: #1976d2;
}

.event-card {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
