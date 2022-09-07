"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_telefonos_telefonos_module_ts"],{

/***/ 6099:
/*!*******************************************************!*\
  !*** ./src/app/telefonos/telefonos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelefonosPageRoutingModule": () => (/* binding */ TelefonosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _telefonos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telefonos.page */ 1230);




const routes = [
    {
        path: '',
        component: _telefonos_page__WEBPACK_IMPORTED_MODULE_0__.TelefonosPage
    }
];
let TelefonosPageRoutingModule = class TelefonosPageRoutingModule {
};
TelefonosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TelefonosPageRoutingModule);



/***/ }),

/***/ 8749:
/*!***********************************************!*\
  !*** ./src/app/telefonos/telefonos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelefonosPageModule": () => (/* binding */ TelefonosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _telefonos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telefonos-routing.module */ 6099);
/* harmony import */ var _telefonos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telefonos.page */ 1230);







let TelefonosPageModule = class TelefonosPageModule {
};
TelefonosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _telefonos_routing_module__WEBPACK_IMPORTED_MODULE_0__.TelefonosPageRoutingModule
        ],
        declarations: [_telefonos_page__WEBPACK_IMPORTED_MODULE_1__.TelefonosPage]
    })
], TelefonosPageModule);



/***/ }),

/***/ 1230:
/*!*********************************************!*\
  !*** ./src/app/telefonos/telefonos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelefonosPage": () => (/* binding */ TelefonosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _telefonos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telefonos.page.html?ngResource */ 451);
/* harmony import */ var _telefonos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telefonos.page.scss?ngResource */ 1319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TelefonosPage = class TelefonosPage {
    constructor() { }
    ngOnInit() {
    }
};
TelefonosPage.ctorParameters = () => [];
TelefonosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-telefonos',
        template: _telefonos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_telefonos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TelefonosPage);



/***/ }),

/***/ 1319:
/*!**********************************************************!*\
  !*** ./src/app/telefonos/telefonos.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWxlZm9ub3MucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 451:
/*!**********************************************************!*\
  !*** ./src/app/telefonos/telefonos.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>telefonos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_telefonos_telefonos_module_ts.js.map