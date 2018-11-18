(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/component-sub-two.js":
/*!**********************************!*\
  !*** ./src/component-sub-two.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shadow_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadow-mixin */ \"./src/shadow-mixin.js\");\n\nconst {\n  HTMLElement,\n  customElements\n} = window;\n\nclass ComponentSubTwo extends Object(_shadow_mixin__WEBPACK_IMPORTED_MODULE_0__[\"shadowMixin\"])(HTMLElement) {\n  render() {\n    this.shadowRoot.innerHTML = `\n      <span text-two>Text Two</span>\n    `;\n  }\n\n}\n\ncustomElements.define('component-sub-two', ComponentSubTwo);\n\n//# sourceURL=webpack:///./src/component-sub-two.js?");

/***/ }),

/***/ "./src/component-two.js":
/*!******************************!*\
  !*** ./src/component-two.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shadow_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadow-mixin */ \"./src/shadow-mixin.js\");\n/* harmony import */ var _component_sub_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-sub-two */ \"./src/component-sub-two.js\");\n\n\nconst {\n  HTMLElement,\n  customElements\n} = window;\n\nclass ComponentTwo extends Object(_shadow_mixin__WEBPACK_IMPORTED_MODULE_0__[\"shadowMixin\"])(HTMLElement) {\n  render() {\n    this.shadowRoot.innerHTML = `\n      <component-sub-two></component-sub-two>\n    `;\n  }\n\n}\n\ncustomElements.define('component-two', ComponentTwo);\n\n//# sourceURL=webpack:///./src/component-two.js?");

/***/ })

}]);