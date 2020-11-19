<template>
  <div class="bg-gray-800 flex p-3 mb-4 rounded items-center">
    <div
      class="w-20 h-20 bg-gray-600 bg-opacity-25 flex justify-center items-center rounded-full"
    >
      <fa-icon
        :icon="artisan.icon"
        class="text-4xl"
        :style="{ color: artisan.color }"
      />
    </div>

    <div class="ml-6">
      <h5 class="font-bold capitalize">{{ artisan.name }}</h5>

      <p v-if="artisan.normal.level">
        Level {{ artisan.normal.level }} (normal)
      </p>

      <p v-if="artisan.hardcore.level" class="text-gray-600">
        Level {{ artisan.hardcore.level }}
        <span class="text-red-600">(hardcore)</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtisanItem',
  props: {
    artisan: {
      type: Object,
      required: true
    }
  },

  setup() {
    return {};
  }
};
</script>
