webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./components/cartitems.js":
/*!*********************************!*\
  !*** ./components/cartitems.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mac/sites/nextjs-shopping-cart/components/cartitems.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var CartItem = function CartItem(props) {
  return __jsx("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    style: {
      width: "18rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: props.product.image,
    className: "card-img-top",
    alt: "shirt",
    style: {
      height: "320px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    className: "card-body",
    style: {
      height: "8rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.product.name), __jsx("h6", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "$ ", props.product.price), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/products/[id]",
    as: "/products/".concat(props.product.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "View Item \u2192")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Products.js */ "./components/Products.js");
/* harmony import */ var _components_cartcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cartcontext */ "./components/cartcontext.js");
/* harmony import */ var _components_cartitems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cartitems */ "./components/cartitems.js");
var _jsxFileName = "/Users/mac/sites/nextjs-shopping-cart/pages/cart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Cart = function Cart() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_cartcontext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      cart = _useContext.cart;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Cart Items"), cart.map(function (item) {
    return __jsx(Product, {
      key: item.id,
      product: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ })

})
//# sourceMappingURL=cart.js.06575c28b528a085580f.hot-update.js.map