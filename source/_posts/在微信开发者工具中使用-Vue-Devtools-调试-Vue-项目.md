---
title: 在微信开发者工具中使用 Vue Devtools 调试 Vue 项目
date: 2018-09-18 10:32:32
tags:
  - 微信开发者工具
  - Vue
  - Vue Devtools
  - 调试
categories: Vue
---

使用 [Vue](https://github.com/vuejs/vue) 开发微信项目时，一般会用到[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，它虽然提供了熟悉的 Chrome 开发者面板，但却不支持插件的安装，这就导致不能通过安装插件的方式来使用 [Vue Devtools](https://github.com/vuejs/vue-devtools) 调试 Vue 项目。

好在 Vue Devtools 提供了一个独立的版本，可对运行在任意环境里的 Vue 项目进行调试，本文要讲的就是它。
<!-- more -->

# Vue CLI 3

本文所讲的项目是通过 [Vue CLI 3](https://cli.vuejs.org/zh/guide/installation.html) 生成的。

# Vue Devtools (独立版本)

首先，在项目里安装 Vue Devtools：

```bash
yarn add @vue/devtools -D
# 或者
npm install @vue/devtools -D
```

然后，打开 `public/index.html`，在 `<head>` 标签内加上下面这句，表示只在开发环境启用调试服务：

```html
<% if (NODE_ENV === 'development') { %>
  <script src="http://localhost:8098"></script>
<% } %>
```

# NPM 脚本

首先，我们在 `package.json` 的 `scripts` 字段加上如下命令：

```json
{
  "scripts": {
    "start-devtools": "vue-devtools"
  }
}
```

然后，就可以通过 `yarn start-devtools` 或 `npm run start-devtools` 启动调试服务了。

# 开始开发

```bash
yarn serve
```

# 如何同时启动调试服务和开发服务？

如上，我们要先启动调试服务，再启动开发服务，能不能将这两步合在一起呢？

答案是可以的。

首先，安装 [npm-run-all](https://github.com/mysticatea/npm-run-all)：

```bash
yarn add npm-run-all -D
# 或者
npm install npm-run-all -D
```

接着，在 `package.json` 的 `scripts` 字段新增命令：

```json
{
  "scripts": {
    "dev": "run-p start-devtools serve"
  }
}
```

最后，通过 `yarn dev` 或 `npm run dev` 开始开发和调试。