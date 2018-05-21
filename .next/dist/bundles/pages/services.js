module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FADED_ORANGE */
/* unused harmony export LIGHT_ORANGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BURNT_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIGHT_GREY; });
var FADED_ORANGE = '#F9AF7C';
var LIGHT_ORANGE = '#F7B589';
var BURNT_ORANGE = '#F55A2B';
var WHITE = '#FAFAFA';
var BLACK = '#121212';
var LIGHT_GREY = '#CCCCCC';

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var brandIcons = ['facebook', 'twitter', 'instagram', 'linkedin'];

var isBrand = function isBrand(icon) {
  return brandIcons.includes(icon);
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var icon = _ref.icon,
      style = _ref.style;
  return isBrand(icon) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fab fa-".concat(icon),
    style: style
  }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fas fa-".concat(icon),
    style: style
  });
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FACEBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return INSTAGRAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PHONE; });
var FACEBOOK = 'https://www.facebook.com/pawsandxoticspetcareservices/';
var INSTAGRAM = 'https://www.instagram.com/pawsandexoticspetcare/';
var EMAIL = 'mailto:catherine.fudge@gmail.com';
var PHONE = 'tel:14164079638';

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./constants/colors.js
var colors = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Menu.js




/* harmony default export */ var Menu = (function () {
  return external__react__default.a.createElement("ul", {
    className: style__default.a.dynamic([["2737599461", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["2737599461", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement(link__default.a, {
    href: "/about"
  }, external__react__default.a.createElement("a", {
    className: style__default.a.dynamic([["2737599461", [colors["d" /* WHITE */]]]])
  }, "about"))), external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["2737599461", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement(link__default.a, {
    href: "/services"
  }, external__react__default.a.createElement("a", {
    className: style__default.a.dynamic([["2737599461", [colors["d" /* WHITE */]]]])
  }, "services"))), external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["2737599461", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement(link__default.a, {
    href: "/contact"
  }, external__react__default.a.createElement("a", {
    className: style__default.a.dynamic([["2737599461", [colors["d" /* WHITE */]]]])
  }, "contact"))), external__react__default.a.createElement(style__default.a, {
    styleId: "2737599461",
    css: ["ul.__jsx-style-dynamic-selector{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{margin:0 .5rem;}", "ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:".concat(colors["d" /* WHITE */], ";cursor:pointer;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;font-weight:300;font-size:.9rem;}"), "ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-deocration:underline;text-deocration:underline;}"],
    dynamic: [colors["d" /* WHITE */]]
  }));
});
// CONCATENATED MODULE: ./components/Header.js





/* harmony default export */ var Header = (function () {
  return external__react__default.a.createElement("header", {
    className: style__default.a.dynamic([["2973537703", [colors["b" /* BURNT_ORANGE */], colors["a" /* BLACK */], colors["a" /* BLACK */]]]])
  }, external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["2973537703", [colors["b" /* BURNT_ORANGE */], colors["a" /* BLACK */], colors["a" /* BLACK */]]]])
  }, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("img", {
    src: "/static/img/logo.png",
    alt: "Paws & Exotics Pet Care logo",
    className: style__default.a.dynamic([["2973537703", [colors["b" /* BURNT_ORANGE */], colors["a" /* BLACK */], colors["a" /* BLACK */]]]])
  })), external__react__default.a.createElement("h1", {
    className: style__default.a.dynamic([["2973537703", [colors["b" /* BURNT_ORANGE */], colors["a" /* BLACK */], colors["a" /* BLACK */]]]])
  }, "PAWS & EXOTICS")), external__react__default.a.createElement(Menu, null), external__react__default.a.createElement(style__default.a, {
    styleId: "2973537703",
    css: ["header.__jsx-style-dynamic-selector{z-index:100;background-color:".concat(colors["b" /* BURNT_ORANGE */], ";color:").concat(colors["a" /* BLACK */], ";height:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .25rem;box-shadow:0 2px 2px ").concat(colors["a" /* BLACK */], ";margin-bottom:2px;}"), "div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "img.__jsx-style-dynamic-selector{max-height:3.5rem;width:auto;}", "h1.__jsx-style-dynamic-selector{font-size:1.25rem;display:inline-block;vertical-align:middle;font-weight:300;-webkit-letter-spacing:-.1rem;-moz-letter-spacing:-.1rem;-ms-letter-spacing:-.1rem;letter-spacing:-.1rem;}"],
    dynamic: [colors["b" /* BURNT_ORANGE */], colors["a" /* BLACK */], colors["a" /* BLACK */]]
  }));
});
// EXTERNAL MODULE: ./components/Icon.js
var Icon = __webpack_require__(4);

// EXTERNAL MODULE: ./constants/external.js
var external = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Footer.js






/* harmony default export */ var Footer = (function () {
  return external__react__default.a.createElement("footer", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement("section", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement("h1", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, "PAWS & EXOTICS PET CARE SERVICES"), external__react__default.a.createElement("ul", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("a", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, "home"))), external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement(link__default.a, {
    href: "/about"
  }, external__react__default.a.createElement("a", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, "about"))), external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement(link__default.a, {
    href: "/services"
  }, external__react__default.a.createElement("a", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, "services"))), external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement(link__default.a, {
    href: "/contact"
  }, external__react__default.a.createElement("a", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, "contact")))), external__react__default.a.createElement("p", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  })), external__react__default.a.createElement("section", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement("ul", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]]) + " " + "social"
  }, external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement("a", {
    href: external["b" /* FACEBOOK */],
    target: "_blank",
    rel: "noopener noreferrer",
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]]) + " " + "icon"
  }, external__react__default.a.createElement(Icon["a" /* default */], {
    icon: "facebook"
  }))), external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement("a", {
    href: external["c" /* INSTAGRAM */],
    target: "_blank",
    rel: "noopener noreferrer",
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]]) + " " + "icon"
  }, external__react__default.a.createElement(Icon["a" /* default */], {
    icon: "instagram"
  }))), external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement("a", {
    href: external["a" /* EMAIL */],
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]]) + " " + "icon"
  }, external__react__default.a.createElement(Icon["a" /* default */], {
    icon: "at"
  }))), external__react__default.a.createElement("li", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, external__react__default.a.createElement("a", {
    href: external["d" /* PHONE */],
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]]) + " " + "icon"
  }, external__react__default.a.createElement(Icon["a" /* default */], {
    icon: "mobile-alt"
  })))), external__react__default.a.createElement("p", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }, "7044 Estoril Rd ", external__react__default.a.createElement("br", {
    className: style__default.a.dynamic([["4081347781", [colors["d" /* WHITE */]]]])
  }), "Mississauga, ON L5N 1N4")), external__react__default.a.createElement(style__default.a, {
    styleId: "4081347781",
    css: ["footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;font-size:.7rem;font-weight:100;}", "section.__jsx-style-dynamic-selector{max-width:49vw;}", "h1.__jsx-style-dynamic-selector{font-size:1rem;margin:0;margin-bottom:1rem;line-height:1.2rem;font-weight:100;}", "a.__jsx-style-dynamic-selector{color:".concat(colors["d" /* WHITE */], ";-webkit-text-decoration:none;text-decoration:none;}"), "a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:underline;text-decoration:underline;}", "ul.__jsx-style-dynamic-selector{list-style-type:none;}", "ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{margin:.5rem .25rem;}", "ul.social.__jsx-style-dynamic-selector{margin-bottom:1rem;}", "ul.social.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{display:inline-block;margin:0 .5rem;}", "a.icon.__jsx-style-dynamic-selector{font-size:1.5rem;}"],
    dynamic: [colors["d" /* WHITE */]]
  }));
});
// CONCATENATED MODULE: ./components/Layout.js




var defaultTitle = 'Paws & Exotics Pet Care';
/* harmony default export */ var Layout = __webpack_exports__["a"] = (function (_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? defaultTitle : _ref$title,
      children = _ref.children;
  return external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, title)), external__react__default.a.createElement(Header, null), children, external__react__default.a.createElement(Footer, null));
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    title: "services page"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", null, "this is my services page "));
});

/***/ })
/******/ ]);