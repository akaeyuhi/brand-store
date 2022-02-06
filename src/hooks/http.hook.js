import { useState } from 'react';

export const useHttp = token => {
  const [auth, setAuth] = useState(token);

  async function authFetch(url, method = 'GET', data = {}) {
    try {
      return await (await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          authorization: auth,
        },
      })).json();
    } catch (e) {
      console.log(e);
    }
  }

  return {
    setAuth, authFetch,
  };
};
