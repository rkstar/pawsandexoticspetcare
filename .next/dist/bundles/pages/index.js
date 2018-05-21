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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/components/Banner.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      imagepath = _ref.imagepath,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1593569219", [imagepath]]]) + " " + "banner"
  }, children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1593569219",
    css: ".banner.__jsx-style-dynamic-selector{background:linear-gradient( to top, rgba(0,0,0,.35) 0%, rgba(0,0,0,.25) 100% ), url(".concat(imagepath, ");background-repeat:no-repeat;background-position:center center;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmFubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQVEwQyxrSEFDTCw0QkFDTSxrQ0FDWixzQkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9CYW5uZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Jrc3Rhci9kZXYvcHJvamVjdHMvcGF3c2FuZGV4b3RpY3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgaW1hZ2VwYXRoLCBzdHlsZSA9IHt9IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIiBzdHlsZT17c3R5bGV9PlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYmFubmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIHRvIHRvcCxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4zNSkgMCUsXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMjUpIDEwMCVcbiAgICAgICAgKSxcbiAgICAgICAgdXJsKCR7aW1hZ2VwYXRofSk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=components/Banner.js */"),
    dynamic: [imagepath]
  }));
});

/***/ }),

/***/ "./components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_colors__ = __webpack_require__("./constants/colors.js");
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/components/Button.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3685854087", [__WEBPACK_IMPORTED_MODULE_2__constants_colors__["c" /* BURNT_ORANGE */], __WEBPACK_IMPORTED_MODULE_2__constants_colors__["e" /* WHITE */]]]]) + " " + (props.className != null && props.className || "")
  }), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3685854087",
    css: ".__jsx-style-dynamic-selector{display:inline-block;cursor:pointer;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;background-color:".concat(__WEBPACK_IMPORTED_MODULE_2__constants_colors__["c" /* BURNT_ORANGE */], ";color:").concat(__WEBPACK_IMPORTED_MODULE_2__constants_colors__["e" /* WHITE */], ";padding:.5rem 1rem;margin:.5rem 1rem;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1nQixBQUU0QixxQkFDTixlQUNVLHlCQUNKLGtEQUN5Qiw4Q0FDWCxtQ0FDaEIsbUJBQ0Qsa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ya3N0YXIvZGV2L3Byb2plY3RzL3Bhd3NhbmRleG90aWNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJVUk5UX09SQU5HRSwgV0hJVEUgfSBmcm9tICcuLi9jb25zdGFudHMvY29sb3JzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPGEgey4uLnByb3BzfT5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7QlVSTlRfT1JBTkdFfTtcbiAgICAgIGNvbG9yOiAke1dISVRFfTtcbiAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgICBtYXJnaW46IC41cmVtIDFyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2E+XG4pO1xuIl19 */\n/*@ sourceURL=components/Button.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__constants_colors__["c" /* BURNT_ORANGE */], __WEBPACK_IMPORTED_MODULE_2__constants_colors__["e" /* WHITE */]]
  }));
});

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Icon__ = __webpack_require__("./components/Icon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_colors__ = __webpack_require__("./constants/colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_external__ = __webpack_require__("./constants/external.js");
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/components/Footer.js";






/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, "PAWS & EXOTICS PET CARE SERVICES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, "home"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, "about"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, "services"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, "contact")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]]) + " " + "social"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: __WEBPACK_IMPORTED_MODULE_5__constants_external__["b" /* FACEBOOK */],
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]]) + " " + "icon"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Icon__["a" /* default */], {
    icon: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: __WEBPACK_IMPORTED_MODULE_5__constants_external__["c" /* INSTAGRAM */],
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]]) + " " + "icon"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Icon__["a" /* default */], {
    icon: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: __WEBPACK_IMPORTED_MODULE_5__constants_external__["a" /* EMAIL */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]]) + " " + "icon"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Icon__["a" /* default */], {
    icon: "at",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: __WEBPACK_IMPORTED_MODULE_5__constants_external__["d" /* PHONE */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4081347781", [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]]]) + " " + "icon"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Icon__["a" /* default */], {
    icon: "mobile-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4081347781",
    css: "footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;font-size:.7rem;font-weight:100;}section.__jsx-style-dynamic-selector{max-width:49vw;}h1.__jsx-style-dynamic-selector{font-size:1rem;margin:0;margin-bottom:1rem;line-height:1.2rem;font-weight:100;}a.__jsx-style-dynamic-selector{color:".concat(__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */], ";-webkit-text-decoration:none;text-decoration:none;}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:underline;text-decoration:underline;}ul.__jsx-style-dynamic-selector{list-style-type:none;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{margin:.5rem .25rem;}ul.social.__jsx-style-dynamic-selector{margin-bottom:1rem;}ul.social.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{display:inline-block;margin:0 .5rem;}a.icon.__jsx-style-dynamic-selector{font-size:1.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEZ0IsQUFHc0IsQUFRRSxBQUlBLEFBUW9CLEFBS1QsQUFJTCxBQUlELEFBSUQsQUFJRSxBQUtKLGVBckNuQixBQUlXLEVBa0NYLEVBVEEsQ0FKQSxDQUpBLEFBWWlCLEdBNUJJLFdBT0UsQ0FzQnZCLE9BNUJxQixpQkFXckIsRUFWa0IsWUFmTyxJQWdCekIsT0FLQSxrR0FwQitCLDJIQUNiLGdCQUNBLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmtzdGFyL2Rldi9wcm9qZWN0cy9wYXdzYW5kZXhvdGljcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29uJztcbmltcG9ydCB7IFdISVRFLCBEQVJLX09SQU5HRSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb2xvcnMnO1xuaW1wb3J0IHsgRkFDRUJPT0ssIElOU1RBR1JBTSwgRU1BSUwsIFBIT05FIH0gZnJvbSAnLi4vY29uc3RhbnRzL2V4dGVybmFsJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8Zm9vdGVyPlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPlBBV1MgJiBFWE9USUNTIFBFVCBDQVJFIFNFUlZJQ0VTPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT5ob21lPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgIDxhPmFib3V0PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5cbiAgICAgICAgICAgIDxhPnNlcnZpY2VzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgPGE+Y29udGFjdDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsXCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uXCIgaHJlZj17RkFDRUJPT0t9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJmYWNlYm9va1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvblwiIGhyZWY9e0lOU1RBR1JBTX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cImluc3RhZ3JhbVwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvblwiIGhyZWY9e0VNQUlMfT5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJhdFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvblwiIGhyZWY9e1BIT05FfT5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJtb2JpbGUtYWx0XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBmb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBtYXgtd2lkdGg6IDQ5dnc7XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogJHtXSElURX07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgdWwgbGkge1xuICAgICAgICBtYXJnaW46IC41cmVtIC4yNXJlbTtcbiAgICAgIH1cblxuICAgICAgdWwuc29jaWFsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgdWwuc29jaWFsIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGEuaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9mb290ZXI+XG4pO1xuIl19 */\n/*@ sourceURL=components/Footer.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_4__constants_colors__["e" /* WHITE */]]
  }));
});

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_colors__ = __webpack_require__("./constants/colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu__ = __webpack_require__("./components/Menu.js");
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/components/Header.js";





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1738260665", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["b" /* BRIGHT_ORANGE */], __WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */], __WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1738260665", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["b" /* BRIGHT_ORANGE */], __WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */], __WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/img/logo.png",
    alt: "Paws & Exotics Pet Care logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1738260665", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["b" /* BRIGHT_ORANGE */], __WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */], __WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */]]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1738260665", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["b" /* BRIGHT_ORANGE */], __WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */], __WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */]]]])
  }, "PAWS & EXOTICS")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Menu__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1738260665",
    css: "header.__jsx-style-dynamic-selector{z-index:100;background-color:".concat(__WEBPACK_IMPORTED_MODULE_3__constants_colors__["b" /* BRIGHT_ORANGE */], ";color:").concat(__WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */], ";height:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .25rem;box-shadow:0 2px 2px ").concat(__WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */], ";margin-bottom:2px;}div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.__jsx-style-dynamic-selector{max-height:3.5rem;width:auto;}h1.__jsx-style-dynamic-selector{font-size:1.25rem;display:inline-block;vertical-align:middle;font-weight:300;-webkit-letter-spacing:-.1rem;-moz-letter-spacing:-.1rem;-ms-letter-spacing:-.1rem;letter-spacing:-.1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQixBQUdxQixBQWFDLEFBS0ssQUFLQSxZQXRCNEIsTUFrQm5DLEFBS1UsV0FKdkIsVUFLd0IsbUJBdkJhLEdBd0JuQixhQVpHLEdBYUcsZ0JBeEJWLFlBQ0MsOERBV2YsWUFWZ0MsR0F1QmhDLGdIQXRCcUIsNkZBQ0YsaUJBQ2lDLGtEQUNoQyxrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Jrc3Rhci9kZXYvcHJvamVjdHMvcGF3c2FuZGV4b3RpY3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEJMQUNLLCBXSElURSwgQlJJR0hUX09SQU5HRSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb2xvcnMnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxkaXY+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2xvZ28ucG5nXCIgYWx0PVwiUGF3cyAmIEV4b3RpY3MgUGV0IENhcmUgbG9nb1wiIC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8aDE+UEFXUyAmIEVYT1RJQ1M8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxNZW51IC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0JSSUdIVF9PUkFOR0V9O1xuICAgICAgICBjb2xvcjogJHtCTEFDS307XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIC4yNXJlbTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4ICR7QkxBQ0t9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICB9XG5cbiAgICAgIGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2hlYWRlcj5cbik7XG4iXX0= */\n/*@ sourceURL=components/Header.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["b" /* BRIGHT_ORANGE */], __WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */], __WEBPACK_IMPORTED_MODULE_3__constants_colors__["a" /* BLACK */]]
  }));
});

/***/ }),

/***/ "./components/Icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/components/Icon.js";

var brandIcons = ['facebook', 'twitter', 'instagram', 'linkedin'];

var isBrand = function isBrand(icon) {
  return brandIcons.includes(icon);
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
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
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/components/Layout.js";




var defaultTitle = 'Paws & Exotics Pet Care';
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? defaultTitle : _ref$title,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
});

/***/ }),

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_colors__ = __webpack_require__("./constants/colors.js");
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/components/Menu.js";




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2737599461", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2737599461", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2737599461", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["e" /* WHITE */]]]])
  }, "about"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2737599461", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2737599461", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["e" /* WHITE */]]]])
  }, "services"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2737599461", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["e" /* WHITE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2737599461", [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["e" /* WHITE */]]]])
  }, "contact"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2737599461",
    css: "ul.__jsx-style-dynamic-selector{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{margin:0 .5rem;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:".concat(__WEBPACK_IMPORTED_MODULE_3__constants_colors__["e" /* WHITE */], ";cursor:pointer;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;font-weight:300;font-size:.9rem;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-deocration:underline;text-deocration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmdCLEFBRzhCLEFBTU4sQUFHb0IsQUFRVCxlQVY1QixNQU5lLGNBU0UsZUFDVSxVQU8zQixlQU51QixvQkFWRiw4QkFXSCxnQkFDQSxnQkFDbEIsK0JBWnlCLG1HQUN6QiIsImZpbGUiOiJjb21wb25lbnRzL01lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Jrc3Rhci9kZXYvcHJvamVjdHMvcGF3c2FuZGV4b3RpY3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFdISVRFIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbG9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPHVsPlxuICAgIDxsaT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgPGE+YWJvdXQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+XG4gICAgICAgIDxhPnNlcnZpY2VzPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgIDxhPmNvbnRhY3Q8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICB1bCBsaSB7XG4gICAgICAgIG1hcmdpbjogMCAuNXJlbTtcbiAgICAgIH1cbiAgICAgIHVsIGxpIGEge1xuICAgICAgICBjb2xvcjogJHtXSElURX07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgfVxuICAgICAgdWwgbGkgYTpob3ZlciB7XG4gICAgICAgIHRleHQtZGVvY3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC91bD5cbik7XG4iXX0= */\n/*@ sourceURL=components/Menu.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__constants_colors__["e" /* WHITE */]]
  }));
});

/***/ }),

/***/ "./components/ServiceMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/components/ServiceMap.js";

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", {
    title: "service area",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147467.37111298268!2d-79.83826679444543!3d43.62676287126011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6a60f1aee829%3A0x952b723e417ae172!2sMississauga%2C+ON+L5N+1N4!5e0!3m2!1sen!2sca!4v1526917485625",
    width: "100%",
    height: "450",
    frameBorder: "0",
    style: {
      border: 0
    },
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  });
});

/***/ }),

/***/ "./components/Testimonial.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icon__ = __webpack_require__("./components/Icon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_colors__ = __webpack_require__("./constants/colors.js");
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/components/Testimonial.js";




var iconStyle = {
  color: __WEBPACK_IMPORTED_MODULE_3__constants_colors__["d" /* LIGHT_GREY */],
  margin: '0 .25rem',
  fontSize: '2rem'
};
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var by = _ref.by,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-2539589684"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icon__["a" /* default */], {
    icon: "quote-left",
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icon__["a" /* default */], {
    icon: "quote-right",
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-2539589684" + " " + "byline"
  }, by), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2539589684",
    css: ".byline.jsx-2539589684{margin-top:.5rem;text-align:right;font-weight:300;font-style:italic;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGVzdGltb25pYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JnQixBQUcwQixpQkFDQSxpQkFDRCxnQkFDRSxrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9UZXN0aW1vbmlhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmtzdGFyL2Rldi9wcm9qZWN0cy9wYXdzYW5kZXhvdGljcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IHsgTElHSFRfR1JFWSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb2xvcnMnO1xuXG5jb25zdCBpY29uU3R5bGUgPSB7XG4gIGNvbG9yOiBMSUdIVF9HUkVZLFxuICBtYXJnaW46ICcwIC4yNXJlbScsXG4gIGZvbnRTaXplOiAnMnJlbScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoeyBieSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8YmxvY2txdW90ZT5cbiAgICA8SWNvbiBpY29uPVwicXVvdGUtbGVmdFwiIHN0eWxlPXtpY29uU3R5bGV9IC8+XG4gICAge2NoaWxkcmVufVxuICAgIDxJY29uIGljb249XCJxdW90ZS1yaWdodFwiIHN0eWxlPXtpY29uU3R5bGV9IC8+XG4gICAgPHAgY2xhc3NOYW1lPVwiYnlsaW5lXCI+e2J5fTwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYnlsaW5lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Jsb2NrcXVvdGU+XG4pO1xuIl19 */\n/*@ sourceURL=components/Testimonial.js */"
  }));
});

/***/ }),

/***/ "./constants/colors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FADED_ORANGE */
/* unused harmony export LIGHT_ORANGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BRIGHT_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BURNT_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIGHT_GREY; });
var FADED_ORANGE = '#F9AF7C';
var LIGHT_ORANGE = '#F7B589';
var BRIGHT_ORANGE = '#fb9254';
var BURNT_ORANGE = '#F55A2B';
var WHITE = '#FAFAFA';
var BLACK = '#121212';
var LIGHT_GREY = '#CCCCCC';

/***/ }),

/***/ "./constants/external.js":
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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Banner__ = __webpack_require__("./components/Banner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Button__ = __webpack_require__("./components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Icon__ = __webpack_require__("./components/Icon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ServiceMap__ = __webpack_require__("./components/ServiceMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Testimonial__ = __webpack_require__("./components/Testimonial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_colors__ = __webpack_require__("./constants/colors.js");
var _jsxFileName = "/Users/rkstar/dev/projects/pawsandexotics/pages/index.js";









var iconStyle = {
  margin: '0 .25rem'
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
    title: "home page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Banner__["a" /* default */], {
    imagepath: "/static/img/lizard.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "Reptiles need love too!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Icon__["a" /* default */], {
    icon: "heart",
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Icon__["a" /* default */], {
    icon: "heart",
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Icon__["a" /* default */], {
    icon: "heart",
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "Everyone thinks puppies and kittens are cute but lizards, snakes, rats, and other \"creepy-crawlies\" are cute too."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Button__["a" /* default */], {
    href: "tel:14164079638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "call me")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "All breeds, all species!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "With over 10 years of exotic pet care experience, I am the best choice for short and long term care for your snakes, lizards, pocket pets, cats, and dogs.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "Pet Setting"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "Leaving your pet while you're away can be stressful. Consider hiring a professional to care for your pet and ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://youtu.be/NT1tZmGvFfY",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "dance your cares away."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "Dog Walking"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "Dogs love going for walks at all times of the day and night; turns out I do too! If you need your dog taken for a walk at morning, noon, or night, ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://youtu.be/Niu9Zmrx0p8",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "I'll be there for you.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "Service Area"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ServiceMap__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]]) + " " + "testimonials"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["210183367", [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]]])
  }, "What people say..."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Testimonial__["a" /* default */], {
    by: "Richard G",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "Was great with our cats while we were gone. Sent update pictures and videos of them playing and laying around. Came home to happy, healthy kitties!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Testimonial__["a" /* default */], {
    by: "Meredith M",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, "This was my first time using both Rover and a pet/house sitter, so I was a bit nervous about leaving my three dogs while away on holiday. Catherine was patient with all my questions and put me at ease with the whole process. Knowing I was nervous, Catherine sent several pics and messages during the trip, which were all much appreciated. I returned to happy, well cared for dogs who did not have the stress of going to a kennel. It is comforting to know that if I need to go away again, Catherine is an excellent option for the dogs who probably are hoping that is not too far off."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Testimonial__["a" /* default */], {
    by: "Judy P",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, "I have three pure bred cats, 2 are 2 years and one 4 months, they are my babies and I am glad to have found Catherine to look after them when I travel for business or pleasure! Thanks Catherine!"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Banner__["a" /* default */], {
    imagepath: "/static/img/cathy-and-jack.jpg",
    style: {
      backgroundPosition: 'top center',
      height: '30vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Button__["a" /* default */], {
    href: "tel:14164079638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, "call me")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "210183367",
    css: "section.__jsx-style-dynamic-selector{text-align:center;margin:0 auto;}section.testimonials.__jsx-style-dynamic-selector{text-align:left;}a.__jsx-style-dynamic-selector{color:".concat(__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGZ0IsQUFHMkIsQUFLRixBQUltQixnQkFIckMsRUFMZ0IsY0FDaEIsR0FRQSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmtzdGFyL2Rldi9wcm9qZWN0cy9wYXdzYW5kZXhvdGljcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5uZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb24nO1xuaW1wb3J0IFNlcnZpY2VNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9TZXJ2aWNlTWFwJztcbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RpbW9uaWFsJztcbmltcG9ydCB7IEJVUk5UX09SQU5HRSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb2xvcnMnO1xuXG5jb25zdCBpY29uU3R5bGUgPSB7XG4gIG1hcmdpbjogJzAgLjI1cmVtJyxcbn07XG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQgdGl0bGU9XCJob21lIHBhZ2VcIj5cbiAgICA8QmFubmVyIGltYWdlcGF0aD1cIi9zdGF0aWMvaW1nL2xpemFyZC5qcGdcIj5cbiAgICAgIDxoMT5SZXB0aWxlcyBuZWVkIGxvdmUgdG9vITwvaDE+XG4gICAgICA8aDI+XG4gICAgICAgIDxJY29uIGljb249XCJoZWFydFwiIHN0eWxlPXtpY29uU3R5bGV9IC8+XG4gICAgICAgIDxJY29uIGljb249XCJoZWFydFwiIHN0eWxlPXtpY29uU3R5bGV9IC8+XG4gICAgICAgIDxJY29uIGljb249XCJoZWFydFwiIHN0eWxlPXtpY29uU3R5bGV9IC8+XG4gICAgICA8L2gyPlxuICAgICAgPHA+XG4gICAgICBFdmVyeW9uZSB0aGlua3MgcHVwcGllcyBhbmQga2l0dGVucyBhcmUgY3V0ZSBidXRcbiAgICAgICBsaXphcmRzLCBzbmFrZXMsIHJhdHMsIGFuZCBvdGhlciBcImNyZWVweS1jcmF3bGllc1wiIGFyZSBjdXRlIHRvby5cbiAgICAgIDwvcD5cbiAgICAgIDxCdXR0b24gaHJlZj1cInRlbDoxNDE2NDA3OTYzOFwiPmNhbGwgbWU8L0J1dHRvbj5cbiAgICA8L0Jhbm5lcj5cbiAgICA8bWFpbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+QWxsIGJyZWVkcywgYWxsIHNwZWNpZXMhPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgIFdpdGggb3ZlciAxMCB5ZWFycyBvZiBleG90aWMgcGV0IGNhcmUgZXhwZXJpZW5jZSwgSSBhbSB0aGUgYmVzdCBjaG9pY2UgZm9yXG4gICAgICAgICBzaG9ydCBhbmQgbG9uZyB0ZXJtIGNhcmUgZm9yIHlvdXIgc25ha2VzLCBsaXphcmRzLCBwb2NrZXQgcGV0cywgY2F0cywgYW5kIGRvZ3MuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMT5QZXQgU2V0dGluZzwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICBMZWF2aW5nIHlvdXIgcGV0IHdoaWxlIHlvdSdyZSBhd2F5IGNhbiBiZSBzdHJlc3NmdWwuIENvbnNpZGVyIGhpcmluZyBhIHByb2Zlc3Npb25hbCB0byBjYXJlIGZvciB5b3VyIHBldCBhbmQgPGEgaHJlZj1cImh0dHBzOi8veW91dHUuYmUvTlQxdFptR3ZGZllcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+ZGFuY2UgeW91ciBjYXJlcyBhd2F5LjwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPkRvZyBXYWxraW5nPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgIERvZ3MgbG92ZSBnb2luZyBmb3Igd2Fsa3MgYXQgYWxsIHRpbWVzIG9mIHRoZSBkYXkgYW5kIG5pZ2h0OyB0dXJucyBvdXQgSSBkbyB0b28hIElmIHlvdSBuZWVkIHlvdXIgZG9nIHRha2VuIGZvciBhIHdhbGsgYXQgbW9ybmluZywgbm9vbiwgb3IgbmlnaHQsIDxhIGhyZWY9XCJodHRwczovL3lvdXR1LmJlL05pdTlabXJ4MHA4XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPkknbGwgYmUgdGhlcmUgZm9yIHlvdS48L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+U2VydmljZSBBcmVhPC9oMT5cbiAgICAgIDxTZXJ2aWNlTWFwIC8+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVzdGltb25pYWxzXCI+XG4gICAgICAgIDxoMT5XaGF0IHBlb3BsZSBzYXkuLi48L2gxPlxuICAgICAgICA8VGVzdGltb25pYWwgYnk9XCJSaWNoYXJkIEdcIj5cbiAgICAgICAgV2FzIGdyZWF0IHdpdGggb3VyIGNhdHMgd2hpbGUgd2Ugd2VyZSBnb25lLiBTZW50IHVwZGF0ZSBwaWN0dXJlcyBhbmQgdmlkZW9zIG9mXG50aGVtIHBsYXlpbmcgYW5kIGxheWluZyBhcm91bmQuIENhbWUgaG9tZSB0byBoYXBweSwgaGVhbHRoeSBraXR0aWVzIVxuICAgICAgICA8L1Rlc3RpbW9uaWFsPlxuICAgICAgICA8VGVzdGltb25pYWwgYnk9XCJNZXJlZGl0aCBNXCI+XG4gICAgICAgIFRoaXMgd2FzIG15IGZpcnN0IHRpbWUgdXNpbmcgYm90aCBSb3ZlciBhbmQgYSBwZXQvaG91c2Ugc2l0dGVyLCBzbyBJIHdhcyBhIGJpdFxubmVydm91cyBhYm91dCBsZWF2aW5nIG15IHRocmVlIGRvZ3Mgd2hpbGUgYXdheSBvbiBob2xpZGF5LiBDYXRoZXJpbmUgd2FzIHBhdGllbnRcbndpdGggYWxsIG15IHF1ZXN0aW9ucyBhbmQgcHV0IG1lIGF0IGVhc2Ugd2l0aCB0aGUgd2hvbGUgcHJvY2Vzcy4gS25vd2luZyBJIHdhc1xubmVydm91cywgQ2F0aGVyaW5lIHNlbnQgc2V2ZXJhbCBwaWNzIGFuZCBtZXNzYWdlcyBkdXJpbmcgdGhlIHRyaXAsIHdoaWNoIHdlcmUgYWxsXG5tdWNoIGFwcHJlY2lhdGVkLiBJIHJldHVybmVkIHRvIGhhcHB5LCB3ZWxsIGNhcmVkIGZvciBkb2dzIHdobyBkaWQgbm90IGhhdmUgdGhlXG5zdHJlc3Mgb2YgZ29pbmcgdG8gYSBrZW5uZWwuIEl0IGlzIGNvbWZvcnRpbmcgdG8ga25vdyB0aGF0IGlmIEkgbmVlZCB0byBnbyBhd2F5IGFnYWluLFxuQ2F0aGVyaW5lIGlzIGFuIGV4Y2VsbGVudCBvcHRpb24gZm9yIHRoZSBkb2dzIHdobyBwcm9iYWJseSBhcmUgaG9waW5nIHRoYXQgaXMgbm90IHRvb1xuZmFyIG9mZi5cbiAgICAgICAgPC9UZXN0aW1vbmlhbD5cbiAgICAgICAgPFRlc3RpbW9uaWFsIGJ5PVwiSnVkeSBQXCI+XG4gICAgICAgIEkgaGF2ZSB0aHJlZSBwdXJlIGJyZWQgY2F0cywgMiBhcmUgMiB5ZWFycyBhbmQgb25lIDQgbW9udGhzLCB0aGV5IGFyZSBteSBiYWJpZXMgYW5kIEkgYW0gZ2xhZCB0byBoYXZlIGZvdW5kIENhdGhlcmluZSB0byBsb29rIGFmdGVyIHRoZW0gd2hlbiBJIHRyYXZlbCBmb3IgYnVzaW5lc3Mgb3IgcGxlYXN1cmUhIFRoYW5rcyBDYXRoZXJpbmUhXG4gICAgICAgIDwvVGVzdGltb25pYWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICAgIDxCYW5uZXJcbiAgICAgIGltYWdlcGF0aD1cIi9zdGF0aWMvaW1nL2NhdGh5LWFuZC1qYWNrLmpwZ1wiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgY2VudGVyJyxcbiAgICAgICAgaGVpZ2h0OiAnMzB2aCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxCdXR0b24gaHJlZj1cInRlbDoxNDE2NDA3OTYzOFwiPmNhbGwgbWU8L0J1dHRvbj5cbiAgICA8L0Jhbm5lcj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi50ZXN0aW1vbmlhbHMge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICR7QlVSTlRfT1JBTkdFfTtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_8__constants_colors__["c" /* BURNT_ORANGE */]]
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map