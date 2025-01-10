<template>
  <div class="container">
    <h6 class="text-center">Rules</h6>

    <div class="q-pa-md row q-gutter-md flex items-center justify-center">
      <div>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">Social Rules</div>
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
                <ul class="notes">
                  <li>
                    <strong>1. Impersonating Staff members</strong>
                    Attempting to pass by as a member of our staff for any
                    reasons is against our rules and might get your account
                    suspended.
                  </li>
                  <li>
                    <strong>2. Inappropriate Language</strong>
                    Insults and offensive language are not allowed in our server
                    or any of its services.
                  </li>
                  <li>
                    <strong>3. Discrimination</strong>
                    We do not tolerate racism or xenophobic attitudes of any
                    kind in our server or any of our services. Your account can
                    go from temporal mutes to permanent mutes or even suspension
                    time.
                  </li>
                  <li>
                    <strong>4. Behavior with Staff Members</strong>
                    While communicating with our staff members, you must be
                    respectful and considerate. We are here to give a service
                    and help you out, so be polite. If a Staff Member is in-game
                    attempting to conduct events or communicate with other
                    players, interrupting or causing disturbances will be
                    considered as breaking this rule. Spreading rumors about
                    staff members is also considered as breaking this rule: if a
                    player has proof that certain GM/GS is abusing their power,
                    please let us know via Discord tickets or private messaging.
                  </li>
                  <li>
                    <strong>5. Behavior with rest of the players</strong>
                    Spreading negative rumors about players, accusing them,
                    denouncing them or harassing them, is not allowed in our
                    server or any of its services. If you have any complaints
                    about a player, take Screenshots and report it via discord
                    tickets or private messages.
                  </li>
                  <li>
                    <strong>6. Publicity</strong>
                    Publicity is completely forbidden in our server or any of
                    its services. This includes publicizing other servers,
                    services or products that are not related to EterniaGames
                    Shaiya. Spreading hack links or key logging websites. Ban
                    may be permanent in this case, depending on offense.
                  </li>
                  <li>
                    <strong>7. Language Usage</strong>
                    We are an International server. This means you are free to
                    speak any language but you are obligated to use English in:
                    <ul>
                      <li>
                        Game: Trade chat, Party/Raid chat and Map chat.
                        (exclusions: private messages, personal party, normal
                        chat and languages chat)
                      </li>
                      <li>
                        Discord: everywhere except off-topic or language
                        channels.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>8. Character names / User names</strong>
                    When naming your character or user, the following rules will
                    result in your name changed to a generic name:
                    <ul>
                      <li>
                        The use of acronyms to refer to staff positions such as
                        GM, GS. Example ImaGM, IKillGS, etc. or [GM]xx, [GS]xx,
                        etc.
                      </li>
                      <li>
                        The use of inappropriate words in any language, such as
                        insults, discriminating slang or pseudonyms. Examples:
                        IFkU, USheetBoi, etc.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>9. Explicit Content</strong>
                    This is a PG Server so any adult or explicit content (links,
                    images, messages) in our server or any of its services might
                    result in an instant account suspension.
                  </li>
                </ul>
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">
              Game Specific Rules
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
                <ul class="notes">
                  <li>
                    <strong>1. Hacks</strong>
                    This is considered one of the worst offense. In severe
                    cases, we will block access to the whole IP net of the
                    offender.
                  </li>
                  <li>
                    <strong>2. Buying or selling items/accounts</strong>
                    The following are not allowed: buy/sell/trade items/accounts
                    for real money, for items/accounts from other servers or
                    from anything that is not related to EG Shaiya EP8+
                    products/services. This also includes trading or selling of
                    accounts for EG Shaiya EP8+ gold or ap.
                  </li>
                  <li>
                    <strong>3. Fraud/Scam</strong>
                    Always be sure to screenshot all your deals and trades with
                    people you don't know or trust. Staff is no responsible for
                    the security of your account or your transactions, meaning
                    that there is no guarantee that you will get your items
                    back. We will check logs and track the items to see if they
                    are recuperable. In any cases, if enough evidence is
                    presented, the scammer will surely get the account
                    permanently suspended.
                  </li>
                  <li>
                    <strong>4. Bots and Macros</strong>
                    Any use of automation software, either bots or macros or
                    third party software of any kind is totally forbidden.
                    Violation of this rule may imply the removing of the farmed
                    gold/items and the appropriate punishments. Any type of
                    “afk-farming” will also be judged under this rule.
                  </li>
                  <li>
                    <strong>5. Bug Abuse</strong>
                    Any bug abuse is forbidden. Finding any kind of bug must be
                    reported immediately. Any advantage obtained from bug abuse
                    might end in item removal and the appropriate punishments.
                  </li>
                  <li>
                    <strong>6. Stat Padding</strong>
                    Stat padding is defined as killing characters who willingly
                    and consistently allow themselves to be killed with the
                    objective of helping other players increase their kill
                    count. Any user caught stat padding (both killing and being
                    killed) will receive a ban and have all their kills wiped
                    from all characters. Additional action may be taken for
                    repeat offenders and/or a permanent ban can be issued to the
                    player.
                  </li>
                  <li>
                    <strong
                      >7. Boss Killing - Boss Raid - Calling Bosses</strong
                    >
                    Bosses must be called by using our /call command before
                    being able to be attacked or killed. Going for a boss is
                    considered a group action, and you must always have your
                    Raid open so everyone can join. Loot mode must remain random
                    order at all times.
                    <ul>
                      <li>
                        It's against our rules to kick someone from your party
                        while doing a boss unless that member is not helping
                        take the boss down, is AFK, or is in another map.
                      </li>
                      <li>
                        You can only close or kick joining members if the boss
                        HP is below 30%.
                      </li>
                      <li>
                        If two or more raids are going for the same boss, the
                        smaller one will have to join the bigger one so everyone
                        can participate. You cannot have multiple raids on the
                        same boss.
                      </li>
                      <li>
                        In the case of a smaller raid already doing a boss and
                        HP is below 75%, the bigger raid will have to join this
                        one or leave the boss zone.
                      </li>
                      <li>
                        Mobs or chests that spawn when a boss dies belong to the
                        boss itself and the raid that killed it: leaving the
                        raid to kill these mobs will result in a punishment.
                      </li>
                      <li>
                        If PvP happens when doing a boss, PvP Raid rules will
                        also apply.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>8. PvP Raids - Kicking Members</strong>
                    All PvP must be done with an open raid. You are not allowed
                    to have multiple raids/parties in the same PvP zone until
                    the main raid is full.
                    <ul>
                      <li>
                        Players can be kicked if they are being disruptive to
                        the game or chat, causing drama, insulting, not
                        following basic leader commands, being AFK, or in other
                        maps.
                      </li>
                      <li>
                        Players can be kicked if they have enchant level below
                        16 (as this is so easy to get, you are just being lazy).
                      </li>
                      <li>
                        Players can be kicked if they have gear 5 levels below
                        the required by the PvP tier (15, 30, 60, 80).
                      </li>
                      <li>
                        Before kicking, the player needs to be warned by using
                        raid chat to give that player a chance to change their
                        attitude.
                      </li>
                      <li>
                        If two or more raids from the same faction meet, the
                        smaller one will have to join the bigger one so everyone
                        can participate.
                      </li>
                      <li>
                        Once the main raid is full, you are allowed to create a
                        new one until that one is full, and so on.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>9. Kill stealing mobs</strong>
                    Kill-stealing (normal monsters) itself is not considered an
                    offense, but repeated steals can be seen as harassment and
                    will be punished accordingly.
                  </li>
                  <li>
                    <strong>10. Character Names / Guild Names</strong>
                    When naming your character or guild, the following rules
                    will result in your name being changed:
                    <ul>
                      <li>
                        The use of acronyms to refer to staff positions such as
                        GM, GS. Example: ImaGM, IKillGS, etc.
                      </li>
                      <li>
                        The use of inappropriate words in any language, such as
                        insults, discriminative slangs, or pseudonyms. Examples:
                        IFkU, USheetBoi, etc.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>11. Animation cutting</strong>
                    Any form of animation cutting or canceling like skillcut,
                    runecut, mountcut, anythingcut is not allowed in our server
                    and will be treated like the use of exploits/hacks.
                  </li>
                  <li>
                    <strong>12. Spawn killing - Safe Zones</strong>
                    Spawn killing and entering the opposite faction's
                    base/castle/stronghold/safe zone is not allowed and will
                    result in an instant jail. The opposing faction's base/safe
                    zone is defined by anything behind the most forward
                    (yellow-named) guard.
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
              Discord Specific Rules
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
                <ul class="notes">
                  <li>
                    <strong>1. Accounts </strong>
                    Ownership of an account is determined by the associated
                    email with which it was created. If you are playing with an
                    account and you do not have access to that email, you might
                    lose it if the actual creator of the account claims it as
                    his or hers. It doesn't matter who trained a character or
                    farmed items for it, only the owner of the email to which
                    the account is linked is consider as the owner of the
                    account. Remember: a player who never shares his/her account
                    with others, will never lose a single item to thieving.
                  </li>
                  <li>
                    <strong>2. Account Thieving </strong>
                    If you lose access to your account, you can always use the
                    linked email to claim it back. Please, consider that the
                    only way you can lose your account and any items on it, is
                    by you willingly sharing its information, or by you using a
                    system which is infected by a keylogger of some kind. Admins
                    will not take responsibility in any of this cases, but will
                    try to help you recovering your account and/or items.
                  </li>
                  <li>
                    <strong>3. Investigating and access to accounts </strong>
                    If any account is suspected in any way, admins have the
                    right to log it without previous notification to the owner.
                    Only the admins will have this right, no other member of our
                    staff will ever login your account. Admins do NOT need you
                    to give your personal information for this, so please NEVER
                    share your personal information with anyone in-game. In case
                    of account thieving investigation, Admins may ban all
                    related accounts for undetermined time until investigation
                    is over.
                  </li>
                </ul>
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs text-center">
              Account Related Rules
            </div>
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
                    <strong>1. Accounts </strong>
                    Ownership of an account is determined by the associated
                    email with which it was created. If you are playing with an
                    account and you do not have access to that email, you might
                    lose it if the actual creator of the account claims it as
                    his or hers. It doesn't matter who trained a character or
                    farmed items for it, only the owner of the email to which
                    the account is linked is consider as the owner of the
                    account. Remember: a player who never shares his/her account
                    with others, will never lose a single item to thieving.
                  </li>
                  <li>
                    <strong>3. Investigating and access to accounts </strong>
                    If you lose access to your account, you can always use the
                    linked email to claim it back. Please, consider that the
                    only way you can lose your account and any items on it, is
                    by you willingly sharing its information, or by you using a
                    system which is infected by a keylogger of some kind. Admins
                    will not take responsibility in any of this cases, but will
                    try to help you recovering your account and/or items.
                  </li>
                  <li>
                    <strong>3. Investigating and access to accounts </strong>
                    If any account is suspected in any way, admins have the
                    right to log it without previous notification to the owner.
                    Only the admins will have this right, no other member of our
                    staff will ever login your account. Admins do NOT need you
                    to give your personal information for this, so please NEVER
                    share your personal information with anyone in-game. In case
                    of account thieving investigation, Admins may ban all
                    related accounts for undetermined time until investigation
                    is over.
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
  max-width: 700px;
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
