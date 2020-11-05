<template>
  <div class="text-sm text-left text-blue-600">
    <router-link class="mr-8" :to="{ name: 'Home' }">Home</router-link>
    <router-link class="mr-8" :to="{ name: 'About' }">About</router-link>
    <a href="https://github.com/JhonelRios/Diablo3-ProfileCheck" target="_blank"
      >Github
    </a>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks'
};
</script>
