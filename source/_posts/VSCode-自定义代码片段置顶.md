---
title: VSCode 自定义代码片段置顶
date: 2018-09-22 06:19:59
tags: VSCode
categories: 工具
---

默认情况下，我们自定义的代码片段在 VSCode 的智能提示中优先级是比较低的，这往往并不符合我们的预期。

那么，我们该如何提升自定义代码片段的优先级呢？
<!-- more -->

首先，打开用户设置。

然后，搜索 `snippet`。

最后，将 `editor.snippetSuggestions` 设为 `top` 即可。