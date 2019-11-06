webpackHotUpdate("static/development/pages/products/[id].js",{

/***/ "./components/Product-item.js":
/*!************************************!*\
  !*** ./components/Product-item.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cartcontext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartcontext.js */ "./components/cartcontext.js");
var _jsxFileName = "/Users/mac/sites/nextjs-shopping-cart/components/Product-item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ProductItem = function ProductItem(props) {
  return __jsx("div", {
    className: "container mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    style: {
      width: "18rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    src: props.product.image,
    className: "card-img-top",
    alt: "shirt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), __jsx("div", {
    className: "col-sm-4 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    style: {
      marginTop: "135px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.product.name), __jsx("h6", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "$ ", props.product.price), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.product.description), __jsx("button", {
    className: "btn btn-large btn-primary",
    onClick: function onClick() {
      return props.addItem(props.product);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Add to Cart")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ })

})
//# sourceMappingURL=[id].js.46abeffe5a152b955146.hot-update.js.map