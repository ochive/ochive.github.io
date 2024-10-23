import { createApp } from "vue";
import "./main.css";
import App from "./App.vue";
import { router } from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { registerIcons } from "./icons";

const app = createApp(App);

app.use(router);

// 完整导入Element所有组件
app.use(ElementPlus);
// 注册所有图标
registerIcons(app);
// 注册其他组件


// 将app的DOM挂载到HTML的id=app的div中.
app.mount("#app");
