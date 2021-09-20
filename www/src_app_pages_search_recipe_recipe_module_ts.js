(self["webpackChunkfoodieapp"] = self["webpackChunkfoodieapp"] || []).push([["src_app_pages_search_recipe_recipe_module_ts"],{

/***/ 8475:
/*!**************************************************************!*\
  !*** ./src/app/pages/search/recipe/recipe-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipePageRoutingModule": () => (/* binding */ RecipePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _recipe_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.page */ 1402);




const routes = [
    {
        path: '',
        component: _recipe_page__WEBPACK_IMPORTED_MODULE_0__.RecipePage
    }
];
let RecipePageRoutingModule = class RecipePageRoutingModule {
};
RecipePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecipePageRoutingModule);



/***/ }),

/***/ 8618:
/*!******************************************************!*\
  !*** ./src/app/pages/search/recipe/recipe.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipePageModule": () => (/* binding */ RecipePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _recipe_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-routing.module */ 8475);
/* harmony import */ var _recipe_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.page */ 1402);
/* harmony import */ var src_app_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/recipe-item/recipe-item.component */ 6290);








let RecipePageModule = class RecipePageModule {
};
RecipePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _recipe_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecipePageRoutingModule
        ],
        declarations: [_recipe_page__WEBPACK_IMPORTED_MODULE_1__.RecipePage, src_app_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_2__.RecipeItemComponent]
    })
], RecipePageModule);



/***/ }),

/***/ 1402:
/*!****************************************************!*\
  !*** ./src/app/pages/search/recipe/recipe.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipePage": () => (/* binding */ RecipePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recipe_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipe.page.html */ 2329);
/* harmony import */ var _recipe_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.page.scss */ 9854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var src_app_services_foods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/foods.service */ 232);






let RecipePage = class RecipePage {
    constructor(foodService, cartService) {
        this.foodService = foodService;
        this.cartService = cartService;
        this.errorMessage = '';
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredFoods = this.listFilter ? this.performFilter(this.listFilter) : this.foods;
        this.counter = this.filteredFoods.length;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.foods.filter((food) => food.foodName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    ngOnInit() {
        this.sub = this.foodService.getFoods().subscribe({
            next: foods => {
                this.foods = foods;
                this.filteredFoods = foods;
            },
            error: err => this.errorMessage = err
        });
    }
    ngDoCheck() {
        this.carts = this.cartService.totalItems();
    }
};
RecipePage.ctorParameters = () => [
    { type: src_app_services_foods_service__WEBPACK_IMPORTED_MODULE_3__.FoodsService },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
RecipePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-recipe',
        template: _raw_loader_recipe_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recipe_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecipePage);



/***/ }),

/***/ 9854:
/*!******************************************************!*\
  !*** ./src/app/pages/search/recipe/recipe.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-start: 0.7rem;\n  --padding-end: 0.7rem;\n}\n\nion-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBZ0I7RUFDaEIscUJBQWM7QUFDbEI7O0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixtQkFBbUI7QUFFdkIiLCJmaWxlIjoicmVjaXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjdyZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwLjdyZW07XHJcbn1cclxuaW9uLWJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 2329:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/recipe/recipe.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Crummbz</ion-title>\r\n    <ion-buttons slot=\"end\" style=\"position: relative;\" [routerLink]=\"['/cart']\"  >\r\n      <ion-icon  name=\"cart\" size=\"large\"  slot=\"icon-only\" ></ion-icon>\r\n      <ion-badge color=\"danger\" *ngIf=\"carts\">{{carts}}</ion-badge>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n   <ion-searchbar placeholder=\"Search by recipe\" [(ngModel)]=\"listFilter\" animated></ion-searchbar>\r\n\r\n  <br>\r\n\r\n  <ion-list *ngFor=\"let food of filteredFoods\">\r\n    <app-recipe-item [food]=\"food\"></app-recipe-item>\r\n  </ion-list>\r\n  \r\n  <h3 *ngIf=\"this.counter===0\" class=\"ion-text-center\">{{\"Not Found '\"+listFilter+\"'\"}}</h3>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_search_recipe_recipe_module_ts.js.map