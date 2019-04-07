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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/ts/controllers/cabinetController.ts":
/*!****************************************************!*\
  !*** ./assets/ts/controllers/cabinetController.ts ***!
  \****************************************************/
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

/***/ "./assets/ts/controllers/catalogController.ts":
/*!****************************************************!*\
  !*** ./assets/ts/controllers/catalogController.ts ***!
  \****************************************************/
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
    };
    return CatalogController;
}());



/***/ }),

/***/ "./assets/ts/index.ts":
/*!****************************!*\
  !*** ./assets/ts/index.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./assets/ts/router.ts");
/* harmony import */ var _renders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renders */ "./assets/ts/renders.ts");


// Инициируем рендеры
Object(_renders__WEBPACK_IMPORTED_MODULE_1__["renders_require"])();
// Запускаем роутер
Object(_router__WEBPACK_IMPORTED_MODULE_0__["router"])();


/***/ }),

/***/ "./assets/ts/renders.ts":
/*!******************************!*\
  !*** ./assets/ts/renders.ts ***!
  \******************************/
/*! exports provided: renders_require */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renders_require", function() { return renders_require; });
function renders_require() {
    render.render_check_login_form = function (data) {
        if (data.response.result == true)
            system.redirect('/cabinet');
        else
            system.set_errors_form(data);
    };
    render.render_check_sign_up_form = function (data) {
        if (data.response.result == true)
            system.redirect('/cabinet');
        else
            system.set_errors_form(data);
    };
}



/***/ }),

/***/ "./assets/ts/router.ts":
/*!*****************************!*\
  !*** ./assets/ts/router.ts ***!
  \*****************************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _controllers_cabinetController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/cabinetController */ "./assets/ts/controllers/cabinetController.ts");
/* harmony import */ var _controllers_catalogController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/catalogController */ "./assets/ts/controllers/catalogController.ts");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzL2NvbnRyb2xsZXJzL2NhYmluZXRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy9jb250cm9sbGVycy9jYXRhbG9nQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzL3JlbmRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBQTtJQUFBO0lBSUEsQ0FBQztJQUhVLCtCQUFHLEdBQVY7SUFFQSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDO0FBRTBCOzs7Ozs7Ozs7Ozs7O0FDTjNCO0FBQUE7QUFB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WUFDVixVQUFVLEdBQUcsSUFBSSxnRkFBaUIsRUFBRSxDQUFDO1lBQ3JDLE1BQU07S0FDYjtJQUNELElBQUksVUFBVSxLQUFLLElBQUk7UUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDOUMsQ0FBQztBQUVlIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL3RzL2luZGV4LnRzXCIpO1xuIiwiZGVjbGFyZSB2YXIgJDogYW55O1xyXG5kZWNsYXJlIHZhciBzeXN0ZW06IGFueTtcclxuZGVjbGFyZSB2YXIgcmVuZGVyOiBhbnk7XHJcblxyXG5jbGFzcyBDYWJpbmV0Q29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgcnVuKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDYWJpbmV0Q29udHJvbGxlcn07IiwiZGVjbGFyZSB2YXIgJDogYW55O1xyXG5kZWNsYXJlIHZhciBzeXN0ZW06IGFueTtcclxuZGVjbGFyZSB2YXIgcmVuZGVyOiBhbnk7XHJcblxyXG5jbGFzcyBDYXRhbG9nQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgcnVuKCkge1xyXG5cclxuICAgICAgICAkLmNvbnRleHRNZW51KHtcclxuICAgICAgICAgICAgLy8gZGVmaW5lIHdoaWNoIGVsZW1lbnRzIHRyaWdnZXIgdGhpcyBtZW51XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW3JvbGU9XCJ0cmVlaXRlbVwiXScsXHJcbiAgICAgICAgICAgIC8vIGRlZmluZSB0aGUgZWxlbWVudHMgb2YgdGhlIG1lbnVcclxuICAgICAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLWlnbG9vXCIsIG5hbWU6IFwi0JTQvtCx0LDQstC40YLRjCDQv9C+0YLQvtC80LrQsFwiLCBjYWxsYmFjazogZnVuY3Rpb24gKGtleTogYW55LCBvcHQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkJhciFcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlX2VsZW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcItCj0LTQsNC70LjRgtGMXCIsIGNhbGxiYWNrOiBmdW5jdGlvbiAoa2V5OiBhbnksIG9wdDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRm9vIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhlcmUncyBtb3JlLCBoYXZlIGEgbG9vayBhdCB0aGUgZGVtb3MgYW5kIGRvY3MuLi5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImRhdGFfdHJlZV9jYXRhbG9nXCJdJykuanN0cmVlKHtcclxuICAgICAgICAgICAgJ2NvcmUnOiB7XHJcbiAgICAgICAgICAgICAgICAnZGF0YSc6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLQlNC40L3QsNC80LjRh9C10YHQutCw0Y8g0YLQuNC/0LjQt9Cw0YbQuNGPXCIsIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUHl0aG9uXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUEhQXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiSmF2YVNjcmlwdFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIk9iamVjdCBQYXNjYWxcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJMdWFcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCLQodGC0LDRgtC40YfQtdGB0LrQsNGPINGC0LjQv9C40LfQsNGG0LjRj1wiLCBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkNcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImZhIGZhLWluZm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkphdmFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjoge1wic2VsZWN0ZWRcIjogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkhhc2tlbGxcIix9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRleHQ9XCJ3aW5kb3dzX2NhdGFsb2dcIl0gPiAqJykucmVzaXphYmxlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVzOiAndycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0NhdGFsb2dDb250cm9sbGVyfTsiLCJpbXBvcnQge3JvdXRlcn0gZnJvbSBcIi4vcm91dGVyXCI7XHJcbmltcG9ydCB7cmVuZGVyc19yZXF1aXJlfSBmcm9tIFwiLi9yZW5kZXJzXCI7XHJcblxyXG4vLyDQmNC90LjRhtC40LjRgNGD0LXQvCDRgNC10L3QtNC10YDRi1xyXG5yZW5kZXJzX3JlcXVpcmUoKTtcclxuXHJcbi8vINCX0LDQv9GD0YHQutCw0LXQvCDRgNC+0YPRgtC10YBcclxucm91dGVyKCk7XHJcblxyXG4iLCJkZWNsYXJlIHZhciAkOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHN5c3RlbTogYW55O1xyXG5kZWNsYXJlIHZhciByZW5kZXI6IGFueTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlcnNfcmVxdWlyZSgpIHtcclxuICAgIHJlbmRlci5yZW5kZXJfY2hlY2tfbG9naW5fZm9ybSA9IChkYXRhOiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UucmVzdWx0ID09IHRydWUpXHJcbiAgICAgICAgICAgIHN5c3RlbS5yZWRpcmVjdCgnL2NhYmluZXQnKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHN5c3RlbS5zZXRfZXJyb3JzX2Zvcm0oZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyLnJlbmRlcl9jaGVja19zaWduX3VwX2Zvcm0gPSAoZGF0YTogYW55KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlLnJlc3VsdCA9PSB0cnVlKVxyXG4gICAgICAgICAgICBzeXN0ZW0ucmVkaXJlY3QoJy9jYWJpbmV0Jyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzeXN0ZW0uc2V0X2Vycm9yc19mb3JtKGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge3JlbmRlcnNfcmVxdWlyZX07IiwiaW1wb3J0IHtDYWJpbmV0Q29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlcnMvY2FiaW5ldENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtDYXRhbG9nQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlcnMvY2F0YWxvZ0NvbnRyb2xsZXJcIjtcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuZGVjbGFyZSB2YXIgc3lzdGVtOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHJlbmRlcjogYW55O1xyXG5cclxuZnVuY3Rpb24gcm91dGVyKClcclxue1xyXG4gICAgbGV0IGNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgc3dpdGNoIChzeXN0ZW0udXJsWzBdKSB7XHJcbiAgICAgICAgY2FzZSAnY2F0YWxvZ3MnOlxyXG4gICAgICAgICAgICBjb250cm9sbGVyID0gbmV3IENhdGFsb2dDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdjYWJpbmV0JzpcclxuICAgICAgICAgICAgY29udHJvbGxlciA9IG5ldyBDYWJpbmV0Q29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChjb250cm9sbGVyICE9PSBudWxsKSBjb250cm9sbGVyLnJ1bigpO1xyXG59XHJcblxyXG5leHBvcnQge3JvdXRlcn07Il0sInNvdXJjZVJvb3QiOiIifQ==