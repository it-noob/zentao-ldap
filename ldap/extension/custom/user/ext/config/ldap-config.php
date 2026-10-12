<?php
// LDAP 登录需要原始密码
$config->notMd5Pwd = true;
// 重新设置用户名验证规则，以兼容邮箱形式
$config->accountRule = '|^[a-zA-Z0-9_]{1}[a-zA-Z0-9_@\.]{1,}[a-zA-Z0-9_]{1}$|';
