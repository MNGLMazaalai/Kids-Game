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
/*! exports provided: renderBigButton, renderButton, renderCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderBigButton", function() { return renderBigButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderButton", function() { return renderButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCategory", function() { return renderCategory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_category_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/category.json */ "./data/category.json");
var _data_category_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/category.json */ "./data/category.json", 1);
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/utils.module.scss */ "./styles/utils.module.scss");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/macbook/Desktop/reactGame/Kids-Game/components/button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Head from 'next/head'
// import Link from 'next/link'


const images = "/images/categoryPictures/";
function renderBigButton({
  props,
  name
}) {
  const currentSrc = images + props;
  return __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.new,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.space,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.newButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.imagebox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.newImage,
    src: currentSrc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.normal,
    key: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.newBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.newSpace,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.button,
    style: {
      backgroundColor: color
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.newBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.newImagebox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image,
    src: currentSrc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, name)));
}
function renderCategory() {
  let res = [],
      count = 0;
  _data_category_json__WEBPACK_IMPORTED_MODULE_1__.forEach(element => {
    res.push(__jsx("section", {
      className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.line,
      key: count++,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
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

/***/ }),

/***/ "./data/category.json":
/*!****************************!*\
  !*** ./data/category.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"photo\":\"body.png\",\"name\":\"Хүний бие эрхтэн\",\"color\":\"#FFE6FF\"},{\"photo\":\"rainbow.png\",\"name\":\"Өнгөнүүд\",\"color\":\"#B6E0B1\"}],[{\"photo\":\"nature.png\",\"name\":\"Байгаль\",\"color\":\"#E6E8FF\"},{\"photo\":\"apple.png\",\"name\":\"Жимс\",\"color\":\"#FFEDE6\"}],[{\"photo\":\"food.png\",\"name\":\"Хоол\",\"color\":\"#A7E5E5\"},{\"photo\":\"bus.png\",\"name\":\"Тээврийн хэрэгсэл\",\"color\":\"#C5EBB4\"}],[{\"photo\":\"flags.png\",\"name\":\"Туг далбаа\",\"color\":\"#FFE88F\"},{\"photo\":\"planets.png\",\"name\":\"Од гараг\",\"color\":\"#FFEDE6\"}],[{\"photo\":\"job.png\",\"name\":\"Мэргэжил\",\"color\":\"#40E6BE\"},{\"photo\":\"family.png\",\"name\":\"Гэр бүл\",\"color\":\"#FFB28F\"}],[{\"photo\":\"numbers.png\",\"name\":\"Тоо\",\"color\":\"#E6E8FF\"},{\"photo\":\"veggies.png\",\"name\":\"Хүнсний ногоо\",\"color\":\"#FFE6FF\"}]]");

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
  }, Object(_components_button__WEBPACK_IMPORTED_MODULE_3__["renderBigButton"])({
    props: "girafe.png",
    name: "Амьтад"
  }))), __jsx("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3V0aWxzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiaW1hZ2VzIiwicmVuZGVyQmlnQnV0dG9uIiwicHJvcHMiLCJuYW1lIiwiY3VycmVudFNyYyIsInV0aWxTdHlsZXMiLCJuZXciLCJib3giLCJzcGFjZSIsIm5ld0J1dHRvbiIsImltYWdlYm94IiwibmV3SW1hZ2UiLCJ0ZXh0IiwicmVuZGVyQnV0dG9uIiwiY29sb3IiLCJub3JtYWwiLCJuZXdCb3giLCJuZXdTcGFjZSIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsIm5ld0ltYWdlYm94IiwiaW1hZ2UiLCJyZW5kZXJDYXRlZ29yeSIsInJlcyIsImNvdW50IiwibGlzdCIsImZvckVhY2giLCJlbGVtZW50IiwicHVzaCIsImxpbmUiLCJtYXAiLCJlbCIsInBob3RvIiwiSG9tZSIsImhvbWVwYWdlIiwidGl0bGUiLCJzbGlkZXIiLCJjYXRlZ29yaWVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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LElBQUdQLGdFQUFVLENBQUM4QixLQUFNLEVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSyxrQkFETCxDQUpKLEVBT0k7QUFBUyxhQUFTLEVBQUU5QixnRUFBVSxDQUFDK0IsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFL0IsZ0VBQVUsQ0FBQ0UsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTiwwRUFBZSxDQUFDO0FBQUNDLFNBQUssRUFBRSxZQUFSO0FBQXNCQyxRQUFJLEVBQUU7QUFBNUIsR0FBRCxDQURwQixDQURKLENBUEosRUFhSTtBQUFTLGFBQVMsRUFBRUUsZ0VBQVUsQ0FBQ2dDLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2YseUVBQWMsRUFEbkIsQ0FiSixDQURBO0FBbUJELEM7Ozs7Ozs7Ozs7O0FDeEJIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBsaXN0IGZyb20gJy4uL2RhdGEvY2F0ZWdvcnkuanNvbidcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuc2NzcydcblxuY29uc3QgaW1hZ2VzID0gXCIvaW1hZ2VzL2NhdGVnb3J5UGljdHVyZXMvXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJpZ0J1dHRvbih7cHJvcHMsIG5hbWV9KSB7XG4gICAgY29uc3QgY3VycmVudFNyYyA9IGltYWdlcyArIHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld30+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYm94fT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuc3BhY2V9Lz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3QnV0dG9ufS8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYm94fT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW1hZ2Vib3h9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50U3JjfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMudGV4dH0+e25hbWV9PC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCdXR0b24oe3Byb3BzLCBuYW1lLCBjb2xvcn0pIHtcbiAgICBjb25zdCBjdXJyZW50U3JjID0gaW1hZ2VzICsgcHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubm9ybWFsfSBrZXk9e25hbWV9PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld0JveH0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld1NwYWNlfS8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJ1dHRvbn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yfX0vPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld0JveH0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld0ltYWdlYm94fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFNyY31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnRleHR9PntuYW1lfTwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcnkoKSB7XG4gICAgbGV0IHJlcyA9IFtdLCBjb3VudCA9IDBcbiAgICBsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHJlcy5wdXNoIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saW5lfSBrZXk9e2NvdW50Kyt9PiBcbiAgICAgICAgICAgICAgICB7ZWxlbWVudC5tYXAoZWwgPT4gcmVuZGVyQnV0dG9uKHtwcm9wczogZWwucGhvdG8sIG5hbWU6IGVsLm5hbWUsIGNvbG9yOiBlbC5jb2xvcn0pKX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlcztcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyByZW5kZXJCaWdCdXR0b24sIHJlbmRlckJ1dHRvbiwgcmVuZGVyQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ob21lcGFnZX0gPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57XCJIb21lIHBhZ2VcIn08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy50ZXh0fSAke3V0aWxTdHlsZXMudGl0bGV9YH0+XG4gICAgICAgICAgICB7XCLQqNC40L3RjdGN0YAg0L3RjdC80Y3Qs9C00YHRjdC9XCJ9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnNsaWRlcn0+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYm94fT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyQmlnQnV0dG9uKHtwcm9wczogXCJnaXJhZmUucG5nXCIsIG5hbWU6IFwi0JDQvNGM0YLQsNC0XCJ9KX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYXRlZ29yaWVzfT5cbiAgICAgICAgICAgIHtyZW5kZXJDYXRlZ29yeSgpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRleHRcIjogXCJ1dGlsc190ZXh0X18xMjRKcFwiLFxuXHRcInRpdGxlXCI6IFwidXRpbHNfdGl0bGVfXzI0amFKXCIsXG5cdFwibmV3XCI6IFwidXRpbHNfbmV3X18xYkdYZFwiLFxuXHRcIm5vcm1hbFwiOiBcInV0aWxzX25vcm1hbF9fMWM4OVhcIixcblx0XCJzbGlkZXJcIjogXCJ1dGlsc19zbGlkZXJfX2RINHZGXCIsXG5cdFwiY2F0ZWdvcmllc1wiOiBcInV0aWxzX2NhdGVnb3JpZXNfXzFmLWVHXCIsXG5cdFwiaG9tZXBhZ2VcIjogXCJ1dGlsc19ob21lcGFnZV9fMzY4NjhcIixcblx0XCJpbWFnZWJveFwiOiBcInV0aWxzX2ltYWdlYm94X18xcDk4X1wiLFxuXHRcIm5ld0ltYWdlXCI6IFwidXRpbHNfbmV3SW1hZ2VfXzJjaUJnXCIsXG5cdFwiaW1hZ2VcIjogXCJ1dGlsc19pbWFnZV9fM3ZBaXlcIixcblx0XCJzcGFjZVwiOiBcInV0aWxzX3NwYWNlX19ia3FLdVwiLFxuXHRcIm5ld1NwYWNlXCI6IFwidXRpbHNfbmV3U3BhY2VfXzFmTkwxXCIsXG5cdFwibGluZVwiOiBcInV0aWxzX2xpbmVfX0JmNktYXCIsXG5cdFwiYnV0dG9uXCI6IFwidXRpbHNfYnV0dG9uX18xZnF3bVwiLFxuXHRcIm5ld0J1dHRvblwiOiBcInV0aWxzX25ld0J1dHRvbl9fMmx3WWlcIixcblx0XCJib3hcIjogXCJ1dGlsc19ib3hfXzIzQk9rXCIsXG5cdFwibmV3Qm94XCI6IFwidXRpbHNfbmV3Qm94X18xbHlSR1wiLFxuXHRcImNlbnRlcmVyXCI6IFwidXRpbHNfY2VudGVyZXJfXzJKbVpXXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==