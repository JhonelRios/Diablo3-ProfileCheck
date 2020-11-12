<template>
  <div class="mt-5 border-t border-gray-600">
    <h2 class="font-diablo my-2 text-2xl">Progression</h2>
    <div class="sm:flex">
      <div class="sm:mr-6" v-for="(val, key) in sortedActs" :key="key">
        <div
          class="bg-gray-800 rounded flex justify-center items-center mb-4 w-full h-24 sm:w-24"
        >
          <progress-item :act="{ actNum: key, value: val }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

import ProgressItem from './ProgressItem';

export default {
  name: 'ProgressList',
  components: { ProgressItem },
  props: {
    acts: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const sortedActs = computed(() =>
      Object.keys(props.acts)
        .sort()
        .reduce((a, c) => {
          a[c] = props.acts[c];

          return a;
        }, {})
    );

    return {
      sortedActs
    };
  }
};
</script>
