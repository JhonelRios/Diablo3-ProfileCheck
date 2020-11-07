import { get } from 'axios';

import { locales } from '../utils/regions';

const protocol = 'https://';
const host = '.api.blizzard.com/';

function getApiAccount({ accessToken, region, account }) {
  const resource = `d3/profile/${account}/`;
  const API_URL = `${protocol}${region}${host}${resource}`;
  const locale = locales[region];

  const params = {
    access_token: accessToken,
    locale
  };

  return get(API_URL, { params });
}

export { getApiAccount };
