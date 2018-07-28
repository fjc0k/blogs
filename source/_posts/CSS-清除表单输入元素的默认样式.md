---
title: CSS 清除表单输入元素的默认样式
date: 2018-07-19 21:24:06
tags:
  - CSS
  - 表单
  - 重置样式
categories: CSS
---

在开发表单相关组件时，常常会基于原生 HTML 输入元素进行设计。此时，往往会要求对原生元素的样式进行重置。那么，该如何清除原生元素的样式呢？
<!-- more -->

踩过一些坑后，分享一下我的 CSS：

```css
.form-field-reset {
  border: 0;
  border-radius: 0; /* iOS */
  outline: 0;
  margin: 0;
  padding: 0;
  resize: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  color: inherit;
  font: inherit;
  line-height: inherit;
  vertical-align: middle;
  background-color: transparent;
}
```