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

// 封装本地存储的操作
const EMAIL_KEY = "email";

// 获取 email
export function getEmail() {
  return localStorage.getItem(EMAIL_KEY);
}

// 本地存储 email
export function setEmail(email: string) {
  localStorage.setItem(EMAIL_KEY, email);
}

// 删除 email
export function removeEmail() {
  localStorage.removeItem(EMAIL_KEY);
}

// 判断有无 email
export function hasEmail() {
  return !!getEmail();
}
