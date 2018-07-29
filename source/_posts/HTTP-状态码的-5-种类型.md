---
title: HTTP 状态码的 5 种类型
date: 2018-07-15 15:36:20
tags:
  - HTTP
  - 状态码
categories: 学习笔记
---

HTTP 状态码是用以表述网页服务器状态的 `3位数字代码`，状态码的第一个数字代表了 `5种` 不同的状态类型。
<!-- more -->

类型 | 说明                                                                | 示例
-----|---------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------
1xx  | **消息**，代表请求已被接受，需要继续处理。                             | 100 Continue
2xx  | **成功**，代表请求已成功被服务器接收、理解、并接受。                    | 200 OK
3xx  | **重定向**，代表需要客户端采取进一步的操作才能完成请求。              | 301 Moved Permanently<br>302 Found (Moved Temporarily)<br>304 Not Modified<br>307 Temporary Redirect<br>308 Permanent Redirect
4xx  | **客户端错误**，代表了客户端看起来可能发生了错误，妨碍了服务器的处理。 | 400 Bad Request<br>401 Unauthorized<br>403 Forbidden<br>404 Not Found
5xx  | **服务器错误**，代表服务器无法完成明显有效的请求。                    | 500 Internal Server Error<br>502 Bad Gateway<br>503 Service Unavailable