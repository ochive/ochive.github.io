# ochive.github.io

Thanks to [Github Pages](https://docs.github.com/cn/pages/getting-started-with-github-pages/creating-a-github-pages-site)!

基于https://gitee.com/mudking/front-end-samples/tree/master/vite-vue3-element-ui

这个项目目的是玩耍VUE3相关生态的各种技能.因此代码最好不要依赖特定UI库.

使用Vite作为构架工具.
vite的项目模板代码是官方的create-vue项目.

因此考虑与时俱进, 多多用pnpm update升级项目依赖

## github pages

https://www.cnblogs.com/Marco-hui/p/12155936.html

注意，vue项目显然需要打包后，部署到服务器上，才能正常在浏览器中访问。单纯的项目代码是无法被github pages运行的。
因此我的master分支用于代码开发，另开了一个github-pages用于发布打包后的代码。
```
git branch github-pages
git checkout github-pages
```

## 内容

github pages
	1.常用软件记录维护，提供增删改查功能
	2.一些做的小游戏放上去，挂链接

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 其他内容

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
