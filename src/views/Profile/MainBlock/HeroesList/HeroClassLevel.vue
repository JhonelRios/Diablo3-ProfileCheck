<template>
  <div>
    <span>{{ className }}</span>
    <span> · </span>
    <span class="font-mono font-bold">{{ hero.level }}</span>
  </div>
</template>

<script>
import { useHeroName } from '@/composables/useHeroName';

export default {
  name: 'HeroClassLevel',
  props: {
    hero: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const className = useHeroName(props.hero.classSlug);

    return {
      className
    };
  }
};
</script>
