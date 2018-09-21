---
title: CentOS 使用 DenyHosts 防止暴力破解 SSH 登录
date: 2018-09-22 06:22:44
tags:
  - CentOS
  - DenyHosts
  - SSH
categories: 瞎折腾
---

[**DenyHosts**](https://github.com/denyhosts/denyhosts) 是针对 SSH 服务器的一个基于日志的入侵预防安全工具，其通过监测身份验证登录日志中失败的登录尝试，屏蔽这些登录者的 IP 地址，从而预防对 SSH 服务器的暴力破解。
<!-- more -->

# 安装

首先，安装 EPEL 源：

```bash
yum install epel-release
```

然后，安装 DenyHosts：

```bash
yum install denyhosts
```

# 启动

加入开机自启：

```bash
systemctl enable denyhosts
systemctl restart denyhosts
```

启动 DenyHosts：

```bash
service denyhosts start
```

查看 DenyHosts 状态：

```bash
service denyhosts status
```

查看 DenyHosts 收集到的恶意 IP：

```bash
cat /etc/hosts.deny
```

# 配置

`/etc/denyhosts.conf`：

```bash
############ THESE SETTINGS ARE REQUIRED ############
#sshd的日志文件
SECURE_LOG = /var/log/secure 
#将阻止IP写入到hosts.deny,所以这个工具只支持 支持tcp wrapper的协议     
HOSTS_DENY = /etc/hosts.deny 
#过多久后清除已阻止的IP,即阻断恶意IP的时长  （4周）   
PURGE_DENY = 4w 
#阻止服务名   
BLOCK_SERVICE  = sshd
#允许无效用户登录失败的次数     
DENY_THRESHOLD_INVALID = 5
#允许普通有效用户登录失败的次数   
DENY_THRESHOLD_VALID = 10  
#允许root登录失败的次数  
DENY_THRESHOLD_ROOT = 1   
#设定 deny host 写入到该资料夹   
DENY_THRESHOLD_RESTRICTED = 1
#将deny的host或ip记录到work_dir中      
WORK_DIR = /var/lib/denyhosts      
SUSPICIOUS_LOGIN_REPORT_ALLOWED_HOSTS=YES
#是否做域名反解   
HOSTNAME_LOOKUP=YES  
#将DenyHost启动的pid记录到LOCK_FILE中，已确保服务正确启动，防止同时启动多个服务  
LOCK_FILE = /var/lock/subsys/denyhosts    

############ THESE SETTINGS ARE OPTIONAL ############
#设置管理员邮件地址 例如****@163.com
ADMIN_EMAIL = root  
SMTP_HOST = localhost  
SMTP_PORT = 25  
SMTP_FROM = DenyHosts &lt;nobody@localhost&gt;  
SMTP_SUBJECT = DenyHosts Report from $[HOSTNAME]  
AGE_RESET_VALID=5d  
AGE_RESET_ROOT=25d  
AGE_RESET_RESTRICTED=25d  
AGE_RESET_INVALID=10d

######### THESE SETTINGS ARE SPECIFIC TO DAEMON MODE  ##########
#denyhost服务日志文件
DAEMON_LOG = /var/log/denyhosts  

DAEMON_SLEEP = 30s 
#该项与PURGE_DENY 设置成一样，也是清除hosts.deniedssh 用户的时间 
DAEMON_PURGE = 1h      
```