webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: renderBigButton, renderButton, renderCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBigButton\", function() { return renderBigButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderButton\", function() { return renderButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCategory\", function() { return renderCategory; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_category_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/category.json */ \"./data/category.json\");\nvar _data_category_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/category.json */ \"./data/category.json\", 1);\nvar _jsxFileName = \"C:\\\\Users\\\\G7\\\\Desktop\\\\react\\\\Kids-Game\\\\components\\\\button.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import Head from 'next/head'\n// import styles from './layout.module.css'\n // import Button from '../components/button'\n// import Link from 'next/link'\n\n\nvar images = \"/images/categoryPictures/\";\nfunction renderBigButton(_ref) {\n  var props = _ref.props,\n      name = _ref.name;\n  var currentSrc = images + props;\n  return __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[\"new\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.space,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.newbutton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imagebox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bigimage,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, name)));\n}\nfunction renderButton(_ref2) {\n  var props = _ref2.props,\n      name = _ref2.name,\n      color = _ref2.color;\n  var currentSrc = images + props;\n  return __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.normal,\n    key: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.box1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.space1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,\n    style: {\n      backgroundColor: color\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.box1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imagebox1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, name)));\n}\nfunction renderCategory() {\n  var _this = this;\n\n  var res = [],\n      count = 0;\n  _data_category_json__WEBPACK_IMPORTED_MODULE_2__.forEach(function (element) {\n    res.push(__jsx(\"section\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.line,\n      key: element,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }\n    }, element.map(function (el) {\n      return renderButton({\n        props: el.photo,\n        name: el.name,\n        color: el.color\n      });\n    })));\n  });\n  return res;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcz82YjdmIl0sIm5hbWVzIjpbImltYWdlcyIsInJlbmRlckJpZ0J1dHRvbiIsInByb3BzIiwibmFtZSIsImN1cnJlbnRTcmMiLCJ1dGlsU3R5bGVzIiwiYm94Iiwic3BhY2UiLCJuZXdidXR0b24iLCJpbWFnZWJveCIsImJpZ2ltYWdlIiwidGV4dCIsInJlbmRlckJ1dHRvbiIsImNvbG9yIiwibm9ybWFsIiwiYm94MSIsInNwYWNlMSIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImltYWdlYm94MSIsImltYWdlIiwicmVuZGVyQ2F0ZWdvcnkiLCJyZXMiLCJjb3VudCIsImxpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJsaW5lIiwibWFwIiwiZWwiLCJwaG90byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLDJCQUFmO0FBRU8sU0FBU0MsZUFBVCxPQUF3QztBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUMzQyxNQUFNQyxVQUFVLEdBQUdKLE1BQU0sR0FBR0UsS0FBNUI7QUFDQSxTQUNJO0FBQVMsYUFBUyxFQUFFRywrREFBVSxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVBLCtEQUFVLENBQUNDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUQsK0RBQVUsQ0FBQ0UsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUyxhQUFTLEVBQUVGLCtEQUFVLENBQUNHLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBUyxhQUFTLEVBQUVILCtEQUFVLENBQUNDLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUQsK0RBQVUsQ0FBQ0ksUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0EsYUFBUyxFQUFFSiwrREFBVSxDQUFDSyxRQUR0QjtBQUVBLE9BQUcsRUFBRU4sVUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQU9JO0FBQVMsYUFBUyxFQUFFQywrREFBVSxDQUFDTSxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDUixJQUF0QyxDQVBKLENBTEosQ0FESjtBQWlCSDtBQUNNLFNBQVNTLFlBQVQsUUFBNEM7QUFBQSxNQUFyQlYsS0FBcUIsU0FBckJBLEtBQXFCO0FBQUEsTUFBZEMsSUFBYyxTQUFkQSxJQUFjO0FBQUEsTUFBUlUsS0FBUSxTQUFSQSxLQUFRO0FBQy9DLE1BQU1ULFVBQVUsR0FBR0osTUFBTSxHQUFHRSxLQUE1QjtBQUNBLFNBQ0k7QUFBUyxhQUFTLEVBQUVHLCtEQUFVLENBQUNTLE1BQS9CO0FBQXVDLE9BQUcsRUFBRVgsSUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFRSwrREFBVSxDQUFDVSxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUyxhQUFTLEVBQUVWLCtEQUFVLENBQUNXLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVMsYUFBUyxFQUFFWCwrREFBVSxDQUFDWSxNQUEvQjtBQUF1QyxTQUFLLEVBQUU7QUFBQ0MscUJBQWUsRUFBRUw7QUFBbEIsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSTtBQUFTLGFBQVMsRUFBRVIsK0RBQVUsQ0FBQ1UsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFViwrREFBVSxDQUFDYyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDQSxhQUFTLEVBQUVkLCtEQUFVLENBQUNlLEtBRHRCO0FBRUEsT0FBRyxFQUFFaEIsVUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQU9JO0FBQVMsYUFBUyxFQUFFQywrREFBVSxDQUFDTSxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDUixJQUF0QyxDQVBKLENBTEosQ0FESjtBQWlCSDtBQUNNLFNBQVNrQixjQUFULEdBQTBCO0FBQUE7O0FBQzdCLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQUEsTUFBY0MsS0FBSyxHQUFHLENBQXRCO0FBQ0FDLGtEQUFJLENBQUNDLE9BQUwsQ0FBYSxVQUFBQyxPQUFPLEVBQUk7QUFDcEJKLE9BQUcsQ0FBQ0ssSUFBSixDQUNJO0FBQVMsZUFBUyxFQUFFdEIsK0RBQVUsQ0FBQ3VCLElBQS9CO0FBQXFDLFNBQUcsRUFBRUYsT0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVRQSxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFBQyxFQUFFO0FBQUEsYUFDVmxCLFlBQVksQ0FBQztBQUFDVixhQUFLLEVBQUU0QixFQUFFLENBQUNDLEtBQVg7QUFBa0I1QixZQUFJLEVBQUUyQixFQUFFLENBQUMzQixJQUEzQjtBQUFpQ1UsYUFBSyxFQUFFaUIsRUFBRSxDQUFDakI7QUFBM0MsT0FBRCxDQURGO0FBQUEsS0FBZCxDQUZSLENBREo7QUFTSCxHQVZEO0FBV0EsU0FBT1MsR0FBUDtBQUNIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9idXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXHJcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGxpc3QgZnJvbSAnLi4vZGF0YS9jYXRlZ29yeS5qc29uJ1xyXG5cclxuY29uc3QgaW1hZ2VzID0gXCIvaW1hZ2VzL2NhdGVnb3J5UGljdHVyZXMvXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCaWdCdXR0b24oe3Byb3BzLCBuYW1lfSkge1xyXG4gICAgY29uc3QgY3VycmVudFNyYyA9IGltYWdlcyArIHByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXd9PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYm94fT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5zcGFjZX0vPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld2J1dHRvbn0vPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3h9PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlYm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJpZ2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFNyY31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnRleHR9PntuYW1lfTwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJ1dHRvbih7cHJvcHMsIG5hbWUsIGNvbG9yfSkge1xyXG4gICAgY29uc3QgY3VycmVudFNyYyA9IGltYWdlcyArIHByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ub3JtYWx9IGtleT17bmFtZX0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3gxfT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5zcGFjZTF9Lz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5idXR0b259IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBjb2xvcn19Lz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYm94MX0+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW1hZ2Vib3gxfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFNyY31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnRleHR9PntuYW1lfTwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhdGVnb3J5KCkge1xyXG4gICAgbGV0IHJlcyA9IFtdLCBjb3VudCA9IDBcclxuICAgIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICByZXMucHVzaCAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saW5lfSBrZXk9e2VsZW1lbnR9PiBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm1hcChlbCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQnV0dG9uKHtwcm9wczogZWwucGhvdG8sIG5hbWU6IGVsLm5hbWUsIGNvbG9yOiBlbC5jb2xvcn0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICAgIHJldHVybiByZXM7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/button.js\n");

/***/ })

})