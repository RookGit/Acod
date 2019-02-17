<?

$header_menu = [];
$blocks = [];
$params = [];

if ($system['user']->auth == 0) {
    $header_menu[] = [
        'name' => 'Вход',
        'url' => '/login'
    ];
} else {
    $header_menu[] = [
        'name' => 'Личный кабинет',
        'url' => '/cabinet'
    ];

    $header_menu[] = [
        'name' => 'Выход',
        'url' => '/?action=logout'
    ];

}

if ($url[0] == 'login') {

    $blocks[] = ['path' => 'login_form.html'];
}

$params['menu'] = $header_menu;
$params['url'] = $url;
$params['blocks'] = $blocks;

echo $twig->render('login.html', $params);
?>