declare const $: any;
declare const system: any;
declare const render: any;

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


        $('[data-form="form_add_catalog"] #name_catalog').on('keyup',function () {
            let this_text = $(this).val();

            if(this_text.length > 0)
                $(this).closest('.modal-content').find('name-catalog').html('"'+this_text.trim()+'"');
            else
                $(this).closest('.modal-content').find('name-catalog').html('');
        });

        $('[data-submit="create_catalog"]').on('click', (e: any) => {
            e.preventDefault();
            $('[data-form="form_add_catalog"]').trigger('submit');
        });
    }
}

export {CatalogController};