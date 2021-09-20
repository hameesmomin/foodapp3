(self["webpackChunkfoodieapp"] = self["webpackChunkfoodieapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 4374);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 4374);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 4374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 1979);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 9233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SignupPage = class SignupPage {
    constructor() { }
    ngOnInit() {
    }
};
SignupPage.ctorParameters = () => [];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 9233:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  font-size: 23px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG4vLyBpb24tY29udGVudCB7XHJcbi8vICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCgjRUZGMkYwLCNFRkYyRjApO1xyXG4vLyB9XHJcbiJdfQ== */");

/***/ }),

/***/ 1979:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-toolbar>  \r\n  <br>\r\n  <br>\r\n  \r\n  <ion-grid >\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col >\r\n        <div>\r\n         <h1>Crummbz</h1>\r\n         <br>\r\n         </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"9\">\r\n        <div>\r\n          <ion-item>\r\n            <ion-icon name=\"person\" size=\"20%\" style=\"margin-right: 2% ;\"></ion-icon>\r\n            <ion-input type=\"email\" placeholder=\"Enter Email\"></ion-input>\r\n          </ion-item>\r\n          <br/>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"9\">\r\n        <div>\r\n          <ion-item>\r\n            <ion-icon name=\"lock-closed\" size=\"20%\" style=\"margin-right: 2% ;\"></ion-icon>\r\n            <ion-input type=\"password\" placeholder=\"Enter Password\"></ion-input>\r\n          </ion-item>\r\n          <br>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"9\">\r\n        <div>\r\n          <ion-item>\r\n            <ion-icon name=\"lock-closed\" size=\"20%\" style=\"margin-right: 2% ;\"></ion-icon>\r\n            <ion-input type=\"password\" placeholder=\"Confirm Password\"></ion-input>\r\n          </ion-item>\r\n          <br>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col>\r\n        <div>\r\n          <ion-button shape=\"round\" size=\"100px\">SIGN UP</ion-button>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col  >\r\n        <div [routerLink]=\"['/login']\">\r\n          Already have account?Log In\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map