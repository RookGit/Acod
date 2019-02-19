<?
$response['result'] = false;
$response['render'] = 'render_result_reg';

//$res = Authorization::reg_user([
//    'login' => $_POST['email'],
//    'password' => $_POST['password'],
//    'name' => 'Грачев',
//    'surname' => 'Григорий',
//    'patronymic' => 'Денисович'
//]);

    $system['user']->auth($_POST['email'], $_POST['password']);

    if($system['user']->auth == 1)
    {
        $response['result'] = true;
    }

?>