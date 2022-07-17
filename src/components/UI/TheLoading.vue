<script setup lang="ts">
  defineProps({
    message: { type: String, required: true },
  });
</script>

<template>
  <div class="text-center overlay">
    <v-card color="primary" dark>
      <v-card-text>
        {{ message }}
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
  .overlay {
    z-index: 1;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
