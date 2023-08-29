"use strict";
exports.id = 651;
exports.ids = [651];
exports.modules = {

/***/ 6256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _auth_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3496);
/* harmony import */ var _auth_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/**
 * Create an Axios Client with defaults
 */ const client = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: _auth_constants__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T5
});
client.interceptors.response.use((response)=>response, (error)=>{
    const originalRequest = error.config;
    // Prevent infinite loops
    if (error.response.status === 401 && originalRequest.url === _auth_constants__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T5 + _auth_constants__WEBPACK_IMPORTED_MODULE_1__/* .REFRESH_ENDPOINT */ .Q) {
        window.location.href = "/login/";
        return Promise.reject(error);
    }
    if (error.response.data.code === "token_not_valid" && error.response.status === 401 && error.response.statusText === "Unauthorized") {
        const user = localStorage.getItem("user");
        if (user) {
            const tokenParts = JSON.parse(atob(user.refresh.split(".")[1]));
            // exp date in token is expressed in seconds, while now() returns milliseconds:
            const now = Math.ceil(Date.now() / 1000);
            console.log(tokenParts.exp);
            if (tokenParts.exp > now) {
                return client.post(_auth_constants__WEBPACK_IMPORTED_MODULE_1__/* .REFRESH_ENDPOINT */ .Q, {
                    refresh: user.refresh
                }).then((response)=>{
                    localStorage.setItem("user", response.data);
                    client.defaults.headers["Authorization"] = "Bearer " + response.data.access;
                    originalRequest.headers["Authorization"] = "Bearer " + response.data.access;
                    return client(originalRequest);
                }).catch((err)=>{
                    console.log(err);
                });
            } else {
                console.log("Refresh token is expired", tokenParts.exp, now);
                window.location.href = "/login/";
            }
        } else {
            console.log("Refresh token not available.");
            window.location.href = "/login/";
        }
    }
    // specific error handling done elsewhere
    return Promise.reject(error);
});
/**
 * Request Wrapper with default success/error actions
 */ const request = (opts)=>{
    let options = {
        ...opts,
        headers: (0,_auth_headers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)()
    };
    const onSuccess = (response)=>{
        console.debug("Request Successful!", response);
        return response;
    };
    const onError = (error)=>{
        console.error("Request Failed:", error.config);
        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
            console.error("Headers:", error.response.headers);
        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.error("Error Message:", error.message);
        }
        return Promise.reject(error.response || error.message);
    };
    return client(options).then(onSuccess).catch(onError);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LW: () => (/* binding */ LOGIN_ENDPOINT),
/* harmony export */   Q: () => (/* binding */ REFRESH_ENDPOINT),
/* harmony export */   T5: () => (/* binding */ API_URL),
/* harmony export */   bc: () => (/* binding */ REGISTER_ENDPOINT)
/* harmony export */ });
const API_URL = "http://127.0.0.1:8000/";
const LOGIN_ENDPOINT = "user/login/";
const REGISTER_ENDPOINT = "user/signup/";
const REFRESH_ENDPOINT = "token/refresh/";


/***/ }),

/***/ 3496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ authHeader)
/* harmony export */ });
function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.access) {
        return {
            Authorization: "Bearer " + user.access
        };
    } else {
        return {};
    }
}


/***/ }),

/***/ 5651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5246);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6256);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4300);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_request__WEBPACK_IMPORTED_MODULE_0__]);
_api_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



class AuthService {
    constructor(){
        this.login = this.login.bind(this);
    }
    async login(email, password, username) {
        try {
            const response = await (0,_api_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
                url: _auth_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_ENDPOINT */ .LW,
                method: "POST",
                data: {
                    email,
                    password,
                    username
                }
            });
            if (response.data.access) {
                return this.setToken(response);
            }
        } catch (error) {
            return error.response;
        }
    }
    logout() {
        localStorage.removeItem("user");
    }
    async register({ username, email, password, firstName, lastName, image }) {
        try {
            await (0,_api_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
                url: _auth_constants__WEBPACK_IMPORTED_MODULE_2__/* .REGISTER_ENDPOINT */ .bc,
                method: "POST",
                data: {
                    username,
                    email,
                    password,
                    first_name: firstName,
                    last_name: lastName,
                    image
                }
            });
            await this.login(email, password, username);
        } catch (error) {
            return error.response;
        }
    }
    setToken(response) {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    }
    async refreshToken() {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user.refresh) {
                const response = await (0,_api_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
                    url: _auth_constants__WEBPACK_IMPORTED_MODULE_2__/* .REFRESH_ENDPOINT */ .Q,
                    method: "POST",
                    data: {
                        refresh: user.refresh
                    }
                });
                return response.data;
            }
        } catch (error) {
            return error.response;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AuthService());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;