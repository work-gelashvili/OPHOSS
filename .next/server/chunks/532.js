exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 6498:
/***/ (() => {



/***/ }),

/***/ 4237:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9571, 23))

/***/ }),

/***/ 5072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8078);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2772);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const CallBtn = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: `${(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__contact)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "tel:+995591111996",
            className: `${(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["header__contact--btn"])}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__/* .IoIosCall */ .HQO, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "CALL"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallBtn);


/***/ }),

/***/ 9355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__(8078);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header/Logo.js


const Logo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(Header_module_default()).header__logo}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
            className: "d-flex align-items-center",
            children: [
                "OPHOSS ",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "•"
                }),
                " DIGITAL"
            ]
        })
    });
};
/* harmony default export */ const Header_Logo = (Logo);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header/Menu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const data = [
    {
        to: "/",
        name: "Home"
    },
    {
        to: "/ecommerce",
        name: "E-COMMERCE"
    }
];
const Menu = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: `${(Header_module_default()).header__menu} d-none align-items-center`,
        children: data && data.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: `${(Header_module_default())["header__menu--item"]}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: item.to,
                    className: `${(Header_module_default())["header__menu--link"]}`,
                    children: item.name
                })
            }, item.name);
        })
    });
};
/* harmony default export */ const Header_Menu = (Menu);

// EXTERNAL MODULE: ./components/Header/CallBtn.js
var CallBtn = __webpack_require__(5072);
;// CONCATENATED MODULE: ./components/Header/Header.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



const Header = ({ fixBg, style })=>{
    const [changeBg, setChangeBg] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        const slideShowHeight = document.querySelector("#slideshow");
        window.addEventListener("scroll", (e)=>{
            if (window.pageYOffset > (fixBg ? fixBg : slideShowHeight.clientHeight - 70)) {
                setChangeBg(true);
            } else {
                setChangeBg(false);
            }
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `${(Header_module_default()).header} d-flex align-items-center`,
        style: changeBg ? {
            backgroundColor: "#f6f1ed"
        } : null,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-10 d-flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Header_Logo, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Header_Menu, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-2 d-none justify-content-end",
                        children: "ka"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Header_Header = (Header);


/***/ }),

/***/ 1811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9881);
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_lia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4409);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Contact = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `${(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contact)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 col-lg-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "LOCATION"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Tbilisi, Georgia"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 col-lg-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "CONTACT"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "(995) 591 111 996"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "info@ophoss.digital"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 col-lg-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `${(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["contact-soc"])}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "https://www.facebook.com/ophoss.digital",
                                    target: "_black",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lia__WEBPACK_IMPORTED_MODULE_3__/* .LiaFacebookSquare */ .x0X, {})
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `${(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["contact-soc"])}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "https://www.linkedin.com/company/ophoss/",
                                    target: "_black",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lia__WEBPACK_IMPORTED_MODULE_3__/* .LiaLinkedin */ .fq_, {})
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 8078:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__1RJ5C",
	"header__logo": "Header_header__logo__W3BBN",
	"header__menu": "Header_header__menu__6E_NM",
	"header__menu--item": "Header_header__menu--item__RnvWF",
	"header__menu--link": "Header_header__menu--link__lYfwj",
	"header__contact": "Header_header__contact__ZiLsk",
	"header__contact--btn": "Header_header__contact--btn__HnBsV"
};


/***/ }),

/***/ 9881:
/***/ ((module) => {

// Exports
module.exports = {
	"contact": "Contact_contact__QIq2G",
	"contact-soc": "Contact_contact-soc__gYa21"
};


/***/ }),

/***/ 8481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8399);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6540);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);




const metadata = {
    title: `OPHOSS • DIGITAL`,
    description: "საიტების დამზადება"
};
const RootLayout = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootLayout);


/***/ }),

/***/ 6540:
/***/ (() => {



/***/ })

};
;