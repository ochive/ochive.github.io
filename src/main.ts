import { createApp } from "vue";
import "./main.css";
import App from "./App.vue";
import { router } from "./router";
// vant所有组件.由于支持 Tree Shaking，编译时会自动移除不需要的组件的js代码。但css样式不支持。
import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css';
// import { registerIcons } from "./icons";

const app = createApp(App);

app.use(router);

// 完整导入Element所有组件
app.use(Vant);
// 注册所有图标
// registerIcons(app);
// 注册其他组件


// 将app的DOM挂载到HTML的id=app的div中.
app.mount("#app");
