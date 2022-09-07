"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_perfil_perfil_module_ts"],{

/***/ 4334:
/*!******************************************************!*\
  !*** ./src/app/tab3/perfil/perfil-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 7502);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 7382:
/*!**********************************************!*\
  !*** ./src/app/tab3/perfil/perfil.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 4334);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 7502);







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage]
    })
], PerfilPageModule);



/***/ }),

/***/ 7502:
/*!********************************************!*\
  !*** ./src/app/tab3/perfil/perfil.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 5048);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 7356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_perfil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/perfil.service */ 350);






let PerfilPage = class PerfilPage {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.usuario = {};
        this.items = ['Mis notas', 'Correo', 'Horario', 'Configuración'];
    }
    ngOnInit() {
    }
    /**
     * navega hacia la pagina de notas
     */
    buttonClick() {
        this.router.navigate(['/notas']);
    }
};
PerfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_perfil_service__WEBPACK_IMPORTED_MODULE_2__.PerfilService }
];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-perfil',
        template: _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilPage);



/***/ }),

/***/ 7356:
/*!*********************************************************!*\
  !*** ./src/app/tab3/perfil/perfil.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.seccion-perfil-usuario .perfil-usuario-header {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background: linear-gradient(var(--ion-color-deep), transparent);\n  margin-bottom: 1.25rem;\n}\n.seccion-perfil-usuario .perfil-usuario-portada {\n  display: block;\n  position: relative;\n  width: 90%;\n  height: 25rem;\n  background-image: url('Universidad de Pinar del Río_0.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 0 0 20px 20px;\n}\n.seccion-perfil-usuario .perfil-usuario-avatar img {\n  width: 100%;\n  position: relative;\n  border-radius: 50%;\n}\n.seccion-perfil-usuario .perfil-usuario-body,\n.seccion-perfil-usuario {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n}\n.seccion-perfil-usuario .perfil-usuario-bio {\n  justify-content: center;\n}\n.seccion-perfil-usuario .perfil-usuario-body {\n  width: 70%;\n  position: relative;\n  max-width: 750px;\n}\n.seccion-perfil-usuario .perfil-usuario-body .titulo {\n  display: block;\n  width: 100%;\n  font-size: 1.75em;\n  margin-bottom: 0.5rem;\n}\n.seccion-perfil-usuario .perfil-usuario-body .correo {\n  color: var(--ion-color-color);\n  font-size: 0.95em;\n}\n.seccion-perfil-usuario .perfil-usuario-footer,\n.seccion-perfil-usuario .perfil-usuario-bio {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1.5rem 2rem;\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);\n  background-color: #fff;\n  border-radius: 15px;\n  width: 100%;\n}\n.seccion-perfil-usuario .perfil-usuario-bio {\n  margin-bottom: 1.25rem;\n  text-align: center;\n}\n.seccion-perfil-usuario .lista {\n  width: 50%;\n  position: relative;\n}\n.seccion-perfil-usuario .lista ion-list {\n  padding: 5px 0;\n}\n.seccion-perfil-usuario .icono {\n  position: absolute;\n  right: 10px;\n}\n.seccion-perfil-usuario .button {\n  border-radius: 10px;\n}\n@media (max-width: 750px) {\n  .seccion-perfil-usuario .lista {\n    width: 100%;\n  }\n\n  .seccion-perfil-usuario .perfil-usuario-portada,\n.seccion-perfil-usuario .perfil-usuario-body {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUVGO0FBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0RBQUE7RUFDQSxzQkFBQTtBQUdGO0FBREE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFJRjtBQWFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFWRjtBQVlBOztFQUdJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVZKO0FBWUE7RUFDRSx1QkFBQTtBQVRGO0FBV0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVJGO0FBV0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFSRjtBQVVBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBQVBGO0FBU0E7O0VBRUUsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFORjtBQVFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUxGO0FBT0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU1BO0VBQ0UsY0FBQTtBQUhGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFGRjtBQUlBO0VBQ0UsbUJBQUE7QUFERjtBQUtBO0VBQ0U7SUFDSSxXQUFBO0VBRko7O0VBS0E7O0lBRUksVUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoicGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uc2VjY2lvbi1wZXJmaWwtdXN1YXJpbyAucGVyZmlsLXVzdWFyaW8taGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0taW9uLWNvbG9yLWRlZXApLCB0cmFuc3BhcmVudCk7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4uc2VjY2lvbi1wZXJmaWwtdXN1YXJpbyAucGVyZmlsLXVzdWFyaW8tcG9ydGFkYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMjVyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb24vVW5pdmVyc2lkYWRcXCBkZVxcIFBpbmFyXFwgZGVsXFwgUsOtb18wLnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XG59XG4vLyAuc2VjY2lvbi1wZXJmaWwtdXN1YXJpbyAucGVyZmlsLXVzdWFyaW8tYXZhdGFyIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgd2lkdGg6IDEyMHB4O1xuLy8gICBoZWlnaHQ6IDEyMHB4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgYm9yZGVyOiA3cHggc29saWQgdmFyKC0taW9uLWNvbG9yLW15Y29sb3ItY29udHJhc3QpO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvci1iYWNrZ3JvdW5kKTtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICBib3gtc2hhZG93OiAwIDAgMTJweCByZ2JhKDAsIDAsIDAsIC4yKTtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBib3R0b206IC00MHB4O1xuLy8gICBsZWZ0OiBjYWxjKDUwJSAtIDkwcHgpO1xuLy8gICB6LWluZGV4OiAxO1xuLy8gfVxuLnNlY2Npb24tcGVyZmlsLXVzdWFyaW8gLnBlcmZpbC11c3VhcmlvLWF2YXRhciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc2VjY2lvbi1wZXJmaWwtdXN1YXJpbyAucGVyZmlsLXVzdWFyaW8tYm9keSxcbi5zZWNjaW9uLXBlcmZpbC11c3VhcmlvIHtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWNjaW9uLXBlcmZpbC11c3VhcmlvIC5wZXJmaWwtdXN1YXJpby1iaW97XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlY2Npb24tcGVyZmlsLXVzdWFyaW8gLnBlcmZpbC11c3VhcmlvLWJvZHl7XG4gIHdpZHRoOiA3MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbn1cblxuLnNlY2Npb24tcGVyZmlsLXVzdWFyaW8gLnBlcmZpbC11c3VhcmlvLWJvZHkgLnRpdHVsbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjc1ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5zZWNjaW9uLXBlcmZpbC11c3VhcmlvIC5wZXJmaWwtdXN1YXJpby1ib2R5IC5jb3JyZW8ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59XG4uc2VjY2lvbi1wZXJmaWwtdXN1YXJpbyAucGVyZmlsLXVzdWFyaW8tZm9vdGVyLFxuLnNlY2Npb24tcGVyZmlsLXVzdWFyaW8gLnBlcmZpbC11c3VhcmlvLWJpbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWNjaW9uLXBlcmZpbC11c3VhcmlvIC5wZXJmaWwtdXN1YXJpby1iaW8ge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VjY2lvbi1wZXJmaWwtdXN1YXJpbyAubGlzdGF7XG4gIHdpZHRoOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWNjaW9uLXBlcmZpbC11c3VhcmlvIC5saXN0YSBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLnNlY2Npb24tcGVyZmlsLXVzdWFyaW8gLmljb25ve1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xufVxuLnNlY2Npb24tcGVyZmlsLXVzdWFyaW8gLmJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLnNlY2Npb24tcGVyZmlsLXVzdWFyaW8gLmxpc3RhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNlY2Npb24tcGVyZmlsLXVzdWFyaW8gLnBlcmZpbC11c3VhcmlvLXBvcnRhZGEsXG4gIC5zZWNjaW9uLXBlcmZpbC11c3VhcmlvIC5wZXJmaWwtdXN1YXJpby1ib2R5IHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gIH1cblxufVxuXG5cblxuIl19 */";

/***/ }),

/***/ 5048:
/*!*********************************************************!*\
  !*** ./src/app/tab3/perfil/perfil.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-content scroll-y=\"true\">\n  <div class=\"seccion-perfil-usuario\">\n    <ion-header [translucent]=\"true\" class=\"perfil-usuario-header\">\n      <div  class=\"perfil-usuario-portada\">\n        <!-- <div class=\"perfil-usuario-avatar\">\n          <img src=\"../../../assets/icon/favicon.png\" />\n        </div> -->\n        </div>\n      </ion-header>\n\n      <div class=\"perfil-usuario-body\">\n        <div class=\"perfil-usuario-bio\">\n          <ion-list>\n            <ion-item lines=\"none\">\n              <ion-label class=\"titulo\">\n                Laura Elena Mesa\n              </ion-label>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label class=\"correo\">\n                lemesa17@nauta.com.cu\n              </ion-label>\n            </ion-item>\n           </ion-list>\n        </div>\n        <div class=\"perfil-usuario-footer\">\n          <ion-list class=\"lista\" *ngFor=\"let item of items\">\n            <ion-item button (click)=\"buttonClick()\" lines=\"none\" class=\"button\">\n              <ion-label>\n                {{item}}\n                <ion-icon name=\"chevron-forward-outline\" class=\"icono\"></ion-icon>\n              </ion-label>\n            </ion-item>\n\n          </ion-list>\n        </div>\n      </div>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_perfil_perfil_module_ts.js.map