<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-secondary text-white" height-hint="98">
      <q-toolbar align="center">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Saty Quest
        </q-toolbar-title>
        <q-icon name="github" />
        <!-- <q-btn desnse flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab
          icon="home"
          to="../pages/AboutMePage.vue"
          label="About Me"
        />
        <q-route-tab icon="home" to="/AboutEG" label="About EG" />
        <q-route-tab icon="home" to="/Events" label="Events" />
        <q-route-tab icon="home" to="/Boss" label="Boss" />
        <q-route-tab icon="home" to="/ClassGuilde" label="Class Guilde" />
        <q-route-tab icon="home" to="/Boss" label="Boss" />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="desktop"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white flex justify-center items-center">
      &copy; Dionatas Santos Brito, 2024 - Todos os direitos reservados.
    </q-footer>
  </q-layout>
</template>

<script>
// import Icon from '@mdi/react';
// import { mdiGithub } from '@mdi/js';

export default {
  setup() {
    return {};
  },
};
</script>
