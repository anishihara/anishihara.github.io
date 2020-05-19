webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CalcPad.js":
/*!*******************************!*\
  !*** ./components/CalcPad.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _services_calctextService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/calctextService */ \"./services/calctextService.js\");\n/* harmony import */ var html_to_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-to-react */ \"./node_modules/html-to-react/index.js\");\n/* harmony import */ var html_to_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_to_react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/nishihara/dev/pessoal/calctext_react/components/CalcPad.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar htmlToReactParser = new html_to_react__WEBPACK_IMPORTED_MODULE_4__[\"Parser\"]();\n\nvar CalcPad = function CalcPad(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    text: '',\n    cursorPosition: 0\n  }),\n      textFieldValue = _useState2[0],\n      setTextFieldValue = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      textFieldPosition = _useState3[0],\n      setTextFieldPosition = _useState3[1];\n\n  var textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var text = localStorage.getItem('text');\n\n    var _calctextService$comp = _services_calctextService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].computeTextAndConvertToHtml(text),\n        html = _calctextService$comp.html,\n        evaluatedText = _calctextService$comp.evaluatedText,\n        evaluatedValues = _calctextService$comp.evaluatedValues;\n\n    var reactComponent = htmlToReactParser.parse(html);\n    setText(reactComponent);\n    setTextFieldValue({\n      text: text,\n      cursorPosition: 0\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var textJustBefore = textFieldValue.text.substring(textFieldValue.cursorPosition - 2, textFieldValue.cursorPosition);\n    var cursorPosition = textJustBefore === '->' ? textFieldValue.text.indexOf('\\n', textFieldValue.cursorPosition) : textFieldValue.cursorPosition;\n    textAreaRef.current.selectionStart = cursorPosition;\n    textAreaRef.current.selectionEnd = cursorPosition;\n  }, [textFieldValue]);\n\n  var onChange = function onChange(event) {\n    var target = event.target;\n    var value = target.type === 'checkbox' ? target.checked : target.value;\n    var markdown = value;\n\n    var _calctextService$comp2 = _services_calctextService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].computeTextAndConvertToHtml(markdown),\n        html = _calctextService$comp2.html,\n        evaluatedText = _calctextService$comp2.evaluatedText,\n        evaluatedValues = _calctextService$comp2.evaluatedValues;\n\n    var reactComponent = htmlToReactParser.parse(html);\n    setText(reactComponent);\n    setTextFieldValue({\n      text: evaluatedText,\n      cursorPosition: target.selectionStart\n    });\n    localStorage.setItem('text', evaluatedText);\n  };\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    container: true,\n    direction: \"row\",\n    spacing: 2,\n    className: \"flex-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1966820808\",\n    __self: _this\n  }, \".flex-section{margin-top:6px;margin-left:5px;margin-right:5px;}.flex-col-scroll{overflow:auto;max-height:89vh;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNoaWhhcmEvZGV2L3Blc3NvYWwvY2FsY3RleHRfcmVhY3QvY29tcG9uZW50cy9DYWxjUGFkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDeUIsQUFJaUIsQUFLQSxjQUNFLENBTEQsZUFNakIsQ0FMa0IsaUJBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9uaXNoaWhhcmEvZGV2L3Blc3NvYWwvY2FsY3RleHRfcmVhY3QvY29tcG9uZW50cy9DYWxjUGFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0RmllbGQsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgY2FsY3RleHRTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL2NhbGN0ZXh0U2VydmljZSc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdodG1sLXRvLXJlYWN0JztcblxuY29uc3QgaHRtbFRvUmVhY3RQYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5jb25zdCBDYWxjUGFkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3RleHRGaWVsZFZhbHVlLCBzZXRUZXh0RmllbGRWYWx1ZV0gPSB1c2VTdGF0ZSh7dGV4dDonJyxjdXJzb3JQb3NpdGlvbjowfSk7XG4gIGNvbnN0IFt0ZXh0RmllbGRQb3NpdGlvbiwgc2V0VGV4dEZpZWxkUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHRleHRBcmVhUmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RleHQnKTtcbiAgICBjb25zdCB7IGh0bWwsIGV2YWx1YXRlZFRleHQsIGV2YWx1YXRlZFZhbHVlcyB9ID0gY2FsY3RleHRTZXJ2aWNlLmNvbXB1dGVUZXh0QW5kQ29udmVydFRvSHRtbCh0ZXh0KTtcbiAgICBjb25zdCByZWFjdENvbXBvbmVudCA9IGh0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKGh0bWwpO1xuICAgIHNldFRleHQocmVhY3RDb21wb25lbnQpO1xuICAgIHNldFRleHRGaWVsZFZhbHVlKHt0ZXh0OnRleHQsY3Vyc29yUG9zaXRpb246MH0pO1xuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCB0ZXh0SnVzdEJlZm9yZSA9IHRleHRGaWVsZFZhbHVlLnRleHQuc3Vic3RyaW5nKHRleHRGaWVsZFZhbHVlLmN1cnNvclBvc2l0aW9uLTIsdGV4dEZpZWxkVmFsdWUuY3Vyc29yUG9zaXRpb24pO1xuICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGV4dEp1c3RCZWZvcmUgPT09ICctPicgPyB0ZXh0RmllbGRWYWx1ZS50ZXh0LmluZGV4T2YoJ1xcbicsIHRleHRGaWVsZFZhbHVlLmN1cnNvclBvc2l0aW9uKSA6IHRleHRGaWVsZFZhbHVlLmN1cnNvclBvc2l0aW9uO1xuICAgIHRleHRBcmVhUmVmLmN1cnJlbnQuc2VsZWN0aW9uU3RhcnQgPSBjdXJzb3JQb3NpdGlvbjtcbiAgICB0ZXh0QXJlYVJlZi5jdXJyZW50LnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvc2l0aW9uO1xuICB9LFt0ZXh0RmllbGRWYWx1ZV0pXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG1hcmtkb3duID0gdmFsdWU7XG4gICAgY29uc3QgeyBodG1sLCBldmFsdWF0ZWRUZXh0LCBldmFsdWF0ZWRWYWx1ZXMgfSA9IGNhbGN0ZXh0U2VydmljZS5jb21wdXRlVGV4dEFuZENvbnZlcnRUb0h0bWwobWFya2Rvd24pO1xuICAgIGNvbnN0IHJlYWN0Q29tcG9uZW50ID0gaHRtbFRvUmVhY3RQYXJzZXIucGFyc2UoaHRtbCk7XG4gICAgc2V0VGV4dChyZWFjdENvbXBvbmVudCk7XG4gICAgc2V0VGV4dEZpZWxkVmFsdWUoe3RleHQ6ZXZhbHVhdGVkVGV4dCxjdXJzb3JQb3NpdGlvbjogdGFyZ2V0LnNlbGVjdGlvblN0YXJ0fSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RleHQnLCBldmFsdWF0ZWRUZXh0KTtcbiAgfVxuICByZXR1cm4gKFxuXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cImZsZXgtc2VjdGlvblwiPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuLmZsZXgtc2VjdGlvbntcbiAgbWFyZ2luLXRvcDo2cHg7XG4gIG1hcmdpbi1sZWZ0OjVweDtcbiAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cbi5mbGV4LWNvbC1zY3JvbGwge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogODl2aDtcbn1cblxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezZ9IHNwYWNpbmc9ezB9IGNsYXNzTmFtZT17XCJmbGV4LWNvbC1zY3JvbGxcIn0+XG4gICAgICAgIDxUZXh0RmllbGQgaW5wdXRSZWY9e3RleHRBcmVhUmVmfSBtdWx0aWxpbmUgbmFtZT1cImNhbGNwYWRcIiB2YWx1ZT17dGV4dEZpZWxkVmFsdWUudGV4dH0gc2l6ZT17J3NtYWxsJ30gYXV0b0ZvY3VzPXtmYWxzZX0gZnVsbFdpZHRoPXt0cnVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19IGlucHV0UHJvcHM9e3tcbiAgICAgICAgICBzdHlsZTogeyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6IGBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2VgIH1cbiAgICAgICAgfX0gLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBpdGVtIHhzPXs2fSBzcGFjaW5nPXswfSBjbGFzc05hbWU9e1wiZmxleC1jb2wtc2Nyb2xsXCJ9PlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cblxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY1BhZDsgXG4iXX0= */\\n/*@ sourceURL=/Users/nishihara/dev/pessoal/calctext_react/components/CalcPad.js */\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 6,\n    spacing: 0,\n    className: \"flex-col-scroll\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n    inputRef: textAreaRef,\n    multiline: true,\n    name: \"calcpad\",\n    value: textFieldValue.text,\n    size: 'small',\n    autoFocus: false,\n    fullWidth: true,\n    onChange: onChange,\n    style: {\n      height: '100%'\n    },\n    inputProps: {\n      style: {\n        fontSize: 12,\n        fontFamily: \"Menlo, Monaco, Consolas, \\\"Courier New\\\", monospace\"\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    container: true,\n    direction: \"row\",\n    item: true,\n    xs: 6,\n    spacing: 0,\n    className: \"flex-col-scroll\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, text)));\n};\n\n_s(CalcPad, \"fdCcXZjiZ/DAdreUVzcN5cQYsPY=\");\n\n_c = CalcPad;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CalcPad);\n\nvar _c;\n\n$RefreshReg$(_c, \"CalcPad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbGNQYWQuanM/YmI3YSJdLCJuYW1lcyI6WyJodG1sVG9SZWFjdFBhcnNlciIsIlBhcnNlciIsIkNhbGNQYWQiLCJwcm9wcyIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJjdXJzb3JQb3NpdGlvbiIsInRleHRGaWVsZFZhbHVlIiwic2V0VGV4dEZpZWxkVmFsdWUiLCJ0ZXh0RmllbGRQb3NpdGlvbiIsInNldFRleHRGaWVsZFBvc2l0aW9uIiwidGV4dEFyZWFSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FsY3RleHRTZXJ2aWNlIiwiY29tcHV0ZVRleHRBbmRDb252ZXJ0VG9IdG1sIiwiaHRtbCIsImV2YWx1YXRlZFRleHQiLCJldmFsdWF0ZWRWYWx1ZXMiLCJyZWFjdENvbXBvbmVudCIsInBhcnNlIiwidGV4dEp1c3RCZWZvcmUiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiY3VycmVudCIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImNoZWNrZWQiLCJtYXJrZG93biIsInNldEl0ZW0iLCJoZWlnaHQiLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsSUFBSUMsb0RBQUosRUFBMUI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDbEJDLElBRGtCO0FBQUEsTUFDWkMsT0FEWTs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUM7QUFBQ0MsUUFBSSxFQUFDLEVBQU47QUFBU0Usa0JBQWMsRUFBQztBQUF4QixH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QUFBNEIsV0FBTyxFQUFFLENBQXJDO0FBQXdDLGFBQVMsRUFBRSxpQkFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBVyxZQUFRLEVBQUVSLFdBQXJCO0FBQWtDLGFBQVMsTUFBM0M7QUFBNEMsUUFBSSxFQUFDLFNBQWpEO0FBQTJELFNBQUssRUFBRUosY0FBYyxDQUFDSCxJQUFqRjtBQUF1RixRQUFJLEVBQUUsT0FBN0Y7QUFBc0csYUFBUyxFQUFFLEtBQWpIO0FBQXdILGFBQVMsRUFBRSxJQUFuSTtBQUF5SSxZQUFRLEVBQUV5QixRQUFuSjtBQUE2SixTQUFLLEVBQUU7QUFBRVEsWUFBTSxFQUFFO0FBQVYsS0FBcEs7QUFBd0wsY0FBVSxFQUFFO0FBQ2xNQyxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRSxFQUFaO0FBQWdCQyxrQkFBVTtBQUExQjtBQUQyTCxLQUFwTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FkRixFQW1CRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxLQUExQjtBQUFnQyxRQUFJLE1BQXBDO0FBQXFDLE1BQUUsRUFBRSxDQUF6QztBQUE0QyxXQUFPLEVBQUUsQ0FBckQ7QUFBd0QsYUFBUyxFQUFFLGlCQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dwQyxJQURILENBREYsQ0FuQkYsQ0FGRjtBQThCRCxDQTdERDs7R0FBTUgsTzs7S0FBQUEsTztBQStEU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbGNQYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFRleHRGaWVsZCwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBjYWxjdGV4dFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvY2FsY3RleHRTZXJ2aWNlJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5jb25zdCBodG1sVG9SZWFjdFBhcnNlciA9IG5ldyBQYXJzZXIoKTtcbmNvbnN0IENhbGNQYWQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGV4dEZpZWxkVmFsdWUsIHNldFRleHRGaWVsZFZhbHVlXSA9IHVzZVN0YXRlKHt0ZXh0OicnLGN1cnNvclBvc2l0aW9uOjB9KTtcbiAgY29uc3QgW3RleHRGaWVsZFBvc2l0aW9uLCBzZXRUZXh0RmllbGRQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgdGV4dEFyZWFSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGV4dCcpO1xuICAgIGNvbnN0IHsgaHRtbCwgZXZhbHVhdGVkVGV4dCwgZXZhbHVhdGVkVmFsdWVzIH0gPSBjYWxjdGV4dFNlcnZpY2UuY29tcHV0ZVRleHRBbmRDb252ZXJ0VG9IdG1sKHRleHQpO1xuICAgIGNvbnN0IHJlYWN0Q29tcG9uZW50ID0gaHRtbFRvUmVhY3RQYXJzZXIucGFyc2UoaHRtbCk7XG4gICAgc2V0VGV4dChyZWFjdENvbXBvbmVudCk7XG4gICAgc2V0VGV4dEZpZWxkVmFsdWUoe3RleHQ6dGV4dCxjdXJzb3JQb3NpdGlvbjowfSk7XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IHRleHRKdXN0QmVmb3JlID0gdGV4dEZpZWxkVmFsdWUudGV4dC5zdWJzdHJpbmcodGV4dEZpZWxkVmFsdWUuY3Vyc29yUG9zaXRpb24tMix0ZXh0RmllbGRWYWx1ZS5jdXJzb3JQb3NpdGlvbik7XG4gICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0ZXh0SnVzdEJlZm9yZSA9PT0gJy0+JyA/IHRleHRGaWVsZFZhbHVlLnRleHQuaW5kZXhPZignXFxuJywgdGV4dEZpZWxkVmFsdWUuY3Vyc29yUG9zaXRpb24pIDogdGV4dEZpZWxkVmFsdWUuY3Vyc29yUG9zaXRpb247XG4gICAgdGV4dEFyZWFSZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xuICAgIHRleHRBcmVhUmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kID0gY3Vyc29yUG9zaXRpb247XG4gIH0sW3RleHRGaWVsZFZhbHVlXSlcblxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbWFya2Rvd24gPSB2YWx1ZTtcbiAgICBjb25zdCB7IGh0bWwsIGV2YWx1YXRlZFRleHQsIGV2YWx1YXRlZFZhbHVlcyB9ID0gY2FsY3RleHRTZXJ2aWNlLmNvbXB1dGVUZXh0QW5kQ29udmVydFRvSHRtbChtYXJrZG93bik7XG4gICAgY29uc3QgcmVhY3RDb21wb25lbnQgPSBodG1sVG9SZWFjdFBhcnNlci5wYXJzZShodG1sKTtcbiAgICBzZXRUZXh0KHJlYWN0Q29tcG9uZW50KTtcbiAgICBzZXRUZXh0RmllbGRWYWx1ZSh7dGV4dDpldmFsdWF0ZWRUZXh0LGN1cnNvclBvc2l0aW9uOiB0YXJnZXQuc2VsZWN0aW9uU3RhcnR9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGV4dCcsIGV2YWx1YXRlZFRleHQpO1xuICB9XG4gIHJldHVybiAoXG5cbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwiZmxleC1zZWN0aW9uXCI+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuXG4uZmxleC1zZWN0aW9ue1xuICBtYXJnaW4tdG9wOjZweDtcbiAgbWFyZ2luLWxlZnQ6NXB4O1xuICBtYXJnaW4tcmlnaHQ6NXB4O1xufVxuLmZsZXgtY29sLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA4OXZoO1xufVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17Nn0gc3BhY2luZz17MH0gY2xhc3NOYW1lPXtcImZsZXgtY29sLXNjcm9sbFwifT5cbiAgICAgICAgPFRleHRGaWVsZCBpbnB1dFJlZj17dGV4dEFyZWFSZWZ9IG11bHRpbGluZSBuYW1lPVwiY2FsY3BhZFwiIHZhbHVlPXt0ZXh0RmllbGRWYWx1ZS50ZXh0fSBzaXplPXsnc21hbGwnfSBhdXRvRm9jdXM9e2ZhbHNlfSBmdWxsV2lkdGg9e3RydWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0gaW5wdXRQcm9wcz17e1xuICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogYE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZWAgfVxuICAgICAgICB9fSAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGl0ZW0geHM9ezZ9IHNwYWNpbmc9ezB9IGNsYXNzTmFtZT17XCJmbGV4LWNvbC1zY3JvbGxcIn0+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuXG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjUGFkOyBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CalcPad.js\n");

/***/ })

})