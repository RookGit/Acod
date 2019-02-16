<?php

foreach ($config['modules'] as $k => $v) {
    $name = $k;
    $file = ltrim($k,'_');

    $status = @$v['status'];

    $load_api = @$v['api'];

    // Проверяем нужно ли подгружать модуль если api запрос
    if($load_api === false)
    {
        if($config['api_mode'] === true)
        {
            $config['modules'][$k]['status_load'] = false;
            continue;
        }
    }

    $version = $v['version'];
    $module_file = $config['path']['modules'] . $name . '/' . $version . '/' . $file . '.php';

    if ($status == null) {
        if (file_exists($module_file)) {
            $config['modules'][$k]['status_load'] = true;
            require_once $module_file;
        } else
            throw new Exception('Не найден модуль ' . $name);
    }
}

