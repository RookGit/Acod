declare var $: any;
declare var system: any;
declare var render: any;

function renders_require() {
    render.render_check_login_form = (data: any) => {

        if (data.response.result == true)
            system.redirect('/cabinet');
        else
            system.set_errors_form(data);
    }

    render.render_check_sign_up_form = (data: any) => {

        if (data.response.result == true)
            system.redirect('/cabinet');
        else
            system.set_errors_form(data);
    }
}

export {renders_require};