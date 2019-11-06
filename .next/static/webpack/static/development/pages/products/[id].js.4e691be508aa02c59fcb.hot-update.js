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
/* harmony import */ var _cartcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartcontext */ "./components/cartcontext.js");
var _jsxFileName = "/Users/mac/sites/nextjs-shopping-cart/components/Product-item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ProductItem = function ProductItem(props) {
  return __jsx("div", {
    className: "container mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    style: {
      width: "18rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("img", {
    src: props.product.image,
    className: "card-img-top",
    alt: "shirt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))), __jsx("div", {
    className: "col-sm-4 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "card-body",
    style: {
      marginTop: "135px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.product.name), __jsx("h6", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "$ ", props.product.price), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.product.description), __jsx("button", {
    className: "btn btn-large btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Add to Cart")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ }),

/***/ "./components/cartcontext.js":
/*!***********************************!*\
  !*** ./components/cartcontext.js ***!
  \***********************************/
/*! exports provided: default, DataConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConsumer", function() { return DataConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var DataConsumer = CartContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (CartContext);


/***/ })

})
//# sourceMappingURL=[id].js.4e691be508aa02c59fcb.hot-update.js.map