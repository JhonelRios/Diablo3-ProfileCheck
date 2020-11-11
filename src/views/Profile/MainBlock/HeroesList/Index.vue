<template>
  <div class="border-t border-gray-600 pt-5 mt-5 sm:mt-0">
    <table class="bg-gray-800 w-full table-auto">
      <tr>
        <th
          class="text-left p-2"
          v-for="key in Object.keys(fields[0])"
          :key="key"
        >
          {{ key }}
        </th>
      </tr>

      <tr
        class="border-t border-gray-700 hover:bg-gray-600"
        v-for="hero in heroes"
        :key="hero.id"
      >
        <td class="p-2">
          <hero-ico :hero="hero" />
        </td>
        <td class="p-2">
          <hero-class-level :hero="hero" />
        </td>
        <td class="p-2">
          {{ useFormatNumber(hero.kills.elites) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import HeroIco from './HeroIco';
import HeroClassLevel from './HeroClassLevel';

import { useFormatNumber } from '@/composables/useFormatNumber';

export default {
  name: 'HeroesList',
  components: {
    HeroIco,
    HeroClassLevel
  },
  props: {
    heroes: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    const fields = props.heroes.map(hero => ({
      Name: hero.name,
      Class: hero.class,
      'Elite Kills': hero.kills
    }));

    return {
      fields,
      useFormatNumber
    };
  }
};
</script>
