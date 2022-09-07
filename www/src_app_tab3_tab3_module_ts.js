"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 350:
/*!********************************************!*\
  !*** ./src/app/services/perfil.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilService": () => (/* binding */ PerfilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let PerfilService = class PerfilService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:5000/usuarios';
    }
    login(usuario, contrasena) {
        return this.http.get(this.apiUrl, {
            params: {
                usuario: usuario,
                contrasena: contrasena,
            }
        });
    }
};
PerfilService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
PerfilService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PerfilService);



/***/ }),

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    },
    {
        path: 'perfil',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab3_perfil_perfil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./perfil/perfil.module */ 7382)).then(m => m.PerfilPageModule)
    },
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page],
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_perfil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/perfil.service */ 350);






let Tab3Page = class Tab3Page {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.login = {
            usuario: '',
            contrasena: '',
        };
        this.usuario = {};
    }
    autenticarse() {
        this.service.login(this.login.usuario, this.login.contrasena).subscribe(data => {
            this.usuario = data;
            if (Object.entries(this.usuario).length === 1) {
                this.router.navigate(['/tabs/tab3/perfil']);
            }
            else {
                console.log('no encontrado');
            }
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_perfil_service__WEBPACK_IMPORTED_MODULE_2__.PerfilService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".login {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n}\n\n.form-container {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  width: 300px;\n}\n\n.logo {\n  width: 150px;\n  margin-bottom: 48px;\n  justify-self: center;\n  display: block;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n.label {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n\n.input {\n  background-color: var(--ion-color-background-input-login);\n  border: none;\n  border-radius: 8px;\n  height: 32px;\n  font-size: 16px;\n  padding: 6px;\n  margin-bottom: 12px;\n}\n\n.input-contrasena {\n  margin-bottom: 22px;\n}\n\n.login-button {\n  background-color: var(--ion-color-background-login);\n  border-radius: 8px;\n  border: none;\n  color: var(--ion-color-mycolor-contrast);\n  width: 100%;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: bold;\n  height: 50px;\n  margin-top: 14px;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UseURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhBO0VBQ0UsbUJBQUE7QUFNRjs7QUFIQTtFQUNFLG1EQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTUYiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuXHJcbn1cclxuLmxvZ297XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5sYWJlbHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbi5pbnB1dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtaW5wdXQtbG9naW4pO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uaW5wdXQtY29udHJhc2VuYXtcclxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG5cclxufVxyXG4ubG9naW4tYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1pb24tY29sb3ItYmFja2dyb3VuZC1sb2dpbik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3ItY29udHJhc3QpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA2NDBweCl7XHJcbiAgLy8gLmxvZ297XHJcbiAgLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vIH1cclxuICAvLyAubG9naW4tYnV0dG9ue1xyXG4gIC8vICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgICBib3R0b206IDIwcHg7XHJcbiAgLy8gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"login\">\r\n    <div class=\"form-container\">\r\n      <img src=\"../../assets/icon/Identidad-a-color.png\" alt=\"\" class=\"logo\">\r\n      <form (ngSubmit)=\"autenticarse()\"  class=\"form\" #myForm=\"ngForm\">\r\n        <ion-item lines=\"none\">\r\n          <ion-label class=\"label\">\r\n            Usuario\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-input type=\"text\" placeholder=\"Introduzca su usuario\" class=\"input input-usuario\" name=\"usuario\" required #usuarioinput=\"ngModel\" [(ngModel)]=\"login.usuario\"></ion-input>\r\n        <ion-item lines=\"none\">\r\n          <ion-label class=\"label\">\r\n            Contaseña\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-input type=\"password\" placeholder=\"*********\" class=\"input input-contrasena\" name=\"contrasena\" required #contrasenainput=\"ngModel\" [(ngModel)]=\"login.contrasena\"></ion-input>\r\n        <ion-button [disabled]=\"myForm.invalid\" type=\"submit\"  class=\"login-button\" >Entrar</ion-button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map