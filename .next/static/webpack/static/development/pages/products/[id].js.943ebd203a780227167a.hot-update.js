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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Add to Cart")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ }),

/***/ "./pages/products/[id].js":
/*!********************************!*\
  !*** ./pages/products/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_Product_item_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Product-item.js */ "./components/Product-item.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/reducer */ "./components/reducer.js");
/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/store */ "./components/store.js");
/* harmony import */ var _components_cartcontext_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/cartcontext.js */ "./components/cartcontext.js");


var _jsxFileName = "/Users/mac/sites/nextjs-shopping-cart/pages/products/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var Productitem = function Productitem(props) {
  return __jsx(_components_Product_item_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: props.product,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  });
};

Productitem.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, product;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://my-json-server.typicode.com/mood-board/demo/products/".concat(id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            product = _context.sent;
            return _context.abrupt("return", {
              product: product
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Productitem);

/***/ })

})
//# sourceMappingURL=[id].js.943ebd203a780227167a.hot-update.js.map