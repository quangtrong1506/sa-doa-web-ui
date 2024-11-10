
const TOKEN_KEY = 'TokenStorage';

const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY)
};

const TokenRepository = {
  saveToken,
  getToken,
  deleteToken,
}

export {TokenRepository}