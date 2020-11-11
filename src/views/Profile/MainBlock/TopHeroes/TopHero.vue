<template>
  <div class="mb-0 sm:mb-5">
    <div class="bg-gray-700 flex justify-center p-4 sm:p-0">
      <div :class="heroClass"></div>
    </div>
    <div class="p-2 bg-gray-800">
      <h5
        class="truncate text-center title-name font-diablo"
        :class="{ 'bg-red-600': hero.hardcore }"
      >
        {{ hero.name }}
        <img
          v-if="hero.seasonal"
          class="inline"
          src="@/assets/img/leaf.png"
          alt="leaf"
          width="12"
        />
      </h5>
      <div class="flex justify-between items-center border-t-2 pt-2 mt-2">
        <small>
          <span class="font-mono">{{ hero.kills.elites }}</span>
          Elite Kills
        </small>

        <small class="level-circle" :class="{ 'text-red-500': hero.dead }">
          {{ hero.level }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'TopHero',
  props: {
    hero: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const heroClass = computed(() => {
      const gender = props.hero.gender === 0 ? 'male' : 'female';

      return `hero-${props.hero.classSlug} ${gender}`;
    });

    console.log(heroClass.value);

    return {
      heroClass
    };
  }
};
</script>

<style lang="scss" scoped>
.title-name {
  color: white;
  font-weight: 900;
}

.level-circle {
  width: 26px;
  height: 26px;
  padding: 4px;
  font-weight: bold;
  text-align: center;
  border-radius: 13px;
  background-color: #15202b;
  box-shadow: 0 0 0 2px #6c757d;
}
</style>
