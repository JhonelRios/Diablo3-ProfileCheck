<template>
  <div class="my-10">
    <div class="w-2/3 mx-auto">
      <form @submit.prevent="onSubmit">
        <div class="text-left">
          <label class="block mb-1" for="input-text">BattleTag:</label>
          <input
            v-model="form.battleTag"
            class="py-1 px-2 rounded w-full placeholder-gray-600 text-gray-600"
            type="text"
            id="input-text"
            placeholder="BattleTag"
            required
          />
        </div>

        <div class="text-left mt-6">
          <label class="block mb-1" for="input-region">Region:</label>
          <select
            v-model="form.region"
            class="py-1 px-1 rounded w-full bg-white text-gray-600"
            id="input-region"
            required
          >
            <option
              v-for="region in regionsList"
              :key="region.name"
              :value="region.name"
            >
              {{ region.text }}
            </option>
          </select>
        </div>

        <div class="text-right mt-6">
          <button
            class="bg-blue-600 hover:bg-blue-500 py-1 px-3 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { regions } from '../../utils/regions';

export default {
  name: 'HomeForm',

  setup() {
    const form = ref({
      battleTag: '',
      region: 'us'
    });

    const regionsList = computed(() =>
      regions.map(region => ({ name: region, text: region.toUpperCase() }))
    );

    const onSubmit = () => {
      const { battleTag, region } = form.value;
      console.log(battleTag, region);
    };

    return {
      form,
      regionsList,
      onSubmit
    };
  }
};
</script>
