"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 6535:
/*!*********************************************!*\
  !*** ./src/app/tab1/menu/menu.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 2584);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss?ngResource */ 6464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MenuComponent = class MenuComponent {
    constructor() {
        this.lista = [
            {
                name: "Historia",
                icon: "refresh-circle-outline",
                direccion: "/telefonos"
            },
            {
                name: "Sitial de honor",
                icon: "git-branch-outline",
                direccion: "/telefonos"
            },
            {
                name: "Correo",
                icon: "newspaper-outline",
                direccion: "/telefonos"
            },
            {
                name: "Evento",
                icon: "receipt-outline",
                direccion: "/telefonos"
            },
            {
                name: "Telefonos",
                icon: "call-outline",
                direccion: "/telefonos"
            },
            {
                name: "Directorio",
                icon: "person-outline",
                direccion: "directorio"
            },
            {
                name: "Aula Virtual",
                icon: "library-outline",
                direccion: "/telefonos"
            },
            {
                name: "Wikipedia",
                icon: "receipt-outline",
                direccion: "/telefonos"
            },
            {
                name: "Noticias",
                icon: "newspaper-outline",
                direccion: "/telefonos"
            }
        ];
    }
    ngOnInit() { }
};
MenuComponent.ctorParameters = () => [];
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-menu',
        template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuComponent);



/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    },
    {
        path: 'directorio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab1_directorio_directorio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./directorio/directorio.module */ 349)).then(m => m.DirectorioPageModule)
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ 6535);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab1PageRoutingModule,
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page, _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let Tab1Page = class Tab1Page {
    constructor(menuCrtl, router) {
        this.menuCrtl = menuCrtl;
        this.router = router;
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 6464:
/*!**********************************************************!*\
  !*** ./src/app/tab1/menu/menu.component.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: lato;\n}\n\n.header-menu {\n  height: 180px;\n  width: 450px;\n  background-color: var(--ion-color-mycolor);\n  background-color: linear-gradient(90deg, --ion-color-primary);\n  box-shadow: 0px 1px 10px #04080c80;\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content-menu {\n  position: absolute;\n  top: 30px;\n  left: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content-menu img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 7px var(--ion-color-mycolor);\n  margin-right: 14px;\n}\n\n.header-content-menu h2 {\n  font-weight: 300;\n  color: #fff;\n}\n\n.header-content-menu p {\n  font-size: 12px;\n  color: #fff;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.spread {\n  transform: translate(50);\n}\n\n.hamburge {\n  top: 20px;\n  right: 20px;\n  background: #fff;\n  width: 30px;\n  height: 30px;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLDZEQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQVI7O0FBR0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFEUjs7QUFLQTtFQUNJLHdCQUFBO0FBRko7O0FBS0E7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtBQUhKIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogbGF0bztcbn1cblxuLmhlYWRlci1tZW51IHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggIzA0MDgwYzgwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLmhlYWRlci1jb250ZW50LW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogN3B4IHZhcigtLWlvbi1jb2xvci1teWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICB9XG59XG5cbi5zcHJlYWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwKTtcbn1cblxuLmhhbWJ1cmdlIHtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYigwLCAwLCAwLCAuNSk7XG59Il19 */";

/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2584:
/*!**********************************************************!*\
  !*** ./src/app/tab1/menu/menu.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\" mode=\"ios\">\n    <div class=\"header-menu\"></div>\n    <div class=\"header-content-menu\">\n      <img src=\"../../assets/fotos/logo.png\" alt=\"\">\n      <ion-label>\n        <h2>Servicios Universitarios</h2>\n        <p>Lorem ipsumi</p>\n      </ion-label>\n    </div>\n    <ion-content>\n      <ion-list lines=\"none\">\n        <ng-container *ngFor=\"let item of lista\">\n          <ion-item [routerLink]=\"[ item.direccion]\">\n            <ion-avatar slot=\"start\">\n              <ion-icon name=\"{{item.icon}}\" color=\"primary\" item-start> </ion-icon>\n            </ion-avatar>\n            {{item.name }}\n          </ion-item>\n\n        </ng-container>\n\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <div class=\"ion-page\" id=\"main\">\n\n    <ion-toolbar>\n      <ion-buttons slot=\"start\" color=\"mycolor\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>UPR-k</ion-title>\n    </ion-toolbar>\n\n  </div>\n</ion-content>";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\n    <app-menu></app-menu>\n    \n</ion-header>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map