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

    $.contextMenu({
        // define which elements trigger this menu
        selector: '[role="treeitem"]',
        // define the elements of the menu
        items: {
            create: {icon: "fas fa-igloo", name: "Добавить потомка", callback: function(key, opt){ alert("Bar!") }},
            delete_element: {name: "Удалить", callback: function(key, opt){ alert("Foo!"); }}
        }
        // there's more, have a look at the demos and docs...
    });

    $('[data-context="data_tree_catalog"]').jstree({
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
                            "icon" : "fa fa-info",
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

$('[data-toggle="tooltip"]').tooltip();