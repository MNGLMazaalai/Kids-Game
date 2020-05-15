webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: renderBigButton, renderButton, renderCategory, renderSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBigButton\", function() { return renderBigButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderButton\", function() { return renderButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCategory\", function() { return renderCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSlider\", function() { return renderSlider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_category_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/category.json */ \"./data/category.json\");\nvar _data_category_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/category.json */ \"./data/category.json\", 1);\n/* harmony import */ var _data_newCategory_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/newCategory.json */ \"./data/newCategory.json\");\nvar _data_newCategory_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/newCategory.json */ \"./data/newCategory.json\", 1);\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/macbook/Desktop/reactGame/Kids-Game/components/button.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import Head from 'next/head'\n// import Link from 'next/link'\n\n\n\nvar images = \"/images/categoryPictures/\";\nfunction renderBigButton(_ref) {\n  var props = _ref.props,\n      name = _ref.name;\n  var currentSrc = images + props;\n  return __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[\"new\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.space,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imagebox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newImage,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, name)));\n}\nfunction renderButton(_ref2) {\n  var props = _ref2.props,\n      name = _ref2.name,\n      color = _ref2.color;\n  var currentSrc = images + props;\n  return __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.normal,\n    key: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newSpace,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button,\n    style: {\n      backgroundColor: color\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newImagebox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, name)));\n}\nfunction renderCategory() {\n  var _this = this;\n\n  var res = [],\n      count = 0;\n  _data_category_json__WEBPACK_IMPORTED_MODULE_1__.forEach(function (element) {\n    res.push(__jsx(\"section\", {\n      className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.line,\n      key: count++,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }\n    }, element.map(function (el) {\n      return renderButton({\n        props: el.photo,\n        name: el.name,\n        color: el.color\n      });\n    })));\n  });\n  return res;\n}\nfunction renderSlider() {\n  var res = [];\n  _data_newCategory_json__WEBPACK_IMPORTED_MODULE_2__.forEach(function (el) {\n    res.push(renderBigButton({\n      props: el.photo,\n      name: el.name,\n      color: el.color\n    }));\n  });\n  return res;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcz82YjdmIl0sIm5hbWVzIjpbImltYWdlcyIsInJlbmRlckJpZ0J1dHRvbiIsInByb3BzIiwibmFtZSIsImN1cnJlbnRTcmMiLCJ1dGlsU3R5bGVzIiwiYm94Iiwic3BhY2UiLCJuZXdCdXR0b24iLCJpbWFnZWJveCIsIm5ld0ltYWdlIiwidGV4dCIsInJlbmRlckJ1dHRvbiIsImNvbG9yIiwibm9ybWFsIiwibmV3Qm94IiwibmV3U3BhY2UiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJuZXdJbWFnZWJveCIsImltYWdlIiwicmVuZGVyQ2F0ZWdvcnkiLCJyZXMiLCJjb3VudCIsImxpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJsaW5lIiwibWFwIiwiZWwiLCJwaG90byIsInJlbmRlclNsaWRlciIsIm5ld0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLDJCQUFmO0FBRU8sU0FBU0MsZUFBVCxPQUF3QztBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUMzQyxNQUFNQyxVQUFVLEdBQUdKLE1BQU0sR0FBR0UsS0FBNUI7QUFDQSxTQUNJO0FBQVMsYUFBUyxFQUFFRyxnRUFBVSxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVBLGdFQUFVLENBQUNDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUQsZ0VBQVUsQ0FBQ0UsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUyxhQUFTLEVBQUVGLGdFQUFVLENBQUNHLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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LEdBQUcsRUFBVjtBQUNBVyxxREFBTyxDQUFDUixPQUFSLENBQWdCLFVBQUFLLEVBQUUsRUFBSTtBQUNsQlIsT0FBRyxDQUFDSyxJQUFKLENBQVMxQixlQUFlLENBQUM7QUFBQ0MsV0FBSyxFQUFFNEIsRUFBRSxDQUFDQyxLQUFYO0FBQWtCNUIsVUFBSSxFQUFFMkIsRUFBRSxDQUFDM0IsSUFBM0I7QUFBaUNVLFdBQUssRUFBRWlCLEVBQUUsQ0FBQ2pCO0FBQTNDLEtBQUQsQ0FBeEI7QUFDSCxHQUZEO0FBR0EsU0FBT1MsR0FBUDtBQUNIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9idXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgbGlzdCBmcm9tICcuLi9kYXRhL2NhdGVnb3J5Lmpzb24nXG5pbXBvcnQgbmV3TGlzdCBmcm9tICcuLi9kYXRhL25ld0NhdGVnb3J5Lmpzb24nXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLnNjc3MnXG5cbmNvbnN0IGltYWdlcyA9IFwiL2ltYWdlcy9jYXRlZ29yeVBpY3R1cmVzL1wiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCaWdCdXR0b24oe3Byb3BzLCBuYW1lfSkge1xuICAgIGNvbnN0IGN1cnJlbnRTcmMgPSBpbWFnZXMgKyBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXd9PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnNwYWNlfS8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld0J1dHRvbn0vPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlYm94fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFNyY31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnRleHR9PntuYW1lfTwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKHtwcm9wcywgbmFtZSwgY29sb3J9KSB7XG4gICAgY29uc3QgY3VycmVudFNyYyA9IGltYWdlcyArIHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5vcm1hbH0ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdCb3h9PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdTcGFjZX0vPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5idXR0b259IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBjb2xvcn19Lz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdCb3h9PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdJbWFnZWJveH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRTcmN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy50ZXh0fT57bmFtZX08L3NlY3Rpb24+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhdGVnb3J5KCkge1xuICAgIGxldCByZXMgPSBbXSwgY291bnQgPSAwXG4gICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICByZXMucHVzaCAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGluZX0ga2V5PXtjb3VudCsrfT4gXG4gICAgICAgICAgICAgICAge2VsZW1lbnQubWFwKGVsID0+IHJlbmRlckJ1dHRvbih7cHJvcHM6IGVsLnBob3RvLCBuYW1lOiBlbC5uYW1lLCBjb2xvcjogZWwuY29sb3J9KSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiByZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2xpZGVyKCkge1xuICAgIGxldCByZXMgPSBbXVxuICAgIG5ld0xpc3QuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIHJlcy5wdXNoKHJlbmRlckJpZ0J1dHRvbih7cHJvcHM6IGVsLnBob3RvLCBuYW1lOiBlbC5uYW1lLCBjb2xvcjogZWwuY29sb3J9KSlcbiAgICB9KVxuICAgIHJldHVybiByZXM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/button.js\n");

/***/ })

})