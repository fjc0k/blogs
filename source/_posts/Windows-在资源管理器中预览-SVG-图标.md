---
title: Windows 在资源管理器中预览 SVG 图标
date: 2018-07-08 00:28:23
tags:
  - Windows
  - 资源管理器
  - SVG
categories: 工具
---

很多时候，我们需要在 Windows 的资源管理器中预览 SVG 图标，就像预览 JPG、PNG 等图片一样，那如何做到呢？
<!-- more -->

# 下载 SVG 预览扩展

打开链接 [https://github.com/maphew/svg-explorer-extension/releases](https://github.com/maphew/svg-explorer-extension/releases)，下载一个适合你电脑的版本。

# 清空缓存

打开 cmd 窗口，输入以下命令清空缓存：

```bash
TASKKILL /IM explorer* /F
DEL "%localappdata%\IconCache.db" /A
explorer.exe
```

# 最后

愉快地预览 SVG 图标吧~

![](/images/2018-07-08-00-38-17.png)