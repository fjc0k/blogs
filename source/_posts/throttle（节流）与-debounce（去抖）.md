---
title: throttle（节流）与 debounce（去抖）
date: 2018-09-22 06:42:21
tags:
  - 节流
  - 去抖
categories: JavaScript
---

在开发过程中会遇到频率很高的事件或者连续的事件，如果不进行性能的优化，就可能会出现页面卡顿的现象，比如：

- **鼠标事件**
  - mousemove(拖曳)
  - mouseover(划过)
  - mouseWheel(滚屏)
- **键盘事件**
  - keypress(基于ajax的用户名唯一性校验)
  - keyup(文本输入检验、自动完成)
  - keydown(游戏中的射击)
- **window的resize/scroll事件**
  - DOM元素动态定位

为了解决这类问题，常常使用的方法就是 **throttle(节流)** 和 **debounce(去抖)**。**throttle(节流)** 和 **debounce(去抖)** 都是用来 **控制某个函数在一定时间内执行多少次** 的解决方案，两者相似而又不同。

<!-- more -->

# throttle(节流)

预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新的时间周期。

> throttle 假设你正在乘电梯上楼，当电梯门关闭之前发现有人也要乘电梯，礼貌起见，你会按下开门开关，然后等他进电梯；但是，你是个没耐心的人，**你最多只会等待电梯停留一分钟；在这一分钟内，你会开门让别人进来，但是过了一分钟之后，你就会关门**，让电梯上楼。

## JavaScript 实现

```js
function throttle(action, delay) {
  let timer = null
  let last = null
  return function() {
    const now = +new Date()
    const _action = () => {
      last = now
      fn.apply(this, arguments)
    }
    if (last && now < last + delay) {
      clearTimeout(timer)
      timer = setTimeout(_action, delay)
    } else {
      // 开始结束各触发一次
      _action()
    }
  }
}
```

# debounce(去抖)

当调用动作触发一段时间后，才会执行该动作，若在这段时间间隔内又调用此动作则将重新计算时间间隔。

> debounce 假设你正在乘电梯上楼，当电梯门关闭之前发现有人也要乘电梯，礼貌起见，**你会按下开门开关，然后等他进电梯**；如果在电梯门关闭之前，**又有人来了，你会继续开门**；这样一直进行下去，你可能需要等待几分钟，**最终没人进电梯了，才会关闭电梯门**，然后上楼。

即：**把触发非常频繁的事件合并成一次执行**。

## JavaScript 实现

```js
function debounce(action, delay) {
  let timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(
      action.apply,
      delay,
      this,
      arguments
    )
  }
}
```