export let accessToken = '';

export const setAccessToken = (s: string) => {
  accessToken = s;
}

export const getAcessToken = () => {
  return accessToken;
}