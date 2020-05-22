webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CreateFile.js":
/*!**********************************!*\
  !*** ./components/CreateFile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/nishihara/dev/pessoal/calctext_react/components/CreateFile.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar CreateFile = function CreateFile(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var onSave = function onSave(e) {\n    if (props.onSave) props.onSave(name);\n    if (props.onBack) props.onBack();\n  };\n\n  var onChange = function onChange(event) {\n    var target = event.target;\n    var value = target.type === 'checkbox' ? target.checked : target.value;\n    setName(value);\n  };\n\n  var onCancel = function onCancel(event) {\n    if (props.onBack) props.onBack();\n  };\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"column\",\n    spacing: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    name: \"name\",\n    id: \"standard-basic\",\n    label: \"Name\",\n    value: name,\n    onChange: onChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    justify: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: onSave,\n    size: \"small\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, \"Save\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    onClick: onCancel,\n    size: \"small\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }, \"Cancel\"))));\n};\n\n_s(CreateFile, \"17ovvp4+BQ/7zN2L0Q9MElPn7yM=\");\n\n_c = CreateFile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateFile);\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateFile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZUZpbGUuanM/YjhiMyJdLCJuYW1lcyI6WyJDcmVhdGVGaWxlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwib25TYXZlIiwiZSIsIm9uQmFjayIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJjaGVja2VkIiwib25DYW5jZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ25CQyxJQURtQjtBQUFBLE1BQ2RDLE9BRGM7O0FBRTFCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQsRUFBSztBQUNoQixRQUFHTCxLQUFLLENBQUNJLE1BQVQsRUFBaUJKLEtBQUssQ0FBQ0ksTUFBTixDQUFhRixJQUFiO0FBQ2pCLFFBQUdGLEtBQUssQ0FBQ00sTUFBVCxFQUFpQk4sS0FBSyxDQUFDTSxNQUFOO0FBQ3BCLEdBSEQ7O0FBSUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLFFBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFyQjtBQUNBLFFBQU1DLEtBQUssR0FBR0QsTUFBTSxDQUFDRSxJQUFQLEtBQWdCLFVBQWhCLEdBQTZCRixNQUFNLENBQUNHLE9BQXBDLEdBQThDSCxNQUFNLENBQUNDLEtBQW5FO0FBQ0FQLFdBQU8sQ0FBQ08sS0FBRCxDQUFQO0FBQ0QsR0FKSDs7QUFNQSxNQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDTCxLQUFELEVBQVM7QUFDdEIsUUFBR1IsS0FBSyxDQUFDTSxNQUFULEVBQWlCTixLQUFLLENBQUNNLE1BQU47QUFDcEIsR0FGRDs7QUFHQSxTQUNJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQW1DLFdBQU8sRUFBRSxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUFXLFFBQUksRUFBQyxNQUFoQjtBQUF1QixNQUFFLEVBQUMsZ0JBQTFCO0FBQTJDLFNBQUssRUFBQyxNQUFqRDtBQUF3RCxTQUFLLEVBQUVKLElBQS9EO0FBQXFFLFlBQVEsRUFBRUssUUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBQyxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixTQUFLLEVBQUMsU0FBbEM7QUFBNEMsV0FBTyxFQUFFSCxNQUFyRDtBQUE2RCxRQUFJLEVBQUMsT0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUksTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVTLFFBQXJDO0FBQStDLFFBQUksRUFBQyxPQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosQ0FKSixDQURKLENBREo7QUFhSCxDQTVCRDs7R0FBTWQsVTs7S0FBQUEsVTtBQThCU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZUZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgVGV4dEZpZWxkLCBCdXR0b24sIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5jb25zdCBDcmVhdGVGaWxlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW25hbWUsc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3Qgb25TYXZlID0gKGUpPT57XG4gICAgICAgIGlmKHByb3BzLm9uU2F2ZSkgcHJvcHMub25TYXZlKG5hbWUpO1xuICAgICAgICBpZihwcm9wcy5vbkJhY2spIHByb3BzLm9uQmFjaygpO1xuICAgIH1cbiAgICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcbiAgICAgICAgc2V0TmFtZSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICBjb25zdCBvbkNhbmNlbCA9IChldmVudCk9PntcbiAgICAgICAgaWYocHJvcHMub25CYWNrKSBwcm9wcy5vbkJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG5hbWU9XCJuYW1lXCIgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiIGxhYmVsPVwiTmFtZVwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uU2F2ZX0gc2l6ZT1cInNtYWxsXCI+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtvbkNhbmNlbH0gc2l6ZT1cInNtYWxsXCI+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CreateFile.js\n");

/***/ })

})