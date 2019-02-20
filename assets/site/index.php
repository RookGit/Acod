<?

$header_menu = [];
$blocks = [];
$params = [];

if ($system['user']->auth == 0) {
    $header_menu[] = ['name' => 'Вход', 'url' => '/log-in'];
    $header_menu[] = ['name' => 'Регистрация', 'url' => '/sign-up'];
    $header_menu[] = ['name' => 'Забыли пароль?', 'url' => '/forgot-password'];
} else {
    $header_menu[] = ['name' => 'Личный кабинет', 'url' => '/cabinet'];
    $header_menu[] = ['name' => 'Выход', 'url' => '/?action=logout'];
}

if ($url[0] == 'log-in' || $url[0] == 'root') {
    if ($system['user']->auth == 1) {
        redirect('/cabinet');
    } else
        $blocks[] = ['path' => 'login_form.html'];
} else if ($url[0] == 'sign-up') {
    if ($system['user']->auth == 1) {
        redirect('/cabinet');
    } else
        $blocks[] = ['path' => 'sign_up_form.html'];
} else if ($url[0] == 'forgot-password') {
    $blocks[] = ['path' => 'forgot_password_form.html'];
} else if ($url[0] == 'cabinet') {
    $blocks[] = ['path' => 'forgot_password_form.html'];
}

$params['menu'] = $header_menu;
$params['url'] = $url;
$params['blocks'] = $blocks;

echo $twig->render('login.html', $params);
