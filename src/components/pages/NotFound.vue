<template>
  <v-app>
    <v-main>
      <v-container fluid class="overlay">
        <div class="text-h2 text-center font-weight-black">
          <v-icon icon="fa-solid fa-triangle-exclamation" />
          404 - Page Not Found
        </div>
        <div class="text-center">
          <router-link :to="{ name: 'index' }">Go Home</router-link>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    background-color: deepskyblue;

    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
