<template>
  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-6">
    <div class="col-span-1 lg:col-span-4">
      <top-heroes v-if="hasHeroes" :heroes="topHeroes" />
    </div>

    <div class="col-span-1 lg:col-span-2">
      <h1>Derecha</h1>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

import TopHeroes from './TopHeroes/Index';

export default {
  name: 'MainBlock',
  components: {
    TopHeroes
  },
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const hasHeroes = computed(() => props.profileData.heroes.length > 0);
    const topHeroes = computed(() => props.profileData.heroes.slice(0, 3));

    return {
      hasHeroes,
      topHeroes
    };
  }
};
</script>
