
### 简介

这个插件是在 “[禅道开源版LDAP插件](https://github.com/it-noob/zentao-ldap)” 上基础进行的修正，经验证可在 禅道开源版 18.6 上正常运行

### 安装

1.打包 ldap 文件夹为 ldap.zip 文件

2.创建文件：

touch /www/zentaopms/www/ok.txt

> 注：禅道官方为了安全，要求系统确认管理员身份：登录禅道所在的服务器，创建/www/zentaopms/www/ok.txt文件。

3.admin 账户登陆禅道，后台 -> 插件 -> 本地安装，选择打包的 ldap.zip 文件安装即可

### 配置示例

使用uid作为登录域账号账户

|  选项   | 示例值  |
|  ----  | ----  |
| LDAP服务器  | 	ldap://192.168.32.203:389 |
| 协议版本  | 3 |
| BindDN  | cn=admin,dc=mylitboy,dc=com |
| BindDN 密码  | ou=users,dc=mylitboy,dc=com |
| Search filter  | (objectClass=person) |
| 账号字段  | 	uid |
| EMail 字段  | 	mail |
| 姓名字段  | 	cn |

使用SamAccountName作为登录域账号账户

|  选项   | 示例值  |
|  ----  | ----  |
| LDAP服务器  | 	ldap://192.168.32.203:389 |
| 协议版本  | 3 |
| BindDN  | cn=admin,dc=mylitboy,dc=com |
| BindDN 密码  | ou=users,dc=mylitboy,dc=com |
| Search filter  | (objectClass=person) |
| 账号字段  | 	samaccountname |
| EMail 字段  | 	mail |
| 姓名字段  | 	cn |

> 参考 https://blog.mylitboy.com/article/operation/zentao-config-ldap.html

### 从钉钉同步信息到ldap

> 参考 https://github.com/anjia0532/virtual-ldap

### FAQ

- 
  - 问：开启这个插件后无法登录本地账户
  - 答：本地账户需要加上 `$` 前缀来登录
- 
  - 问: <del>连接是 ok 但是同步了 0 位用户</del>
  - 答: <del>这种情况的话, 保存设置后再点击手动同步就可以正常同步(原来的版本就有的问题懒得改了</del>) 
    <br/>注意: 在插件v1.3.5版本已修复该问题！

### 更新

#### 1.3.5

- FIX:
  - 修复页面上配置的LDAP属性名称中含有大写字母时用户数据同步失败的问题
  - 修复用户数据没有实际入库，页面同步结果提示数据不准确的问题
  
- CHANGE:
  - 细化用户数据同步结果的提示信息：拆分并准确提示本次新增用户数和更新数
