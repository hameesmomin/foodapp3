(self["webpackChunkfoodieapp"] = self["webpackChunkfoodieapp"] || []).push([["src_app_pages_recipe-detail_recipe-detail_module_ts"],{

/***/ 6415:
/*!*********************************************************************!*\
  !*** ./src/app/pages/recipe-detail/recipe-detail-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDetailPageRoutingModule": () => (/* binding */ RecipeDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _recipe_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-detail.page */ 7376);




const routes = [
    {
        path: '',
        component: _recipe_detail_page__WEBPACK_IMPORTED_MODULE_0__.RecipeDetailPage
    }
];
let RecipeDetailPageRoutingModule = class RecipeDetailPageRoutingModule {
};
RecipeDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecipeDetailPageRoutingModule);



/***/ }),

/***/ 5105:
/*!*************************************************************!*\
  !*** ./src/app/pages/recipe-detail/recipe-detail.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDetailPageModule": () => (/* binding */ RecipeDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _recipe_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-detail-routing.module */ 6415);
/* harmony import */ var _recipe_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail.page */ 7376);







let RecipeDetailPageModule = class RecipeDetailPageModule {
};
RecipeDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recipe_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecipeDetailPageRoutingModule
        ],
        declarations: [_recipe_detail_page__WEBPACK_IMPORTED_MODULE_1__.RecipeDetailPage]
    })
], RecipeDetailPageModule);



/***/ }),

/***/ 7376:
/*!***********************************************************!*\
  !*** ./src/app/pages/recipe-detail/recipe-detail.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDetailPage": () => (/* binding */ RecipeDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recipe_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipe-detail.page.html */ 1205);
/* harmony import */ var _recipe_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail.page.scss */ 8241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_foods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/foods.service */ 232);






let RecipeDetailPage = class RecipeDetailPage {
    constructor(route, foodService) {
        this.route = route;
        this.foodService = foodService;
        this.errorMessage = "";
    }
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (id) {
            this.getProduct(id);
        }
    }
    getProduct(id) {
        this.foodService.getFood(id).subscribe({
            next: food => this.food = food,
            error: err => this.errorMessage = err
        });
    }
};
RecipeDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_services_foods_service__WEBPACK_IMPORTED_MODULE_2__.FoodsService }
];
RecipeDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-recipe-detail',
        template: _raw_loader_recipe_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recipe_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecipeDetailPage);



/***/ }),

/***/ 8241:
/*!*************************************************************!*\
  !*** ./src/app/pages/recipe-detail/recipe-detail.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1205:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe-detail/recipe-detail.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content *ngIf=\"food\">\r\n\r\n<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n<h2 class=\"ion-padding\"><b>{{food?.foodName}}</b></h2>\r\n<ion-img [src]=\"food.imageUrl\" style=\"height: 40%;width: 95%;\"></ion-img>\r\n\r\n<br>\r\n\r\n<h2 class=\"text-center\"><b>Ingredients</b></h2>\r\n<ion-item lines=\"full\">\r\n  <ion-icon name=\"time-outline\"></ion-icon>{{\" Cook: \"+food.cookTime}}\r\n</ion-item>\r\n<br>\r\n<ion-list lines=\"none\"  *ngFor=\"let ingredient of food.ingredients\">\r\n  <ion-item >\r\n    <ion-thumbnail slot=\"start\">\r\n      <img\r\n        [src]=\"ingredient.imageUrl\" />\r\n    </ion-thumbnail>\r\n      <h4>{{ingredient.name}}</h4>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n\r\n\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recipe-detail_recipe-detail_module_ts.js.map