<?

// Добавляем преконтроллеры
$SYS->ROUTER->addPrecontrollers(
    [
        'checkAuth',
        'checkAccess' => ['checkAuthCabinet', 'checkAccess']
    ]
);

// Авторизация
$SYS->ROUTER->add('root', 'auth', 'logIn', ['checkAuth']);
$SYS->ROUTER->add('log-in', 'auth', 'logIn', ['checkAuth']);

// Регистрация
$SYS->ROUTER->add('sign-up', 'auth', 'signUp', ['checkAuth']);

// TODO: Сделать восстановление пароля
//$SYS->ROUTER->add('forgot-password', 'auth', null, ['checkAccess']);

$SYS->ROUTER->add('cabinet', 'catalog', null, ['checkAccess']);
$SYS->ROUTER->add('catalogs', 'catalog', null, ['checkAccess']);

$SYS->ROUTER->add('404', 'error');

