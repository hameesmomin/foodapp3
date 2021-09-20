(self["webpackChunkfoodieapp"] = self["webpackChunkfoodieapp"] || []).push([["src_app_pages_search_ingredient_ingredient_module_ts"],{

/***/ 6559:
/*!**************************************************************!*\
  !*** ./src/app/ingredient-item/ingredient-item.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientItemComponent": () => (/* binding */ IngredientItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ingredient_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ingredient-item.component.html */ 2349);
/* harmony import */ var _ingredient_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredient-item.component.scss */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let IngredientItemComponent = class IngredientItemComponent {
    constructor() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
};
IngredientItemComponent.ctorParameters = () => [];
IngredientItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    clicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
IngredientItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-ingredient-item',
        template: _raw_loader_ingredient_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ingredient_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IngredientItemComponent);



/***/ }),

/***/ 631:
/*!**********************************************************************!*\
  !*** ./src/app/pages/search/ingredient/ingredient-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientPageRoutingModule": () => (/* binding */ IngredientPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ingredient_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredient.page */ 1685);




const routes = [
    {
        path: '',
        component: _ingredient_page__WEBPACK_IMPORTED_MODULE_0__.IngredientPage
    }
];
let IngredientPageRoutingModule = class IngredientPageRoutingModule {
};
IngredientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IngredientPageRoutingModule);



/***/ }),

/***/ 7668:
/*!**************************************************************!*\
  !*** ./src/app/pages/search/ingredient/ingredient.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientPageModule": () => (/* binding */ IngredientPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ingredient_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredient-routing.module */ 631);
/* harmony import */ var _ingredient_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredient.page */ 1685);
/* harmony import */ var src_app_ingredient_item_ingredient_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ingredient-item/ingredient-item.component */ 6559);








let IngredientPageModule = class IngredientPageModule {
};
IngredientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ingredient_routing_module__WEBPACK_IMPORTED_MODULE_0__.IngredientPageRoutingModule
        ],
        declarations: [_ingredient_page__WEBPACK_IMPORTED_MODULE_1__.IngredientPage, src_app_ingredient_item_ingredient_item_component__WEBPACK_IMPORTED_MODULE_2__.IngredientItemComponent]
    })
], IngredientPageModule);



/***/ }),

/***/ 1685:
/*!************************************************************!*\
  !*** ./src/app/pages/search/ingredient/ingredient.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientPage": () => (/* binding */ IngredientPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ingredient_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ingredient.page.html */ 8148);
/* harmony import */ var _ingredient_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredient.page.scss */ 8729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var src_app_services_ingredient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ingredient.service */ 5975);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let IngredientPage = class IngredientPage {
    constructor(ingredientService, cartService, toastCtrl) {
        this.ingredientService = ingredientService;
        this.cartService = cartService;
        this.toastCtrl = toastCtrl;
        this.errorMessage = '';
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredIngredients = this.listFilter ? this.performFilter(this.listFilter) : this.ingredients;
        this.counter = this.filteredIngredients.length;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.ingredients.filter((food) => food.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
        // for food ingredients return function
        //  return this.foods.filter(a=>a.ingredients.some
        //   (t=>t.name.toLocaleLowerCase().indexOf(filterBy)!==-1));
    }
    ngOnInit() {
        this.sub = this.ingredientService.getIngredients().subscribe({
            next: ingredients => {
                this.ingredients = ingredients;
                this.filteredIngredients = ingredients;
            },
            error: err => this.errorMessage = err
        });
    }
    addToCart(ingredient) {
        this.check = this.cartService.checkIngredient(ingredient.name);
        if (!this.check) {
            const cartitem = {
                id: this.cartService.newId,
                name: ingredient.name,
                weight: ingredient.weight,
                image: ingredient.imageUrl,
                quantity: 1,
            };
            this.cartService.addToCart(cartitem);
        }
        this.presentToast();
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Ingredient added to the cart',
                mode: 'ios',
                duration: 1000,
                position: 'top',
            });
            toast.present();
        });
    }
    ngDoCheck() {
        this.carts = this.cartService.totalItems();
    }
};
IngredientPage.ctorParameters = () => [
    { type: src_app_services_ingredient_service__WEBPACK_IMPORTED_MODULE_3__.IngredientService },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
IngredientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-ingredient',
        template: _raw_loader_ingredient_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ingredient_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IngredientPage);



/***/ }),

/***/ 5975:
/*!************************************************!*\
  !*** ./src/app/services/ingredient.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientService": () => (/* binding */ IngredientService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5304);





let IngredientService = class IngredientService {
    constructor(http) {
        this.http = http;
        this.ingredientUrl = "/assets/api/ingredient.json";
    }
    getIngredients() {
        return this.http.get(this.ingredientUrl)
            .pipe(
        // tap(data => console.log('All: ', JSON.stringify(data))),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(errorMessage);
    }
};
IngredientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
IngredientService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], IngredientService);



/***/ }),

/***/ 2321:
/*!****************************************************************!*\
  !*** ./src/app/ingredient-item/ingredient-item.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card {\n  width: 100%;\n  padding: 1.6rem 2rem;\n  background: #f3f3f3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border-radius: 2.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.card .card-content {\n  text-align: center;\n}\n\n.card .card-content .title {\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: 0.2rem;\n  color: #1d1d1d;\n}\n\n.card .card-content .subtitle {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #ffb800;\n  margin-top: 0;\n}\n\n.card .card-content ion-buttons {\n  position: absolute;\n  bottom: -1rem;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.card .card-content ion-buttons ion-button {\n  --background:cornflowerblue;\n  font-weight: 700;\n  color: #fff;\n  width: 40px;\n  height: 40px;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3pCOztBQVZBO0VBWU0sa0JBQWtCO0FBRXhCOztBQWRBO0VBZVEsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztBQUd0Qjs7QUFyQkE7RUFzQlEsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtBQUdyQjs7QUE1QkE7RUE2QlEsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkJBQTJCO0FBR25DOztBQW5DQTtFQW1DVSwyQkFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCxnQkFBYztFQUNkLG1CQUFpQjtBQUkzQiIsImZpbGUiOiJpbmdyZWRpZW50LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEuNnJlbSAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBcclxuICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgICAgICAgY29sb3I6ICMxZDFkMWQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZiODAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC0xcmVtO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6Y29ybmZsb3dlcmJsdWU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ 8729:
/*!**************************************************************!*\
  !*** ./src/app/pages/search/ingredient/ingredient.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-start: 2rem;\n  --padding-end: 2rem;\n}\n\nion-content .food-list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n}\n\nion-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWdCO0VBQ2hCLG1CQUFjO0FBQ2xCOztBQUhBO0VBS0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjO0FBRWxCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImluZ3JlZGllbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDJyZW07XHJcbiAgICAtLXBhZGRpbmctZW5kOiAycmVtO1xyXG5cclxuLmZvb2QtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgfVxyXG5cclxufSAgXHJcbmlvbi1iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7ICAgXHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 2349:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ingredient-item/ingredient-item.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"card\">\r\n  <ion-img [src]=\"item.imageUrl\"></ion-img>\r\n  <div class=\"card-content\">\r\n    <h3 class=\"title\">{{item.name}}</h3>\r\n    <h2 class=\"subtitle\">{{item.weight}}</h2>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"clicked.emit()\">\r\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 8148:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/ingredient/ingredient.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Crummbz</ion-title>\r\n    <ion-buttons slot=\"end\" style=\"position: relative;\" [routerLink]=\"['/cart']\"  >\r\n      <ion-icon  name=\"cart\" size=\"large\"  slot=\"icon-only\" ></ion-icon>\r\n      <ion-badge color=\"danger\" *ngIf=\"carts\">{{carts}}</ion-badge>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <br>  \r\n  <ion-searchbar placeholder=\"Search by ingredient\" [(ngModel)]=\"listFilter\" animated></ion-searchbar>\r\n\r\n  <br>\r\n\r\n  <div class=\"food-list\">\r\n    <app-ingredient-item *ngFor=\"let ingredient of filteredIngredients\"\r\n     [item]=\"ingredient\"\r\n     (clicked)=\"addToCart(ingredient)\"\r\n     ></app-ingredient-item>\r\n  </div>\r\n  \r\n  <h3 *ngIf=\"this.counter===0\" class=\"ion-text-center\">{{\"Not Found '\"+listFilter+\"'\"}}</h3>\r\n\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_search_ingredient_ingredient_module_ts.js.map