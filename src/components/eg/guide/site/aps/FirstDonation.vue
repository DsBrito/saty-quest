<template>
  <div class="container">
    <h6 class="text-center">First Donation Rewards</h6>

    <div class="q-pa-md row q-gutter-md flex items-center justify-center">
      <div>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">Pets</div>
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
                Get a random pet that will follow you for 30 days on your
                journey through the world of Shaiya. Does not give stat-points.
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">Costumes</div>
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
                Get a random costume that makes you look like something else for
                30 days.
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
      <div>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">Essentials</div>
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
                <ul class="notes">
                  <li>
                    7d Continuous Res Rune - On death, you are resurrected with
                    100% HP, SP, MP for 7 days.
                  </li>
                  <li>
                    High EXP Stones Lv2 (1 Hr) - Gives x5 more EXP for 1 hour.
                    Leveling has never been easier!
                  </li>
                  <li>
                    30d Prevent EXP Drop - Prevents your character from loosing
                    EXP should he die. this makes for a perfect combo with the
                    XP Stone!
                  </li>
                  <li>
                    30d Increase Gold Drop - You receive double the amount of
                    gold for each monster you kill for 30 days. This is your
                    chance to get rich!
                  </li>
                  <li>
                    30d Double Warehouse - This item double the amount of slots
                    you can access in your warehouse. Safety for all your
                    riches!
                  </li>
                </ul>
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">Consumables</div>
          </q-card-section>

          <q-card-actions>
            <q-space />

            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded[3] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="toggleExpand(3)"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded[3]">
              <q-separator />
              <q-card-section class="text-subtitle2">
                <ul class="notes">
                  <li>
                    20 Teleportation Stones - These stones allow you to save
                    teleportation-points and port yourself to them from anywhere
                    in the world!
                  </li>
                  <li>
                    Stat Reset Stone - Allows you to reset all your stat-points,
                    in case you are not happy with their distribution.
                  </li>
                  <li>
                    Skill Reset Stone - This stone resets all your skill-points
                    and re-allocate them. Some skills are useful for PVE but not
                    for PVP and you can not learn everything - wind back the
                    clock and start over!
                  </li>
                  <li>
                    KO Nostrums - Increases your chance to land critical hits
                    for 2 hours. The buff disappears when you die.
                  </li>
                  <li>
                    Sprint Nostrums - Increases your movement speed for 1 hour.
                    The buff disappears when you die.
                  </li>
                </ul>
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">Upgrading</div>
          </q-card-section>

          <q-card-actions>
            <q-space />

            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded[4] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="toggleExpand(4)"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded[4]">
              <q-separator />
              <q-card-section class="text-subtitle2">
                <ul class="notes">
                  <li>
                    Recreation Runes - You can change the bonus-stats of your
                    equipment randomly to reach maximum effectiveness.
                  </li>
                  <li>
                    Assault Lapisas - Increases the attack power of your weapon.
                  </li>
                  <li>
                    Protector's Lapisas - You can enchant your armor with this
                    lapisa. Enchanted Armor lowers the damage you take.
                  </li>
                  <li>
                    Perfect Linking Hammers - Increases the chance to
                    successfully link a lapis to your equipment.
                  </li>
                  <li>
                    Lapis Lv7-Lv9 Bags - Open this box to get a random lapis
                    from level 7, 8 or 9.
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
const expanded = ref([false, false, false, false, false]);

// Função para alternar o estado expandido de cada combo
const toggleExpand = (index: number) => {
  expanded.value[index] = !expanded.value[index];
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 300px;
}

.notes {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  /* color: #555; */
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
</style>
