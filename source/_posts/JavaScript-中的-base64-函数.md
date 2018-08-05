---
title: JavaScript 中的 base64 函数
date: 2018-08-05 21:21:42
tags:
  - base64
categories: JavaScript
---

这里的 `base64` 函数指浏览器实现的 `btoa` 和 `atob`，初使用，会很奇怪，为什么不是 `base64Encode` 和 `base64Decode`？
<!-- more -->

# 命名

关于为何使用 `btoa` 和 `atob` 命名，JavaScript 的发明者 `Brendan Eich` 如是说：

> Old Unix names, hard to find man pages rn but see [https://www.unix.com/man-page/minix/1/btoa/](https://www.unix.com/man-page/minix/1/btoa/) The names carried over from Unix into the Netscape codebase. I reflected them into JS in a big hurry in 1995 (after the ten days in May but soon).
>
> 参见：[https://twitter.com/BrendanEich/status/998618208725684224](https://twitter.com/BrendanEich/status/998618208725684224)

为了方便记忆，标准这样解释：

> In these APIs, for mnemonic purposes, the "b" can be considered to stand for "binary", and the "a" for "ASCII". In practice, though, for primarily historical reasons, both the input and output of these functions are Unicode strings.
>
> 参见：[https://html.spec.whatwg.org/multipage/webappapis.html#atob](https://html.spec.whatwg.org/multipage/webappapis.html#atob)

我们可以这样理解：

- `b` 代表 `binary`，表示任意的数据。
- `a` 代表 `ASCII`，表示 base64 字符串，因为 base64 编码后的字符串只能由 `A-Z`、`a-z`、`0-9`、`+`、`/`、`=` 等 `ASCII` 字符构成。

# 兼容性

`btoa` 和 `atob` 可在 IE9 以上的现代浏览器中使用：[https://caniuse.com/#feat=atob-btoa](https://caniuse.com/#feat=atob-btoa)。

# 使用

`btoa` 表示编码：

```js
document.write(btoa('Jay'))
/* ↓↓↓↓↓↓ */
```

<script>document.write(btoa('Jay'))</script>

`atob` 表示解码：

```js
```js
document.write(atob('SmF5'))
/* ↓↓↓↓↓↓ */
```

<script>document.write(atob('SmF5'))</script>

# 支持中文

由于 `btoa` 和 `atob` 仅仅支持对在 Latin1 范围的字符进行 base64 编解码，因此在处理中文等 Unicode 字符时，需先进行编码转换：

```js
/**
 * base64 编码
 * @param str 原始字符串
 */
function base64Encode(str) {
  return (
    btoa( // 对 Latin1 字符串进行 base64 编码
      unescape( // 使用 Latin1 解码转义序列
        encodeURIComponent( // 用一到四个转义序列来表示字符串中的每个字符的 UTF-8 编码
          str
        )
      )
    )
  )
}

/**
 * base64 解码
 * @param str 加密字符串
 */
function base64Decode(str) {
  return (
    decodeURIComponent( // 使用 UTF-8 解码转义序列
      escape( // 使用 Latin1 转义字符串
        atob( // 解码 base64 字符串
          str
        )
      )
    )
  )
}

// 测试
document.write(base64Encode('中国'))
document.write('<br />')
document.write(base64Decode('5Lit5Zu9'))
/* ↓↓↓↓↓↓ */
```

<script>
/**
 * base64 编码
 * @param str 原始字符串
 */
function base64Encode(str) {
  return (
    btoa(
      unescape(
        encodeURIComponent(
          str
        )
      )
    )
  )
}

/**
 * base64 解码
 * @param str 加密字符串
 */
function base64Decode(str) {
  return (
    decodeURIComponent(
      escape(
        atob(
          str
        )
      )
    )
  )
}

// 测试
document.write(base64Encode('中国'))
document.write('<br />')
document.write(base64Decode('5Lit5Zu9'))
</script>