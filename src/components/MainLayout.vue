<template>
  <div class="container mx-auto text-center">
    <header-bar />

    <router-view />

    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from './HeaderBar';
import FooterBar from './Footer/FooterBar';

export default {
  name: 'MainLayout',

  components: {
    HeaderBar,
    FooterBar
  }
};
</script>
