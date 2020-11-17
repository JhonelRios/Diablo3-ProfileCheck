<template>
  <div class="mt-8">
    <hr class="border-gray-600" />
    <h2 class="font-diablo my-5 text-2xl">Time Played</h2>

    <div class="bg-gray-800 p-3">
      <div v-for="hero in timePlayed" :key="hero.classSlug">
        <time-played-hero :hero-time="hero" />
      </div>
    </div>
  </div>
</template>

<script>
import TimePlayedHero from './TimePlayedHero';

export default {
  name: 'TimePlayed',
  components: { TimePlayedHero },
  props: {
    timePlayed: {
      type: Array,
      required: true
    }
  },

  setup() {
    return {};
  }
};
</script>
