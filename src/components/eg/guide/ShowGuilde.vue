<template>
  <div class="container">
    {{ props.guide }}
    <q-img src="../../../assets/image/icons/next.png" class="image-style" />

    <div v-if="props.guide === '30 Days Pack'">
      <DaysPack> </DaysPack>
    </div>
    <div v-if="props.guide === 'accessories'">
      <Accessories> </Accessories>
    </div>
    <div v-if="props.guide === 'Enchant'">
      <Enchant> </Enchant>
    </div>
    <div v-if="props.guide === 'Elements'">
      <Element> </Element>
    </div>
    <div v-if="props.guide === 'Microchip 64k'">
      <Microchip> </Microchip>
    </div>
    <div v-if="props.guide === 'Events'">
      <Event> </Event>
    </div>
    <div v-if="props.guide === 'Class'">
      <Class> </Class>
    </div>
    <div v-if="props.guide === 'Pets'">
      <Pets> </Pets>
    </div>
    <!-- SITE -->
    <div v-if="props.guide === 'PVP rewards'">
      <PVPReward> </PVPReward>
    </div>
    <div v-if="props.guide === 'Recrut friends'">
      <RecrutFriend> </RecrutFriend>
    </div>
    <div v-if="props.guide === 'APs'">
      <APs> </APs>
    </div>
    <div v-if="props.guide === 'Roulet'">
      <Roulet> </Roulet>
    </div>
    <div v-if="props.guide === 'Custumer'">
      <Costumes> </Costumes>
    </div>
    <div v-if="props.guide === 'Share opinions'">
      <ShareServer> </ShareServer>
    </div>
    <div v-if="props.guide === 'Bosses'">
      <Boss> </Boss>
    </div>
    <div v-if="props.guide === 'Game Discord'">
      <Discord> </Discord>
    </div>
    <div v-if="props.guide === 'Rules'">
      <Rules> </Rules>
    </div>
    <div v-if="props.guide === 'Download'">
      <Download> </Download>
    </div>
    <div v-if="props.guide === 'services'">
      <Services> </Services>
    </div>
    <div v-if="props.guide === 'Vote'">
      <Vote> </Vote>
    </div>
    <div v-if="props.guide === 'Drop List'">
      <MobItemFinder> </MobItemFinder>
    </div>
    <div v-if="props.guide === 'Events Calendar'">
      <EventCalendar> </EventCalendar>
    </div>
    <div v-if="props.guide === 'New Shop Items'">
      <NewShopItems> </NewShopItems>
    </div>
    <div v-if="props.guide === 'EG Information'">
      <EGServerInformation> </EGServerInformation>
    </div>
    <div v-if="props.guide === 'itens with discount'">
      <ItensOfTheDay> </ItensOfTheDay>
    </div>
    <div v-if="props.guide === 'Mounts'">
      <Mounts> </Mounts>
    </div>
  </div>
</template>

<script setup lang="ts">
import DaysPack from './days-pack/DaysGuide.vue';
import Accessories from './pvp-accessories/AcessoriesGuide.vue';
import Enchant from './enchant/EnchantGuide.vue';
import Element from './elements/ElementGuide.vue';
import Microchip from './64k-lapis/MicrochipGuide.vue';
import Event from './event/EventGuide.vue';
import Class from './class/CharacterGuide.vue';
import PVPReward from './site/pvp-reward/TiredPVPRewardGuide.vue';
import RecrutFriend from './site/recrute-a-friend/RecruteAFriendGuide.vue';
import Pets from './site/pets/PetsGuide.vue';
import APs from './site/aps/APsGuide.vue';
import Roulet from './site/roulet/SpinToWinGuilde.vue';
import Costumes from './site/costumes/CostumesGuide.vue';
import ShareServer from './site/refer-our-server/ReferOurServer.vue';
import Boss from './site/boss/BossGuide.vue';
import Discord from './site/discord/DiscordGuide.vue';
import Rules from './site/rules/RulesGuide.vue';
import Download from './site/download/DownloadGuide.vue';
import Services from './site/services/ServicesGuide.vue';
import Vote from './site/vote/VoteGuide.vue';
import MobItemFinder from './site/drop-item-finder/MobItemFinderGuide.vue';
import EventCalendar from './site/events-calendar/EventCalendarGuide.vue';
import NewShopItems from './site/new-shop-items/NewShopItemsGuide.vue';
import EGServerInformation from './site/eg-server-information/EGServerInformationGuide.vue';
import ItensOfTheDay from './site/items-of-the-day/ItensOfTheDayGuide.vue';
import Mounts from './site/mounts/MountGuide.vue';

const props = defineProps<{
  guide: string;
}>();
</script>

<style scoped>
.image-style {
  width: 130px;
  height: auto;
  transform: rotate(90deg);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-image: url('../assets/image/class/background/sq_forum_bg.jpg'); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
</style>
