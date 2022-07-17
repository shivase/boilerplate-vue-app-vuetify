<template>
  <v-app>
    <the-header></the-header>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="primary" dark app>Vuetify</v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import TheHeader from '@/components/UI/TheHeader.vue';
</script>
