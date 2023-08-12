// 封装本地存储的操作
const TOKEN_KEY = "token";

// 获取 token
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

// 本地存储 token
export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

// 删除 token
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

// 判断有无 token
export function hasToken() {
  return !!getToken();
}
