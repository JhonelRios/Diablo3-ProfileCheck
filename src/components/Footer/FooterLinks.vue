<template>
  <div class="text-sm text-left text-blue-600">
    <router-link class="mr-8 hover:underline" :to="{ name: 'Home' }"
      >Home</router-link
    >
    <router-link class="mr-8 hover:underline" :to="{ name: 'About' }"
      >About</router-link
    >
    <a
      class="hover:underline"
      href="https://github.com/JhonelRios/Diablo3-ProfileCheck"
      target="_blank"
      >Github
    </a>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks'
};
</script>
