<template>
  <v-app>
    <v-main>
      <v-container fluid class="overlay">
        <div class="text-h3 text-center font-weight-black">
          <v-icon icon="fa-solid fa-triangle-exclamation" />
          This site requires Metamask installed
        </div>
        <div class="text-h6 text-center">
          <a href="https://metamask.io/">Install from here</a>
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
