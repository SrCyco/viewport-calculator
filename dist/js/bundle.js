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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nfunction getViewportWidth(){\r\n    return window.innerWidth;\r\n}\r\n\r\nfunction getViwportHeight(){\r\n    return window.innerHeight;\r\n}\r\n\r\nfunction getUserEntry(element){\r\n    return parseInt(element.value);\r\n}\r\n\r\nfunction calculateValue(DeviceValue, userValue){\r\n    return (userValue * 100) / DeviceValue;\r\n}\r\n\r\nfunction printResult(value, unit){\r\n    let $resultContainer = document.querySelector('.result');\r\n    $resultContainer.innerHTML = `<h2>${value}${unit}</h2>`;\r\n}\r\n\r\nfunction whoIsSelected(){\r\n    let elementsGroup = document.querySelectorAll(`input[type=radio]`);\r\n    for (let i = 0; i < elementsGroup.length; i++) {\r\n        if(elementsGroup[i].checked){\r\n            radioActions(elementsGroup[i].getAttribute('id'));\r\n        }\r\n    }\r\n}\r\n\r\nfunction disableInput(element, state){\r\n    let $input = document.getElementById(element);\r\n    if(state){\r\n        $input.disabled = true;\r\n    }else{\r\n        $input.disabled = false;\r\n    }\r\n}\r\n\r\nfunction showDeviceValue(element, value){\r\n    let $input = document.getElementById(element);\r\n    $input.value = value;\r\n    console.log('entro')\r\n}\r\n\r\nfunction isSelected(element){\r\n    let $input = document.getElementById(element);\r\n    if($input.checked){\r\n        return true;\r\n    }else{\r\n        return false;\r\n    }\r\n}\r\n\r\nfunction radioActions(radioId){\r\n    let vw = getViewportWidth();\r\n    let vh = getViwportHeight();\r\n    switch (radioId) {\r\n        case 'vw':\r\n            showDeviceValue('device-value', vw);\r\n            break;\r\n        case 'vh':    \r\n            showDeviceValue('device-value', vh);\r\n            break;\r\n        case 'auto':\r\n            disableInput('device-value', true);\r\n            if(isSelected('vw')){\r\n                showDeviceValue('device-value', vw);\r\n            }\r\n            if(isSelected('vh')){\r\n                showDeviceValue('device-value', vh);\r\n            }\r\n            break;\r\n        case 'manual':\r\n            disableInput('device-value', false);\r\n            showDeviceValue('device-value', '');\r\n            break;\r\n    }\r\n}\r\n\r\nfunction addListenerToRadios(){\r\n    let $radios = document.querySelectorAll('input[type=radio]');\r\n    for (let i = 0; i < $radios.length; i++) {\r\n        $radios[i].addEventListener('click', event =>{\r\n            let radioId = event.target.getAttribute('id');\r\n            radioActions(radioId);\r\n        });\r\n    }\r\n}\r\n\r\nlet $userDeviceValue = document.getElementById('device-value');\r\nlet $userValue = document.getElementById('value');\r\n\r\nfunction posibilities(){\r\n    let deviceValue;\r\n    let userValue = getUserEntry($userValue);\r\n    let userDeviceValue = getUserEntry($userDeviceValue);\r\n    let unit;\r\n\r\n    if (isSelected('vw')){\r\n        deviceValue = getViewportWidth();\r\n        unit = 'vw';\r\n    }\r\n    if(isSelected('vh')){\r\n        deviceValue = getViwportHeight();\r\n        unit = 'vh';\r\n    }\r\n    if(isSelected('auto')){\r\n        let result = calculateValue(deviceValue, userValue);\r\n        printResult(result, unit);\r\n    }\r\n    if(isSelected('manual')){\r\n        let result = calculateValue(userDeviceValue, userValue);\r\n        printResult(result, unit);\r\n    }\r\n}\r\n\r\n$userValue.addEventListener('click', (element)=>{\r\n    console.log(element)\r\n    element.target.value = '';\r\n});\r\n\r\nconst $calculateButton = document.querySelector('.calculate');\r\n$calculateButton.addEventListener('click', event =>{\r\n    event.preventDefault();\r\n    posibilities();    \r\n});\r\n\r\n(function(){\r\n    addListenerToRadios();\r\n    whoIsSelected();\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! E:\\platzi\\reto-webpack\\src\\js\\index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?");

/***/ })

/******/ });