declare var $: any;
declare var system: any;
declare var render: any;

class CatalogController {
    public run() {

        $.contextMenu({
            // define which elements trigger this menu
            selector: '[role="treeitem"]',
            // define the elements of the menu
            items: {
                create: {
                    icon: "fas fa-igloo", name: "Добавить потомка", callback: function (key: any, opt: any) {
                        alert("Bar!")
                    }
                },
                delete_element: {
                    name: "Удалить", callback: function (key: any, opt: any) {
                        alert("Foo!");
                    }
                }
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
                            "icon": "fa fa-info",
                            "text": "Java",
                            "state": {"selected": true}
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
}

export {CatalogController};