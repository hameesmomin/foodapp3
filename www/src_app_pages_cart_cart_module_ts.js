(self["webpackChunkfoodieapp"] = self["webpackChunkfoodieapp"] || []).push([["src_app_pages_cart_cart_module_ts"],{

/***/ 2926:
/*!**************************************************!*\
  !*** ./src/app/cart-item/cart-item.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItemComponent": () => (/* binding */ CartItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cart_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart-item.component.html */ 2382);
/* harmony import */ var _cart_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-item.component.scss */ 82);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let CartItemComponent = class CartItemComponent {
    constructor() {
        this.increase = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.decrease = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
};
CartItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    increase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    decrease: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
CartItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-cart-item',
        template: _raw_loader_cart_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cart_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CartItemComponent);



/***/ }),

/***/ 485:
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": () => (/* binding */ CartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 3278);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 313:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": () => (/* binding */ CartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-routing.module */ 485);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page */ 3278);
/* harmony import */ var src_app_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cart-item/cart-item.component */ 2926);








let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_1__.CartPage, src_app_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_2__.CartItemComponent]
    })
], CartPageModule);



/***/ }),

/***/ 3278:
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart.page.html */ 3516);
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss */ 8365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);






let CartPage = class CartPage {
    constructor(cartService, alertCtrl) {
        this.cartService = cartService;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
        this.cartItems = this.cartService.receiver;
    }
    onIncrease(item) {
        this.cartService.changeQuantity(1, item.id);
    }
    onDecrease(item) {
        if (item.quantity === 1) {
            this.removeFromCart(item);
        }
        else {
            this.cartService.changeQuantity(-1, item.id);
        }
    }
    removeFromCart(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Remove',
                message: 'Are you sure you want to remove?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.cartService.removeItem(item.id);
                        },
                    },
                    {
                        text: 'No',
                    },
                ],
            });
            alert.present();
        });
    }
};
CartPage.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CartPage);



/***/ }),

/***/ 82:
/*!****************************************************!*\
  !*** ./src/app/cart-item/cart-item.component.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".cart-item {\n  background: #f3f3f3;\n  padding: 1.5rem 1rem;\n  border-radius: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  width: 95%;\n  margin-left: 5%;\n  position: relative;\n}\n\n.cart-item .image {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  margin-right: 1.2rem;\n  position: absolute;\n  left: -5%;\n  top: 40%;\n  transform: translateY(-50%);\n  box-shadow: 10px 10px 10px 0px #c5c5c5;\n}\n\n.cart-item .description {\n  flex: 1;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.cart-item .description h3,\n.cart-item .description h4,\n.cart-item .description p,\n.cart-item .description .actions {\n  margin-left: 32%;\n}\n\n.cart-item .description h3 {\n  font-weight: 600;\n  color: #1f1f1f;\n}\n\n.cart-item .description h4 {\n  margin-top: 1%;\n  font-weight: 600;\n  color: #1f1f1f;\n}\n\n.cart-item .description p {\n  margin-top: 0%;\n  font-size: 1rem;\n  padding-right: 13%;\n}\n\n.cart-item .description .actions {\n  display: flex;\n  flex-flow: row wrap;\n}\n\n.cart-item .description .actions ion-button {\n  --background: #fff;\n  --box-shadow: 0px 2px 10px grey;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  height: 35px;\n  width: 35px;\n}\n\n.cart-item .description .actions .counter {\n  width: 35px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #6b45bc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBVEE7RUFXSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUUxQzs7QUFyQkE7RUF1QkksT0FBTztFQUNQLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUVsQzs7QUE3QkE7Ozs7RUFnQ00sZ0JBQWdCO0FBSXRCOztBQXBDQTtFQW1DTSxnQkFBZ0I7RUFDaEIsY0FBYztBQUtwQjs7QUF6Q0E7RUF1Q00sY0FBYztFQUNkLGdCQUFnQjtFQUVoQixjQUFjO0FBS3BCOztBQS9DQTtFQTZDTSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQU14Qjs7QUFyREE7RUFrRE0sYUFBYTtFQUNiLG1CQUFtQjtBQU96Qjs7QUExREE7RUFzRFEsa0JBQWE7RUFDYiwrQkFBYTtFQUNiLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLGdCQUFjO0VBQ2QsbUJBQWlCO0VBRWpCLFlBQVk7RUFDWixXQUFXO0FBT25COztBQXJFQTtFQWlFUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQVF0QiIsImZpbGUiOiJjYXJ0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC1pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTUlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAwcHggI2M1YzVjNTtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaDMsXHJcbiAgICBoNCxcclxuICAgIHAsXHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMiU7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjMWYxZjFmO1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgIGNvbG9yOiAjMWYxZjFmO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEzJTtcclxuICAgIH1cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuXHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IDBweCAycHggMTBweCBncmV5O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb3VudGVyIHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICM2YjQ1YmM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 8365:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-end: 1.6rem;\n}\n\nion-content .title {\n  font-weight: 700;\n  color: #1f1f1f;\n  margin-bottom: 2rem;\n  padding-left: 1.6rem;\n}\n\nion-content app-cart-item {\n  display: block;\n  width: 100%;\n  padding-left: 1.6rem;\n}\n\nion-content ion-item-sliding {\n  margin-bottom: 2rem;\n  overflow: hidden;\n}\n\nion-content ion-item-sliding ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  border-radius: 25px;\n}\n\nion-content ion-item-sliding ion-item-options {\n  border: 2px solid #f3f3f3;\n  border-radius: 25px;\n  overflow: hidden;\n  background: #fff;\n}\n\nion-content ion-item-sliding ion-item-options ion-item-option {\n  background: #fff;\n}\n\nion-content .empty-cart {\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #c7c7c7;\n}\n\nion-content .empty-cart ion-icon {\n  font-size: 8rem;\n}\n\nion-content .empty-cart p {\n  font-size: 1.8rem;\n}\n\nion-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  --ion-background-color:white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUJBQWM7QUFBbEI7O0FBRkE7RUFLTSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDMUI7O0FBVEE7RUFZTSxjQUFjO0VBQ2QsV0FBVztFQUNYLG9CQUFvQjtBQUMxQjs7QUFmQTtFQWtCTSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ3RCOztBQXBCQTtFQXNCUSxrQkFBZ0I7RUFDaEIsc0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUUzQjs7QUExQkE7RUE0QlEseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBRXhCOztBQWpDQTtFQWtDVSxnQkFBZ0I7QUFHMUI7O0FBckNBO0VBd0NNLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNwQjs7QUE5Q0E7RUFnRFEsZUFBZTtBQUV2Qjs7QUFsREE7RUFvRFEsaUJBQWlCO0FBRXpCOztBQUVBO0VBQ0ksZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBRVgsNEJBQXVCO0FBQTNCIiwiZmlsZSI6ImNhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogMS42cmVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMS42cmVtO1xyXG4gIFxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMxZjFmMWY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMS42cmVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYXBwLWNhcnQtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxLjZyZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbS1zbGlkaW5nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLWl0ZW0tb3B0aW9ucyB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YzZjNmMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBcclxuICAgICAgICBpb24taXRlbS1vcHRpb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5lbXB0eS1jYXJ0IHtcclxuICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2M3YzdjNztcclxuICBcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ 2382:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-item/cart-item.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"cart-item\">\r\n  <div class=\"image\">\r\n    <ion-img [src]=\"item.image\"></ion-img>\r\n  </div>\r\n\r\n  <div class=\"description\">\r\n    <h3>{{ item.name }}</h3>\r\n    <h4 style=\"color:orange\">{{item.weight}}</h4>\r\n    \r\n\r\n  <div class=\"actions\">\r\n    \r\n    <ion-buttons>\r\n      <ion-button (click)=\"decrease.emit()\">\r\n        <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon></ion-button>\r\n      </ion-buttons>\r\n    <div class=\"counter\">{{ item.quantity }}</div>\r\n      <ion-buttons>\r\n        <ion-button (click)=\"increase.emit()\">\r\n          <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n\r\n    \r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 3516:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"menu/home\"> </ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title class=\"title\" *ngIf=\"cartItems.length\"\r\n    >{{cartItems.length}} towards at cart</ion-title\r\n  >\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <br />\r\n\r\n  <!-- CART ITEMS -->\r\n  <ion-list lines=\"none\">\r\n    <ion-item-sliding *ngFor=\"let item of cartItems\">\r\n      <ion-item>\r\n        <app-cart-item\r\n          [item]=\"item\"\r\n          (increase)=\"onIncrease(item)\"\r\n          (decrease)=\"onDecrease(item)\"\r\n        ></app-cart-item>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option (click)=\"removeFromCart(item)\">\r\n          <ion-icon name=\"trash-outline\" size=\"large\" color=\"danger\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <!-- EMPTY CART -->\r\n  <div class=\"empty-cart\" *ngIf=\"!cartItems.length\">\r\n    <ion-icon name=\"cart-outline\"></ion-icon>\r\n    <p>Your cart is empty</p>\r\n  </div>\r\n\r\n\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n\r\n\r\n\r\n<ion-footer *ngIf=\"cartItems.length\">\r\n\r\n \r\n  <ion-toolbar >\r\n\r\n    <ion-button\r\n      expand=\"full\"\r\n      color=\"danger\"\r\n      style=\"margin: 3%;\"\r\n      [routerLink]=\"['/recipe-find']\"\r\n    >\r\n  Find Recipe\r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_cart_module_ts.js.map