<template>
  <div>
    <h1 class="text-2xl">Heroes List</h1>

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
        v-for="heroe in fields"
        :key="heroe.id"
      >
        <td class="p-2" v-for="value in Object.values(heroe)" :key="value">
          {{ value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HeroesList',
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
      fields
    };
  }
};
</script>
