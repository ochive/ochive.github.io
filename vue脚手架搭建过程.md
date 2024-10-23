# 脚手架搭建过程记录

使用 Vite 来创建一个基本的项目脚手架, 然后再自行添加其他库.

## 运行环境

Vite 要求 Node.js 16+ 至少 14.18+

我的环境是 node 18.13.0 npm 8.19.3

可以使用 nvm 来管理 node 版本(包括对应的 npm 版本)

npm国内镜像源

```bash
npm config set registry https://registry.npmmirror.com
pnpm config set registry https://registry.npmmirror.com
```

## 搭建命令记录

### IDE 配置

IDE 使用的是 vscode. 需要安装一些插件.

Vue Language Features (Volar), ~~ESLint, Pettier~~ , TypeScript Vue Plugin (Volar)

### vite 创建项目基础模板

```bash
# npm6. 使用支持typescript的vue项目模板.
npm create vite@latest vue3-scaffold --template vue-ts
# npm7
npm create vite@latest vue3-scaffold -- --template vue-ts
```

### 安装依赖和运行

```bash
cd vue3-scaffold
pnpm install
npm run dev
```

```bash
# 升级依赖
pnpm update
```

最基本的 vue3 开发脚手架已经有了.后续还需要添加路由, UI 的支持.

### src 路径别名

开发中 import 其他组件时, 如果是多级目录, 相对路径很费劲. 可以使用路径别名功能, 让所有 import 都使用绝对路径.类似这样:

```js
// @代表项目根目录下的src目录的绝对路径.
import("@/layouts/HomeLayout.vue");
```

配置方式:

```js
// tsconfig.json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
```

```js
// vite.config.ts
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

### 启动 JSX 支持

vite 提供了开箱即用的支持.[参考](https://cn.vitejs.dev/guide/features.html#jsx)
JSX 的转译使用的是 esbuild.

对于 Vue,还需要安装一个插件.因为要额外支持一些 Vue 的特性, 包括指令和插槽. React 使用 JSX 可没有这些东西 😁

```bash
npm i -D @vitejs/plugin-vue-jsx
```

### 路由

使用[vue router](https://router.vuejs.org/zh/guide/)作为路由组件

引入依赖

```bash
npm install vue-router@4
```

配置路由

```js
// router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export { router };
```

```js
// router/routes.ts
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: { title: "首页" },
    component: () => import("@/layouts/HomeLayout.vue"),
    children: [],
  },
];

export { routes };
```

加载路由

```js
// main.ts
import { router } from "./router";

const app = createApp(App);

app.use(router);
```

需求: 让路径"/"默认路由到首页. "/" >> "首页路由组件" >> 路由组件再根据路径继续加载具体的视图.

执行的步骤: App.vue 中放置了 router-view, 会自动根据路由配置, 加载 HomeLayout 这个布局组件, HomeLayout 的中 router-view 再根据路径自动渲染路由配置好的组件.

SPA 单页面应用的管理系统主页风格一般是统一的. 最常用的是上中下+侧边布局, 开发时, 只开发具体的业务视图.

将布局作为路由的入口.

### 选用 UI 组件

element plus, ant design vue, naive ui

尝试使用 element plus

```bash
npm install element-plus --save
```

直接完整导入

```js
// main.ts
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(ElementPlus);
```

实际生产中, 推荐[按需导入](https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5)

### 引入 Icon 图标

```bash
npm install @element-plus/icons-vue
```

注册图标.

```js
// main.ts
import { registerIcons } from "./icons";

// 注册所有图标
registerIcons(app);
```

[使用图标](https://element-plus.org/zh-CN/component/icon.html#%E7%BB%93%E5%90%88-el-icon-%E4%BD%BF%E7%94%A8)

[在线图标库](https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88)

### 引入 less

[vite 引入 less](https://juejin.cn/post/7163118806783983652/)
[vite](https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions)
[vite 的 less 可配置选项](https://lesscss.org/usage/#less-options-math)

安装依赖

```bash
npm install --save less
```

配置 vite

```js
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        math: "parens-division",
        globalVars: {
          // 全局变量
          mainColor: "red",
        },
      },
    },
  },
});
```

这样就可以在项目中引入less文件, vue单文件中也可以使用less了.

```vue
<style scoped lang="less">
.a{
  .a-b{
    .a-b-c{
      
    }
  }
}
</style>
```

### 首页布局的开发

layouts/HomeLayout.vue
[参考](https://blog.csdn.net/weixin_51351637/article/details/127129259)

## 脚手架使用的工具

### [构建工具 Vite](https://cn.vitejs.dev/)

前端构建工具链(开发服务器(类似 webpack 的 devServer), 构建功能, 开箱即用)
默认只支持现代浏览器(支持原生 ESM 语法的 script 标签,原生 ESM 动态导入,import.meta)

默认建议使用原生 CSS.其他的 css 预处理器需要安装依赖.

### vue 的[工具链](https://cn.vuejs.org/guide/scaling-up/tooling.html)

### vue router

### node.js 的 typescript 提示

```bash
npm i -D @types/node
```

## 为了适配移动端，准备使用移动端UI库

选择有赞Vant
https://github.com/youzan/vant
目前还是在vite体系下使用，以后再考虑Rsbuild 

优先考虑移动端适配

```bash
pnpm add vant
```