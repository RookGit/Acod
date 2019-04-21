import './../css/app.scss'; // Импортируем стили
import {router} from "./router";
import {renders_require} from "./renders";
import {init} from "./init";

init();

// Инициируем рендеры
renders_require();

// Запускаем роутер
router();


