<template>
  <header>
    <nav class="bg-gray-800 p-4 flex">
      <div>
        <router-link :to="{ name: 'Home' }">
          <img
            src="../assets/img/diablo-iii.svg"
            alt="D3"
            width="30"
            class="inline"
          />
          <span class="font-diablo ml-3">D3PF</span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
};
</script>
