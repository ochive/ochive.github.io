/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// import logo from "@/assets/logo.png";
declare module '*.png' {
  const value: any
  export = value
}

declare module '*.tsx'
declare module '*.scss'