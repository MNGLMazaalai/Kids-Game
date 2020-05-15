webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: renderNewButton, renderButton, renderCategory, renderSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNewButton\", function() { return renderNewButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderButton\", function() { return renderButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCategory\", function() { return renderCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSlider\", function() { return renderSlider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_category_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/category.json */ \"./data/category.json\");\nvar _data_category_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/category.json */ \"./data/category.json\", 1);\n/* harmony import */ var _data_newCategory_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/newCategory.json */ \"./data/newCategory.json\");\nvar _data_newCategory_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/newCategory.json */ \"./data/newCategory.json\", 1);\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\G7\\\\Desktop\\\\react\\\\Kids-Game\\\\components\\\\button.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import Head from 'next/head'\n\n\n\n\nvar images = \"/images/categoryPictures/\";\nfunction renderNewButton(_ref) {\n  var props = _ref.props,\n      name = _ref.name;\n  var currentSrc = images + props;\n  return __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"new\"],\n    key: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.space,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.imagebox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newImage,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, name)));\n}\nfunction renderButton(_ref2) {\n  var props = _ref2.props,\n      name = _ref2.name,\n      color = _ref2.color;\n  var currentSrc = images + props;\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"./levels/level\",\n    as: \"./levels/\".concat(name),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.normal,\n    key: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newSpace,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 21\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.button,\n    style: {\n      backgroundColor: color\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newImagebox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 25\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 21\n    }\n  }, name))));\n}\nfunction renderCategory() {\n  var _this = this;\n\n  var res = [],\n      count = 0;\n  _data_category_json__WEBPACK_IMPORTED_MODULE_2__.forEach(function (element) {\n    res.push(__jsx(\"section\", {\n      className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.line,\n      key: count++,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 13\n      }\n    }, element.map(function (el) {\n      return renderButton({\n        props: el.photo,\n        name: el.name,\n        color: el.color\n      });\n    })));\n  });\n  return res;\n}\nfunction renderSlider() {\n  var res = [];\n  _data_newCategory_json__WEBPACK_IMPORTED_MODULE_3__.forEach(function (el) {\n    res.push(renderNewButton({\n      props: el.photo,\n      name: el.name,\n      color: el.color\n    }));\n  });\n  return res;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcz82YjdmIl0sIm5hbWVzIjpbImltYWdlcyIsInJlbmRlck5ld0J1dHRvbiIsInByb3BzIiwibmFtZSIsImN1cnJlbnRTcmMiLCJ1dGlsU3R5bGVzIiwiYm94Iiwic3BhY2UiLCJuZXdCdXR0b24iLCJpbWFnZWJveCIsIm5ld0ltYWdlIiwidGV4dCIsInJlbmRlckJ1dHRvbiIsImNvbG9yIiwibm9ybWFsIiwibmV3Qm94IiwibmV3U3BhY2UiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJuZXdJbWFnZWJveCIsImltYWdlIiwicmVuZGVyQ2F0ZWdvcnkiLCJyZXMiLCJjb3VudCIsImxpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJsaW5lIiwibWFwIiwiZWwiLCJwaG90byIsInJlbmRlclNsaWRlciIsIm5ld0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsMkJBQWY7QUFFTyxTQUFTQyxlQUFULE9BQXdDO0FBQUEsTUFBZEMsS0FBYyxRQUFkQSxLQUFjO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQzNDLE1BQU1DLFVBQVUsR0FBR0osTUFBTSxHQUFHRSxLQUE1QjtBQUNBLFNBQ0k7QUFBUyxhQUFTLEVBQUVHLGdFQUFVLE9BQTlCO0FBQW9DLE9BQUcsRUFBRUYsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFRSxnRUFBVSxDQUFDQyxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVELGdFQUFVLENBQUNFLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVMsYUFBUyxFQUFFRixnRUFBVSxDQUFDRyxTQUEv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LGFBQUssRUFBRWlCLEVBQUUsQ0FBQ2pCO0FBQTNDLE9BQUQsQ0FBaEI7QUFBQSxLQUFkLENBREwsQ0FESjtBQUtILEdBTkQ7QUFPQSxTQUFPUyxHQUFQO0FBQ0g7QUFDTSxTQUFTVSxZQUFULEdBQXdCO0FBQzNCLE1BQUlWLEdBQUcsR0FBRyxFQUFWO0FBQ0FXLHFEQUFPLENBQUNSLE9BQVIsQ0FBZ0IsVUFBQUssRUFBRSxFQUFJO0FBQ2xCUixPQUFHLENBQUNLLElBQUosQ0FBUzFCLGVBQWUsQ0FBQztBQUFDQyxXQUFLLEVBQUU0QixFQUFFLENBQUNDLEtBQVg7QUFBa0I1QixVQUFJLEVBQUUyQixFQUFFLENBQUMzQixJQUEzQjtBQUFpQ1UsV0FBSyxFQUFFaUIsRUFBRSxDQUFDakI7QUFBM0MsS0FBRCxDQUF4QjtBQUNILEdBRkQ7QUFHQSxTQUFPUyxHQUFQO0FBQ0giLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgbGlzdCBmcm9tICcuLi9kYXRhL2NhdGVnb3J5Lmpzb24nXHJcbmltcG9ydCBuZXdMaXN0IGZyb20gJy4uL2RhdGEvbmV3Q2F0ZWdvcnkuanNvbidcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgaW1hZ2VzID0gXCIvaW1hZ2VzL2NhdGVnb3J5UGljdHVyZXMvXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOZXdCdXR0b24oe3Byb3BzLCBuYW1lfSkge1xyXG4gICAgY29uc3QgY3VycmVudFNyYyA9IGltYWdlcyArIHByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXd9IGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3h9PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnNwYWNlfS8+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3QnV0dG9ufS8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW1hZ2Vib3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50U3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMudGV4dH0+e25hbWV9PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKHtwcm9wcywgbmFtZSwgY29sb3J9KSB7XHJcbiAgICBjb25zdCBjdXJyZW50U3JjID0gaW1hZ2VzICsgcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi4vbGV2ZWxzL2xldmVsXCIgYXM9e2AuL2xldmVscy8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ub3JtYWx9IGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3U3BhY2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYnV0dG9ufSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3J9fS8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3SW1hZ2Vib3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50U3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMudGV4dH0+e25hbWV9PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcnkoKSB7XHJcbiAgICBsZXQgcmVzID0gW10sIGNvdW50ID0gMFxyXG4gICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHJlcy5wdXNoIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpbmV9IGtleT17Y291bnQrK30+IFxyXG4gICAgICAgICAgICAgICAge2VsZW1lbnQubWFwKGVsID0+IHJlbmRlckJ1dHRvbih7cHJvcHM6IGVsLnBob3RvLCBuYW1lOiBlbC5uYW1lLCBjb2xvcjogZWwuY29sb3J9KSl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2xpZGVyKCkge1xyXG4gICAgbGV0IHJlcyA9IFtdXHJcbiAgICBuZXdMaXN0LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIHJlcy5wdXNoKHJlbmRlck5ld0J1dHRvbih7cHJvcHM6IGVsLnBob3RvLCBuYW1lOiBlbC5uYW1lLCBjb2xvcjogZWwuY29sb3J9KSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVzO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/button.js\n");

/***/ })

})