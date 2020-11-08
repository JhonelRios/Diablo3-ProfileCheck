<template>
  <div>
    <div class="font-diablo my-4 text-2xl">Top Heroes</div>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-3">
      <div v-for="hero in heroes" :key="hero.id">
        <top-hero :hero="hero" />
      </div>
    </div>
  </div>
</template>

<script>
import TopHero from './TopHero';

export default {
  name: 'TopHeroes',
  components: { TopHero },
  props: {
    heroes: {
      type: Array,
      required: true
    }
  },

  setup() {
    return {};
  }
};
</script>
