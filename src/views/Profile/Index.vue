<template>
  <div>
    <base-loading v-if="isLoading" />
    <template v-if="profileData !== null">
      <main-block :profile-data="profileData" />
    </template>
  </div>
</template>

<script>
import { ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import BaseLoading from '../../components/BaseLoading';
import MainBlock from './MainBlock/Index';
import { getApiAccount } from '../../api/search';
import { useError } from '../../composables/useError';

export default {
  name: 'Profile',
  components: {
    BaseLoading,
    MainBlock
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

    return {
      isLoading,
      profileData
    };
  }
};
</script>
