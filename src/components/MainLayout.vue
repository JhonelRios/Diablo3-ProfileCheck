<template>
  <div class="container mx-auto px-4">
    <header-bar />

    <router-view @set-error="setError" :error="error" />

    <footer-bar />
  </div>
</template>

<script>
import { ref } from 'vue';

import HeaderBar from './HeaderBar';
import FooterBar from './Footer/FooterBar';

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  },

  setup() {
    const error = ref({});

    const setError = errorObject => (error.value = errorObject);

    return {
      error,
      setError
    };
  }
};
</script>
