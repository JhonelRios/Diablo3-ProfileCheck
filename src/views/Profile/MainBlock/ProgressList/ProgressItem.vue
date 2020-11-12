<template>
  <div class="flex flex-col items-center" :title="actTitle">
    <div>
      <div :class="actClass"></div>
    </div>
    <p class="block text-center font-bold leading-6 text-lg">
      {{ fullActName }}
    </p>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'ProgressItem',
  props: {
    act: {
      type: Object,
      required: true,
      validator: obj => {
        return Object.keys(obj).length === 2;
      }
    }
  },

  setup(props) {
    const acts = {
      act1: 'I',
      act2: 'II',
      act3: 'III',
      act4: 'IV',
      act5: 'V'
    };

    const fullActName = computed(() => `Act ${acts[props.act.actNum]}`);

    const actClass = computed(() => {
      const status = props.act.value ? 'done' : 'pending';

      return `act ${props.act.actNum} ${status}`;
    });

    const actTitle = computed(() =>
      props.act.value ? 'Act completed!' : 'Act uncompleted'
    );

    return {
      fullActName,
      actClass,
      actTitle
    };
  }
};
</script>

<style lang="scss" scoped>
.act {
  width: 50px;
  height: 55px;
}
</style>
