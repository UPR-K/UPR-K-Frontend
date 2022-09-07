"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_notas_notas_module_ts"],{

/***/ 2253:
/*!***********************************************!*\
  !*** ./src/app/notas/notas-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotasPageRoutingModule": () => (/* binding */ NotasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _notas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notas.page */ 3082);




const routes = [
    {
        path: '',
        component: _notas_page__WEBPACK_IMPORTED_MODULE_0__.NotasPage
    }
];
let NotasPageRoutingModule = class NotasPageRoutingModule {
};
NotasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotasPageRoutingModule);



/***/ }),

/***/ 3618:
/*!***************************************!*\
  !*** ./src/app/notas/notas.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotasPageModule": () => (/* binding */ NotasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notas-routing.module */ 2253);
/* harmony import */ var _notas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notas.page */ 3082);







let NotasPageModule = class NotasPageModule {
};
NotasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notas_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotasPageRoutingModule
        ],
        declarations: [_notas_page__WEBPACK_IMPORTED_MODULE_1__.NotasPage]
    })
], NotasPageModule);



/***/ }),

/***/ 3082:
/*!*************************************!*\
  !*** ./src/app/notas/notas.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotasPage": () => (/* binding */ NotasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notas.page.html?ngResource */ 9174);
/* harmony import */ var _notas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notas.page.scss?ngResource */ 2049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NotasPage = class NotasPage {
    constructor() { }
    ngOnInit() {
    }
};
NotasPage.ctorParameters = () => [];
NotasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notas',
        template: _notas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotasPage);



/***/ }),

/***/ 2049:
/*!**************************************************!*\
  !*** ./src/app/notas/notas.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rhcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9174:
/*!**************************************************!*\
  !*** ./src/app/notas/notas.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <app-maintenance></app-maintenance>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_notas_notas_module_ts.js.map