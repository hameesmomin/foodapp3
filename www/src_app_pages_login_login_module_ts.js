(self["webpackChunkfoodieapp"] = self["webpackChunkfoodieapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let LoginPage = class LoginPage {
    constructor() { }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  font-size: 23px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuLy8gaW9uLWNvbnRlbnQge1xyXG4vLyAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpsaW5lYXItZ3JhZGllbnQoI0VGRjJGMCwjRUZGMkYwKTtcclxuLy8gfVxyXG4iXX0= */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-toolbar>  \r\n  <br>\r\n  <br>\r\n  \r\n  <ion-grid >\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col >\r\n        <div>\r\n         <h1>Crummbz</h1>\r\n         <br>\r\n         </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"9\">\r\n        <div>\r\n          <ion-item>\r\n            <ion-icon name=\"mail\" size=\"20%\" style=\"margin-right: 2% ;\"></ion-icon>\r\n            <ion-input type=\"email\" placeholder=\"Enter Email\"></ion-input>\r\n          </ion-item>\r\n          <br/>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"9\">\r\n        <div>\r\n          <ion-item>\r\n            <ion-icon name=\"lock-closed\" size=\"20%\" style=\"margin-right: 2% ;\"></ion-icon>\r\n            <ion-input type=\"password\" placeholder=\"Enter Password\"></ion-input>\r\n          </ion-item>\r\n          <br>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col>\r\n        <div>\r\n          <ion-button color=\"light\">FORGOT PASSWORD</ion-button>\r\n        <br>\r\n        <br>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col>\r\n        <div>\r\n          <ion-button shape=\"round\" size=\"100px\">LOG IN</ion-button>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col>\r\n        <div>\r\n          <ion-button [routerLink]=\"['/signup']\" color=\"light\">CREATE ACCOUNT</ion-button>\r\n        <br>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map