webpackHotUpdate(5,{

/***/ "./components/Icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/components/Icon.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var brandIcons = ['facebook', 'twitter', 'instagram', 'linkedin'];

var isBrand = function isBrand(icon) {
  return brandIcons.includes(icon);
};

var _default = function _default(_ref) {
  var icon = _ref.icon,
      style = _ref.style;
  return isBrand(icon) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fab fa-".concat(icon),
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fas fa-".concat(icon),
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(brandIcons, "brandIcons", "/Users/rkstar/dev/projects/pawsandexotics/components/Icon.js");
  reactHotLoader.register(isBrand, "isBrand", "/Users/rkstar/dev/projects/pawsandexotics/components/Icon.js");
  reactHotLoader.register(_default, "default", "/Users/rkstar/dev/projects/pawsandexotics/components/Icon.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.57e3287d593432389369.hot-update.js.map