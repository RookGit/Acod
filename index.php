<?php

require_once 'vendor/autoload.php';

$config['debug'] = true;

$config['has_env'] = true;

// ROOT сайта
$config['path']['root'] = getcwd() . '/';

// Папка с модулями
$config['path']['modules'] = getcwd() . '/../modules/';

// Папка с api методами
$config['path']['methods'] = getcwd() . '/site/controllers/api/methods/';

// Папка с контроллерами
$config['path']['controllers'] = getcwd() . '/site/controllers/';

// Папка с классами
$config['path']['classes'] = getcwd() . '/site/classes/';

// Папка с mvc
$config['path']['mvc'] = getcwd() . '/site/';

$config['db']['db'] = 'acod';
$config['db']['host'] = '127.0.0.1';
$config['db']['user'] = 'postgres';
$config['db']['password'] = '';
$config['db']['type'] = 'pgsql';

// Подключаемые модули
$config['modules'] = [

    // Админ-панель
    '_AdminPanel' => ['version' => '1.0', 'scripts' => false],

];

// Ядро
include_once $config['path']['modules'] . '_Core/1.0/Core.php';

//ob_start();
//ob_get_clean();


$pdo = null;
