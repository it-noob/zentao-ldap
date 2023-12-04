<?php
/* 解决左上角菜单显示的问题 */
if(($ldapMenuKey =  array_search('ldap', $config->admin->menuGroup['system']))) {
    unset($config->admin->menuGroup['system'][$ldapMenuKey]);
}
array_push($config->admin->menuGroup['company'], 'ldap');

