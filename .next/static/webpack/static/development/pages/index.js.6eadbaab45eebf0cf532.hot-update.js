webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: renderBigButton, renderButton, renderCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBigButton\", function() { return renderBigButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderButton\", function() { return renderButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCategory\", function() { return renderCategory; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_category_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/category.json */ \"./data/category.json\");\nvar _data_category_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/category.json */ \"./data/category.json\", 1);\nvar _jsxFileName = \"C:\\\\Users\\\\G7\\\\Desktop\\\\react\\\\Kids-Game\\\\components\\\\button.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import Head from 'next/head'\n// import styles from './layout.module.css'\n // import Button from '../components/button'\n// import Link from 'next/link'\n\n\nvar images = \"/images/categoryPictures/\";\nfunction renderBigButton(_ref) {\n  var props = _ref.props,\n      name = _ref.name;\n  var currentSrc = images + props;\n  return __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[\"new\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.space,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.newbutton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imagebox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bigimage,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, name)));\n}\nfunction renderButton(_ref2) {\n  var props = _ref2.props,\n      name = _ref2.name,\n      color = _ref2.color;\n  var currentSrc = images + props;\n  return __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.normal,\n    key: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.box1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.space1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,\n    style: {\n      backgroundColor: color\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.box1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imagebox1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, name)));\n}\nfunction renderCategory() {\n  var _this = this;\n\n  var res = [],\n      count = 0;\n  _data_category_json__WEBPACK_IMPORTED_MODULE_2__.forEach(function (element) {\n    res.push(__jsx(\"section\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n      key: count++,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }\n    }, element.map(function (el) {\n      return renderButton({\n        props: el.photo,\n        name: el.name,\n        color: el.color\n      });\n    })));\n  });\n  return res;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcz82YjdmIl0sIm5hbWVzIjpbImltYWdlcyIsInJlbmRlckJpZ0J1dHRvbiIsInByb3BzIiwibmFtZSIsImN1cnJlbnRTcmMiLCJ1dGlsU3R5bGVzIiwiYm94Iiwic3BhY2UiLCJuZXdidXR0b24iLCJpbWFnZWJveCIsImJpZ2ltYWdlIiwidGV4dCIsInJlbmRlckJ1dHRvbiIsImNvbG9yIiwibm9ybWFsIiwiYm94MSIsInNwYWNlMSIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImltYWdlYm94MSIsImltYWdlIiwicmVuZGVyQ2F0ZWdvcnkiLCJyZXMiLCJjb3VudCIsImxpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJsaW5lIiwibWFwIiwiZWwiLCJwaG90byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLDJCQUFmO0FBRU8sU0FBU0MsZUFBVCxPQUF3QztBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUMzQyxNQUFNQyxVQUFVLEdBQUdKLE1BQU0sR0FBR0UsS0FBNUI7QUFDQSxTQUNJO0FBQVMsYUFBUyxFQUFFRywrREFBVSxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVBLCtEQUFVLENBQUNDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUQsK0RBQVUsQ0FBQ0UsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUyxhQUFTLEVBQUVGLCtEQUFVLENBQUNHLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBUyxhQUFTLEVBQUVILCtEQUFVLENBQUNDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUQsK0RBQVUsQ0FBQ0ksUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0EsYUFBUyxFQUFFSiwrREFBVSxDQUFDSyxRQUR0QjtBQUVBLE9BQUcsRUFBRU4sVUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQU9JO0FBQVMsYUFBUyxFQUFFQywrREFBVSxDQUFDTSxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDUixJQUF0QyxDQVBKLENBTEosQ0FESjtBQWlCSDtBQUNNLFNBQVNTLFlBQVQsUUFBNEM7QUFBQSxNQUFyQlYsS0FBcUIsU0FBckJBLEtBQXFCO0FBQUEsTUFBZEMsSUFBYyxTQUFkQSxJQUFjO0FBQUEsTUFBUlUsS0FBUSxTQUFSQSxLQUFRO0FBQy9DLE1BQU1ULFVBQVUsR0FBR0osTUFBTSxHQUFHRSxLQUE1QjtBQUNBLFNBQ0k7QUFBUyxhQUFTLEVBQUVHLCtEQUFVLENBQUNTLE1BQS9CO0FBQXVDLE9BQUcsRUFBRVgsSUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFRSwrREFBVSxDQUFDVSxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVWLCtEQUFVLENBQUNXLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVMsYUFBUyxFQUFFWCwrREFBVSxDQUFDWSxNQUEvQjtBQUF1QyxTQUFLLEVBQUU7QUFBQ0MscUJBQWUsRUFBRUw7QUFBbEIsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSTtBQUFTLGFBQVMsRUFBRVIsK0RBQVUsQ0FBQ1UsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFViwrREFBVSxDQUFDYyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDQSxhQUFTLEVBQUVkLCtEQUFVLENBQUNlLEtBRHRCO0FBRUEsT0FBRyxFQUFFaEIsVUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQU9JO0FBQVMsYUFBUyxFQUFFQywrREFBVSxDQUFDTSxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDUixJQUF0QyxDQVBKLENBTEosQ0FESjtBQWlCSDtBQUNNLFNBQVNrQixjQUFULEdBQTBCO0FBQUE7O0FBQzdCLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQUEsTUFBY0MsS0FBSyxHQUFHLENBQXRCO0FBQ0FDLGtEQUFJLENBQUNDLE9BQUwsQ0FBYSxVQUFBQyxPQUFPLEVBQUk7QUFDcEJKLE9BQUcsQ0FBQ0ssSUFBSixDQUNJO0FBQVMsZUFBUyxFQUFFdEIsK0RBQVUsQ0FBQ3VCLElBQS9CO0FBQXFDLFNBQUcsRUFBRUwsS0FBSyxFQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRVFHLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUFDLEVBQUU7QUFBQSxhQUNWbEIsWUFBWSxDQUFDO0FBQUNWLGFBQUssRUFBRTRCLEVBQUUsQ0FBQ0MsS0FBWDtBQUFrQjVCLFlBQUksRUFBRTJCLEVBQUUsQ0FBQzNCLElBQTNCO0FBQWlDVSxhQUFLLEVBQUVpQixFQUFFLENBQUNqQjtBQUEzQyxPQUFELENBREY7QUFBQSxLQUFkLENBRlIsQ0FESjtBQVNILEdBVkQ7QUFXQSxTQUFPUyxHQUFQO0FBQ0giLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcclxuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgbGlzdCBmcm9tICcuLi9kYXRhL2NhdGVnb3J5Lmpzb24nXHJcblxyXG5jb25zdCBpbWFnZXMgPSBcIi9pbWFnZXMvY2F0ZWdvcnlQaWN0dXJlcy9cIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJpZ0J1dHRvbih7cHJvcHMsIG5hbWV9KSB7XHJcbiAgICBjb25zdCBjdXJyZW50U3JjID0gaW1hZ2VzICsgcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld30+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3h9PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnNwYWNlfS8+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3YnV0dG9ufS8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW1hZ2Vib3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYmlnaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50U3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMudGV4dH0+e25hbWV9PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKHtwcm9wcywgbmFtZSwgY29sb3J9KSB7XHJcbiAgICBjb25zdCBjdXJyZW50U3JjID0gaW1hZ2VzICsgcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5vcm1hbH0ga2V5PXtuYW1lfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveDF9PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnNwYWNlMX0vPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJ1dHRvbn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yfX0vPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3gxfT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5pbWFnZWJveDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50U3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMudGV4dH0+e25hbWV9PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcnkoKSB7XHJcbiAgICBsZXQgcmVzID0gW10sIGNvdW50ID0gMFxyXG4gICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHJlcy5wdXNoIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpbmV9IGtleT17Y291bnQrK30+IFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubWFwKGVsID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJCdXR0b24oe3Byb3BzOiBlbC5waG90bywgbmFtZTogZWwubmFtZSwgY29sb3I6IGVsLmNvbG9yfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlcztcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/button.js\n");

/***/ })

})