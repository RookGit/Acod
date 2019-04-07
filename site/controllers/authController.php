<?

$a = 0;

class authController
{

    private $tpl = 'add_blocks';
    private $menu_params = [];

    private function getMenuParams()
    {
        $this->menu_params[] = ['name' => 'Вход', 'url' => 'log-in'];
        $this->menu_params[] = ['name' => 'Регистрация', 'url' => 'sign-up'];
        $this->menu_params[] = ['name' => 'Восстановить пароль', 'url' => 'forgot-password'];
    }

    private function getParams(array $block_params)
    {
        $this->getMenuParams();

        $params['menu'] = $this->menu_params;
        $params['url'] = $this->router->getUrl(0);
        $params['blocks'] = $block_params;

        return ['add_blocks', $params];
    }

    public function logInAction()
    {
        return $this->getParams(['path' => 'login_form.twig']);
    }

    public function signUpAction()
    {
        return $this->getParams(['path' => 'sign_up_form.twig']);
    }

    public function restorePassAction()
    {
        // TODO: Сделать страницу восстановления пароля
        return $this->getParams(['path' => 'sign_up.twig']);
    }
}