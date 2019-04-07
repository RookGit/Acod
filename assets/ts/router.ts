import {CabinetController} from "./controllers/cabinetController";
import {CatalogController} from "./controllers/catalogController";

declare var $: any;
declare var system: any;
declare var render: any;

function router()
{
    let controller = null;
    switch (system.url[0]) {
        case 'catalogs':
            controller = new CatalogController();
            break;

        case 'cabinet':
            controller = new CabinetController();
            break;
    }
    if (controller !== null) controller.run();
}

export {router};