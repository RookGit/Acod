<?php

require_once 'vendor/autoload.php';

$config['debug'] = true;

// ROOT сайта
$config['path']['root'] = getcwd() . '/';

// Папка с модулями
$config['path']['modules'] = getcwd() . '/../modules/';

// Папка с api методами
$config['path']['methods'] = getcwd() . '/assets/api/methods/';

$config['db']['db'] = 'acod';
$config['db']['host'] = '127.0.0.1';
$config['db']['user'] = 'postgres';
$config['db']['password'] = '';
$config['db']['type'] = 'pgsql';

// Подключаемые модули
$config['modules'] = [
    '_Database' => ['version' => '1.0', 'scripts' => false],
    '_Authorization' => ['version' => '1.0', 'scripts' => false],
    'Tpl' => ['version' => '1.0', 'scripts' => false],
    'MultiValidator' => ['version' => '1.0'],
];

// Ядро
include_once $config['path']['modules'] . '_Core/1.0/Core.php';


//ob_start();
//ob_get_clean();


$pdo = null;
