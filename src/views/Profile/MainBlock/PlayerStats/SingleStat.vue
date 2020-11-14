<template>
  <div>
    <div class="bg-white text-black rounded py-4">
      <div class="flex items-center">
        <div class="w-24">
          <div class="text-center">
            <fa-icon
              class="text-4xl"
              :style="{ color: icoColor }"
              :icon="['fas', icoName]"
            />
          </div>
        </div>

        <div>
          <h4 class="font-bold">{{ useFormatNumber(info.value) }}</h4>
          <span class="font-light text-gray-700">{{ info.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFormatNumber } from '@/composables/useFormatNumber';

export default {
  name: 'SingleStat',
  props: {
    icoName: {
      type: String,
      required: true
    },
    icoColor: {
      type: String,
      required: true
    },
    info: {
      type: Object,
      required: true
    }
  },

  setup() {
    return { useFormatNumber };
  }
};
</script>
