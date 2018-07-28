---
title: Vue 中 computed 计算属性的应用场景
date: 2018-07-26 00:10:46
tags:
  - Vue
  - computed
  - 计算属性
categories: Vue
---

计算属性是 Vue 组件的一个重要内容，它具有 `分离逻辑`、`缓存值`、`双向绑定` 等作用或功能。
<!-- more -->

# 分离逻辑

需求如下：

```js
// 给定文本 text，去除其首尾空白，然后将其反转显示。
// 例：
const text = '花谢花飞花满天'
// ==> 天满花飞花谢花
```

不使用计算属性，代码长这样：

```html
<template>
  <div id="example">
    {{ text.split('').reverse().join('') }}
  </div>
</template>

<script>
export default {
  data: () => ({
    text: '花谢花飞花满天'
  })
}
</script>
```

使用计算属性后，代码长这样：

```html
<template>
  <div id="example">
    {{ normalizedText }}
  </div>
</template>

<script>
export default {
  data: () => ({
    text: '花谢花飞花满天'
  }),
  computed: {
    normalizedText() {
      return this.text.split('').reverse().join('')
    }
  }
}
</script>
```

显而易见，使用计算属性后，相关逻辑放在了 `computed` 选项内，模板更干净了：

<p data-height="300" data-theme-id="34125" data-slug-hash="ejEjyN" data-default-tab="html,result" data-user="fjc0k" data-pen-title="Vue 中 computed 计算属性的应用场景 - 分离逻辑" class="codepen">See the Pen <a href="https://codepen.io/fjc0k/pen/ejEjyN/">Vue 中 computed 计算属性的应用场景 - 分离逻辑</a> by Jay Fong (<a href="https://codepen.io/fjc0k">@fjc0k</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# 缓存值

接上例，如果我们不去改变 `text` 的值，那么 `normalizedText` 就不会重新计算，也就是说，`normalizedText` 会缓存其求值结果，直到其依赖 `text` 发生改变。我们可以测试一下：

<p data-height="300" data-theme-id="34125" data-slug-hash="OwjoxL" data-default-tab="html,result" data-user="fjc0k" data-pen-title="Vue 中 computed 计算属性的应用场景 - 缓存值" class="codepen">See the Pen <a href="https://codepen.io/fjc0k/pen/OwjoxL/">Vue 中 computed 计算属性的应用场景 - 缓存值</a> by Jay Fong (<a href="https://codepen.io/fjc0k">@fjc0k</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# 双向绑定

我们可以利用计算属性的 `getter` 和 `setter` 实现数据的双向绑定：

<p data-height="300" data-theme-id="34125" data-slug-hash="xJLyXN" data-default-tab="html,result" data-user="fjc0k" data-pen-title="Vue 中 computed 计算属性的应用场景 - 双向绑定" class="codepen">See the Pen <a href="https://codepen.io/fjc0k/pen/xJLyXN/">Vue 中 computed 计算属性的应用场景 - 双向绑定</a> by Jay Fong (<a href="https://codepen.io/fjc0k">@fjc0k</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>