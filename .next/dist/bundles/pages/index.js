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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      imagepath = _ref.imagepath,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: style,
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1593569219", [imagepath]]]) + " " + "banner"
  }, children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1593569219",
    css: [".banner.__jsx-style-dynamic-selector{background:linear-gradient( to top, rgba(0,0,0,.35) 0%, rgba(0,0,0,.25) 100% ), url(".concat(imagepath, ");background-repeat:no-repeat;background-position:center center;background-size:cover;}")],
    dynamic: [imagepath]
  }));
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_colors__ = __webpack_require__(2);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", _extends({}, props, {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3685854087", [__WEBPACK_IMPORTED_MODULE_2__constants_colors__["b" /* BURNT_ORANGE */], __WEBPACK_IMPORTED_MODULE_2__constants_colors__["d" /* WHITE */]]]]) + " " + (props.className != null && props.className || "")
  }), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3685854087",
    css: [".__jsx-style-dynamic-selector{display:inline-block;cursor:pointer;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;background-color:".concat(__WEBPACK_IMPORTED_MODULE_2__constants_colors__["b" /* BURNT_ORANGE */], ";color:").concat(__WEBPACK_IMPORTED_MODULE_2__constants_colors__["d" /* WHITE */], ";padding:.5rem 1rem;margin:.5rem 1rem;border-radius:3px;}")],
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__constants_colors__["b" /* BURNT_ORANGE */], __WEBPACK_IMPORTED_MODULE_2__constants_colors__["d" /* WHITE */]]
  }));
});

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__(6);

// EXTERNAL MODULE: ./components/Banner.js
var Banner = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Icon.js
var Icon = __webpack_require__(4);

// EXTERNAL MODULE: ./constants/colors.js
var colors = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Testimonial.js




var iconStyle = {
  color: colors["c" /* LIGHT_GREY */],
  margin: '0 .25rem',
  fontSize: '2rem'
};
/* harmony default export */ var Testimonial = (function (_ref) {
  var by = _ref.by,
      children = _ref.children;
  return external__react__default.a.createElement("blockquote", {
    className: "jsx-2539589684"
  }, external__react__default.a.createElement(Icon["a" /* default */], {
    icon: "quote-left",
    style: iconStyle
  }), children, external__react__default.a.createElement(Icon["a" /* default */], {
    icon: "quote-right",
    style: iconStyle
  }), external__react__default.a.createElement("p", {
    className: "jsx-2539589684" + " " + "byline"
  }, by), external__react__default.a.createElement(style__default.a, {
    styleId: "2539589684",
    css: [".byline.jsx-2539589684{margin-top:.5rem;text-align:right;font-weight:300;font-style:italic;}"]
  }));
});
// CONCATENATED MODULE: ./pages/index.js







var pages_iconStyle = {
  margin: '0 .25rem'
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement(Layout["a" /* default */], {
    title: "home page"
  }, external__react__default.a.createElement(Banner["a" /* default */], {
    imagepath: "/static/img/lizard.jpg"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-1637359651"
  }, "I love gross things too!"), external__react__default.a.createElement("h2", {
    className: "jsx-1637359651"
  }, external__react__default.a.createElement(Icon["a" /* default */], {
    icon: "heart",
    style: pages_iconStyle
  }), external__react__default.a.createElement(Icon["a" /* default */], {
    icon: "heart",
    style: pages_iconStyle
  }), external__react__default.a.createElement(Icon["a" /* default */], {
    icon: "heart",
    style: pages_iconStyle
  })), external__react__default.a.createElement("p", {
    className: "jsx-1637359651"
  }, "Sure, walking dogs is fun and batting around a plaything with cats is cool, but I also love slippery, slimey, scaley, disgusting exotic pets too."), external__react__default.a.createElement(Button["a" /* default */], {
    href: "tel:14164079638"
  }, "call me")), external__react__default.a.createElement("main", {
    className: "jsx-1637359651"
  }, external__react__default.a.createElement("section", {
    className: "jsx-1637359651"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-1637359651"
  }, "GTAs favourite exotic pet care"), external__react__default.a.createElement("p", {
    className: "jsx-1637359651"
  }, "With over 10 years of exotic pet care experience, we are the best choice for short and long term care for your snakes, lizards, spiders, raccoons, and long-haired camels.")), external__react__default.a.createElement("section", {
    className: "jsx-1637359651"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-1637359651"
  }, "Vacation Pet Setting"), external__react__default.a.createElement("p", {
    className: "jsx-1637359651"
  }, "Leave your pet home where they are most comfortable and we will come and visit them. We are your stress free alternative to boarding or imposing on friends and family. Go ahead! Book that vacation!")), external__react__default.a.createElement("section", {
    className: "jsx-1637359651"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-1637359651"
  }, "Mid-day Dog Walking"), external__react__default.a.createElement("p", {
    className: "jsx-1637359651"
  }, "We'll walk the dog for you when you're too busy. Daily, weekly or as needed. Perfect for the busy professional or for help potty training puppies."))), external__react__default.a.createElement("section", {
    className: "jsx-1637359651"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-1637359651"
  }, "Service Area"), external__react__default.a.createElement("iframe", {
    title: "service area",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7033.36178313984!2d-79.77020795888578!3d43.59813188493247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6a608b0e51e9%3A0x1751c8a57c037b9f!2s7044+Estoril+Rd%2C+Mississauga%2C+ON+L5N+1N4!5e0!3m2!1sen!2sca!4v1526845124357",
    width: "100%",
    height: "450",
    frameBorder: "0",
    style: {
      border: 0
    },
    allowFullScreen: true,
    className: "jsx-1637359651"
  })), external__react__default.a.createElement("main", {
    className: "jsx-1637359651"
  }, external__react__default.a.createElement("section", {
    className: "jsx-1637359651" + " " + "testimonials"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-1637359651"
  }, "What people say..."), external__react__default.a.createElement(Testimonial, {
    by: "Richard G"
  }, "Was great with our cats while we were gone. Sent update pictures and videos of them playing and laying around. Came home to happy, healthy kitties!"), external__react__default.a.createElement(Testimonial, {
    by: "Meredith M"
  }, "This was my first time using both Rover and a pet/house sitter, so I was a bit nervous about leaving my three dogs while away on holiday. Catherine was patient with all my questions and put me at ease with the whole process. Knowing I was nervous, Catherine sent several pics and messages during the trip, which were all much appreciated. I returned to happy, well cared for dogs who did not have the stress of going to a kennel. It is comforting to know that if I need to go away again, Catherine is an excellent option for the dogs who probably are hoping that is not too far off."), external__react__default.a.createElement(Testimonial, {
    by: "Judy P"
  }, "I have three pure bred cats, 2 are 2 years and one 4 months, they are my babies and I am glad to have found Catherine to look after them when I travel for business or pleasure! Thanks Catherine!"))), external__react__default.a.createElement(Banner["a" /* default */], {
    imagepath: "/static/img/cathy-and-jack.jpg",
    style: {
      backgroundPosition: 'top center',
      height: '30vh'
    }
  }, external__react__default.a.createElement(Button["a" /* default */], {
    href: "tel:14164079638"
  }, "call me")), external__react__default.a.createElement(style__default.a, {
    styleId: "1637359651",
    css: ["section.jsx-1637359651{text-align:center;margin:0 auto;}", "section.testimonials.jsx-1637359651{text-align:left;}"]
  }));
});

/***/ })
/******/ ]);