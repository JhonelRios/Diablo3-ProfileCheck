<template>
  <div id="nav" class="py-16 text-white bg-primary">
    <load-layout v-if="isLoading">
      <base-loading />
    </load-layout>

    <main-layout v-else />
  </div>
</template>

<script>
import { ref, provide } from 'vue';
import { getToken } from './api/oauth';

import BaseLoading from './components/BaseLoading';
import MainLayout from './components/MainLayout';
import LoadLayout from './components/LoadLayout';

export default {
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },

  setup() {
    const accessToken = ref(null);
    const isLoading = ref(true);

    getToken()
      .then(({ data }) => (accessToken.value = data.access_token))
      .catch(err => console.log('Error OAuth:', err))
      .finally(() => (isLoading.value = false));

    provide('accessToken', accessToken);

    return {
      accessToken,
      isLoading
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
}
</style>
