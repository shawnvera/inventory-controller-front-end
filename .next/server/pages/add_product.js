"use strict";
(() => {
var exports = {};
exports.id = 674;
exports.ids = [674,660];
exports.modules = {

/***/ 3957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fadd_product_preferredRegion_absolutePagePath_private_next_pages_2Fadd_product_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/add_product/index.js
var add_product_namespaceObject = {};
__webpack_require__.r(add_product_namespaceObject);
__webpack_require__.d(add_product_namespaceObject, {
  "default": () => (AddProduct)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./src/pages/_app.js
var _app = __webpack_require__(8375);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/pages/add_product/index.js

function AddProduct() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "w-screen h-screen",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                    className: "mx-auto border-2 bg-mtgray",
                    onSubmit: handleRegister,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between m-2 items-center space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    htmlFor: "name",
                                    children: "Name:"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    className: "border",
                                    type: "text",
                                    id: "name",
                                    required: true,
                                    onChange: (e)=>handleChange("name", e.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between m-2 items-center space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    htmlFor: "description",
                                    children: "Description:"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    className: "border",
                                    type: "text",
                                    id: "description",
                                    required: true,
                                    onChange: (e)=>handleChange("description", e.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between m-2 items-center space-x-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    htmlFor: "quantity",
                                    children: "Quantity:"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    className: "border",
                                    type: "text",
                                    id: "quantity",
                                    required: true,
                                    onChange: (e)=>handleChange("quantity", e.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex",
                            children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "submit",
                                value: "Add!",
                                className: "bg-mtpurple text-white py-2 px-4 rounded-lg mx-auto my-2 font-bold disabled:opacity-60",
                                disabled: user.description && user.quantity && user.name ? false : true
                            })
                        })
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fadd_product&preferredRegion=&absolutePagePath=private-next-pages%2Fadd_product%2Findex.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fadd_product_preferredRegion_absolutePagePath_private_next_pages_2Fadd_product_2Findex_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(add_product_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(add_product_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(add_product_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(add_product_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(add_product_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(add_product_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(add_product_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(add_product_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(add_product_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(add_product_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(add_product_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/add_product",
        pathname: "/add_product",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: add_product_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,50,375], () => (__webpack_exec__(3957)));
module.exports = __webpack_exports__;

})();