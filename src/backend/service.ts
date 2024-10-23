import { LocalStore } from "@/utils/store";

/**
 * 后端服务server url
 */
export const ServerUrl = `http://172.16.10.3:8080`;

export const isLoggedIn = () => {
  const token = LocalStore.get("token");
  return token !== null && token.length > 0;
};

export const setToken = (token: string) => {
  LocalStore.set("token", token);
};

export function getToken() {
  const token = LocalStore.get("token");
  if (token == null) {
    alert("获取token失败!");
    goToLink("/login");
  }
  return token;
}

export const goToLink = (link: string) => {
  window.location.href = link;
  // https://www.chao-yu.cn/details/91.html
  // 在非vue组件中使用vue router实例. 注意router不会改变host,改变的只是路由部分.
  // router.push(link);
};

/**
 * 使用OIDC协议返回少量用户信息.
 * @returns 遵守OIDC协议的casdoor用户信息
 */
export const getUserinfo = () => {
  return fetch(`/api/userinfo`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.retCode === "0") {
        return data.data;
      }
      throw new Error(data.retMsg);
    });
};

/**
 * 获取当前登录账户的用户对象
 * @returns casdoor专用的用户对象.用于其API操作.
 */
export const getCasdoorAccount = () => {
  return fetch(`/api/get-account`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.retCode === "0") {
        return data.data;
      }
      throw new Error(data.retMsg);
    });
};


export const logout = () => {
  LocalStore.remove("token");
  goToLink("/");
};

export const showMessage = (message: string) => {
  alert(message);
};
