webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: renderNewButton, renderButton, renderCategory, renderSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNewButton\", function() { return renderNewButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderButton\", function() { return renderButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCategory\", function() { return renderCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSlider\", function() { return renderSlider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_category_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/category.json */ \"./data/category.json\");\nvar _data_category_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/category.json */ \"./data/category.json\", 1);\n/* harmony import */ var _data_newCategory_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/newCategory.json */ \"./data/newCategory.json\");\nvar _data_newCategory_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/newCategory.json */ \"./data/newCategory.json\", 1);\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/macbook/Desktop/reactGame/Kids-Game/components/button.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import Head from 'next/head'\n\n\n\n\nvar images = \"/images/categoryPictures/\";\nfunction renderNewButton(_ref) {\n  var props = _ref.props,\n      name = _ref.name,\n      color = _ref.color;\n  var currentSrc = images + props;\n  return __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"new\"],\n    key: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.space,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newButton,\n    style: {\n      backgroundColor: color\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.imagebox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newImage,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, name)));\n}\nfunction renderButton(_ref2) {\n  var props = _ref2.props,\n      name = _ref2.name,\n      color = _ref2.color;\n  var currentSrc = images + props;\n  var id = props.replace(/\\.png$/, '');\n  var count = 0;\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"./levels/level\",\n    as: \"./levels/\".concat(id),\n    key: currentSrc,\n    passHref: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.normal,\n    key: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newSpace,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 21\n    }\n  }), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.button,\n    style: {\n      backgroundColor: color\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 21\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.newImagebox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image,\n    src: currentSrc,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 25\n    }\n  })), __jsx(\"section\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 21\n    }\n  }, name))));\n}\nfunction renderCategory() {\n  var _this = this;\n\n  var res = [],\n      count = 0;\n  _data_category_json__WEBPACK_IMPORTED_MODULE_2__.forEach(function (element) {\n    res.push(__jsx(\"section\", {\n      className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.line,\n      key: count++,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    }, element.map(function (el) {\n      return renderButton({\n        props: el.photo,\n        name: el.name,\n        color: el.color\n      });\n    })));\n  });\n  return res;\n}\nfunction renderSlider() {\n  var res = [];\n  _data_newCategory_json__WEBPACK_IMPORTED_MODULE_3__.forEach(function (el) {\n    res.push(renderNewButton({\n      props: el.photo,\n      name: el.name,\n      color: el.color\n    }));\n  });\n  return res;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi5qcz82YjdmIl0sIm5hbWVzIjpbImltYWdlcyIsInJlbmRlck5ld0J1dHRvbiIsInByb3BzIiwibmFtZSIsImNvbG9yIiwiY3VycmVudFNyYyIsInV0aWxTdHlsZXMiLCJuZXdCb3giLCJzcGFjZSIsIm5ld0J1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImltYWdlYm94IiwibmV3SW1hZ2UiLCJ0ZXh0IiwicmVuZGVyQnV0dG9uIiwiaWQiLCJyZXBsYWNlIiwiY291bnQiLCJub3JtYWwiLCJib3giLCJuZXdTcGFjZSIsImJ1dHRvbiIsIm5ld0ltYWdlYm94IiwiaW1hZ2UiLCJyZW5kZXJDYXRlZ29yeSIsInJlcyIsImxpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJsaW5lIiwibWFwIiwiZWwiLCJwaG90byIsInJlbmRlclNsaWRlciIsIm5ld0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsMkJBQWY7QUFFTyxTQUFTQyxlQUFULE9BQStDO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTtBQUNsRCxNQUFNQyxVQUFVLEdBQUdMLE1BQU0sR0FBR0UsS0FBNUI7QUFDQSxTQUNJO0FBQVMsYUFBUyxFQUFFSSxnRUFBVSxPQUE5QjtBQUFvQyxPQUFHLEVBQUVILElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUcsZ0VBQVUsQ0FBQ0MsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFRCxnRUFBVSxDQUFDRSxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFTLGFBQVMsRUFBRUYsZ0VBQVUsQ0FBQ0csU0FBL0I7QUFBMEMsU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUVOO0FBQWxCLEtBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBUyxhQUFTLEVBQUVFLGdFQUFVLENBQUNDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUQsZ0VBQVUsQ0FBQ0ssUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0EsYUFBUyxFQUFFTCxnRUFBVSxDQUFDTSxRQUR0QjtBQUVBLE9BQUcsRUFBRVAsVUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQU9JO0FBQVMsYUFBUyxFQUFFQyxnRUFBVSxDQUFDTyxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDVixJQUF0QyxDQVBKLENBTEosQ0FESjtBQWlCSDtBQUNNLFNBQVNXLFlBQVQsUUFBNEM7QUFBQSxNQUFyQlosS0FBcUIsU0FBckJBLEtBQXFCO0FBQUEsTUFBZEMsSUFBYyxTQUFkQSxJQUFjO0FBQUEsTUFBUkMsS0FBUSxTQUFSQSxLQUFRO0FBQy9DLE1BQU1DLFVBQVUsR0FBR0wsTUFBTSxHQUFHRSxLQUE1QjtBQUNBLE1BQU1hLEVBQUUsR0FBR2IsS0FBSyxDQUFDYyxPQUFOLENBQWMsUUFBZCxFQUF3QixFQUF4QixDQUFYO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0JBQVg7QUFBNEIsTUFBRSxxQkFBY0YsRUFBZCxDQUE5QjtBQUFrRCxPQUFHLEVBQUVWLFVBQXZEO0FBQW1FLFlBQVEsTUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFQyxnRUFBVSxDQUFDWSxNQUEvQjtBQUF1QyxPQUFHLEVBQUVmLElBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRUcsZ0VBQVUsQ0FBQ2EsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVMsYUFBUyxFQUFFYixnRUFBVSxDQUFDYyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFTLGFBQVMsRUFBRWQsZ0VBQVUsQ0FBQ2UsTUFBL0I7QUFBdUMsU0FBSyxFQUFFO0FBQUNYLHFCQUFlLEVBQUVOO0FBQWxCLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBUyxhQUFTLEVBQUVFLGdFQUFVLENBQUNhLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBRWIsZ0VBQVUsQ0FBQ2dCLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNBLGFBQVMsRUFBRWhCLGdFQUFVLENBQUNpQixLQUR0QjtBQUVBLE9BQUcsRUFBRWxCLFVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFPSTtBQUFTLGFBQVMsRUFBRUMsZ0VBQVUsQ0FBQ08sSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1YsSUFBdEMsQ0FQSixDQUxKLENBREosQ0FESjtBQW1CSDtBQUNNLFNBQVNxQixjQUFULEdBQTBCO0FBQUE7O0FBQzdCLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQUEsTUFBY1IsS0FBSyxHQUFHLENBQXRCO0FBQ0FTLGtEQUFJLENBQUNDLE9BQUwsQ0FBYSxVQUFBQyxPQUFPLEVBQUk7QUFDcEJILE9BQUcsQ0FBQ0ksSUFBSixDQUNJO0FBQVMsZUFBUyxFQUFFdkIsZ0VBQVUsQ0FBQ3dCLElBQS9CO0FBQXFDLFNBQUcsRUFBRWIsS0FBSyxFQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tXLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUFDLEVBQUU7QUFBQSxhQUFJbEIsWUFBWSxDQUFDO0FBQUNaLGFBQUssRUFBRThCLEVBQUUsQ0FBQ0MsS0FBWDtBQUFrQjlCLFlBQUksRUFBRTZCLEVBQUUsQ0FBQzdCLElBQTNCO0FBQWlDQyxhQUFLLEVBQUU0QixFQUFFLENBQUM1QjtBQUEzQyxPQUFELENBQWhCO0FBQUEsS0FBZCxDQURMLENBREo7QUFLSCxHQU5EO0FBT0EsU0FBT3FCLEdBQVA7QUFDSDtBQUNNLFNBQVNTLFlBQVQsR0FBd0I7QUFDM0IsTUFBSVQsR0FBRyxHQUFHLEVBQVY7QUFDQVUscURBQU8sQ0FBQ1IsT0FBUixDQUFnQixVQUFBSyxFQUFFLEVBQUk7QUFDbEJQLE9BQUcsQ0FBQ0ksSUFBSixDQUFTNUIsZUFBZSxDQUFDO0FBQUNDLFdBQUssRUFBRThCLEVBQUUsQ0FBQ0MsS0FBWDtBQUFrQjlCLFVBQUksRUFBRTZCLEVBQUUsQ0FBQzdCLElBQTNCO0FBQWlDQyxXQUFLLEVBQUU0QixFQUFFLENBQUM1QjtBQUEzQyxLQUFELENBQXhCO0FBQ0gsR0FGRDtBQUdBLFNBQU9xQixHQUFQO0FBQ0giLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBsaXN0IGZyb20gJy4uL2RhdGEvY2F0ZWdvcnkuanNvbidcbmltcG9ydCBuZXdMaXN0IGZyb20gJy4uL2RhdGEvbmV3Q2F0ZWdvcnkuanNvbidcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuc2NzcydcblxuY29uc3QgaW1hZ2VzID0gXCIvaW1hZ2VzL2NhdGVnb3J5UGljdHVyZXMvXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5ld0J1dHRvbih7cHJvcHMsIG5hbWUsIGNvbG9yfSkge1xuICAgIGNvbnN0IGN1cnJlbnRTcmMgPSBpbWFnZXMgKyBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXd9IGtleT17bmFtZX0+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3Qm94fT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuc3BhY2V9Lz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3QnV0dG9ufSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3J9fSAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm5ld0JveH0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlYm94fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFNyY31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnRleHR9PntuYW1lfTwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKHtwcm9wcywgbmFtZSwgY29sb3J9KSB7XG4gICAgY29uc3QgY3VycmVudFNyYyA9IGltYWdlcyArIHByb3BzXG4gICAgY29uc3QgaWQgPSBwcm9wcy5yZXBsYWNlKC9cXC5wbmckLywgJycpXG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPVwiLi9sZXZlbHMvbGV2ZWxcIiBhcz17YC4vbGV2ZWxzLyR7aWR9YH0ga2V5PXtjdXJyZW50U3JjfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ub3JtYWx9IGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJveH0+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5uZXdTcGFjZX0vPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYnV0dG9ufSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3J9fS8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3h9PlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubmV3SW1hZ2Vib3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjdXJyZW50U3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMudGV4dH0+e25hbWV9PC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcnkoKSB7XG4gICAgbGV0IHJlcyA9IFtdLCBjb3VudCA9IDBcbiAgICBsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHJlcy5wdXNoIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saW5lfSBrZXk9e2NvdW50Kyt9PiBcbiAgICAgICAgICAgICAgICB7ZWxlbWVudC5tYXAoZWwgPT4gcmVuZGVyQnV0dG9uKHtwcm9wczogZWwucGhvdG8sIG5hbWU6IGVsLm5hbWUsIGNvbG9yOiBlbC5jb2xvcn0pKX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTbGlkZXIoKSB7XG4gICAgbGV0IHJlcyA9IFtdXG4gICAgbmV3TGlzdC5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgcmVzLnB1c2gocmVuZGVyTmV3QnV0dG9uKHtwcm9wczogZWwucGhvdG8sIG5hbWU6IGVsLm5hbWUsIGNvbG9yOiBlbC5jb2xvcn0pKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlcztcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/button.js\n");

/***/ })

})