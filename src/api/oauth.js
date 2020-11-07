import { post } from 'axios';

const clientId = 'bcd316e856594d19963ac42175e5e8f5';
const clientSecret = 'ENtNj3RDoCD6sScX96uR9EyRzbJgdiHf';

const region = 'us';
const API_URL = `https://${region}.battle.net/oauth/token`;

function getToken() {
  const body = new FormData();

  body.append('grant_type', 'client_credentials');

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  };

  return post(API_URL, body, config);
}

export { getToken };
