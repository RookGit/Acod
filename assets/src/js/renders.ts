import {emptyForm, hideLoader} from "./functions";
declare var $: any;
declare var system: any;
declare var render: any;

function renders_require() {
    // Проверка входа
    render.render_check_login_form = (data: any) => {
        if (data.response.result == true)
            system.redirect('/cabinet');
        else
        {
            system.alert.add('Ошибка авторизации!', 'danger');
            hideLoader(data.response.form_id, function () {
                system.set_errors_form(data);
            });
        }
    };

    // Проверка регистрации
    render.render_check_sign_up_form = (data: any) => {
        if (data.response.result == true)
            system.redirect('/cabinet');
        else
        {
            system.alert.add('Ошибка регистрации!', 'danger');
            hideLoader(data.response.form_id, function () {
                system.set_errors_form(data);
            });
        }
    };

    // Создание каталога
    render.render_add_catalog = (data: any) => {
        if (data.response.result == true)
            system.alert.add('Справочник успешно создан!', 'success');
        else
            system.alert.add('Ошибка создания справочника!', 'danger');
        hideLoader(data.response.form_id, function () {
            if (data.response.result == true)
                emptyForm(data.response.form_id);
            system.set_errors_form(data);
        });
    };
}

export {renders_require};