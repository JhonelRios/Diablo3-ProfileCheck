<template>
  <div>
    <base-loading v-if="isLoading" />
    <template v-if="profileData !== null">
      <main-block :profile-data="profileData" />
      <artisans-block :artisans-data="artisansData" />
    </template>
  </div>
</template>

<script>
import { ref, inject, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { getApiAccount } from '../../api/search';
import { useError } from '../../composables/useError';

import BaseLoading from '../../components/BaseLoading';
import MainBlock from './MainBlock/Index';
import ArtisansBlock from './ArtisansBlock/Index';

export default {
  name: 'Profile',
  components: {
    BaseLoading,
    MainBlock,
    ArtisansBlock
  },

  setup(props, { emit }) {
    const accessToken = inject('accessToken');
    const route = useRoute();
    const router = useRouter();

    const isLoading = ref(true);
    const profileData = ref(null);

    const { region, battleTag: account } = route.params;

    getApiAccount({ accessToken: accessToken.value, region, account })
      .then(({ data }) => (profileData.value = data))
      .catch(error => {
        const { errorObject } = useError(error, route);

        emit('set-error', errorObject);
        router.push({ name: 'Error' });
      })
      .finally(() => (isLoading.value = false));

    const artisansData = computed(() => ({
      blacksmith: profileData.value.blacksmith,
      blacksmithHardcore: profileData.value.blacksmithHardcore,
      jeweler: profileData.value.jeweler,
      jewelerHardcore: profileData.value.jewelerHardcore,
      mystic: profileData.value.mystic,
      mysticHardcore: profileData.value.mysticHardcore
    }));

    return {
      isLoading,
      profileData,
      artisansData
    };
  }
};
</script>
