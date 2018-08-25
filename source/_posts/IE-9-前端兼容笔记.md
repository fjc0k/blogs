---
title: IE 9 前端兼容笔记
date: 2018-08-25 21:57:45
tags:
  - 前端
  - IE9
  - 兼容
categories: 学习笔记
---

最近在弄一个需要兼容 `IE 9` 的项目，踩了不少坑，记录一下。
<!-- more -->

# 安装 IE 9

要兼容 `IE 9`，就得先安装 `IE 9`，如何安装可参考： {% post_link 如何在电脑上安装-IE-各版本 %}。

# HTML 不兼容情况

- 输入框不支持 <span style="color:#FF6969">placeholder</span> 属性。
- 输入框不支持 <span style="color:#FF6969">number</span>, <span style="color:#FF6969">search</span>, <span style="color:#FF6969">range</span>, <span style="color:#FF6969">email</span>, <span style="color:#FF6969">tel</span>, <span style="color:#FF6969">url</span> 等类型。

更多信息可参考：[https://caniuse.com/#compare=ie+9,ie+10](https://caniuse.com/#compare=ie+9,ie+10)

# JavaScript 兼容情况

JavaScript 的不兼容大可利用 polyfills 解决。但以下两点需特别注意：

- `文件上传` 这块，其不支持 <span style="color:#FF6969">FormData</span>，因此涉及 **文件异步上传** 时最好使用 `flash` 方式。
- `跨域请求（CORS）` 这块，其仅支持使用 `XDomainRequest` 发起 `GET` 或 `POST` 类型的跨域请求，而且 **无法携带 Cookies**。同时，它还 **不会返回请求结果的状态码**，因此，如果你使用 `axios` 等封装了 `XDomainRequest` 的包作为 HTTP 客户端，切记不要根据 `status` 是否等于 `200` 判断请求是否得到有效响应。

# CSS 兼容情况

下面列出一些常用 CSS 特性或属性的兼容情况。更详细的兼容信息在这里：<a href="https://msdn.microsoft.com/en-us/library/hh781508(v=vs.85).aspx">CSS Compatibility in Internet Explorer (Internet Explorer)</a>

## 不支持

- <span style="color:#FF6969">flexbox</span>
- <span style="color:#FF6969">transform</span>（3D）
- <span style="color:#FF6969">animation</span>
- <span style="color:#FF6969">transition</span>
- <span style="color:#FF6969">gradient</span>
- <span style="color:#FF6969">appearance</span>
- <span style="color:#FF6969">user-select</span>

## 支持

- <span style="color:#1AAD19">transform</span>（2D）
- <span style="color:#1AAD19">box-sizing</span>
- <span style="color:#1AAD19">calc()</span>
- <span style="color:#1AAD19">rem</span>
- <span style="color:#1AAD19">vw, vh</span>