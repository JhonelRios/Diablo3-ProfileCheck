<template>
  <div class="flex items-center cursor-pointer" @click="goToHero(hero.id)">
    <span class="hero-image" :class="heroClassImg" />
    <span class="hero-name ml-2" :class="{ 'text-red-600': hero.hardcore }">
      {{ hero.name }}
    </span>

    <img
      v-if="hero.seasonal"
      class="ml-2 inline-block"
      width="12"
      src="@/assets/img/leaf.png"
      alt="leaf"
    />
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'HeroIco',
  props: {
    hero: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const heroClassImg = computed(() => {
      const gender = props.hero.gender === 1 ? 'female' : 'male';
      const hardcore = props.hero.hardcore ? 'border border-red-600' : '';

      return `hero-${props.hero.classSlug} ${gender} ${hardcore}`;
    });

    const goToHero = heroId => {
      const { region, battleTag } = route.params;

      router.push({ name: 'Hero', params: { region, battleTag, heroId } });
    };

    return {
      heroClassImg,
      goToHero
    };
  }
};
</script>

<style lang="scss" scoped>
.hero-image {
  width: 30px;
  height: 26px;
  display: inline-block;
  background-size: 210%;
}

.hero-name {
  height: 24px;
  display: inline-block;
}
</style>
