<template>
  <div class="mt-8">
    <hr class="border-gray-600" />
    <h1 class="font-diablo my-5 text-2xl">Artisans</h1>
    <div class="lg:flex lg:justify-between">
      <div class="lg:w-1/4" v-for="artisan in artisansInfo" :key="artisan.name">
        <artisan-item :artisan="artisan" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

import ArtisanItem from './ArtisanItem';

export default {
  name: 'ArtisansBlock',
  components: { ArtisanItem },
  props: {
    artisansData: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const artisansInfo = computed(() => [
      {
        name: 'blacksmith',
        icon: 'hammer',
        emoji: '⚒',
        color: '#ffb74d',
        normal: props.artisansData.blacksmith,
        hardcore: props.artisansData.blacksmithHardcore
      },
      {
        name: 'jeweler',
        icon: 'gem',
        emoji: '💎',
        color: '#4dd0e1',
        normal: props.artisansData.jeweler,
        hardcore: props.artisansData.jewelerHardcore
      },
      {
        name: 'mystic',
        icon: 'hat-wizard',
        emoji: '🔮',
        color: '#ba68c8',
        normal: props.artisansData.mystic,
        hardcore: props.artisansData.mysticHardcore
      }
    ]);

    return {
      artisansInfo
    };
  }
};
</script>
