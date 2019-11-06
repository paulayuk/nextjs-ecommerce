webpackHotUpdate("static/development/pages/cart.js",{

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
var _jsxFileName = "/Users/mac/sites/nextjs-shopping-cart/pages/cart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Cart = function Cart() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_cartcontext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      cart = _useContext.cart;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    "class": "align-middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Cart Items"), __jsx("div", {
    "class": "pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    "class": "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    "class": "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    "class": "col-lg-12 p-5 bg-white rounded shadow-sm mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    "class": "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("table", {
    "class": "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("th", {
    scope: "col",
    "class": "border-0 bg-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    "class": "p-2 px-3 text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Product")), __jsx("th", {
    scope: "col",
    "class": "border-0 bg-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    "class": "py-2 text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Price")))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, cart.map(function (item) {
    return __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("th", {
      scope: "row",
      "class": "border-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      "class": "p-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("img", {
      src: item.image,
      alt: "product",
      width: "70",
      "class": "img-fluid rounded shadow-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("div", {
      "class": "ml-3 d-inline-block align-middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("h5", {
      "class": "mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, " ", __jsx("a", {
      href: "#",
      "class": "text-dark d-inline-block align-middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, item.description))))), __jsx("td", {
      "class": "border-0 align-middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, item.price)));
  })))), __jsx("ul", {
    "class": "list-unstyled mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("li", {
    "class": "d-flex justify-content-between py-3 border-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("strong", {
    "class": "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Total"), __jsx("h5", {
    "class": "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "$400.00"))), __jsx("a", {
    href: "#",
    "class": "btn btn-dark rounded-pill py-2 btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Procceed to checkout"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ })

})
//# sourceMappingURL=cart.js.97a9df81a90179218ca0.hot-update.js.map