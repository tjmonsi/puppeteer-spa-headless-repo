(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/component-one.js":
/*!******************************!*\
  !*** ./src/component-one.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shadow_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadow-mixin */ \"./src/shadow-mixin.js\");\n/* harmony import */ var _component_sub_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-sub-one */ \"./src/component-sub-one.js\");\n\n\nconst {\n  HTMLElement,\n  customElements\n} = window;\n\nclass ComponentOne extends Object(_shadow_mixin__WEBPACK_IMPORTED_MODULE_0__[\"shadowMixin\"])(HTMLElement) {\n  render() {\n    this.shadowRoot.innerHTML = `\n      <component-sub-one></component-sub-one>\n      <a href=\"/link-two\" link-two>Link 2</a>\n    `;\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! firebase */ \"./node_modules/firebase/dist/index.cjs.js\", 7));\n  }\n\n}\n\ncustomElements.define('component-one', ComponentOne);\n\n//# sourceURL=webpack:///./src/component-one.js?");

/***/ }),

/***/ "./src/component-sub-one.js":
/*!**********************************!*\
  !*** ./src/component-sub-one.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shadow_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadow-mixin */ \"./src/shadow-mixin.js\");\n\nconst {\n  HTMLElement,\n  customElements\n} = window;\n\nclass ComponentSubOne extends Object(_shadow_mixin__WEBPACK_IMPORTED_MODULE_0__[\"shadowMixin\"])(HTMLElement) {\n  render() {\n    this.shadowRoot.innerHTML = `\n      <span text-one>Text One</span>\n    `;\n  }\n\n}\n\ncustomElements.define('component-sub-one', ComponentSubOne);\n\n//# sourceURL=webpack:///./src/component-sub-one.js?");

/***/ })

}]);