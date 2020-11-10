<template>
  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-6">
    <div class="col-span-1 lg:col-span-4">
      <top-heroes v-if="hasHeroes" :heroes="topHeroes" />

      <heroes-list v-if="hasHeroesList" :heroes="heroesList" />
    </div>

    <div class="col-span-1 lg:col-span-2">
      <h1>Derecha</h1>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

import TopHeroes from './TopHeroes/Index';
import HeroesList from './HeroesList/Index';

export default {
  name: 'MainBlock',
  components: {
    TopHeroes,
    HeroesList
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

    const hasHeroesList = computed(() => props.profileData.heroes.length > 3);
    const heroesList = computed(() =>
      props.profileData.heroes.slice(3, props.profileData.heroes.length)
    );

    return {
      hasHeroes,
      topHeroes,
      hasHeroesList,
      heroesList
    };
  }
};
</script>
