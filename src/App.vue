<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <p>Access: {{ accessToken }}</p>
  </div>
  <router-view />
</template>

<script>
import { ref, provide } from 'vue';
import { getToken } from './api/oauth';

export default {
  setup() {
    const accessToken = ref(null);

    getToken()
      .then(({ data }) => (accessToken.value = data.access_token))
      .catch(err => console.log('Error OAuth:', err))
      .finally(() => console.log('Done'));

    provide('accessToken', accessToken);

    return {
      accessToken
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
