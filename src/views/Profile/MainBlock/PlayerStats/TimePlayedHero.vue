<template>
  <div>
    <div class="flex justify-between">
      <h5 class="font-light">{{ heroTime.hero }}</h5>
      <span
        class="bg-gray-600 w-16 text-sm font-semibold rounded rounded-b-none flex justify-center items-center"
      >
        {{ (heroTime.time * 100).toFixed(2) }}
      </span>
    </div>

    <div class="w-full">
      <progress class="w-full mb-3" max="1" :value="heroTime.time">
        {{ heroTime.time }}
      </progress>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimePlayedHero',
  props: {
    heroTime: {
      type: Object,
      required: true
    }
  }
};
</script>
