
```js
{
  "name": "vue3-scaffold",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.45"
  },
  "devDependencies": {
    // Vite 为 Vue 提供第一优先级支持
    // Vue 3 单文件组件支持
    "@vitejs/plugin-vue": "^4.0.0",
    // Vue 3 JSX 支持
    // @vitejs/plugin-vue-jsx
    "typescript": "^4.9.3",
    "vite": "^4.0.0",
    "vue-tsc": "^1.0.11"
  }
}

```