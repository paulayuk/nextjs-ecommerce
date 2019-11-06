webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cartcontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartcontext */ "./components/cartcontext.js");
var _jsxFileName = "/Users/mac/sites/nextjs-shopping-cart/components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Navbar = function Navbar(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_cartcontext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      cart = _useContext.cart;

  return __jsx("nav", {
    className: "navbar navbar-light bg-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Shoppr")), __jsx("a", {
    href: "/cart",
    className: "btn btn-outline-success my-2 my-sm-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Cart ", cart.length));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/reducer.js":
false,

/***/ "./components/store.js":
false

})
//# sourceMappingURL=_app.js.d0c67c853dd9d7b4796b.hot-update.js.map