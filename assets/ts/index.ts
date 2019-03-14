declare var $: any;
declare var system: any;
declare var set_errors_form: any;

// import {ZipCodeValidator} from "./module";
// var test = new ZipCodeValidator();
// alert(test.isAcceptable());

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

function render_check_login_form(data: any) {

    if (data.response.result == true)
        location.href = '/cabinet';
    else
        set_errors_form(data);
}

function render_check_sign_up_form(data: any) {

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
            create: {icon: "fas fa-igloo", name: "Добавить потомка", callback: function(key: any, opt: any){ alert("Bar!") }},
            delete_element: {name: "Удалить", callback: function(key: any, opt: any){ alert("Foo!"); }}
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