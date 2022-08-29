<template>
  <v-app-bar color="primary" dark app>
    <v-toolbar-title>
      <router-link
        :to="{ name: 'index' }"
        class="text-decoration-none text-white">
        TOP
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script setup lang="ts"></script>
