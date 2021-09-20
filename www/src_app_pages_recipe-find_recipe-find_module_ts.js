(self["webpackChunkfoodieapp"] = self["webpackChunkfoodieapp"] || []).push([["src_app_pages_recipe-find_recipe-find_module_ts"],{

/***/ 7328:
/*!*****************************************************************!*\
  !*** ./src/app/pages/recipe-find/recipe-find-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeFindPageRoutingModule": () => (/* binding */ RecipeFindPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _recipe_find_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-find.page */ 3148);




const routes = [
    {
        path: '',
        component: _recipe_find_page__WEBPACK_IMPORTED_MODULE_0__.RecipeFindPage
    }
];
let RecipeFindPageRoutingModule = class RecipeFindPageRoutingModule {
};
RecipeFindPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecipeFindPageRoutingModule);



/***/ }),

/***/ 6627:
/*!*********************************************************!*\
  !*** ./src/app/pages/recipe-find/recipe-find.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeFindPageModule": () => (/* binding */ RecipeFindPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _recipe_find_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-find-routing.module */ 7328);
/* harmony import */ var _recipe_find_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-find.page */ 3148);
/* harmony import */ var src_app_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/recipe-item/recipe-item.component */ 6290);








let RecipeFindPageModule = class RecipeFindPageModule {
};
RecipeFindPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _recipe_find_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecipeFindPageRoutingModule
        ],
        declarations: [_recipe_find_page__WEBPACK_IMPORTED_MODULE_1__.RecipeFindPage, src_app_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_2__.RecipeItemComponent]
    })
], RecipeFindPageModule);



/***/ }),

/***/ 3148:
/*!*******************************************************!*\
  !*** ./src/app/pages/recipe-find/recipe-find.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeFindPage": () => (/* binding */ RecipeFindPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recipe_find_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipe-find.page.html */ 2548);
/* harmony import */ var _recipe_find_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-find.page.scss */ 7000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var src_app_services_foods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/foods.service */ 232);






let RecipeFindPage = class RecipeFindPage {
    constructor(cartService, foodService) {
        this.cartService = cartService;
        this.foodService = foodService;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.foodService.getFoods().subscribe({
            next: foods => {
                this.foods = foods;
                this.recipes = this.foods.filter(d => d.ingredients.some(c => this.ingredients.includes(c.name)));
                console.log(this.recipes);
            },
            error: err => this.errorMessage = err
        });
        this.ingredients = this.cartService.getName();
    }
};
RecipeFindPage.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: src_app_services_foods_service__WEBPACK_IMPORTED_MODULE_3__.FoodsService }
];
RecipeFindPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-recipe-find',
        template: _raw_loader_recipe_find_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recipe_find_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecipeFindPage);



/***/ }),

/***/ 7000:
/*!*********************************************************!*\
  !*** ./src/app/pages/recipe-find/recipe-find.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtZmluZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2548:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe-find/recipe-find.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/cart\"> </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Find Recipe</ion-title>\r\n  </ion-toolbar>\r\n\r\n\r\n<ion-content>\r\n  <ion-list *ngFor=\"let recipe of recipes\">\r\n    <app-recipe-item [food]=\"recipe\"></app-recipe-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recipe-find_recipe-find_module_ts.js.map