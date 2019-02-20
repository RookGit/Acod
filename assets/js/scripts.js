function render_check_login_form(data) {

    if (data.response.result == true)
        location.href = '/cabinet';
    else
        set_errors_form(data);
}