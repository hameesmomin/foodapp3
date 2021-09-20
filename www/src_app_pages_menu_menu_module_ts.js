(self["webpackChunkfoodieapp"] = self["webpackChunkfoodieapp"] || []).push([["src_app_pages_menu_menu_module_ts"],{

/***/ 8663:
/*!***************************************************!*\
  !*** ./src/app/pages/menu/menu-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page */ 7506);




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_0__.MenuPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 7994)).then(m => m.HomePageModule)
            },
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../about/about.module */ 8114)).then(m => m.AboutPageModule)
            },
        ]
    },
    {
        path: '',
        redirectTo: '/menu/home'
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 252:
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 8663);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 7506);







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 7506:
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu.page.html */ 538);
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss */ 6954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let MenuPage = class MenuPage {
    constructor(router) {
        this.router = router;
        this.pages = [
            {
                title: 'Login / Sign up',
                url: '/login'
            },
            {
                title: 'Home',
                url: '/menu/home'
            },
            {
                title: 'About Us',
                url: '/menu/about'
            }
        ];
        this.selectedPath = '';
        this.router.events.subscribe((event) => {
            this.selectedPath = event.url;
        });
    }
    ngOnInit() {
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuPage);



/***/ }),

/***/ 6954:
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #6b45bc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0kscUJBQWE7QUFGakIiLCJmaWxlIjoibWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYWN0aXZlLWl0ZW0ge1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vIH1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2YjQ1YmM7XHJcbn0iXX0= */");

/***/ }),

/***/ 538:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-menu content-id=\"content\" type=\"overlay\">\r\n    <ion-header >\r\n      <ion-toolbar color=\"secondary\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n\r\n        <ion-title>Profile</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n   <ion-content>\r\n    <br>\r\n\r\n     <ion-list>\r\n       <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\r\n         <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath == p.url\">\r\n           {{p.title}}\r\n         </ion-item>\r\n       </ion-menu-toggle>\r\n     </ion-list>\r\n   </ion-content> \r\n  </ion-menu>\r\n  \r\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\r\n</ion-app>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu_menu_module_ts.js.map