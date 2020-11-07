<template>
  <div>
    <h1>Error View</h1>
    <h1>{{ error }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      required: true
    }
  },

  setup() {
    return {};
  }
};
</script>
