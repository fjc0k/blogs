---
title: 如何在电脑上安装 IE 各版本
date: 2018-08-01 21:54:13
tags:
  - IE
categories: 瞎折腾
---

在开发项目时会遇到兼容 IE 的需求，而往往自带的 IE 版本不能很好得满足测试需求，这就得寻求一种解决方案。
<!-- more -->

# 安装虚拟机软件

这里我们选择免费开源的 [VirtualBox](https://www.virtualbox.org/)。

进入其下载页面，按需下载即可：

[https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)

# 下载 IE 镜像

进入微软官方提供的下载页面：

[https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)

选择 IE 版本以及虚拟机软件，点击下载并将下载好的文件解压：

![](/images/2018-08-05-21-07-17.png)

# 导入 IE 镜像

打开 VirtualBox，点击 `管理 > 导入虚拟电脑` 选择上一步解压出来的文件即可：

![](/images/2018-08-05-21-11-40.png)

