module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: renderNewButton, renderButton, renderCategory, renderSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNewButton", function() { return renderNewButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderButton", function() { return renderButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCategory", function() { return renderCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSlider", function() { return renderSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_category_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/category.json */ "./data/category.json");
var _data_category_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/category.json */ "./data/category.json", 1);
/* harmony import */ var _data_newCategory_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/newCategory.json */ "./data/newCategory.json");
var _data_newCategory_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/newCategory.json */ "./data/newCategory.json", 1);
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.scss */ "./styles/utils.module.scss");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/macbook/Desktop/reactGame/Kids-Game/components/button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Head from 'next/head'
// import Link from 'next/link'



const images = "/images/categoryPictures/";
function renderNewButton({
  props,
  name
}) {
  const currentSrc = images + props;
  return __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.new,
    key: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.space,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imagebox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newImage,
    src: currentSrc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, name)));
}
function renderButton({
  props,
  name,
  color
}) {
  const currentSrc = images + props;
  return __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.normal,
    key: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newSpace,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button,
    style: {
      backgroundColor: color
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newImagebox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,
    src: currentSrc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, name)));
}
function renderCategory() {
  let res = [],
      count = 0;
  _data_category_json__WEBPACK_IMPORTED_MODULE_1__.forEach(element => {
    res.push(__jsx("section", {
      className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.line,
      key: count++,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, element.map(el => renderButton({
      props: el.photo,
      name: el.name,
      color: el.color
    }))));
  });
  return res;
}
function renderSlider() {
  let res = [];
  _data_newCategory_json__WEBPACK_IMPORTED_MODULE_2__.forEach(el => {
    res.push(renderNewButton({
      props: el.photo,
      name: el.name,
      color: el.color
    }));
  });
  return res;
}

/***/ }),

/***/ "./data/category.json":
/*!****************************!*\
  !*** ./data/category.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"photo\":\"body.png\",\"name\":\"Хүний бие эрхтэн\",\"color\":\"#FFE6FF\"},{\"photo\":\"rainbow.png\",\"name\":\"Өнгөнүүд\",\"color\":\"#B6E0B1\"}],[{\"photo\":\"nature.png\",\"name\":\"Байгаль\",\"color\":\"#E6E8FF\"},{\"photo\":\"apple.png\",\"name\":\"Жимс\",\"color\":\"#FFEDE6\"}],[{\"photo\":\"food.png\",\"name\":\"Хоол\",\"color\":\"#A7E5E5\"},{\"photo\":\"bus.png\",\"name\":\"Тээврийн хэрэгсэл\",\"color\":\"#C5EBB4\"}],[{\"photo\":\"flags.png\",\"name\":\"Туг далбаа\",\"color\":\"#FFE88F\"},{\"photo\":\"planets.png\",\"name\":\"Од гараг\",\"color\":\"#FFEDE6\"}],[{\"photo\":\"job.png\",\"name\":\"Мэргэжил\",\"color\":\"#40E6BE\"},{\"photo\":\"family.png\",\"name\":\"Гэр бүл\",\"color\":\"#FFB28F\"}],[{\"photo\":\"numbers.png\",\"name\":\"Тоо\",\"color\":\"#E6E8FF\"},{\"photo\":\"veggies.png\",\"name\":\"Хүнсний ногоо\",\"color\":\"#FFE6FF\"}]]");

/***/ }),

/***/ "./data/newCategory.json":
/*!*******************************!*\
  !*** ./data/newCategory.json ***!
  \*******************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"photo\":\"girafe.png\",\"name\":\"Амьтад\",\"color\":\"#E6E8FF\"}]");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/utils.module.scss */ "./styles/utils.module.scss");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
var _jsxFileName = "/Users/macbook/Desktop/reactGame/Kids-Game/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  return __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.homepage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Home page")), __jsx("section", {
    className: `${_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text} ${_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Шинээр нэмэгдсэн"), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, Object(_components_button__WEBPACK_IMPORTED_MODULE_3__["renderSlider"])())), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, Object(_components_button__WEBPACK_IMPORTED_MODULE_3__["renderCategory"])()));
}

/***/ }),

/***/ "./styles/utils.module.scss":
/*!**********************************!*\
  !*** ./styles/utils.module.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"text": "utils_text__124Jp",
	"title": "utils_title__24jaJ",
	"new": "utils_new__1bGXd",
	"normal": "utils_normal__1c89X",
	"slider": "utils_slider__dH4vF",
	"categories": "utils_categories__1f-eG",
	"homepage": "utils_homepage__36868",
	"imagebox": "utils_imagebox__1p98_",
	"newImage": "utils_newImage__2ciBg",
	"image": "utils_image__3vAiy",
	"space": "utils_space__bkqKu",
	"newSpace": "utils_newSpace__1fNL1",
	"line": "utils_line__Bf6KX",
	"button": "utils_button__1fqwm",
	"newButton": "utils_newButton__2lwYi",
	"box": "utils_box__23BOk",
	"newBox": "utils_newBox__1lyRG",
	"centerer": "utils_centerer__2JmZW"
};


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macbook/Desktop/reactGame/Kids-Game/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3V0aWxzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiaW1hZ2VzIiwicmVuZGVyTmV3QnV0dG9uIiwicHJvcHMiLCJuYW1lIiwiY3VycmVudFNyYyIsInV0aWxTdHlsZXMiLCJuZXciLCJib3giLCJzcGFjZSIsIm5ld0J1dHRvbiIsImltYWdlYm94IiwibmV3SW1hZ2UiLCJ0ZXh0IiwicmVuZGVyQnV0dG9uIiwiY29sb3IiLCJub3JtYWwiLCJuZXdCb3giLCJuZXdTcGFjZSIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsIm5ld0ltYWdlYm94IiwiaW1hZ2UiLCJyZW5kZXJDYXRlZ29yeSIsInJlcyIsImNvdW50IiwibGlzdCIsImZvckVhY2giLCJlbGVtZW50IiwicHVzaCIsImxpbmUiLCJtYXAiLCJlbCIsInBob3RvIiwicmVuZGVyU2xpZGVyIiwibmV3TGlzdCIsIkhvbWUiLCJob21lcGFnZSIsInRpdGxlIiwic2xpZGVyIiwiY2F0ZWdvcmllcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFD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dGljL2RldmVsb3BtZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGxpc3QgZnJvbSAnLi4vZGF0YS9jYXRlZ29yeS5qc29uJ1xuaW1wb3J0IG5ld0xpc3QgZnJvbSAnLi4vZGF0YS9uZXdDYXRlZ29yeS5qc29uJ1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBpbWFnZXMgPSBcIi9pbWFnZXMvY2F0ZWdvcnlQaWN0dXJlcy9cIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTmV3QnV0dG9uKHtwcm9wcywgbmFtZX0pIHtcbiAgICBjb25zdCBjdXJyZW50U3JjID0gaW1hZ2VzICsgcHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3fSBrZXk9e25hbWV9PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnNwYWNlfS8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld0J1dHRvbn0vPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlYm94fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFNyY31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnRleHR9PntuYW1lfTwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKHtwcm9wcywgbmFtZSwgY29sb3J9KSB7XG4gICAgY29uc3QgY3VycmVudFNyYyA9IGltYWdlcyArIHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5vcm1hbH0ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdCb3h9PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdTcGFjZX0vPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5idXR0b259IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBjb2xvcn19Lz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdCb3h9PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdJbWFnZWJveH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRTcmN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy50ZXh0fT57bmFtZX08L3NlY3Rpb24+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhdGVnb3J5KCkge1xuICAgIGxldCByZXMgPSBbXSwgY291bnQgPSAwXG4gICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICByZXMucHVzaCAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGluZX0ga2V5PXtjb3VudCsrfT4gXG4gICAgICAgICAgICAgICAge2VsZW1lbnQubWFwKGVsID0+IHJlbmRlckJ1dHRvbih7cHJvcHM6IGVsLnBob3RvLCBuYW1lOiBlbC5uYW1lLCBjb2xvcjogZWwuY29sb3J9KSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiByZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2xpZGVyKCkge1xuICAgIGxldCByZXMgPSBbXVxuICAgIG5ld0xpc3QuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHJlcy5wdXNoKHJlbmRlck5ld0J1dHRvbih7cHJvcHM6IGVsLnBob3RvLCBuYW1lOiBlbC5uYW1lLCBjb2xvcjogZWwuY29sb3J9KSlcbiAgICB9KVxuICAgIHJldHVybiByZXM7XG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgcmVuZGVyU2xpZGVyLCByZW5kZXJDYXRlZ29yeSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvblwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhvbWVwYWdlfSA+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPntcIkhvbWUgcGFnZVwifTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLnRleHR9ICR7dXRpbFN0eWxlcy50aXRsZX1gfT5cbiAgICAgICAgICAgIHtcItCo0LjQvdGN0Y3RgCDQvdGN0LzRjdCz0LTRgdGN0L1cIn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuc2xpZGVyfT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3h9PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJTbGlkZXIoKX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYXRlZ29yaWVzfT5cbiAgICAgICAgICAgIHtyZW5kZXJDYXRlZ29yeSgpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRleHRcIjogXCJ1dGlsc190ZXh0X18xMjRKcFwiLFxuXHRcInRpdGxlXCI6IFwidXRpbHNfdGl0bGVfXzI0amFKXCIsXG5cdFwibmV3XCI6IFwidXRpbHNfbmV3X18xYkdYZFwiLFxuXHRcIm5vcm1hbFwiOiBcInV0aWxzX25vcm1hbF9fMWM4OVhcIixcblx0XCJzbGlkZXJcIjogXCJ1dGlsc19zbGlkZXJfX2RINHZGXCIsXG5cdFwiY2F0ZWdvcmllc1wiOiBcInV0aWxzX2NhdGVnb3JpZXNfXzFmLWVHXCIsXG5cdFwiaG9tZXBhZ2VcIjogXCJ1dGlsc19ob21lcGFnZV9fMzY4NjhcIixcblx0XCJpbWFnZWJveFwiOiBcInV0aWxzX2ltYWdlYm94X18xcDk4X1wiLFxuXHRcIm5ld0ltYWdlXCI6IFwidXRpbHNfbmV3SW1hZ2VfXzJjaUJnXCIsXG5cdFwiaW1hZ2VcIjogXCJ1dGlsc19pbWFnZV9fM3ZBaXlcIixcblx0XCJzcGFjZVwiOiBcInV0aWxzX3NwYWNlX19ia3FLdVwiLFxuXHRcIm5ld1NwYWNlXCI6IFwidXRpbHNfbmV3U3BhY2VfXzFmTkwxXCIsXG5cdFwibGluZVwiOiBcInV0aWxzX2xpbmVfX0JmNktYXCIsXG5cdFwiYnV0dG9uXCI6IFwidXRpbHNfYnV0dG9uX18xZnF3bVwiLFxuXHRcIm5ld0J1dHRvblwiOiBcInV0aWxzX25ld0J1dHRvbl9fMmx3WWlcIixcblx0XCJib3hcIjogXCJ1dGlsc19ib3hfXzIzQk9rXCIsXG5cdFwibmV3Qm94XCI6IFwidXRpbHNfbmV3Qm94X18xbHlSR1wiLFxuXHRcImNlbnRlcmVyXCI6IFwidXRpbHNfY2VudGVyZXJfXzJKbVpXXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==