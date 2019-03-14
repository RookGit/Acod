<?

$system['routes'] = [
  'root' => 'root',
  'log-in' => 'login',
  'sign-up' => 'signup',
  'forgot-password' => 'forgotpassword',
  'cabinet' => 'cabinet',
  'catalogs' => 'catalogs',
];

pre($config['url']);
pre($system['routes']);

$res = array_key_exists($config['url'][0], $system['routes']);

if($res === true)
{
    echo 'Шаблон найден';
}