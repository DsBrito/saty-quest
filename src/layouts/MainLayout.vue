<template>
  <q-layout view="hHh lpR fFf">
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

        <div class="row justify-center q-pa-xs q-mx-auto">
          <q-list class="row">
            <q-item clickable v-ripple @click="goToHome">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="goToAboutMePage">
              <q-item-section>About Me</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="goToEgPage">
              <q-item-section>EG</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="goToEventsPage">
              <q-item-section>Events</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="goToBossPage">
              <q-item-section>Boss</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="goToClassPage">
              <q-item-section>Class Guild</q-item-section>
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
      class="bg-black text-white"
    >
      <q-list>
        <q-item-label header> About Me </q-item-label>

        <div v-if="$route.name == 'about-me'">
          <EssentialLink
            v-for="link in aboutMeList"
            :key="link.title"
            v-bind="link"
          />
        </div>
        <div v-if="$route.name == 'about-boss'">
          <EssentialLink
            v-for="link in aboutMeList"
            :key="link.title"
            v-bind="link"
          />
        </div>
        <div v-else>
          <EssentialLink
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
          />
        </div>
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

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ROTAS } from 'src/router/routes';
import EssentialLink from 'components/EssentialLink.vue';
import { EssentialLinkProps } from 'components/models';

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
  },
  setup() {
    const router = useRouter();

    const linksList: EssentialLinkProps[] = [
      {
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev',
      },
      {
        title: 'Github',
        caption: 'github.com/quasarframework',
        icon: 'code',
        link: 'https://github.com/quasarframework',
      },
      {
        title: 'Discord Chat Channel',
        caption: 'chat.quasar.dev',
        icon: 'chat',
        link: 'https://chat.quasar.dev',
      },
      {
        title: 'Forum',
        caption: 'forum.quasar.dev',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev',
      },
      {
        title: 'Twitter',
        caption: '@quasarframework',
        icon: 'rss_feed',
        link: 'https://twitter.quasar.dev',
      },
      {
        title: 'Facebook',
        caption: '@QuasarFramework',
        icon: 'public',
        link: 'https://facebook.quasar.dev',
      },
      {
        title: 'Quasar Awesome',
        caption: 'Community Quasar projects',
        icon: 'favorite',
        link: 'https://awesome.quasar.dev',
      },
    ];
    const aboutMeList: EssentialLinkProps[] = [
      {
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev',
      },
      {
        title: 'Github',
        caption: 'github.com/quasarframework',
        icon: 'code',
        link: 'https://github.com/quasarframework',
      },
    ];

    const leftDrawerOpen = ref(false);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      linksList,
      aboutMeList,
      goToHome: () => router.push({ name: ROTAS.main.name }),
      goToAboutMePage: () => router.push({ name: ROTAS.me.name }),
      goToEgPage: () => router.push({ name: ROTAS.eg.name }),
      goToEventsPage: () => router.push({ name: ROTAS.events.name }),
      goToBossPage: () => router.push({ name: ROTAS.boss.name }),
      goToClassPage: () => router.push({ name: ROTAS.class.name }),
      leftDrawerOpen,
      toggleLeftDrawer,
    };
  },
};
</script>
