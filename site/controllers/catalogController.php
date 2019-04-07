<?
use Classes\Catalog\CItem;

include_once $config['path']['classes'].'Catalog.php';

//$catalog = new CItem();
//$catalog->create([
//    ''=>'',
//]);


class catalogController
{
    public function runAction()
    {
        global $system, $config;



        $header_menu = [];
        $blocks = [];
        $params = [];

        $header_menu[] = ['name' => 'Выход', 'url' => '?action=logout'];
        $header_menu[] = ['name' => 'Профиль', 'url' => 'cabinet'];
        $header_menu[] = ['name' => 'Справочники', 'url' => 'catalogs'];
        $header_menu[] = ['name' => 'Типы элементов', 'url' => 'empty'];


        $blocks[] = ['path' => 'catalog.twig'];


        $params['menu'] = $header_menu;
        $params['url'] = $this->router->getUrl(0);
        $params['blocks'] = $blocks;


        return ['add_blocks', $params];

    }
}

