function render_check_login_form(data) {

    if (data.response.result == true)
        location.href = '/cabinet';
    else
        set_errors_form(data);
}

function render_check_sign_up_form(data) {

    if (data.response.result == true)
        location.href = '/cabinet';
    else
        set_errors_form(data);
}


if (system.url[0] == 'catalogs') {

    $('[data-context="tree_catalog"]').jstree({
        'core': {
            'data': [
                {

                    "text": "Динамическая типизация", "children": [
                        {"text": "Python"},
                        {"text": "PHP"},
                        {"text": "JavaScript"},
                        {"text": "Object Pascal"},
                        {"text": "Lua"},
                    ],

                },
                {

                    "text": "Статическая типизация", "children": [
                        {"text": "C"},
                        {
                            "icon" : "bg-warning",
                            "text": "Java",
                            "state" : { "selected" : true }
                        },
                        {"text": "Haskell",}
                    ],

                }
            ]
        }
    });

    $('[data-context="windows_catalog"] > *').resizable(
        {
            handles: 'w',
        });
}