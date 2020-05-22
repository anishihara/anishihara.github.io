webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_CalcPad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CalcPad */ \"./components/CalcPad.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_CreateFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CreateFile */ \"./components/CreateFile.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/nishihara/dev/pessoal/calctext_react/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n // import InboxIcon from '@material-ui/icons/MoveToInbox';\n// import MailIcon from '@material-ui/icons/Mail';\n\nvar Home = function Home(props) {\n  _s();\n\n  var _jsx;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      openedDrawer = _useState[0],\n      setOpenedDrawer = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    text: '',\n    id: ''\n  }),\n      fileContent = _useState2[0],\n      setFileContent = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      filename = _useState3[0],\n      setFilename = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      fileList = _useState4[0],\n      setFileList = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      showNewFileForm = _useState5[0],\n      setShowNewFileForm = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fileList = JSON.parse(localStorage.getItem('fileList'));\n\n    if (fileList && fileList.length > 0) {\n      setFileList(fileList);\n      onSelectFile(fileList[0].id);\n      setFilename(fileList[0].name);\n    }\n  }, []);\n\n  var onNew = function onNew(name) {\n    var newFile = {\n      name: name,\n      id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10)\n    };\n    var newFileList = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fileList), [newFile]);\n    setFileList(newFileList);\n    localStorage.setItem('fileList', JSON.stringify(newFileList));\n    localStorage.setItem(\"text:\".concat(newFile.id), ' ');\n    setFileContent({\n      text: ' ',\n      id: newFile.id\n    });\n    setFilename(newFile.name);\n  };\n\n  var onDelete = function onDelete(e) {\n    var newFileList = fileList.filter(function (f) {\n      return f.id !== fileContent.id;\n    });\n    setFileList(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newFileList));\n    localStorage.setItem('fileList', JSON.stringify(newFileList));\n    localStorage.removeItem(\"text:\".concat(fileContent.id));\n\n    if (newFileList.length > 0) {\n      onSelectFile(newFileList[0].id);\n    } else {\n      onNew();\n    }\n  };\n\n  var onSelectFile = function onSelectFile(id) {\n    var textFromStorage = localStorage.getItem(\"text:\".concat(id));\n    setFileContent({\n      text: textFromStorage,\n      id: id\n    });\n    var file = fileList.find(function (f) {\n      return f.id === id;\n    });\n    if (file) setFilename(file.name);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"1956190023\",\n    __self: _this\n  }, \"body{margin:0px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNoaWhhcmEvZGV2L3Blc3NvYWwvY2FsY3RleHRfcmVhY3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMER5QixBQUlhLFdBQ1oiLCJmaWxlIjoiL1VzZXJzL25pc2hpaGFyYS9kZXYvcGVzc29hbC9jYWxjdGV4dF9yZWFjdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhbGNQYWQgZnJvbSAnLi4vY29tcG9uZW50cy9DYWxjUGFkJztcbmltcG9ydCB7IERyYXdlciwgSWNvbkJ1dHRvbiwgQXBwQmFyLCBUb29sYmFyLCBUeXBvZ3JhcGh5LCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIEJ1dHRvbiwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgQ3JlYXRlRmlsZSBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZUZpbGUnO1xuLy8gaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xuLy8gaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbb3BlbmVkRHJhd2VyLCBzZXRPcGVuZWREcmF3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZUNvbnRlbnQsIHNldEZpbGVDb250ZW50XSA9IHVzZVN0YXRlKHsgdGV4dDogJycsIGlkOiAnJyB9KTtcbiAgY29uc3QgW2ZpbGVuYW1lLCBzZXRGaWxlbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2hvd05ld0ZpbGVGb3JtLCBzZXRTaG93TmV3RmlsZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWxlTGlzdCcpKTtcbiAgICBpZiAoZmlsZUxpc3QgJiYgZmlsZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgc2V0RmlsZUxpc3QoZmlsZUxpc3QpO1xuICAgICAgb25TZWxlY3RGaWxlKGZpbGVMaXN0WzBdLmlkKTtcbiAgICAgIHNldEZpbGVuYW1lKGZpbGVMaXN0WzBdLm5hbWUpO1xuICAgIH1cbiAgfSwgW10pXG4gIGNvbnN0IG9uTmV3ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBuZXdGaWxlID0ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgMTApLFxuICAgIH1cbiAgICBjb25zdCBuZXdGaWxlTGlzdCA9IFsuLi5maWxlTGlzdCwgbmV3RmlsZV07XG4gICAgc2V0RmlsZUxpc3QobmV3RmlsZUxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWxlTGlzdCcsIEpTT04uc3RyaW5naWZ5KG5ld0ZpbGVMaXN0KSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRleHQ6JHtuZXdGaWxlLmlkfWAsICcgJyk7XG4gICAgc2V0RmlsZUNvbnRlbnQoeyB0ZXh0OiAnICcsIGlkOiBuZXdGaWxlLmlkIH0pO1xuICAgIHNldEZpbGVuYW1lKG5ld0ZpbGUubmFtZSk7XG4gIH1cblxuICBjb25zdCBvbkRlbGV0ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgbmV3RmlsZUxpc3QgPSBmaWxlTGlzdC5maWx0ZXIoZiA9PiBmLmlkICE9PSBmaWxlQ29udGVudC5pZCk7XG4gICAgc2V0RmlsZUxpc3QoWy4uLm5ld0ZpbGVMaXN0XSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbGVMaXN0JywgSlNPTi5zdHJpbmdpZnkobmV3RmlsZUxpc3QpKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgdGV4dDoke2ZpbGVDb250ZW50LmlkfWApO1xuICAgIGlmIChuZXdGaWxlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBvblNlbGVjdEZpbGUobmV3RmlsZUxpc3RbMF0uaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG9uTmV3KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25TZWxlY3RGaWxlID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdGV4dEZyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRleHQ6JHtpZH1gKTtcbiAgICBzZXRGaWxlQ29udGVudCh7IHRleHQ6IHRleHRGcm9tU3RvcmFnZSwgaWQ6IGlkIH0pO1xuICAgIGNvbnN0IGZpbGUgPSBmaWxlTGlzdC5maW5kKGYgPT4gZi5pZCA9PT0gaWQpO1xuICAgIGlmIChmaWxlKSBzZXRGaWxlbmFtZShmaWxlLm5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuXG5ib2R5e1xuICBtYXJnaW46MHB4O1xufVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjb2xvcj1cImRlZmF1bHRcIj5cbiAgICAgICAgPFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCI+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZERyYXdlcighb3BlbmVkRHJhd2VyKX0+XG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAge2BDYWxjdGV4dCAtICR7ZmlsZW5hbWV9YH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRlbGV0ZX0+RGVsZXRlPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgICAgPFRvb2xiYXIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8Q2FsY1BhZCB0ZXh0PXtmaWxlQ29udGVudC50ZXh0fSBpZD17ZmlsZUNvbnRlbnQuaWR9IC8+XG4gICAgICA8L21haW4+XG4gICAgICA8RHJhd2VyIGFuY2hvcj17J2xlZnQnfSBvcGVuPXtvcGVuZWREcmF3ZXJ9IG9uQ2xvc2U9eygpID0+IHNldE9wZW5lZERyYXdlcighb3BlbmVkRHJhd2VyKX0+XG4gICAgICAgIDxMaXN0PlxuICAgICAgICAgIHtzaG93TmV3RmlsZUZvcm0gJiZcbiAgICAgICAgICAgIDxDcmVhdGVGaWxlIG9uU2F2ZT17b25OZXd9IG9uQmFjaz17KCkgPT4gc2V0U2hvd05ld0ZpbGVGb3JtKCFzaG93TmV3RmlsZUZvcm0pfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7IXNob3dOZXdGaWxlRm9ybSAmJlxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBkaXZpZGVyIG9uQ2xpY2s9eyhlKSA9PiB7IHNldFNob3dOZXdGaWxlRm9ybSh0cnVlKSB9fT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIk5ld1wifSAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyFzaG93TmV3RmlsZUZvcm0gJiZcbiAgICAgICAgICAgIGZpbGVMaXN0Lm1hcCgoZmlsZUl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtmaWxlSXRlbS5uYW1lfSBrZXk9e2ZpbGVJdGVtLmlkfSBvbkNsaWNrPXsoZSkgPT4geyBvblNlbGVjdEZpbGUoZmlsZUl0ZW0uaWQpIH19PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtmaWxlSXRlbS5uYW1lfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvTGlzdD5cbiAgICAgIDwvRHJhd2VyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\\n/*@ sourceURL=/Users/nishihara/dev/pessoal/calctext_react/pages/index.js */\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"AppBar\"], {\n    position: \"fixed\",\n    color: \"default\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Toolbar\"], {\n    variant: \"dense\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"IconButton\"], {\n    edge: \"start\",\n    color: \"inherit\",\n    \"aria-label\": \"menu\",\n    onClick: function onClick() {\n      return setOpenedDrawer(!openedDrawer);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"], {\n    variant: \"h6\",\n    style: {\n      flex: 1\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"Calctext - \".concat(filename)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], (_jsx = {\n    color: \"inherit\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"color\", \"secondary\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"onClick\", onDelete), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__self\", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__source\", {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 13\n  }), _jsx), \"Delete\"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Toolbar\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }), __jsx(\"main\", {\n    className: \"jsx-1956190023\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(_components_CalcPad__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    text: fileContent.text,\n    id: fileContent.id,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Drawer\"], {\n    anchor: 'left',\n    open: openedDrawer,\n    onClose: function onClose() {\n      return setOpenedDrawer(!openedDrawer);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"List\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, showNewFileForm && __jsx(_components_CreateFile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSave: onNew,\n    onBack: function onBack() {\n      return setShowNewFileForm(!showNewFileForm);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }), !showNewFileForm && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"ListItem\"], {\n    button: true,\n    divider: true,\n    onClick: function onClick(e) {\n      setShowNewFileForm(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"ListItemText\"], {\n    primary: \"New\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  })), !showNewFileForm && fileList.map(function (fileItem, index) {\n    var _jsx2;\n\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"ListItem\"], (_jsx2 = {\n      button: true,\n      key: fileItem.name\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"key\", fileItem.id), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"onClick\", function onClick(e) {\n      onSelectFile(fileItem.id);\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"__self\", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx2, \"__source\", {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }), _jsx2), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"ListItemIcon\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 17\n      }\n    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"ListItemText\"], {\n      primary: fileItem.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }\n    }));\n  }))));\n};\n\n_s(Home, \"dFH7wS1hNfOzaQbDEzRBo0wt5Uo=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInVzZVN0YXRlIiwib3BlbmVkRHJhd2VyIiwic2V0T3BlbmVkRHJhd2VyIiwidGV4dCIsImlkIiwiZmlsZUNvbnRlbnQiLCJzZXRGaWxlQ29udGVudCIsImZpbGVuYW1lIiwic2V0RmlsZW5hbWUiLCJmaWxlTGlzdCIsInNldEZpbGVMaXN0Iiwic2hvd05ld0ZpbGVGb3JtIiwic2V0U2hvd05ld0ZpbGVGb3JtIiwidXNlRWZmZWN0IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxlbmd0aCIsIm9uU2VsZWN0RmlsZSIsIm5hbWUiLCJvbk5ldyIsIm5ld0ZpbGUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwibmV3RmlsZUxpc3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwib25EZWxldGUiLCJlIiwiZmlsdGVyIiwiZiIsInJlbW92ZUl0ZW0iLCJ0ZXh0RnJvbVN0b3JhZ2UiLCJmaWxlIiwiZmluZCIsImZsZXgiLCJtYXAiLCJmaWxlSXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLEtBQUQsQ0FEMUI7QUFBQSxNQUNmQyxZQURlO0FBQUEsTUFDREMsZUFEQzs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUM7QUFBRUcsUUFBSSxFQUFFLEVBQVI7QUFBWUMsTUFBRSxFQUFFO0FBQWhCLEdBQUQsQ0FGeEI7QUFBQSxNQUVmQyxXQUZlO0FBQUEsTUFFRkMsY0FGRTs7QUFBQSxtQkFHVU4sc0RBQVEsQ0FBQyxFQUFELENBSGxCO0FBQUEsTUFHZk8sUUFI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QUFoQjtBQUFpQixTQUFHLEVBQUVELFFBQVEsQ0FBQ3JCO0FBQS9CLCtHQUEwQ3FCLFFBQVEsQ0FBQ3JDLEVBQW5ELCtHQUFnRSxpQkFBQzRCLENBQUQsRUFBTztBQUFFYixrQkFBWSxDQUFDc0IsUUFBUSxDQUFDckMsRUFBVixDQUFaO0FBQTJCLEtBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLDhEQUFEO0FBQWMsYUFBTyxFQUFFcUMsUUFBUSxDQUFDckIsSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBRFc7QUFBQSxHQUFiLENBVkosQ0FERixDQXZCRixDQURGO0FBNkNELENBN0ZEOztHQUFNdEIsSTs7S0FBQUEsSTtBQStGU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhbGNQYWQgZnJvbSAnLi4vY29tcG9uZW50cy9DYWxjUGFkJztcbmltcG9ydCB7IERyYXdlciwgSWNvbkJ1dHRvbiwgQXBwQmFyLCBUb29sYmFyLCBUeXBvZ3JhcGh5LCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIEJ1dHRvbiwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgQ3JlYXRlRmlsZSBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZUZpbGUnO1xuLy8gaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xuLy8gaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbb3BlbmVkRHJhd2VyLCBzZXRPcGVuZWREcmF3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsZUNvbnRlbnQsIHNldEZpbGVDb250ZW50XSA9IHVzZVN0YXRlKHsgdGV4dDogJycsIGlkOiAnJyB9KTtcbiAgY29uc3QgW2ZpbGVuYW1lLCBzZXRGaWxlbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2hvd05ld0ZpbGVGb3JtLCBzZXRTaG93TmV3RmlsZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWxlTGlzdCcpKTtcbiAgICBpZiAoZmlsZUxpc3QgJiYgZmlsZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgc2V0RmlsZUxpc3QoZmlsZUxpc3QpO1xuICAgICAgb25TZWxlY3RGaWxlKGZpbGVMaXN0WzBdLmlkKTtcbiAgICAgIHNldEZpbGVuYW1lKGZpbGVMaXN0WzBdLm5hbWUpO1xuICAgIH1cbiAgfSwgW10pXG4gIGNvbnN0IG9uTmV3ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBuZXdGaWxlID0ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgMTApLFxuICAgIH1cbiAgICBjb25zdCBuZXdGaWxlTGlzdCA9IFsuLi5maWxlTGlzdCwgbmV3RmlsZV07XG4gICAgc2V0RmlsZUxpc3QobmV3RmlsZUxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWxlTGlzdCcsIEpTT04uc3RyaW5naWZ5KG5ld0ZpbGVMaXN0KSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRleHQ6JHtuZXdGaWxlLmlkfWAsICcgJyk7XG4gICAgc2V0RmlsZUNvbnRlbnQoeyB0ZXh0OiAnICcsIGlkOiBuZXdGaWxlLmlkIH0pO1xuICAgIHNldEZpbGVuYW1lKG5ld0ZpbGUubmFtZSk7XG4gIH1cblxuICBjb25zdCBvbkRlbGV0ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgbmV3RmlsZUxpc3QgPSBmaWxlTGlzdC5maWx0ZXIoZiA9PiBmLmlkICE9PSBmaWxlQ29udGVudC5pZCk7XG4gICAgc2V0RmlsZUxpc3QoWy4uLm5ld0ZpbGVMaXN0XSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbGVMaXN0JywgSlNPTi5zdHJpbmdpZnkobmV3RmlsZUxpc3QpKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgdGV4dDoke2ZpbGVDb250ZW50LmlkfWApO1xuICAgIGlmIChuZXdGaWxlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBvblNlbGVjdEZpbGUobmV3RmlsZUxpc3RbMF0uaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG9uTmV3KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25TZWxlY3RGaWxlID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdGV4dEZyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRleHQ6JHtpZH1gKTtcbiAgICBzZXRGaWxlQ29udGVudCh7IHRleHQ6IHRleHRGcm9tU3RvcmFnZSwgaWQ6IGlkIH0pO1xuICAgIGNvbnN0IGZpbGUgPSBmaWxlTGlzdC5maW5kKGYgPT4gZi5pZCA9PT0gaWQpO1xuICAgIGlmIChmaWxlKSBzZXRGaWxlbmFtZShmaWxlLm5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuXG5ib2R5e1xuICBtYXJnaW46MHB4O1xufVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjb2xvcj1cImRlZmF1bHRcIj5cbiAgICAgICAgPFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCI+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZERyYXdlcighb3BlbmVkRHJhd2VyKX0+XG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAge2BDYWxjdGV4dCAtICR7ZmlsZW5hbWV9YH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRlbGV0ZX0+RGVsZXRlPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgICAgPFRvb2xiYXIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8Q2FsY1BhZCB0ZXh0PXtmaWxlQ29udGVudC50ZXh0fSBpZD17ZmlsZUNvbnRlbnQuaWR9IC8+XG4gICAgICA8L21haW4+XG4gICAgICA8RHJhd2VyIGFuY2hvcj17J2xlZnQnfSBvcGVuPXtvcGVuZWREcmF3ZXJ9IG9uQ2xvc2U9eygpID0+IHNldE9wZW5lZERyYXdlcighb3BlbmVkRHJhd2VyKX0+XG4gICAgICAgIDxMaXN0PlxuICAgICAgICAgIHtzaG93TmV3RmlsZUZvcm0gJiZcbiAgICAgICAgICAgIDxDcmVhdGVGaWxlIG9uU2F2ZT17b25OZXd9IG9uQmFjaz17KCkgPT4gc2V0U2hvd05ld0ZpbGVGb3JtKCFzaG93TmV3RmlsZUZvcm0pfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7IXNob3dOZXdGaWxlRm9ybSAmJlxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBkaXZpZGVyIG9uQ2xpY2s9eyhlKSA9PiB7IHNldFNob3dOZXdGaWxlRm9ybSh0cnVlKSB9fT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIk5ld1wifSAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyFzaG93TmV3RmlsZUZvcm0gJiZcbiAgICAgICAgICAgIGZpbGVMaXN0Lm1hcCgoZmlsZUl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtmaWxlSXRlbS5uYW1lfSBrZXk9e2ZpbGVJdGVtLmlkfSBvbkNsaWNrPXsoZSkgPT4geyBvblNlbGVjdEZpbGUoZmlsZUl0ZW0uaWQpIH19PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtmaWxlSXRlbS5uYW1lfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvTGlzdD5cbiAgICAgIDwvRHJhd2VyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})