<?php

require_once 'vendor/autoload.php';

$config['debug'] = true;

// ROOT сайта
$config['path']['root'] = getcwd() . '/';

// Папка с модулями
$config['path']['modules'] = getcwd() . '/../modules/';

// Папка с api методами
$config['path']['methods'] = getcwd() . '/site/controllers/methods/';

$config['db']['db'] = 'acod';
$config['db']['host'] = '127.0.0.1';
$config['db']['user'] = 'postgres';
$config['db']['password'] = '';
$config['db']['type'] = 'pgsql';

// Подключаемые модули
$config['modules'] = [

    // Роутер
    '_Router' => ['version' => '1.0'],

    // Валидатор
    'MultiValidator' => ['version' => '1.0'],

    // Работа с БД
    '_Database' => ['version' => '1.0', 'scripts' => false],

    // Работа с зарузкой файлов
    '_FileLoader' => ['version' => '1.0', 'scripts' => false],

    // Авторизация
    '_Authorization' => ['version' => '1.0', 'scripts' => false],

    // Шаблонизатор
    'Tpl' => ['version' => '1.0', 'scripts' => false],

    // Админ-панель
    '_AdminPanel' => ['version' => '1.0', 'scripts' => false],

];

// Ядро
include_once $config['path']['modules'] . '_Core/1.0/Core.php';


//ob_start();
//ob_get_clean();


$pdo = null;
