<template>
  <div>
    <hr class="border-gray-600 mt-3 sm:hidden sm:mt-0" />
    <h2 class="font-diablo my-4 text-2xl">Stats</h2>
    <div class="flex flex-col bg-gray-800 p-4">
      <single-stat
        class="mb-4"
        ico-name="skull"
        ico-color="#9e9e9e"
        :info="{ value: stats.kills.monsters, text: 'Lifetime Kills' }"
      />

      <single-stat
        class="mb-4"
        ico-name="crown"
        ico-color="#ffc107"
        :info="{ value: stats.kills.elites, text: 'Elite Kills' }"
      />

      <single-stat
        ico-name="dungeon"
        ico-color="#795548"
        :info="{ value: stats.paragonLevel, text: 'Paragon Kills' }"
      />
    </div>

    <time-played :time-played="timePlayed" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useHeroName } from '@/composables/useHeroName';

import SingleStat from './SingleStat';
import TimePlayed from './TimePlayed';

export default {
  name: 'PlayerStats',
  components: {
    SingleStat,
    TimePlayed
  },
  props: {
    stats: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const timePlayed = computed(() =>
      Object.keys(props.stats.timePlayed)
        .sort()
        .map(hero => {
          return {
            hero: useHeroName(hero),
            time: props.stats.timePlayed[hero],
            classSlug: hero
          };
        })
    );

    return {
      timePlayed
    };
  }
};
</script>
