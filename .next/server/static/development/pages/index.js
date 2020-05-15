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
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utils.module.scss */ "./styles/utils.module.scss");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1__);
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
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.new,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.space,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.newbutton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.imagebox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bigimage,
    src: currentSrc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.normal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.box1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.space1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button,
    style: {
      backgroundColor: color
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.box1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.imagebox1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    src: currentSrc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, name)));
}
function renderCategory({
  list
}) {
  let res = [];
  list.forEach(element => {
    res.push(__jsx("section", {
      className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.line,
      key: element,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, renderButton({
      props: element[0][0],
      name: element[0][1],
      color: element[0][2]
    }), renderButton({
      props: element[1][0],
      name: element[1][1],
      color: element[1][2]
    })));
  });
  return res;
}

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



const images = "/images/categoryPictures/";
function Home() {
  const list = [[["body.png", "Хүний бие эрхтэн", "#FFE6FF"], ["rainbow.png", "Өнгөнүүд", "#B6E0B1"]], [["nature.png", "Байгаль", "#E6E8FF"], ["apple.png", "Жимс", "#FFEDE6"]], [["food.png", "Хоол", "#A7E5E5"], ["bus.png", "Тээврийн хэрэгсэл", "#C5EBB4"]], [["flags.png", "Туг далбаа", "#FFE88F"], ["planets.png", "Од гараг", "#FFEDE6"]], [["job.png", "Мэргэжил", "#40E6BE"], ["family.png", "Гэр бүл", "#FFB28F"]], [["numbers.png", "Тоо", "#E6E8FF"], ["veggies.png", "Хүнсний ногоо", "#FFE6FF"]]];
  return __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.homepage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Home page")), __jsx("section", {
    className: `${_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text} ${_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Шинээр нэмэгдсэн"), __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.slider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 47,
      columnNumber: 9
    }
  }, Object(_components_button__WEBPACK_IMPORTED_MODULE_3__["renderCategory"])({
    list: list
  })));
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
	"bigimage": "utils_bigimage__3Vp94",
	"image": "utils_image__3vAiy",
	"space": "utils_space__bkqKu",
	"space1": "utils_space1__1Y4Wu",
	"newbutton": "utils_newbutton__1A93D",
	"line": "utils_line__Bf6KX",
	"button": "utils_button__1fqwm",
	"box": "utils_box__23BOk",
	"box1": "utils_box1__UlXLO",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3V0aWxzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiaW1hZ2VzIiwicmVuZGVyQmlnQnV0dG9uIiwicHJvcHMiLCJuYW1lIiwiY3VycmVudFNyYyIsInV0aWxTdHlsZXMiLCJuZXciLCJib3giLCJzcGFjZSIsIm5ld2J1dHRvbiIsImltYWdlYm94IiwiYmlnaW1hZ2UiLCJ0ZXh0IiwicmVuZGVyQnV0dG9uIiwiY29sb3IiLCJub3JtYWwiLCJib3gxIiwic3BhY2UxIiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiaW1hZ2Vib3gxIiwiaW1hZ2UiLCJyZW5kZXJDYXRlZ29yeSIsImxpc3QiLCJyZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJsaW5lIiwiSG9tZSIsImhvbWVwYWdlIiwidGl0bGUiLCJzbGlkZXIiLCJjYXRlZ29yaWVzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLDJCQUFmO0FBRU8sU0FBU0MsZUFBVCxDQUF5QjtBQUFDQyxPQUFEO0FBQVFDO0FBQVIsQ0FBekIsRUFBd0M7QUFDM0MsUUFBTUMsVUFBVSxHQUFHSixNQUFNLEdBQUdFLEtBQTVCO0FBQ0EsU0FDSTtBQUFTLGFBQVMsRUFBRUcsZ0VBQVUsQ0FBQ0MsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFRCxnRUFBVSxDQUFDRSxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVGLGdFQUFVLENBQUNHLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVMsYUFBUyxFQUFFSCxnRUFBVSxDQUFDSSxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixFQUtJO0FBQVMsYUFBUyxFQUFFSixnRUFBVSxDQUFDRSxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVGLGdFQUFVLENBQUNLLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNBLGFBQVMsRUFBRUwsZ0VBQVUsQ0FBQ00sUUFEdEI7QUFFQSxPQUFHLEVBQUVQLFVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFPSTtBQUFTLGFBQVMsRUFBRUMsZ0VBQVUsQ0FBQ08sSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1QsSUFBdEMsQ0FQSixDQUxKLENBREo7QUFpQkg7QUFDTSxTQUFTVSxZQUFULENBQXNCO0FBQUNYLE9BQUQ7QUFBUUMsTUFBUjtBQUFjVztBQUFkLENBQXRCLEVBQTRDO0FBQy9DLFFBQU1WLFVBQVUsR0FBR0osTUFBTSxHQUFHRSxLQUE1QjtBQUNBLFNBQ0k7QUFBUyxhQUFTLEVBQUVHLGdFQUFVLENBQUNVLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRVYsZ0VBQVUsQ0FBQ1csSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFWCxnRUFBVSxDQUFDWSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFTLGFBQVMsRUFBRVosZ0VBQVUsQ0FBQ2EsTUFBL0I7QUFBdUMsU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUVMO0FBQWxCLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBUyxhQUFTLEVBQUVULGdFQUFVLENBQUNXLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRVgsZ0VBQVUsQ0FBQ2UsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0EsYUFBUyxFQUFFZixnRUFBVSxDQUFDZ0IsS0FEdEI7QUFFQSxPQUFHLEVBQUVqQixVQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBT0k7QUFBUyxhQUFTLEVBQUVDLGdFQUFVLENBQUNPLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0NULElBQXRDLENBUEosQ0FMSixDQURKO0FBaUJIO0FBQ00sU0FBU21CLGNBQVQsQ0FBd0I7QUFBQ0M7QUFBRCxDQUF4QixFQUFnQztBQUNuQyxNQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBRCxNQUFJLENBQUNFLE9BQUwsQ0FBYUMsT0FBTyxJQUFJO0FBQ3BCRixPQUFHLENBQUNHLElBQUosQ0FDSTtBQUFTLGVBQVMsRUFBRXRCLGdFQUFVLENBQUN1QixJQUEvQjtBQUFxQyxTQUFHLEVBQUVGLE9BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS2IsWUFBWSxDQUFDO0FBQUNYLFdBQUssRUFBRXdCLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBVyxDQUFYLENBQVI7QUFBdUJ2QixVQUFJLEVBQUV1QixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVcsQ0FBWCxDQUE3QjtBQUE0Q1osV0FBSyxFQUFFWSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVcsQ0FBWDtBQUFuRCxLQUFELENBRGpCLEVBRUtiLFlBQVksQ0FBQztBQUFDWCxXQUFLLEVBQUV3QixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVcsQ0FBWCxDQUFSO0FBQXVCdkIsVUFBSSxFQUFFdUIsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXLENBQVgsQ0FBN0I7QUFBNENaLFdBQUssRUFBRVksT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXLENBQVg7QUFBbkQsS0FBRCxDQUZqQixDQURKO0FBTUgsR0FQRDtBQVFBLFNBQU9GLEdBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REQ7QUFDQTtBQUNBO0FBRUEsTUFBTXhCLE1BQU0sR0FBRywyQkFBZjtBQUNlLFNBQVM2QixJQUFULEdBQWdCO0FBQzNCLFFBQU1OLElBQUksR0FBRyxDQUNULENBQ0ksQ0FBQyxVQUFELEVBQWEsa0JBQWIsRUFBaUMsU0FBakMsQ0FESixFQUVJLENBQUMsYUFBRCxFQUFnQixVQUFoQixFQUE0QixTQUE1QixDQUZKLENBRFMsRUFLVCxDQUNJLENBQUMsWUFBRCxFQUFlLFNBQWYsRUFBMEIsU0FBMUIsQ0FESixFQUVJLENBQUMsV0FBRCxFQUFjLE1BQWQsRUFBc0IsU0FBdEIsQ0FGSixDQUxTLEVBU1QsQ0FDSSxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLFNBQXJCLENBREosRUFFSSxDQUFDLFNBQUQsRUFBWSxtQkFBWixFQUFpQyxTQUFqQyxDQUZKLENBVFMsRUFhVCxDQUNJLENBQUMsV0FBRCxFQUFjLFlBQWQsRUFBNEIsU0FBNUIsQ0FESixFQUVJLENBQUMsYUFBRCxFQUFnQixVQUFoQixFQUE0QixTQUE1QixDQUZKLENBYlMsRUFpQlQsQ0FDSSxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLFNBQXhCLENBREosRUFFSSxDQUFDLFlBQUQsRUFBZSxTQUFmLEVBQTBCLFNBQTFCLENBRkosQ0FqQlMsRUFxQlQsQ0FDSSxDQUFDLGFBQUQsRUFBZ0IsS0FBaEIsRUFBdUIsU0FBdkIsQ0FESixFQUVJLENBQUMsYUFBRCxFQUFnQixlQUFoQixFQUFpQyxTQUFqQyxDQUZKLENBckJTLENBQWI7QUEwQkEsU0FDQTtBQUFTLGFBQVMsRUFBRWxCLGdFQUFVLENBQUN5QixRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRLFdBQVIsQ0FESixDQURKLEVBSUk7QUFBUyxhQUFTLEVBQUcsR0FBRXpCLGdFQUFVLENBQUNPLElBQUssSUFBR1AsZ0VBQVUsQ0FBQzBCLEtBQU0sRUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLLGtCQURMLENBSkosRUFPSTtBQUFTLGFBQVMsRUFBRTFCLGdFQUFVLENBQUMyQixNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUUzQixnRUFBVSxDQUFDRSxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tOLDBFQUFlLENBQUM7QUFBQ0MsU0FBSyxFQUFFLFlBQVI7QUFBc0JDLFFBQUksRUFBRTtBQUE1QixHQUFELENBRHBCLENBREosQ0FQSixFQWFJO0FBQVMsYUFBUyxFQUFFRSxnRUFBVSxDQUFDNEIsVUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLWCx5RUFBYyxDQUFDO0FBQUNDLFFBQUksRUFBRUE7QUFBUCxHQUFELENBRG5CLENBYkosQ0FEQTtBQW1CRCxDOzs7Ozs7Ozs7OztBQ25ESDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCIvLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLnNjc3MnXG5cbmNvbnN0IGltYWdlcyA9IFwiL2ltYWdlcy9jYXRlZ29yeVBpY3R1cmVzL1wiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCaWdCdXR0b24oe3Byb3BzLCBuYW1lfSkge1xuICAgIGNvbnN0IGN1cnJlbnRTcmMgPSBpbWFnZXMgKyBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXd9PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnNwYWNlfS8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld2J1dHRvbn0vPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlYm94fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYmlnaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFNyY31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnRleHR9PntuYW1lfTwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKHtwcm9wcywgbmFtZSwgY29sb3J9KSB7XG4gICAgY29uc3QgY3VycmVudFNyYyA9IGltYWdlcyArIHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5vcm1hbH0gPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveDF9PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5zcGFjZTF9Lz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYnV0dG9ufSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3J9fS8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYm94MX0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlYm94MX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRTcmN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy50ZXh0fT57bmFtZX08L3NlY3Rpb24+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhdGVnb3J5KHtsaXN0fSkge1xuICAgIGxldCByZXMgPSBbXVxuICAgIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgcmVzLnB1c2ggKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpbmV9IGtleT17ZWxlbWVudH0+ICBcbiAgICAgICAgICAgICAgICB7cmVuZGVyQnV0dG9uKHtwcm9wczogZWxlbWVudFswXVswXSwgbmFtZTogZWxlbWVudFswXVsxXSwgY29sb3I6IGVsZW1lbnRbMF1bMl19KX1cbiAgICAgICAgICAgICAgICB7cmVuZGVyQnV0dG9uKHtwcm9wczogZWxlbWVudFsxXVswXSwgbmFtZTogZWxlbWVudFsxXVsxXSwgY29sb3I6IGVsZW1lbnRbMV1bMl19KX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlcztcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyByZW5kZXJCaWdCdXR0b24sIHJlbmRlckJ1dHRvbiwgcmVuZGVyQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcblxuY29uc3QgaW1hZ2VzID0gXCIvaW1hZ2VzL2NhdGVnb3J5UGljdHVyZXMvXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IGxpc3QgPSBbXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtcImJvZHkucG5nXCIsIFwi0KXSr9C90LjQuSDQsdC40LUg0Y3RgNGF0YLRjdC9XCIsIFwiI0ZGRTZGRlwiXSxcbiAgICAgICAgICAgIFtcInJhaW5ib3cucG5nXCIsIFwi06jQvdCz06nQvdKv0q/QtFwiLCBcIiNCNkUwQjFcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtcIm5hdHVyZS5wbmdcIiwgXCLQkdCw0LnQs9Cw0LvRjFwiLCBcIiNFNkU4RkZcIl0sXG4gICAgICAgICAgICBbXCJhcHBsZS5wbmdcIiwgXCLQltC40LzRgVwiLCBcIiNGRkVERTZcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtcImZvb2QucG5nXCIsIFwi0KXQvtC+0LtcIiwgXCIjQTdFNUU1XCJdLFxuICAgICAgICAgICAgW1wiYnVzLnBuZ1wiLCBcItCi0Y3RjdCy0YDQuNC50L0g0YXRjdGA0Y3Qs9GB0Y3Qu1wiLCBcIiNDNUVCQjRcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtcImZsYWdzLnBuZ1wiLCBcItCi0YPQsyDQtNCw0LvQsdCw0LBcIiwgXCIjRkZFODhGXCJdLFxuICAgICAgICAgICAgW1wicGxhbmV0cy5wbmdcIiwgXCLQntC0INCz0LDRgNCw0LNcIiwgXCIjRkZFREU2XCJdLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgICBbXCJqb2IucG5nXCIsIFwi0JzRjdGA0LPRjdC20LjQu1wiLCBcIiM0MEU2QkVcIl0sXG4gICAgICAgICAgICBbXCJmYW1pbHkucG5nXCIsIFwi0JPRjdGAINCx0q/Qu1wiLCBcIiNGRkIyOEZcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtcIm51bWJlcnMucG5nXCIsIFwi0KLQvtC+XCIsIFwiI0U2RThGRlwiXSxcbiAgICAgICAgICAgIFtcInZlZ2dpZXMucG5nXCIsIFwi0KXSr9C90YHQvdC40Lkg0L3QvtCz0L7QvlwiLCBcIiNGRkU2RkZcIl0sXG4gICAgICAgIF1cbiAgICBdO1xuICAgIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhvbWVwYWdlfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+e1wiSG9tZSBwYWdlXCJ9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMudGV4dH0gJHt1dGlsU3R5bGVzLnRpdGxlfWB9PlxuICAgICAgICAgICAge1wi0KjQuNC90Y3RjdGAINC90Y3QvNGN0LPQtNGB0Y3QvVwifVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5zbGlkZXJ9PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XG4gICAgICAgICAgICAgICAge3JlbmRlckJpZ0J1dHRvbih7cHJvcHM6IFwiZ2lyYWZlLnBuZ1wiLCBuYW1lOiBcItCQ0LzRjNGC0LDQtFwifSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY2F0ZWdvcmllc30+XG4gICAgICAgICAgICB7cmVuZGVyQ2F0ZWdvcnkoe2xpc3Q6IGxpc3R9KX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZXh0XCI6IFwidXRpbHNfdGV4dF9fMTI0SnBcIixcblx0XCJ0aXRsZVwiOiBcInV0aWxzX3RpdGxlX18yNGphSlwiLFxuXHRcIm5ld1wiOiBcInV0aWxzX25ld19fMWJHWGRcIixcblx0XCJub3JtYWxcIjogXCJ1dGlsc19ub3JtYWxfXzFjODlYXCIsXG5cdFwic2xpZGVyXCI6IFwidXRpbHNfc2xpZGVyX19kSDR2RlwiLFxuXHRcImNhdGVnb3JpZXNcIjogXCJ1dGlsc19jYXRlZ29yaWVzX18xZi1lR1wiLFxuXHRcImhvbWVwYWdlXCI6IFwidXRpbHNfaG9tZXBhZ2VfXzM2ODY4XCIsXG5cdFwiaW1hZ2Vib3hcIjogXCJ1dGlsc19pbWFnZWJveF9fMXA5OF9cIixcblx0XCJiaWdpbWFnZVwiOiBcInV0aWxzX2JpZ2ltYWdlX18zVnA5NFwiLFxuXHRcImltYWdlXCI6IFwidXRpbHNfaW1hZ2VfXzN2QWl5XCIsXG5cdFwic3BhY2VcIjogXCJ1dGlsc19zcGFjZV9fYmtxS3VcIixcblx0XCJzcGFjZTFcIjogXCJ1dGlsc19zcGFjZTFfXzFZNFd1XCIsXG5cdFwibmV3YnV0dG9uXCI6IFwidXRpbHNfbmV3YnV0dG9uX18xQTkzRFwiLFxuXHRcImxpbmVcIjogXCJ1dGlsc19saW5lX19CZjZLWFwiLFxuXHRcImJ1dHRvblwiOiBcInV0aWxzX2J1dHRvbl9fMWZxd21cIixcblx0XCJib3hcIjogXCJ1dGlsc19ib3hfXzIzQk9rXCIsXG5cdFwiYm94MVwiOiBcInV0aWxzX2JveDFfX1VsWExPXCIsXG5cdFwiY2VudGVyZXJcIjogXCJ1dGlsc19jZW50ZXJlcl9fMkptWldcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9