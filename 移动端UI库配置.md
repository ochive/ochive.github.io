

## 适配移动端，引入移动端UI库

选择有赞Vant
https://github.com/youzan/vant
https://vant.pro/vant/#/zh-CN

### 安装依赖

```bash
pnpm add vant
```

### 向vue中引入组件

使用常规方式引入，不使用[按需引入](https://vant.pro/vant/#/zh-CN/quickstart#fang-fa-er.-an-xu-yin-ru-zu-jian-yang-shi)了。

```js
// vant所有组件.由于支持 Tree Shaking，编译时会自动移除不需要的组件的js代码。但css样式不支持。
import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css';

app.use(Vant);
```

### [组件的基本使用](https://vant.pro/vant/#/zh-CN/advanced-usage)


在 <script setup> 中可以直接使用 Vant 组件，不需要进行组件注册。引入即可

```vue
<script setup>
  import { Button } from 'vant';
</script>

<template>
  <Button />
</template>
```

在 JSX 和 TSX 中可以直接使用 Vant 组件，不需要进行组件注册。

## 图标

https://vant.pro/vant/#/zh-CN/icon

引入
```js
import { createApp } from 'vue';
import { Icon } from 'vant';

const app = createApp();
app.use(Icon);
```

使用
```vue
<!-- 基础图标库 -->
<van-icon name="chat-o" color="red" size="3rem" />
<!-- 在 name 属性中传入一个图片 URL 来作为图标 -->
<van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" />
```

其他用法参考官方文档，包括badge徽标提示，图标大小，图标颜色，自定义图标等。