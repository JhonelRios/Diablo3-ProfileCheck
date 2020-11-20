<template>
  <header>
    <nav class="bg-gray-800 p-4 flex">
      <div>
        <router-link :to="{ name: 'Home' }" class="flex">
          <img
            src="../assets/img/diablo-iii.svg"
            alt="D3"
            width="30"
            class="inline"
          />
          <span class="font-diablo ml-3 text-xl">{{ title }}</span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  setup() {
    const title = process.env.VUE_APP_TITLE;

    return {
      title
    };
  }
};
</script>
