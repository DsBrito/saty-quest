<template>
  <q-layout view="hHh lpR fFf ">
    <q-header reveal class="bg-black text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <h>Saty Quest</h>

        <div class="row justify-center q-mx-auto">
          <q-list class="row">
            <q-item clickable v-ripple @click="goToHome">
              <q-item-section>HOME</q-item-section>
            </q-item>
            <q-item-section>|</q-item-section>
            <q-item clickable v-ripple @click="goToAboutMePage">
              <q-item-section>ABOUT ME</q-item-section>
            </q-item>
            <q-item-section>|</q-item-section>
            <q-item clickable v-ripple @click="goToWingsPage">
              <q-item-section>WINGS</q-item-section>
            </q-item>
            <q-item-section>|</q-item-section>
            <q-item clickable v-ripple @click="goToEgPage">
              <q-item-section>EG GUIDE</q-item-section>
            </q-item>
            <q-item-section>|</q-item-section>
            <q-item clickable v-ripple @click="goToClassPage">
              <q-item-section>CLASS GUIDE</q-item-section>
            </q-item>
            <q-item-section>|</q-item-section>
            <q-item clickable v-ripple @click="goToBossPage">
              <q-item-section>BOSS GUIDE</q-item-section>
            </q-item>
            <q-item-section>|</q-item-section>
            <q-item clickable v-ripple @click="goToEventsPage">
              <q-item-section>EVENT GUIDE</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      overlay
      behavior="desktop"
      :width="200"
      :mini="miniState"
      @mouseenter="miniState = false"
      @mouseleave="miniState = true"
      class="bg-black text-white"
    >
      <q-list>
        <q-item-label header> About Me </q-item-label>
        <EssentialLink
          v-for="link in aboutMeList"
          :key="link.title"
          v-bind="link"
        />

        <q-item-label header> Navigation Page </q-item-label>
        <EssentialLink
          v-for="link in NavigationPages"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white flex justify-center items-center">
      &copy; Dionatas Santos Brito, 2024 - Todos os direitos reservados.
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ROTAS } from 'src/router/routes';
import EssentialLink from 'components/EssentialLink.vue';
import { EssentialLinkProps } from 'components/models';

const router = useRouter();

const aboutMeList: EssentialLinkProps[] = [
  {
    title: 'Youtuber',
    caption: 'www.youtube.com/@saty9136',
    icon: 'smart_display',
    link: 'https://www.youtube.com/@saty9136',
  },
  {
    title: 'Github',
    caption: 'github.com/DsBrito',
    icon: 'code',
    link: 'https://github.com/DsBrito',
  },
  {
    title: 'Instagram',
    caption: 'github.com/DsBrito',
    icon: 'center_focus_strong',
    link: 'https://github.com/DsBrito',
  },
  {
    title: 'Gmail',
    caption: 'github.com/DsBrito',
    icon: 'attach_email',
    link: 'https://github.com/DsBrito',
  },
  {
    title: 'Report',
    caption: 'github.com/DsBrito',
    icon: 'bug_report',
    link: 'https://github.com/DsBrito',
  },
];

const leftDrawerOpen = ref(false);
const miniState = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const goToHome = () => router.push({ name: ROTAS.main.name });
const goToAboutMePage = () => router.push({ name: ROTAS.me.name });
const goToEgPage = () => router.push({ name: ROTAS.eg.name });
const goToEventsPage = () => router.push({ name: ROTAS.events.name });
const goToBossPage = () => router.push({ name: ROTAS.boss.name });
const goToClassPage = () => router.push({ name: ROTAS.class.name });
const goToWingsPage = () => router.push({ name: ROTAS.wings.name });

const NavigationPages: EssentialLinkProps[] = [
  {
    title: 'Home',
    caption: 'Home Page',
    icon: 'home',
    link: goToHome,
  },
  {
    title: 'About me',
    caption: 'About Me Page',
    icon: 'person',
    link: goToAboutMePage,
  },
  {
    title: 'Wings',
    caption: 'Wings Page',
    icon: 'flutter_dash',
    link: goToWingsPage,
  },
  {
    title: 'EG guide',
    caption: 'EG Guide Page',
    icon: 'sports_esports',
    link: goToEgPage,
  },
  {
    title: 'Class guide',
    caption: 'Class Guide Page',
    icon: 'diversity_3',
    link: goToClassPage,
  },
  {
    title: 'Boss guide',
    caption: 'Boss Guide Page',
    icon: 'pets',
    link: goToBossPage,
  },
  {
    title: 'Event guide',
    caption: 'Event Guide Page',
    icon: 'celebration',
    link: goToEventsPage,
  },
];
</script>

<style></style>
