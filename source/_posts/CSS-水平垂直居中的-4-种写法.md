---
title: CSS 水平垂直居中的 4 种写法
date: 2018-07-07 18:00:43
tags:
  - 居中
  - 水平居中
  - 垂直居中
categories: CSS
---

本文列举了 4 种常用的 CSS 水平垂直居中的写法：绝对定位居中、负外边距居中、变形居中、Flexbox 居中。
<!-- more -->

# 绝对定位居中

```css
.parent {
  position: relative;
}
.child {
  width: 50%;
  height: 50%; /* 高度必须声明 */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: auto; /* 防止溢出容器 */
  resize: both; /* 支持重绘 */
}
```

# 负外边距居中

```css
.parent {
  position: relative;
}
.child {
  /* 块元素尺寸必须已知, 不支持百分比尺寸 */
  width: 100px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -100px;
}
```

# 变形居中

```css
.parent {
  position: relative;
}
.child {
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

# Flexbox 居中

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```