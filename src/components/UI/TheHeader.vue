<template>
  <v-app-bar color="primary" dark app>
    <v-toolbar-title>
      <router-link
        :to="{ name: 'index' }"
        class="text-decoration-none text-white">
        Crypto Tokens (Non-Fungible-Tokens)
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    {{ accountId }}
  </v-app-bar>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { getProvider } from '@/utils/metamask';

  const accountId = ref();

  onMounted(async () => {
    const provider = await getProvider();
    if (provider) {
      accountId.value = await provider.getSigner().getAddress();
    }
  });
</script>
