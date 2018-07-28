---
title: 使用 JavaScript 验证中国手机号码和座机号码
date: 2018-07-28 15:28:54
tags:
  - 电话号码验证
  - 正则表达式
categories: JavaScript
---

实际项目中，对电话号码的验证是一个很频繁的需求。找了一圈网上的开源验证库，并未寻得一款称心如意的作品。它们要么验证条件古老，不适应时代发展；要么验证太死，对未来可能出现的新号段不友好。于是，我打算自造轮子。
<!-- more -->

# 电信网编号计划（2017年版）

几经搜索，我找到了管理中国电话号码资源的官方组织——`中国工信部`，在其子网站 [电信业务综合资源管理系统](http://miinac.gov.cn/components/newhome/index.jsp) 中，我找到了 [电信网编号计划（2017年版）](http://miinac.gov.cn/components/Notice.action?doType=view&id=150951611150068143993)。计划提供了以下关键信息：

## 号码结构

### 固定网电话号码

我国固定网电话号码采用长途区号的结构，即：

`国家码（86）+ 长途区号 + 本地用户号码`

固定网电话号码采用不等位编号，国内有效号码最大位长为 `11` 位。本地用户号码总位长 `7/8` 位并存。

### 移动网电话号码

我国移动网电话号码采用网号的结构，即：

`国家码（86）+ 网号 + HLR 识别号（H0H1H2H3）+ 用户号码（ABCD）`

公众移动网电话号码网号为 `3` 位，采用等位编号，国内有效号码位长为 `11` 位。

## 号段分配

### 首位为 `1`

首位为 `1` 的号码原则上应作为全国统一使用的号码，按照号码用途可以分为 `业务号码` 和 `用户号码`。其规划为：

![](/images/2018-07-28-16-13-39.png)

### 首位为 `2~8`

首位为 `2~8` 的号码是在本地范围内使用的号码，主要用作固定本地电话网的用户号码。部分首位为 `2~8` 的号码还用作全国和省内智能业务的接入码。

### 首位为 `9`

`92` 和 `98` 号段号码 **规划** 用于 `公众移动通信网` 电话号码，采用等位编号，国内有效号码位长为 `11` 位，根据情况适时启用。其它首位为 `9` 的号码为全国性业务或备用。

## 我国固定电话网长途区号

区号长度为 `2~3` 位，且首位不为 `0`。

# 使用 JavaScript 验证中国手机号码和座机号码

综合以上信息，我写了以下正则验证电话号码：

**注：** 手机号码验证的严格模式下，使用的号段是上述计划所述的 `公众移动通信网网号`，并不保证其已被电信运营商开通运营。

号码类型 | 宽松模式 | 严格模式
---|---|---
手机 | 宽松的号段验证：`/^1[3-9][0-9]{9}$/` | 较严格的号段验证：<code>/^1(?:3[0-9]&#124;4[5-9]&#124;5[0-9]&#124;6[12456]&#124;7[0-8]&#124;8[0-9]&#124;9[0-9])[0-9]{8}$/</code>
座机 | 区号可选：`/^(?:0[1-9][0-9]{1,2}-)?[2-8][0-9]{6,7}$/` | 区号必填：`/^0[1-9][0-9]{1,2}-[2-8][0-9]{6,7}$/`

并发布了 [is-chinese-phone-number](https://github.com/fjc0k/is-chinese-phone-number) 包：

## 安装

```bash
# yarn
yarn add is-chinese-phone-number

# or, npm
npm i is-chinese-phone-number
```

CDN：[jsDelivr](https://www.jsdelivr.com/package/npm/is-chinese-phone-number) | [UNPKG](https://unpkg.com/is-chinese-phone-number/) （可通过全局变量 `isChinesePhoneNumber` 使用）


## 使用

### 验证中国电话号码

语法：

```typescript
isChinesePhoneNumber(phoneNumber: string | number, strict: boolean = false): boolean
```

示例：

```javascript
isChinesePhoneNumber('10086') // ==> false
isChinesePhoneNumber('18087030020') // ==> true
isChinesePhoneNumber('010-88888888') // ==> true
```

### 验证中国手机号码

语法：

```typescript
isChinesePhoneNumber.mobile(phoneNumber: string | number, strict: boolean = false): boolean
```

示例：

```javascript
isChinesePhoneNumber.mobile('10086') // ==> false
isChinesePhoneNumber.mobile('18087030020') // ==> true
isChinesePhoneNumber.mobile('010-88888888') // ==> false
```

### 验证中国座机号码

语法：

```typescript
isChinesePhoneNumber.landline(phoneNumber: string | number, strict: boolean = false): boolean
```

示例：

```javascript
isChinesePhoneNumber.landline('10086') // ==> false
isChinesePhoneNumber.landline('18087030020') // ==> false
isChinesePhoneNumber.landline('010-88888888') // ==> true
```