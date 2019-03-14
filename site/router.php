<?

exit;

$config['routes'] = [
  'root' => ['root'],
  'log-in' => ['login'],
  'sign-up' => ['signup'],
  'forgot-password' => ['forgotpassword'],
  'cabinet' => ['cabinet'],
  'catalogs' => ['catalogs'],
];

pre($config['url']);
pre($config['routes']);

$res = array_key_exists($config['url'][0], $config['routes']);

if($res === true)
{
    echo 'Шаблон найден';
}