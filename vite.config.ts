import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import path from "node:path";

console.log("import.meta.url", import.meta.url);
console.log("path.resolve(__dirname)", path.resolve(__dirname));
console.log(new URL("./src", import.meta.url));
console.log(fileURLToPath(new URL("./src", import.meta.url)));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 解决部署到github pages上时不显示的问题。用于指定项目的根路径为当前目录
  base:"./",
  resolve: {
    // 需要和tsconfig.json中的paths配合使用.
    alias: {
      // 按照Vite文档, 文件系统路径的别名, 必须使用绝对路径
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      // 启动对css预处理器less的支持
      less: {
        math: "parens-division",
        // 全局变量
        globalVars: {
          // mainColor: "red",
        },
      },
    },
  },
  // 开发服务器配置.
  server: {
    port: 5173,
    // 监听所有网关, 让局域网通过ip可以访问你的电脑
    host: "0.0.0.0",
    // 注意, 启用代理后, 请求全部应改为请求vite开发服务器.https://github.com/vitejs/vite/discussions/9285
    proxy: {
      "/api": {
        target: "http://172.16.10.3:8080",
        // 修改为target域名, 允许跨域.
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
