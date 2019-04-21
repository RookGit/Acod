/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/css/app.scss":
/*!*********************************!*\
  !*** ./assets/src/css/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/js/controllers/cabinetController.ts":
/*!********************************************************!*\
  !*** ./assets/src/js/controllers/cabinetController.ts ***!
  \********************************************************/
/*! exports provided: CabinetController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinetController", function() { return CabinetController; });
var CabinetController = /** @class */ (function () {
    function CabinetController() {
    }
    CabinetController.prototype.run = function () {
    };
    return CabinetController;
}());



/***/ }),

/***/ "./assets/src/js/controllers/catalogController.ts":
/*!********************************************************!*\
  !*** ./assets/src/js/controllers/catalogController.ts ***!
  \********************************************************/
/*! exports provided: CatalogController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogController", function() { return CatalogController; });
var CatalogController = /** @class */ (function () {
    function CatalogController() {
    }
    CatalogController.prototype.run = function () {
        $.contextMenu({
            // define which elements trigger this menu
            selector: '[role="treeitem"]',
            // define the elements of the menu
            items: {
                create: {
                    icon: "fas fa-igloo", name: "Добавить потомка", callback: function (key, opt) {
                        alert("Bar!");
                    }
                },
                delete_element: {
                    name: "Удалить", callback: function (key, opt) {
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
                            { "text": "Python" },
                            { "text": "PHP" },
                            { "text": "JavaScript" },
                            { "text": "Object Pascal" },
                            { "text": "Lua" },
                        ],
                    },
                    {
                        "text": "Статическая типизация", "children": [
                            { "text": "C" },
                            {
                                "icon": "fa fa-info",
                                "text": "Java",
                                "state": { "selected": true }
                            },
                            { "text": "Haskell", }
                        ],
                    }
                ]
            }
        });
        $('[data-context="windows_catalog"] > *').resizable({
            handles: 'w',
        });
        $('[data-form="form_add_catalog"] #name_catalog').on('keyup', function () {
            var this_text = $(this).val();
            if (this_text.length > 0)
                $(this).closest('.modal-content').find('name-catalog').html('"' + this_text.trim() + '"');
            else
                $(this).closest('.modal-content').find('name-catalog').html('');
        });
        $('[data-submit="create_catalog"]').on('click', function (e) {
            e.preventDefault();
            $('[data-form="form_add_catalog"]').trigger('submit');
        });
    };
    return CatalogController;
}());



/***/ }),

/***/ "./assets/src/js/functions.ts":
/*!************************************!*\
  !*** ./assets/src/js/functions.ts ***!
  \************************************/
/*! exports provided: hideLoader, emptyForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoader", function() { return hideLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyForm", function() { return emptyForm; });
// Скрыть крутилку загрузки форм
function hideLoader(form_id, callback) {
    setTimeout(function () {
        var element_form = $('[data-form-id="' + form_id + '"]');
        element_form.find('.form__body').fadeTo("opacity", 1);
        element_form.find('.form__loader').hide();
        callback();
    }, 1000);
}
// Очистить форму
function emptyForm(form_id) {
    $('[data-form-id="' + form_id + '"]')
        .find('input[type="text"], input[type="email"], input[type="number"]').each(function () {
        $(this).val('');
    });
}



/***/ }),

/***/ "./assets/src/js/index.ts":
/*!********************************!*\
  !*** ./assets/src/js/index.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/app.scss */ "./assets/src/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./assets/src/js/router.ts");
/* harmony import */ var _renders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renders */ "./assets/src/js/renders.ts");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./assets/src/js/init.ts");
 // Импортируем стили



Object(_init__WEBPACK_IMPORTED_MODULE_3__["init"])();
// Инициируем рендеры
Object(_renders__WEBPACK_IMPORTED_MODULE_2__["renders_require"])();
// Запускаем роутер
Object(_router__WEBPACK_IMPORTED_MODULE_1__["router"])();


/***/ }),

/***/ "./assets/src/js/init.ts":
/*!*******************************!*\
  !*** ./assets/src/js/init.ts ***!
  \*******************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
function init() {
    // Анимация крутилки при submit
    $('.form').submit(function () {
        $(this).find('.form__body').fadeTo("opacity", 0);
        $(this).find('.form__loader').show();
    });
}



/***/ }),

/***/ "./assets/src/js/renders.ts":
/*!**********************************!*\
  !*** ./assets/src/js/renders.ts ***!
  \**********************************/
/*! exports provided: renders_require */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renders_require", function() { return renders_require; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./assets/src/js/functions.ts");

function renders_require() {
    // Проверка входа
    render.render_check_login_form = function (data) {
        if (data.response.result == true)
            system.redirect('/cabinet');
        else {
            system.alert.add('Ошибка авторизации!', 'danger');
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
                system.set_errors_form(data);
            });
        }
    };
    // Проверка регистрации
    render.render_check_sign_up_form = function (data) {
        if (data.response.result == true)
            system.redirect('/cabinet');
        else {
            system.alert.add('Ошибка регистрации!', 'danger');
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
                system.set_errors_form(data);
            });
        }
    };
    // Создание каталога
    render.render_add_catalog = function (data) {
        if (data.response.result == true)
            system.alert.add('Справочник успешно создан!', 'success');
        else
            system.alert.add('Ошибка создания справочника!', 'danger');
        Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
            if (data.response.result == true)
                Object(_functions__WEBPACK_IMPORTED_MODULE_0__["emptyForm"])(data.response.form_id);
            system.set_errors_form(data);
        });
    };
}



/***/ }),

/***/ "./assets/src/js/router.ts":
/*!*********************************!*\
  !*** ./assets/src/js/router.ts ***!
  \*********************************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _controllers_cabinetController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/cabinetController */ "./assets/src/js/controllers/cabinetController.ts");
/* harmony import */ var _controllers_catalogController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/catalogController */ "./assets/src/js/controllers/catalogController.ts");


function router() {
    var controller = null;
    switch (system.url[0]) {
        case 'catalogs':
            controller = new _controllers_catalogController__WEBPACK_IMPORTED_MODULE_1__["CatalogController"]();
            break;
        case 'cabinet':
            controller = new _controllers_cabinetController__WEBPACK_IMPORTED_MODULE_0__["CabinetController"]();
            break;
    }
    if (controller !== null)
        controller.run();
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9jc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9jb250cm9sbGVycy9jYWJpbmV0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2NvbnRyb2xsZXJzL2NhdGFsb2dDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvanMvZnVuY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvanMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9pbml0LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvanMvcmVuZGVycy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtB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QWtCLEdBQUcsVUFBQyxJQUFTO1FBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSTtZQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUMsQ0FBQzs7WUFFMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0QsNkRBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUk7Z0JBQzVCLDREQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUV3Qjs7Ozs7Ozs7Ozs7OztBQzlDekI7QUFBQTtBQUFBO0FBQUE7QUFBa0U7QUFDQTtBQU1sRSxTQUFTLE1BQU07SUFFWCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDdEIsUUFBUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ25CLEtBQUssVUFBVTtZQUNYLFVBQVUsR0FBRyxJQUFJLGdGQUFpQixFQUFFLENBQUM7WUFDckMsTUFBTTtRQUVWLEtBQUssU0FBUztZQUNWLFVBQVUsR0FBRyxJQUFJLGdGQUFpQixFQUFFLENBQUM7WUFDckMsTUFBTTtLQUNiO0lBQ0QsSUFBSSxVQUFVLEtBQUssSUFBSTtRQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM5QyxDQUFDO0FBRWUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvc3JjL2pzL2luZGV4LnRzXCIpO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJkZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuZGVjbGFyZSBjb25zdCBzeXN0ZW06IGFueTtcclxuZGVjbGFyZSBjb25zdCByZW5kZXI6IGFueTtcclxuXHJcbmNsYXNzIENhYmluZXRDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBydW4oKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0NhYmluZXRDb250cm9sbGVyfTsiLCJkZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuZGVjbGFyZSBjb25zdCBzeXN0ZW06IGFueTtcclxuZGVjbGFyZSBjb25zdCByZW5kZXI6IGFueTtcclxuXHJcbmNsYXNzIENhdGFsb2dDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBydW4oKSB7XHJcblxyXG4gICAgICAgICQuY29udGV4dE1lbnUoe1xyXG4gICAgICAgICAgICAvLyBkZWZpbmUgd2hpY2ggZWxlbWVudHMgdHJpZ2dlciB0aGlzIG1lbnVcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdbcm9sZT1cInRyZWVpdGVtXCJdJyxcclxuICAgICAgICAgICAgLy8gZGVmaW5lIHRoZSBlbGVtZW50cyBvZiB0aGUgbWVudVxyXG4gICAgICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtaWdsb29cIiwgbmFtZTogXCLQlNC+0LHQsNCy0LjRgtGMINC/0L7RgtC+0LzQutCwXCIsIGNhbGxiYWNrOiBmdW5jdGlvbiAoa2V5OiBhbnksIG9wdDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQmFyIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVfZWxlbWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwi0KPQtNCw0LvQuNGC0YxcIiwgY2FsbGJhY2s6IGZ1bmN0aW9uIChrZXk6IGFueSwgb3B0OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJGb28hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGVyZSdzIG1vcmUsIGhhdmUgYSBsb29rIGF0IHRoZSBkZW1vcyBhbmQgZG9jcy4uLlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwiZGF0YV90cmVlX2NhdGFsb2dcIl0nKS5qc3RyZWUoe1xyXG4gICAgICAgICAgICAnY29yZSc6IHtcclxuICAgICAgICAgICAgICAgICdkYXRhJzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcItCU0LjQvdCw0LzQuNGH0LXRgdC60LDRjyDRgtC40L/QuNC30LDRhtC40Y9cIiwgXCJjaGlsZHJlblwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJQeXRob25cIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJQSFBcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJKYXZhU2NyaXB0XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiT2JqZWN0IFBhc2NhbFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkx1YVwifSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcItCh0YLQsNGC0LjRh9C10YHQutCw0Y8g0YLQuNC/0LjQt9Cw0YbQuNGPXCIsIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQ1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEgZmEtaW5mb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSmF2YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XCJzZWxlY3RlZFwiOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiSGFza2VsbFwiLH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cIndpbmRvd3NfY2F0YWxvZ1wiXSA+IConKS5yZXNpemFibGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXM6ICd3JyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAkKCdbZGF0YS1mb3JtPVwiZm9ybV9hZGRfY2F0YWxvZ1wiXSAjbmFtZV9jYXRhbG9nJykub24oJ2tleXVwJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGlzX3RleHQgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpc190ZXh0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5tb2RhbC1jb250ZW50JykuZmluZCgnbmFtZS1jYXRhbG9nJykuaHRtbCgnXCInK3RoaXNfdGV4dC50cmltKCkrJ1wiJyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLm1vZGFsLWNvbnRlbnQnKS5maW5kKCduYW1lLWNhdGFsb2cnKS5odG1sKCcnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtc3VibWl0PVwiY3JlYXRlX2NhdGFsb2dcIl0nKS5vbignY2xpY2snLCAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnW2RhdGEtZm9ybT1cImZvcm1fYWRkX2NhdGFsb2dcIl0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDYXRhbG9nQ29udHJvbGxlcn07IiwiZGVjbGFyZSB2YXIgJDogYW55O1xyXG5kZWNsYXJlIHZhciBzeXN0ZW06IGFueTtcclxuXHJcbi8vINCh0LrRgNGL0YLRjCDQutGA0YPRgtC40LvQutGDINC30LDQs9GA0YPQt9C60Lgg0YTQvtGA0LxcclxuZnVuY3Rpb24gaGlkZUxvYWRlcihmb3JtX2lkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRfZm9ybSA9ICQoJ1tkYXRhLWZvcm0taWQ9XCInICsgZm9ybV9pZCArICdcIl0nKTtcclxuICAgICAgICBlbGVtZW50X2Zvcm0uZmluZCgnLmZvcm1fX2JvZHknKS5mYWRlVG8oXCJvcGFjaXR5XCIsIDEpO1xyXG4gICAgICAgIGVsZW1lbnRfZm9ybS5maW5kKCcuZm9ybV9fbG9hZGVyJykuaGlkZSgpO1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9LCAxMDAwKTtcclxufVxyXG5cclxuLy8g0J7Rh9C40YHRgtC40YLRjCDRhNC+0YDQvNGDXHJcbmZ1bmN0aW9uIGVtcHR5Rm9ybShmb3JtX2lkOiBzdHJpbmcpIHtcclxuICAgICQoJ1tkYXRhLWZvcm0taWQ9XCInICsgZm9ybV9pZCArICdcIl0nKVxyXG4gICAgICAgIC5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdJykuZWFjaChcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge2hpZGVMb2FkZXIsIGVtcHR5Rm9ybX07IiwiaW1wb3J0ICcuLy4uL2Nzcy9hcHAuc2Nzcyc7IC8vINCY0LzQv9C+0YDRgtC40YDRg9C10Lwg0YHRgtC40LvQuFxyXG5pbXBvcnQge3JvdXRlcn0gZnJvbSBcIi4vcm91dGVyXCI7XHJcbmltcG9ydCB7cmVuZGVyc19yZXF1aXJlfSBmcm9tIFwiLi9yZW5kZXJzXCI7XHJcbmltcG9ydCB7aW5pdH0gZnJvbSBcIi4vaW5pdFwiO1xyXG5cclxuaW5pdCgpO1xyXG5cclxuLy8g0JjQvdC40YbQuNC40YDRg9C10Lwg0YDQtdC90LTQtdGA0YtcclxucmVuZGVyc19yZXF1aXJlKCk7XHJcblxyXG4vLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YDQvtGD0YLQtdGAXHJcbnJvdXRlcigpO1xyXG5cclxuXHJcbiIsImRlY2xhcmUgdmFyICQ6IGFueTtcclxuZGVjbGFyZSB2YXIgc3lzdGVtOiBhbnk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cclxuICAgIC8vINCQ0L3QuNC80LDRhtC40Y8g0LrRgNGD0YLQuNC70LrQuCDQv9GA0Lggc3VibWl0XHJcbiAgICAkKCcuZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuZm9ybV9fYm9keScpLmZhZGVUbyggXCJvcGFjaXR5XCIsIDApO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmZvcm1fX2xvYWRlcicpLnNob3coKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge2luaXR9OyIsImltcG9ydCB7ZW1wdHlGb3JtLCBoaWRlTG9hZGVyfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5kZWNsYXJlIHZhciBzeXN0ZW06IGFueTtcclxuZGVjbGFyZSB2YXIgcmVuZGVyOiBhbnk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJzX3JlcXVpcmUoKSB7XHJcbiAgICAvLyDQn9GA0L7QstC10YDQutCwINCy0YXQvtC00LBcclxuICAgIHJlbmRlci5yZW5kZXJfY2hlY2tfbG9naW5fZm9ybSA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5yZXN1bHQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgc3lzdGVtLnJlZGlyZWN0KCcvY2FiaW5ldCcpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Ce0YjQuNCx0LrQsCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4IScsICdkYW5nZXInKTtcclxuICAgICAgICAgICAgaGlkZUxvYWRlcihkYXRhLnJlc3BvbnNlLmZvcm1faWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN5c3RlbS5zZXRfZXJyb3JzX2Zvcm0oZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XHJcbiAgICByZW5kZXIucmVuZGVyX2NoZWNrX3NpZ25fdXBfZm9ybSA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5yZXN1bHQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgc3lzdGVtLnJlZGlyZWN0KCcvY2FiaW5ldCcpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Ce0YjQuNCx0LrQsCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4IScsICdkYW5nZXInKTtcclxuICAgICAgICAgICAgaGlkZUxvYWRlcihkYXRhLnJlc3BvbnNlLmZvcm1faWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN5c3RlbS5zZXRfZXJyb3JzX2Zvcm0oZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g0KHQvtC30LTQsNC90LjQtSDQutCw0YLQsNC70L7Qs9CwXHJcbiAgICByZW5kZXIucmVuZGVyX2FkZF9jYXRhbG9nID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlLnJlc3VsdCA9PSB0cnVlKVxyXG4gICAgICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKCfQodC/0YDQsNCy0L7Rh9C90LjQuiDRg9GB0L/QtdGI0L3QviDRgdC+0LfQtNCw0L0hJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Ce0YjQuNCx0LrQsCDRgdC+0LfQtNCw0L3QuNGPINGB0L/RgNCw0LLQvtGH0L3QuNC60LAhJywgJ2RhbmdlcicpO1xyXG4gICAgICAgIGhpZGVMb2FkZXIoZGF0YS5yZXNwb25zZS5mb3JtX2lkLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlLnJlc3VsdCA9PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgZW1wdHlGb3JtKGRhdGEucmVzcG9uc2UuZm9ybV9pZCk7XHJcbiAgICAgICAgICAgIHN5c3RlbS5zZXRfZXJyb3JzX2Zvcm0oZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQge3JlbmRlcnNfcmVxdWlyZX07IiwiaW1wb3J0IHtDYWJpbmV0Q29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlcnMvY2FiaW5ldENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtDYXRhbG9nQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlcnMvY2F0YWxvZ0NvbnRyb2xsZXJcIjtcclxuXHJcbmRlY2xhcmUgY29uc3QgJDogYW55O1xyXG5kZWNsYXJlIGNvbnN0IHN5c3RlbTogYW55O1xyXG5kZWNsYXJlIGNvbnN0IHJlbmRlcjogYW55O1xyXG5cclxuZnVuY3Rpb24gcm91dGVyKClcclxue1xyXG4gICAgbGV0IGNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgc3dpdGNoIChzeXN0ZW0udXJsWzBdKSB7XHJcbiAgICAgICAgY2FzZSAnY2F0YWxvZ3MnOlxyXG4gICAgICAgICAgICBjb250cm9sbGVyID0gbmV3IENhdGFsb2dDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdjYWJpbmV0JzpcclxuICAgICAgICAgICAgY29udHJvbGxlciA9IG5ldyBDYWJpbmV0Q29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChjb250cm9sbGVyICE9PSBudWxsKSBjb250cm9sbGVyLnJ1bigpO1xyXG59XHJcblxyXG5leHBvcnQge3JvdXRlcn07Il0sInNvdXJjZVJvb3QiOiIifQ==