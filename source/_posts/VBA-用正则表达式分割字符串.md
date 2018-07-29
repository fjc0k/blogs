---
title: VBA | 用正则表达式分割字符串
date: 2018-07-08 16:43:23
tags:
  - VBA
  - 正则表达式
categories: 学习笔记
---

在 VBA 中用正则表达式分割字符串是一个常见的需求，然而 VBA 中并无内置的方法解决这一痛点，于是自己写了个函数实现了该功能。
<!-- more -->

# 需求

有文本如下：

    1.乍暖还轻冷，风雨晚来方定。
    2.对潇潇暮雨洒江天，一番洗清秋。
    3.缺月挂疏桐，漏断人初静。

需将之处理为数组：

```vb
Array( _
  "乍暖还轻冷，风雨晚来方定。", _
  "对潇潇暮雨洒江天，一番洗清秋。", _
  "缺月挂疏桐，漏断人初静。" _
)
```

# 实现

```vb
Function RegExpSplit(str As String, delimiter As String)
  Dim RegExpObj As Object
  Set RegExpObj = CreateObject("VBScript.Regexp")
  With RegExpObj
    .Global = True
    .Pattern = delimiter
  End With
  RegExpSplit = Split( _
    RegExpObj.Replace(str, vbNullChar), _
    vbNullChar _
  )
End Function

Sub main()
  Dim str As String, i As Integer, n As Integer
  Let str = "1.乍暖还轻冷，风雨晚来方定。" & Chr(10) & _
            "2.对潇潇暮雨洒江天，一番洗清秋。" & Chr(10) & _
            "3.缺月挂疏桐，漏断人初静。"
  Dim arr: arr = RegExpSplit(str, "(^|\n)\d+\.")
  Let n = UBound(arr)
  ReDim newArr(1 To n)
  For i = 1 To n
    newArr(i) = arr(i)
  Next
  Debug.Print Join(newArr, "||")
  ' 输出: 乍暖还轻冷，风雨晚来方定。||对潇潇暮雨洒江天，一番洗清秋。||缺月挂疏桐，漏断人初静。
End Sub
```