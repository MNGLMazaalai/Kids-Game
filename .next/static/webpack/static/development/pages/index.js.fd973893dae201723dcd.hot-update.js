webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: renderNewButton, renderButton, renderCategory, renderSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNewButton\", function() { return renderNewButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderButton\", function() { return renderButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCategory\", function() { return renderCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSlider\", function() { return renderSlider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_category_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/category.json */ \"./data/category.json\");\nvar _data_category_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/category.json */ \"./data/category.json\", 1);\n/* harmony import */ var _data_newCategory_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/newCategory.json */ \"./data/newCategory.json\");\nvar _data_newCategory_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/newCategory.json */ \"./data/newCategory.json\", 1);\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\G7\\\\Desktop\\\\react\\\\Kids-Game\\\\components\\\\button.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import Head from 'next/head'\n\n\n\n\nvar images = \"/images/categoryPictures/\";\nfunction renderNewButton(_ref) {\n  var props = _ref.props,\n      name = _ref.name;\n  var currentSrc = images + props;\n  return __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"new\"],\n    key: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.space,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.imagebox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newImage,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, name)));\n}\nfunction renderButton(_ref2) {\n  var props = _ref2.props,\n      name = _ref2.name,\n      color = _ref2.color;\n  var currentSrc = images + props;\n  var id = props.replace(/\\.png$/, '');\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"./levels/level\",\n    as: \"./levels/\".concat(id),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.normal,\n    key: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newSpace,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.button,\n    style: {\n      backgroundColor: color\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newImagebox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 25\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 21\n    }\n  }, name))));\n}\nfunction renderCategory() {\n  var _this = this;\n\n  var res = [],\n      count = 0;\n  _data_category_json__WEBPACK_IMPORTED_MODULE_2__.forEach(function (element) {\n    res.push(__jsx(\"section\", {\n      className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.line,\n      key: count++,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }\n    }, element.map(function (el) {\n      return renderButton({\n        props: el.photo,\n        name: el.name,\n        color: el.color\n      });\n    })));\n  });\n  return res;\n}\nfunction renderSlider() {\n  var res = [];\n  _data_newCategory_json__WEBPACK_IMPORTED_MODULE_3__.forEach(function (el) {\n    res.push(renderNewButton({\n      props: el.photo,\n      name: el.name,\n      color: el.color\n    }));\n  });\n  return res;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcz82YjdmIl0sIm5hbWVzIjpbImltYWdlcyIsInJlbmRlck5ld0J1dHRvbiIsInByb3BzIiwibmFtZSIsImN1cnJlbnRTcmMiLCJ1dGlsU3R5bGVzIiwiYm94Iiwic3BhY2UiLCJuZXdCdXR0b24iLCJpbWFnZWJveCIsIm5ld0ltYWdlIiwidGV4dCIsInJlbmRlckJ1dHRvbiIsImNvbG9yIiwiaWQiLCJyZXBsYWNlIiwibm9ybWFsIiwibmV3Qm94IiwibmV3U3BhY2UiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJuZXdJbWFnZWJveCIsImltYWdlIiwicmVuZGVyQ2F0ZWdvcnkiLCJyZXMiLCJjb3VudCIsImxpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJsaW5lIiwibWFwIiwiZWwiLCJwaG90byIsInJlbmRlclNsaWRlciIsIm5ld0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsMkJBQWY7QUFFTyxTQUFTQyxlQUFULE9BQXdDO0FBQUEsTUFBZEMsS0FBYyxRQUFkQSxLQUFjO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQzNDLE1BQU1DLFVBQVUsR0FBR0osTUFBTSxHQUFHRSxLQUE1QjtBQUNBLFNBQ0k7QUFBUyxhQUFTLEVBQUVHLGdFQUFVLE9BQTlCO0FBQW9DLE9BQUcsRUFBRUYsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFRSxnRUFBVSxDQUFDQyxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVELGdFQUFVLENBQUNFLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVMsYUFBUyxFQUFFRixn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Q0FBQztBQUFDVixhQUFLLEVBQUU4QixFQUFFLENBQUNDLEtBQVg7QUFBa0I5QixZQUFJLEVBQUU2QixFQUFFLENBQUM3QixJQUEzQjtBQUFpQ1UsYUFBSyxFQUFFbUIsRUFBRSxDQUFDbkI7QUFBM0MsT0FBRCxDQUFoQjtBQUFBLEtBQWQsQ0FETCxDQURKO0FBS0gsR0FORDtBQU9BLFNBQU9XLEdBQVA7QUFDSDtBQUNNLFNBQVNVLFlBQVQsR0FBd0I7QUFDM0IsTUFBSVYsR0FBRyxHQUFHLEVBQVY7QUFDQVcscURBQU8sQ0FBQ1IsT0FBUixDQUFnQixVQUFBSyxFQUFFLEVBQUk7QUFDbEJSLE9BQUcsQ0FBQ0ssSUFBSixDQUFTNUIsZUFBZSxDQUFDO0FBQUNDLFdBQUssRUFBRThCLEVBQUUsQ0FBQ0MsS0FBWDtBQUFrQjlCLFVBQUksRUFBRTZCLEVBQUUsQ0FBQzdCLElBQTNCO0FBQWlDVSxXQUFLLEVBQUVtQixFQUFFLENBQUNuQjtBQUEzQyxLQUFELENBQXhCO0FBQ0gsR0FGRDtBQUdBLFNBQU9XLEdBQVA7QUFDSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvYnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBsaXN0IGZyb20gJy4uL2RhdGEvY2F0ZWdvcnkuanNvbidcclxuaW1wb3J0IG5ld0xpc3QgZnJvbSAnLi4vZGF0YS9uZXdDYXRlZ29yeS5qc29uJ1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBpbWFnZXMgPSBcIi9pbWFnZXMvY2F0ZWdvcnlQaWN0dXJlcy9cIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5ld0J1dHRvbih7cHJvcHMsIG5hbWV9KSB7XHJcbiAgICBjb25zdCBjdXJyZW50U3JjID0gaW1hZ2VzICsgcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld30ga2V5PXtuYW1lfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuc3BhY2V9Lz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdCdXR0b259Lz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYm94fT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbWFnZWJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy50ZXh0fT57bmFtZX08L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCdXR0b24oe3Byb3BzLCBuYW1lLCBjb2xvcn0pIHtcclxuICAgIGNvbnN0IGN1cnJlbnRTcmMgPSBpbWFnZXMgKyBwcm9wc1xyXG4gICAgY29uc3QgaWQgPSBwcm9wcy5yZXBsYWNlKC9cXC5wbmckLywgJycpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIuL2xldmVscy9sZXZlbFwiIGFzPXtgLi9sZXZlbHMvJHtpZH1gfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5vcm1hbH0ga2V5PXtuYW1lfT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdTcGFjZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5idXR0b259IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBjb2xvcn19Lz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdJbWFnZWJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2N1cnJlbnRTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy50ZXh0fT57bmFtZX08L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYXRlZ29yeSgpIHtcclxuICAgIGxldCByZXMgPSBbXSwgY291bnQgPSAwXHJcbiAgICBsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcmVzLnB1c2ggKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGluZX0ga2V5PXtjb3VudCsrfT4gXHJcbiAgICAgICAgICAgICAgICB7ZWxlbWVudC5tYXAoZWwgPT4gcmVuZGVyQnV0dG9uKHtwcm9wczogZWwucGhvdG8sIG5hbWU6IGVsLm5hbWUsIGNvbG9yOiBlbC5jb2xvcn0pKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTbGlkZXIoKSB7XHJcbiAgICBsZXQgcmVzID0gW11cclxuICAgIG5ld0xpc3QuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgcmVzLnB1c2gocmVuZGVyTmV3QnV0dG9uKHtwcm9wczogZWwucGhvdG8sIG5hbWU6IGVsLm5hbWUsIGNvbG9yOiBlbC5jb2xvcn0pKVxyXG4gICAgfSlcclxuICAgIHJldHVybiByZXM7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/button.js\n");

/***/ })

})