<template>
  <div class="text-center">
    <p class="text-sm text-gray-600">Powered by</p>

    <ul class="flex justify-center mt-2">
      <li class="mx-2" v-for="(icon, index) in icons" :key="index">
        <a :href="icon.href" target="_blank" :title="icon.href">
          <fa-icon
            :icon="icon.classes"
            :style="{ color: icon.color }"
          ></fa-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PoweredBy',

  props: {
    icons: {
      type: Array,
      required: true
    }
  }
};
</script>
