const TOKEN_KEY = 'authData';

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirstName: string;
  userId: number;
};

////////////////////////////////////////////////////////////////////////////////////////
export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(obj));
};

export const getAuthData = () => {
  const str = localStorage.getItem(TOKEN_KEY) ?? '{}';
  return JSON.parse(str) as LoginResponse;
};

export const removeAuthData = () => {
  localStorage.removeItem(TOKEN_KEY);
};
////////////////////////////////////////////////////////////////////////////////////////
