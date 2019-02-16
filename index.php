<?php

require_once 'vendor/autoload.php';

$config['path']['root'] = getcwd().'/';
$config['path']['modules'] = getcwd().'/modules/';
$config['db']['db'] = 'acod';
$config['db']['host'] = '127.0.0.1';
$config['db']['user'] = 'root';
$config['db']['password'] = 'qweqwe22';

$config['modules'] = [
    '_Database' => ['version' => '1.0'],
    '_Authorization' => ['version' => '1.0'],
    'Tpl' => ['version' => '1.0'],
];


// Ядро
include_once $config['path']['modules'].'_Core/1.0/Core.php';

// Запуск шаблонизатора

ob_start();
ob_get_clean();

//$res = query('SELECT * FROM acod.users');
//$res = query('SELECT fgs FROM acod.users');