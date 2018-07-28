---
title: 在 Markdown Table 的单元格中书写分隔号
date: 2018-07-28 20:35:18
tags:
  - Markdown
  - 分隔号
categories: 编程人生
---

在用 Markdown 写表格时，有时需要在单元格内容里插入分隔号—— `|` ，然而，这个符号又是单元格之间的界定符，直接使用会造成冲突。因此，我们需另辟蹊径。
<!-- more -->

# 加 \ 转义

这种方法适用于 GitHub：

```markdown
参数 | 可选值
-----|----------------
size | small \| large
```

# 使用 HTML 实体

就是用 `&#124;` 或者 `&#x7c;` 来表示 `|`：

```markdown
参数 | 可选值
-----|--------------------
size | small &#124; large
```

不过这种方法在与行内代码合用时会原形毕露：

```markdown
参数 | 可选值
-----|----------------------
size | `small &#124; large`
```

不过我们可以使用 HTML 方式来写行内代码，冲突得以解决：

```markdown
参数 | 可选值
-----|----------------------------------
size | <code>small &#124; large</code>
```

# 使用相近符号

`|` 兄弟颇多，可选一个做其替身：

形状                    | Unicode                                   | 含义
------------------------|-------------------------------------------|--------------------------------------
&#124;<sub>（本尊）</sub> | [U+007C](http://graphemica.com/%7C)       | Vertical line
⏐                       | [U+23D0](http://graphemica.com/%E2%8F%90) | Vertical line extension
∣                       | [U+2223](http://graphemica.com/%E2%88%A3) | Symbol 'divides'
⃒                       | [U+20D2](http://graphemica.com/%E2%83%92) | Combining long vertical line overlay
│                       | [U+2502](http://graphemica.com/%E2%94%82) | Box drawings light vertical
❘                       | [U+2758](http://graphemica.com/%E2%9D%98) | Light vertical bar
￨                       | [U+FFE8](http://graphemica.com/%EF%BF%A8) | Halfwidth forms light vertical