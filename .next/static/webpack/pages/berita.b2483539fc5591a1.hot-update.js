"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/berita",{

/***/ "./src/components/CardItems.js":
/*!*************************************!*\
  !*** ./src/components/CardItems.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CardItems; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction CardItems(param) {\n    let { tanggal , title , deskripsi , src , className  } = param;\n    const addClassName = className ? \" \".concat(className) : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" border p-6 shadow-md text-justify md:w-full mx-auto items-center justify-center rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: src,\n                alt: \"kapal pelni\",\n                width: 400,\n                height: 700,\n                className: \"h-[350px] rounded-lg mx-auto items-center justify-center \".concat(addClassName)\n            }, void 0, false, {\n                fileName: \"D:\\\\okky\\\\Balajar\\\\nextjs\\\\AgenciesPELNI\\\\src\\\\components\\\\CardItems.js\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mt-4\",\n                children: tanggal\n            }, void 0, false, {\n                fileName: \"D:\\\\okky\\\\Balajar\\\\nextjs\\\\AgenciesPELNI\\\\src\\\\components\\\\CardItems.js\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold \",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\okky\\\\Balajar\\\\nextjs\\\\AgenciesPELNI\\\\src\\\\components\\\\CardItems.js\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-normal text-base mt-2 text-justify\",\n                children: deskripsi\n            }, void 0, false, {\n                fileName: \"D:\\\\okky\\\\Balajar\\\\nextjs\\\\AgenciesPELNI\\\\src\\\\components\\\\CardItems.js\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\okky\\\\Balajar\\\\nextjs\\\\AgenciesPELNI\\\\src\\\\components\\\\CardItems.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = CardItems;\nvar _c;\n$RefreshReg$(_c, \"CardItems\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkSXRlbXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ0s7QUFFZixTQUFTRSxVQUFVLEtBQTBDLEVBQUU7UUFBNUMsRUFBQ0MsUUFBTyxFQUFFQyxNQUFLLEVBQUVDLFVBQVMsRUFBQ0MsSUFBRyxFQUFFQyxVQUFTLEVBQUMsR0FBMUM7SUFDaEMsTUFBTUMsZUFBZUQsWUFBWSxJQUFjLE9BQVZBLGFBQWMsRUFBRTtJQUVyRCxxQkFDRSw4REFBQ0U7UUFBSUYsV0FBWTs7MEJBQ1gsOERBQUNOLG1EQUFLQTtnQkFDSkssS0FBS0E7Z0JBQ0xJLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JMLFdBQVcsNERBQXlFLE9BQWJDOzs7Ozs7MEJBRXpFLDhEQUFDSztnQkFBRU4sV0FBVTswQkFBZ0JKOzs7Ozs7MEJBQzdCLDhEQUFDVztnQkFBR1AsV0FBVTswQkFBc0JIOzs7Ozs7MEJBQ3BDLDhEQUFDUztnQkFBRU4sV0FBVTswQkFBMkNGOzs7Ozs7Ozs7Ozs7QUFHbEUsQ0FBQztLQWpCdUJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmRJdGVtcy5qcz85OTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkSXRlbXMoe3RhbmdnYWwsIHRpdGxlLCBkZXNrcmlwc2ksc3JjLCBjbGFzc05hbWV9KSB7XHJcbiAgY29uc3QgYWRkQ2xhc3NOYW1lID0gY2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogXCJcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgIGJvcmRlciBwLTYgc2hhZG93LW1kIHRleHQtanVzdGlmeSBtZDp3LWZ1bGwgbXgtYXV0byBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZGB9PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICBhbHQ9XCJrYXBhbCBwZWxuaVwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs0MDB9ICAgXHJcbiAgICAgICAgICAgIGhlaWdodD17NzAwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoLVszNTBweF0gcm91bmRlZC1sZyBteC1hdXRvIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAke2FkZENsYXNzTmFtZX1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbXQtNFwiPnt0YW5nZ2FsfTwvcD5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmFzZSBtdC0yIHRleHQtanVzdGlmeVwiPntkZXNrcmlwc2l9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkNhcmRJdGVtcyIsInRhbmdnYWwiLCJ0aXRsZSIsImRlc2tyaXBzaSIsInNyYyIsImNsYXNzTmFtZSIsImFkZENsYXNzTmFtZSIsImRpdiIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CardItems.js\n"));

/***/ })

});