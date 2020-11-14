<template>
  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-6">
    <div class="col-span-1 lg:col-span-4">
      <top-heroes v-if="hasHeroes" :heroes="topHeroes" />

      <heroes-list v-if="hasHeroesList" :heroes="heroesList" />

      <progress-list :acts="profileData.progression" />
    </div>

    <div class="col-span-1 lg:col-span-2 lg:ml-6">
      <player-stats :stats="statsData" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

import TopHeroes from './TopHeroes/Index';
import HeroesList from './HeroesList/Index';
import ProgressList from './ProgressList/Index';
import PlayerStats from './PlayerStats/Index';

export default {
  name: 'MainBlock',
  components: {
    TopHeroes,
    HeroesList,
    ProgressList,
    PlayerStats
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

    const statsData = computed(() => {
      const { paragonLevel, kills, timePlayed } = props.profileData;
      return { paragonLevel, kills, timePlayed };
    });

    return {
      hasHeroes,
      topHeroes,
      hasHeroesList,
      heroesList,
      statsData
    };
  }
};
</script>
