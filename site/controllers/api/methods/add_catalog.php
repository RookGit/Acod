<?
$response['result'] = false;
$handler_render_action = true;

if ($system['user']->auth == 1)
{
    $res = validManager::checkGroup(
        [
            'name_catalog' => ['empty#length20' =>
                ['Название справочника не может быть пустым', 'Название справочника не может быть длиннее 20 символов'],
                $params['name_catalog']
            ],
        ],
        true,
        true
    );

    if($res == 1)
    {
        $response['form_id'] = $params['form_id'];
        $response['data_form'] = $params['data_form'];
        $response['keys'] = $params['keys'];
        $response['result'] = true;
    }
    else
    {
        $response = $res;
        $response['result'] = false;
        $response['form_id'] = $params['form_id'];
        $response['data_form'] = $params['data_form'];
        $response['keys'] = $params['keys'];
    }
}
else
    $response['errors'] = 'Ошибка создания каталога!';


?>