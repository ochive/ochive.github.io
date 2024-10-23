/**
 * 提供对浏览器sessionStorage的访问.
 */
export function SessionStore() {}

SessionStore.set = function (key: string, value: any) {
  if (value && value === Object(value)) {
    sessionStorage.setItem(key, "_isObj_" + JSON.stringify(value));
  } else {
    sessionStorage.setItem(key, value);
  }
};

SessionStore.get = function (key: string) {
  let value = sessionStorage.getItem(key);
  if (value) {
    if (value.indexOf("_isObj_") === 0) {
      return JSON.parse(value.slice(7));
    }
    return value;
  }
  return null;
};

SessionStore.remove = function (key: string) {
  return sessionStorage.removeItem(key);
};
SessionStore.clear = function () {
  return sessionStorage.clear();
};
SessionStore.each = function (fn: (key: string, value: any) => void) {
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i)!;
    const value = SessionStore.get(key);
    fn(key, value);
  }
};

/**
 * 提供对浏览器localStorage的访问.
 */
export function LocalStore() {}

LocalStore.set = function (key: string, value: any) {
  if (value && value === Object(value)) {
    localStorage.setItem(key, "_isObj_" + JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

LocalStore.get = function (key: string) {
  let value = localStorage.getItem(key);
  if (value) {
    if (value.indexOf("_isObj_") === 0) {
      return JSON.parse(value.slice(7));
    }
    return value;
  }
  return null;
};

LocalStore.remove = function (key: string) {
  return localStorage.removeItem(key);
};
LocalStore.clear = function () {
  return localStorage.clear();
};
LocalStore.each = function (fn: (key: string, value: any) => void) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)!;
    const value = LocalStore.get(key);
    fn(key, value);
  }
};
