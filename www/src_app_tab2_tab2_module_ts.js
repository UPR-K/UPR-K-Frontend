"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 5371:
/*!************************************************************!*\
  !*** ./src/app/share/maintenance/maintenance.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceComponent": () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _maintenance_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance.component.html?ngResource */ 8375);
/* harmony import */ var _maintenance_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance.component.scss?ngResource */ 5279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MaintenanceComponent = class MaintenanceComponent {
    constructor() { }
    ngOnInit() {
    }
};
MaintenanceComponent.ctorParameters = () => [];
MaintenanceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-maintenance',
        template: _maintenance_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_maintenance_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MaintenanceComponent);



/***/ }),

/***/ 7841:
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModule": () => (/* binding */ ShareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance/maintenance.component */ 5371);




let ShareModule = class ShareModule {
};
ShareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_0__.MaintenanceComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [
            _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_0__.MaintenanceComponent,
        ]
    })
], ShareModule);



/***/ }),

/***/ 9901:
/*!************************************************************!*\
  !*** ./src/app/tab2/components/events/events.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsComponent": () => (/* binding */ EventsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _events_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.component.html?ngResource */ 4790);
/* harmony import */ var _events_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.component.scss?ngResource */ 4833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let EventsComponent = class EventsComponent {
    constructor() { }
    ngOnInit() { }
};
EventsComponent.ctorParameters = () => [];
EventsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-events',
        template: _events_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_events_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventsComponent);



/***/ }),

/***/ 7063:
/*!************************************************************!*\
  !*** ./src/app/tab2/components/header/header.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 5077);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 5582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let HeaderComponent = class HeaderComponent {
    constructor(navcContr) {
        this.navcContr = navcContr;
        this.selectedsegment = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.lateralbar = [
            { name: 'Noticias' },
            {
                name: 'Eventos',
            },
            { name: 'Investigaciones' },
        ];
        this.title = this.lateralbar[0].name;
        this.page = 0;
    }
    ngOnInit() { }
    /**
     * sirve para cambiar de vista en el ionsegment
     *  ,el valor de el evento se guarda en la variable
     * selectedCategory
     * @param e evento
     */
    segmentChange(e) {
        this.title = e.detail.value;
        this.selectedsegment.emit(this.title);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
HeaderComponent.propDecorators = {
    selectedsegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 7263:
/*!****************************************************************************!*\
  !*** ./src/app/tab2/components/investigations/investigations.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestigationsComponent": () => (/* binding */ InvestigationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _investigations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investigations.component.html?ngResource */ 6081);
/* harmony import */ var _investigations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investigations.component.scss?ngResource */ 4901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let InvestigationsComponent = class InvestigationsComponent {
    constructor() { }
    ngOnInit() { }
};
InvestigationsComponent.ctorParameters = () => [];
InvestigationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-investigations',
        template: _investigations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_investigations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvestigationsComponent);



/***/ }),

/***/ 2052:
/*!*******************************************************************************!*\
  !*** ./src/app/tab2/components/notice-detail/information-notice.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationNoticeComponent": () => (/* binding */ InformationNoticeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _information_notice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information-notice.component.html?ngResource */ 783);
/* harmony import */ var _information_notice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information-notice.component.scss?ngResource */ 4503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ 6867);







let InformationNoticeComponent = class InformationNoticeComponent {
    constructor(activaterouter, newservise, popoverController, cdr) {
        this.activaterouter = activaterouter;
        this.newservise = newservise;
        this.popoverController = popoverController;
        this.cdr = cdr;
    }
    /**
     * al iniciar la pagina convierte el id que viene por la url en un entero,
     * llama al metodo de obtener la noticia por id
     * y se captura el texto para cuando se vaya a aumentar y disminuir la letra
     */
    ngOnInit() {
        this.id = parseInt(this.activaterouter.snapshot.paramMap.get("id"));
        this.notice = this.newservise.getNoticebyid(this.id);
        this.newservise.textcontent = document.querySelector('.div-text');
    }
};
InformationNoticeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
InformationNoticeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-notice-detail',
        template: _information_notice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_information_notice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InformationNoticeComponent);



/***/ }),

/***/ 484:
/*!************************************************************!*\
  !*** ./src/app/tab2/components/notice/notice.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeComponent": () => (/* binding */ NoticeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice.component.html?ngResource */ 3813);
/* harmony import */ var _notice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice.component.scss?ngResource */ 4965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ 6867);





let NoticeComponent = class NoticeComponent {
    constructor(newservice) {
        this.newservice = newservice;
        this.response = [];
    }
    /**
     * inicia el componente cargando el arreglo de noticias
     * y lo guarda en response para mostrarlo en pantalla
     */
    ngOnInit() {
        if (this.newservice.news = []) {
            this.newservice.getNews(1).subscribe((response) => {
                response.forEach((item) => { this.newservice.news.push(item); });
                this.response = this.newservice.news;
            });
        }
        else {
            this.response = this.newservice.news;
        }
    }
};
NoticeComponent.ctorParameters = () => [
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService }
];
NoticeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notice',
        template: _notice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoticeComponent);



/***/ }),

/***/ 7327:
/*!**************************************************************!*\
  !*** ./src/app/tab2/components/notices/notices.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticesComponent": () => (/* binding */ NoticesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notices_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notices.component.html?ngResource */ 1114);
/* harmony import */ var _notices_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notices.component.scss?ngResource */ 4378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ 6867);





let NoticesComponent = class NoticesComponent {
    constructor(newservice) {
        this.newservice = newservice;
        this.page = 0;
    }
    ngOnInit() {
        this.newservice.news = [];
        this.page = 1;
    }
    /**
     * añade un settimeout de medio segundo ,
     * aumenta la variable page para hacer una peticion hacia
     * la proxima pagina y lo aañade
     * al arreglo de noticias para su visualizacion
     * despues condiciona la desactivacion de infinitiscroll ,
     * si la ultima posicion de el arreglo de noticias esta vacia se desabilita
     *
     * @param event evento de infinitiscroll
     */
    loadData(event) {
        setTimeout(() => {
            event.target.complete();
            this.page++;
            this.newservice.getNews(this.page).subscribe((response) => {
                response.forEach((item) => {
                    this.newservice.news.push(item);
                });
            });
            if (this.newservice.news[this.newservice.news.length - 1] == null) {
                event.target.disabled = true;
            }
        }, 500);
    }
};
NoticesComponent.ctorParameters = () => [
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService }
];
NoticesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notices',
        template: _notices_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
        styles: [_notices_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoticesComponent);



/***/ }),

/***/ 3344:
/*!**************************************************************!*\
  !*** ./src/app/tab2/components/popover/popover.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverComponent": () => (/* binding */ PopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.component.html?ngResource */ 988);
/* harmony import */ var _popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.component.scss?ngResource */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ 6867);





let PopoverComponent = class PopoverComponent {
    constructor(newservice) {
        this.newservice = newservice;
        this.cont = 0;
        this.popoverIsOpen = false;
    }
    /**
     * accede al valor value del evento y si es mayor igual al contador inicializado en cero
     * llama al metodo del servicio que modifica la letra y le pasa true como parametro y aumenta el contador
     * sino le pasa false para disminuir y disminuye el contador
     * @param e evento capturado para poder acceder a las propiedades de este detail.value
     */
    changeFont(e) {
        if (e.detail.value >= this.cont) {
            this.newservice.modificar(true);
            this.cont++;
        }
        else {
            this.newservice.modificar(false);
            this.cont--;
        }
    }
    /**
     * abre el popover
     * @param ev evento del popover
     */
    presentPopover(ev) {
        this.popover.event = ev;
        this.popoverIsOpen = true;
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService }
];
PopoverComponent.propDecorators = {
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['popover',] }]
};
PopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-popover',
        template: _popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PopoverComponent);



/***/ }),

/***/ 6867:
/*!***********************************************!*\
  !*** ./src/app/tab2/services/news.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsService": () => (/* binding */ NewsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let NewsService = class NewsService {
    constructor(http) {
        this.http = http;
        this.news = [];
        this.cont = 0;
    }
    /**
     * dado el numero de la pagina devuelve la respuesta correspondiente a esa pagina
     * @param page numero de pagina
     * @returns la respuesta de diez elementos de esa pagina
     */
    getNews(page = 0) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.noticiasUrl}/wp-json/wp/v2/posts?page=${page}`);
    }
    /**
     * recorre el arreglo de noticias y busca la que
     * tenga el mismo id que se le pasa como parametro
     * @param id id de la noticia a buscar
     * @returns la noticia
     */
    getNoticebyid(id) {
        for (let i = 0; i < this.news.length; i++) {
            if (this.news[i].id === id) {
                console.log(this.news[i]);
                return this.news[i];
            }
        }
    }
    /**
     * comprueba el valor del parametro mod ,en dependencia
     *  del valor aumenta el contador o lo disminuye
     * @param mod parametro booleano si es true se
     * aumenta la letra si es false se disminuye
     * @returns
     */
    modificar(mod) {
        if (mod) {
            if (this.cont === 0) {
                this.removeAddClass('predeterminado', 'max-1');
                this.cont++;
                return;
            }
            if (this.cont === 1) {
                this.removeAddClass('max-1', 'max-2');
                this.cont++;
                return;
            }
            if (this.cont === 2) {
                this.removeAddClass('max-2', 'max-3');
                this.cont++;
                return;
            }
        }
        else {
            if (this.cont === 3) {
                this.removeAddClass('max-3', 'max-2');
                this.cont--;
                return;
            }
            if (this.cont === 2) {
                this.removeAddClass('max-2', 'max-1');
                this.cont--;
                return;
            }
            if (this.cont === 1) {
                this.removeAddClass('max-1', 'predeterminado');
                this.cont--;
                return;
            }
        }
    }
    /**
     * utilizando el textcontent que es el texto el cual se le va a modificar la letra
     * se remueve de su lista de clases el string de partametro y se adiciona a esta el string de parametro
     * @param class_to_remove clase para remover
     * @param class_to_add clase para adicionar
     */
    removeAddClass(class_to_remove, class_to_add) {
        this.textcontent.classList.remove(class_to_remove);
        this.textcontent.classList.add(class_to_add);
    }
};
NewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NewsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], NewsService);



/***/ }),

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/events/events.component */ 9901);
/* harmony import */ var _components_investigations_investigations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/investigations/investigations.component */ 7263);
/* harmony import */ var _components_notice_detail_information_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notice-detail/information-notice.component */ 2052);
/* harmony import */ var _components_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/notice/notice.component */ 484);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab2.page */ 442);








const routes = [
    { path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_4__.Tab2Page, },
    { path: 'detail/:id', component: _components_notice_detail_information_notice_component__WEBPACK_IMPORTED_MODULE_2__.InformationNoticeComponent },
    { path: 'notices', component: _components_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__.NoticeComponent },
    { path: 'events', component: _components_events_events_component__WEBPACK_IMPORTED_MODULE_0__.EventsComponent },
    { path: 'investigations', component: _components_investigations_investigations_component__WEBPACK_IMPORTED_MODULE_1__.InvestigationsComponent },
    { path: '**', redirectTo: "" },
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ 7841);
/* harmony import */ var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/popover/popover.component */ 3344);
/* harmony import */ var _components_notice_notice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/notice/notice.component */ 484);
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/events/events.component */ 9901);
/* harmony import */ var _components_investigations_investigations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/investigations/investigations.component */ 7263);
/* harmony import */ var _components_notice_detail_information_notice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/notice-detail/information-notice.component */ 2052);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ 7063);
/* harmony import */ var _components_notices_notices_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/notices/notices.component */ 7327);















let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab2PageRoutingModule,
        ],
        declarations: [
            _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
            _components_notice_notice_component__WEBPACK_IMPORTED_MODULE_4__.NoticeComponent,
            _components_notice_notice_component__WEBPACK_IMPORTED_MODULE_4__.NoticeComponent,
            _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__.PopoverComponent,
            _components_notice_detail_information_notice_component__WEBPACK_IMPORTED_MODULE_7__.InformationNoticeComponent,
            _components_events_events_component__WEBPACK_IMPORTED_MODULE_5__.EventsComponent,
            _components_investigations_investigations_component__WEBPACK_IMPORTED_MODULE_6__.InvestigationsComponent,
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent,
            _components_notices_notices_component__WEBPACK_IMPORTED_MODULE_9__.NoticesComponent
        ],
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/news.service */ 6867);





let Tab2Page = class Tab2Page {
    constructor(newservice) {
        this.newservice = newservice;
        this.page = 0;
        this.selectedsegment = 'Noticias';
    }
    ngOnInit() {
    }
    ChangeSegment(title) {
        this.selectedsegment = title;
        console.log("title", title);
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 5279:
/*!*************************************************************************!*\
  !*** ./src/app/share/maintenance/maintenance.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".center {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJtYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";

/***/ }),

/***/ 4833:
/*!*************************************************************************!*\
  !*** ./src/app/tab2/components/events/events.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudHMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 5582:
/*!*************************************************************************!*\
  !*** ./src/app/tab2/components/header/header.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar ion-searchbar {\n  width: 98%;\n  position: static;\n  margin-top: 20px;\n  --border-radius: 16px;\n  border: 0rem;\n}\n\n@media only screen and (min-width: 600px) {\n  ion-toolbar ion-searchbar {\n    width: 50%;\n    --border-radius: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNFLGdCQUFBO0VBQ0oscUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBV0E7RUFHUTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtFQVZWO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG5cbiAgICBpb24tc2VhcmNoYmFye1xuICAgICAgd2lkdGg6IDk4JTtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJvcmRlcjogMHJlbTtcbiAgICBcblxuICAgICAgIFxuICAgICAgICBcbiAgICBcbiAgICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIGlvbi10b29sYmFye1xuXG4gICAgICAgIGlvbi1zZWFyY2hiYXJ7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgfSJdfQ== */";

/***/ }),

/***/ 4901:
/*!*****************************************************************************************!*\
  !*** ./src/app/tab2/components/investigations/investigations.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlc3RpZ2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 4503:
/*!********************************************************************************************!*\
  !*** ./src/app/tab2/components/notice-detail/information-notice.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".content {\n  /*  --overflow:hidden; */\n  padding: 10px;\n}\n.content .header-container {\n  width: 100%;\n  height: 250px;\n  background-size: 100%;\n}\n.content .icon {\n  color: white;\n  cursor: pointer;\n}\n.content .card-content {\n  margin: 11px 5px;\n}\n.content .card-content .title {\n  margin: 23px;\n  padding: 0px;\n  font-size: 29px;\n  font-weight: 800;\n  font-weight: 800;\n  line-height: 1.1;\n}\n.content .card-content .predeterminado {\n  font-size: 17px;\n}\n/** clases para hacer mas grande o mas chica la letra**/\n.max-1 {\n  font-size: 20px;\n}\n.max-2 {\n  font-size: 25px;\n}\n.max-3 {\n  font-size: 30px;\n}\nion-content::part(scroll) {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\nion-content::part(scroll)::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLW5vdGljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ1I7QUFNSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBSlI7QUFRSTtFQUVJLGdCQUFBO0FBUFI7QUFTUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBQVJaO0FBWVE7RUFDSSxlQUFBO0FBVlo7QUFrQ0EsdURBQUE7QUFDQTtFQUNJLGVBQUE7QUEvQko7QUFrQ0E7RUFDSSxlQUFBO0FBL0JKO0FBa0NBO0VBQ0ksZUFBQTtBQS9CSjtBQW1DQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFoQ0o7QUFvQ0E7RUFDSSxhQUFBO0FBakNKIiwiZmlsZSI6ImluZm9ybWF0aW9uLW5vdGljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICAvKiAgLS1vdmVyZmxvdzpoaWRkZW47ICovXG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblxuXG5cblxuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICB9XG5cbiAgICAuY2FyZC1jb250ZW50IHtcblxuICAgICAgICBtYXJnaW46IDExcHggNXB4O1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDIzcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI5cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcblxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLnByZWRldGVybWluYWRvIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiogY2xhc2VzIHBhcmEgaGFjZXIgbWFzIGdyYW5kZSBvIG1hcyBjaGljYSBsYSBsZXRyYSoqL1xuLm1heC0xIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYXgtMiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubWF4LTMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLy8gSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94XG5pb24tY29udGVudDo6cGFydChzY3JvbGwpIHtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8vIElFIGFuZCBFZGdlXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvLyBGaXJlZm94XG59XG5cbi8vIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmFcbmlvbi1jb250ZW50OjpwYXJ0KHNjcm9sbCk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";

/***/ }),

/***/ 4965:
/*!*************************************************************************!*\
  !*** ./src/app/tab2/components/notice/notice.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  display: flex;\n  justify-content: space-between;\n  margin: 10px 10px 10px 10px;\n}\nion-grid ion-row ion-col {\n  margin-bottom: 3%;\n  margin-top: 3%;\n}\nion-grid ion-row ion-col ion-card {\n  margin: 3%;\n  min-height: 100px;\n  min-width: 100px;\n  height: 100%;\n}\nion-grid ion-row ion-col ion-note {\n  margin-top: 20%;\n  font-weight: 900;\n}\nion-grid ion-row ion-col ion-button {\n  margin: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLGFBQUE7RUFDUiw4QkFBQTtFQUNBLDJCQUFBO0FBRUY7QUFBTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRFE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFHWjtBQUZ3QjtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUkxQjtBQURnRDtFQUNFLFVBQUE7QUFHbEQiLCJmaWxlIjoibm90aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge2Rpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgbWFyZ2luOiAzJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTt9XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tbm90ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3AgOiAyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICB9XG59XG59Il19 */";

/***/ }),

/***/ 4378:
/*!***************************************************************************!*\
  !*** ./src/app/tab2/components/notices/notices.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpY2VzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6897:
/*!***************************************************************************!*\
  !*** ./src/app/tab2/components/popover/popover.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "ion-tab-button {\n  width: 10px;\n  height: 10px;\n  background-color: #14035f;\n}\nion-tab-button h2 {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  color: #ffffff;\n  padding: 0%;\n  font-weight: 800;\n  margin: 0%;\n}\nion-tab-button h2 span {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  padding: 0%;\n  margin: 0%;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0FBSEo7QUFLSTtFQUNJLHdFQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLFVBQUE7QUFKUjtBQU1RO0VBQ0ksd0VBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLGVBQUE7QUFMWiIsImZpbGUiOiJwb3BvdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tdGFiLWJ1dHRvbiB7XG4gICBcbiBcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDAzNWY7XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDAlO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuXG4gICAgICAgIG1hcmdpbjogMCU7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBwYWRkaW5nOiAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCU7XG5cbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcblxuICAgICAgICB9XG4gICAgfVxuXG5cblxufSJdfQ== */";

/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-searchbar {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nion-content ion-toolbar .titulo {\n  width: 100%;\n}\n\nion-content ion-toolbar .titulo ion-title {\n  font-size: 6vw;\n  font-weight: 1000;\n  align-self: flex-start;\n  font-style: italic;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\n@media only screen and (min-width: 600px) {\n  ion-title {\n    font-weight: 1000;\n    font-style: italic;\n    font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  ion-content::part(scroll) {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n\n  ion-content::part(scroll)::-webkit-scrollbar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBS1E7RUFFSSxXQUFBO0FBSFo7O0FBS1k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7QUFIaEI7O0FBWUE7RUFDSTtJQUNJLGlCQUFBO0lBRUEsa0JBQUE7SUFDQSx3RUFBQTtFQVZOO0FBQ0Y7O0FBY0E7RUFHSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFkTjs7RUFrQkU7SUFDSSxhQUFBO0VBZk47QUFDRiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLnRpdHVsbyB7XG5cbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBpb24tdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIH1cbn1cblxuLy9lbiBkZXBlbmRlbmNpYSBkZSBsYSBwYW50YWxsYSBzZSBtb3N0cmFyYSBlbCBzY3JvbGxiYXJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgIC8vIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveFxuICAgIGlvbi1jb250ZW50OjpwYXJ0KHNjcm9sbCkge1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8vIElFIGFuZCBFZGdlXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLy8gRmlyZWZveFxuICAgIH1cblxuICAgIC8vIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmFcbiAgICBpb24tY29udGVudDo6cGFydChzY3JvbGwpOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 8375:
/*!*************************************************************************!*\
  !*** ./src/app/share/maintenance/maintenance.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"center\">\n    <h1>:( {{ name }}</h1>\n    <h3>LAMENTAMOS LAS MOLESTIAS</h3>\n    <p style=\"width: 18em; text-align: center;\">Este espacio se encuentra en mantenimiento. Pronto estará disponible\n        nuevamente</p>\n    <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" viewBox=\"0 0 1878.000000 2176.000000\"\n        preserveAspectRatio=\"xMidYMid meet\">\n    \n        <g transform=\"translate(0.000000,2176.000000) scale(0.100000,-0.100000)\" fill=\"#fff\" stroke=\"none\">\n            <path d=\"M6198 21746 c-57 -21 -85 -42 -115 -88 -57 -86 -88 24 545 -1921 388\n    -1193 570 -1765 566 -1781 -3 -13 -18 -35 -32 -49 -15 -13 -679 -498 -1477\n    -1077 -797 -579 -1469 -1068 -1493 -1087 -52 -43 -72 -80 -79 -147 -9 -95 59\n    -189 156 -216 23 -6 660 -10 1832 -10 l1796 0 27 -26 c18 -19 26 -37 26 -62 0\n    -26 -96 -222 -387 -788 -212 -415 -391 -762 -398 -770 -10 -15 -39 -2 -242\n    105 -253 133 -281 141 -342 99 -26 -18 -336 -557 -1496 -2598 -805 -1416\n    -1462 -2576 -1460 -2578 4 -4 255 95 420 166 197 84 371 165 750 350 475 230\n    691 318 1062 427 289 86 591 145 898 176 154 16 576 16 725 1 261 -27 601 -98\n    798 -166 53 -18 74 -22 78 -13 2 7 213 626 469 1377 256 751 470 1375 476\n    1386 12 24 49 44 79 44 52 0 53 -2 586 -1405 284 -748 519 -1364 524 -1368 4\n    -5 59 5 121 22 158 42 337 78 514 102 219 30 660 37 895 15 516 -50 1022 -182\n    1545 -406 88 -37 331 -151 540 -253 417 -203 603 -286 891 -400 197 -78 251\n    -96 242 -81 -3 5 -655 1168 -1448 2584 -793 1416 -1455 2588 -1470 2604 -21\n    22 -40 30 -77 33 -46 5 -65 -2 -311 -118 -154 -72 -266 -119 -271 -113 -5 5\n    -189 351 -410 769 -435 826 -429 810 -375 860 l27 25 1792 0 c2000 0 1861 -5\n    1928 69 78 86 74 217 -9 292 -16 15 -688 505 -1494 1089 -806 584 -1477 1076\n    -1492 1091 -19 20 -28 40 -28 62 0 17 257 821 570 1786 378 1164 570 1769 570\n    1795 -1 130 -141 234 -262 195 -28 -10 -563 -393 -1524 -1090 -814 -592 -1492\n    -1084 -1507 -1094 -17 -10 -39 -16 -59 -13 -25 3 -416 282 -1517 1082 -816\n    593 -1499 1087 -1516 1097 -43 26 -112 32 -157 15z m2611 -3334 c462 -335 588\n    -422 600 -415 9 6 277 200 596 431 318 232 581 420 583 418 1 -2 -99 -317\n    -224 -701 -124 -383 -222 -700 -218 -704 5 -5 272 -199 594 -432 l585 -424\n    -730 -3 c-401 -1 -733 -6 -737 -10 -4 -4 -109 -320 -233 -702 -124 -381 -227\n    -695 -228 -697 -2 -1 -106 315 -232 702 l-229 705 -734 2 -734 3 591 430 c325\n    236 591 433 591 437 0 5 -99 313 -220 686 -121 372 -223 685 -226 696 -5 14\n    -3 16 7 10 8 -4 277 -199 598 -432z\" />\n            <path d=\"M6881 9569 c-357 -22 -722 -97 -1110 -225 -268 -89 -478 -178 -886\n    -376 -192 -94 -408 -198 -480 -230 -773 -355 -1548 -594 -2225 -687 -275 -37\n    -402 -45 -720 -46 -379 0 -564 17 -910 81 -118 22 -446 101 -491 119 -12 4\n    -20 -5 -32 -37 -10 -23 -13 -46 -8 -51 14 -14 324 -122 478 -166 931 -270\n    1932 -265 3090 14 478 116 838 232 1498 483 369 140 528 194 723 247 935 248\n    1754 166 2414 -242 229 -141 490 -375 629 -563 l74 -100 411 0 411 0 49 63\n    c82 105 253 274 379 376 633 508 1415 701 2310 571 385 -56 653 -134 1240\n    -357 830 -317 1411 -484 2060 -593 407 -68 666 -90 1070 -90 558 0 991 63\n    1509 220 145 44 391 131 403 144 7 6 -19 76 -29 76 -4 0 -65 -16 -135 -35\n    -673 -183 -1396 -217 -2128 -100 -460 74 -956 211 -1479 410 -336 127 -525\n    210 -1051 465 -433 209 -570 270 -805 355 -347 126 -705 212 -1075 257 -148\n    18 -703 18 -845 0 -685 -87 -1285 -333 -1814 -746 -57 -44 -59 -45 -81 -28\n    -12 9 -64 50 -116 91 -307 242 -727 457 -1112 570 -392 115 -790 157 -1216\n    130z\" />\n            <path d=\"M10585 6524 c-99 -21 -224 -84 -288 -147 -105 -103 -157 -226 -164\n    -392 -5 -100 -3 -117 21 -190 53 -155 157 -275 350 -405 184 -123 242 -190\n    253 -292 16 -157 -92 -258 -274 -258 -75 0 -195 23 -266 51 -27 11 -52 17 -55\n    14 -3 -2 -17 -77 -32 -166 l-27 -161 35 -15 c99 -41 186 -56 337 -57 129 -1\n    161 2 230 22 217 63 371 219 420 423 19 82 19 228 0 304 -44 173 -146 298\n    -350 430 -161 104 -208 145 -239 207 -55 110 -19 223 89 281 34 19 56 22 140\n    22 86 -1 109 -5 168 -29 38 -15 70 -26 72 -24 9 9 62 324 56 331 -13 13 -117\n    46 -182 56 -87 15 -210 12 -294 -5z\" />\n            <path d=\"M9080 6523 c-93 -8 -225 -25 -237 -30 -11 -4 -13 -175 -13 -989 l0\n    -984 195 0 195 0 0 400 0 400 53 0 c29 0 70 -9 93 -19 81 -37 110 -108 154\n    -377 28 -170 72 -373 86 -395 3 -5 96 -9 208 -9 l202 0 -23 73 c-13 39 -46\n    185 -74 322 -27 138 -57 273 -65 300 -34 105 -91 182 -169 230 l-37 22 48 28\n    c167 98 254 260 254 476 0 179 -31 275 -121 373 -93 101 -206 153 -384 175\n    -83 10 -281 12 -365 4z m338 -319 c52 -21 87 -58 113 -118 19 -42 23 -68 23\n    -151 0 -119 -21 -178 -87 -243 -51 -50 -109 -72 -188 -72 l-59 0 0 299 0 300\n    28 4 c43 8 130 -2 170 -19z\" />\n            <path d=\"M12204 6519 c-45 -5 -99 -12 -120 -17 l-39 -8 -3 -981 -2 -982 57 -8\n    c108 -15 451 -8 531 10 244 56 399 174 502 382 94 189 125 374 117 697 -6 228\n    -16 298 -67 446 -38 114 -82 184 -170 273 -86 88 -192 145 -320 174 -88 21\n    -361 29 -486 14z m385 -315 c168 -50 261 -280 261 -647 0 -468 -127 -727 -357\n    -727 l-63 0 0 689 c0 542 3 690 13 694 25 11 95 6 146 -9z\" />\n            <path d=\"M14924 6519 c-45 -5 -99 -12 -120 -17 l-39 -8 -3 -981 -2 -982 57 -8\n    c108 -15 451 -8 531 10 244 56 399 174 502 382 94 189 125 374 117 697 -6 228\n    -16 298 -67 446 -38 114 -82 184 -170 273 -86 88 -192 145 -320 174 -88 21\n    -361 29 -486 14z m385 -315 c168 -50 261 -280 261 -647 0 -468 -127 -727 -357\n    -727 l-63 0 0 689 c0 542 3 690 13 694 25 11 95 6 146 -9z\" />\n            <path d=\"M2703 5793 c3 -691 4 -733 24 -818 71 -308 228 -455 508 -472 353\n    -22 568 188 614 600 7 59 11 354 11 757 l0 660 -195 0 -195 0 0 -697 c0 -437\n    -4 -722 -11 -763 -13 -84 -49 -161 -86 -188 -98 -69 -214 -13 -259 126 -17 53\n    -18 110 -22 790 l-3 732 -195 0 -195 0 4 -727z\" />\n            <path d=\"M4160 5520 l0 -1000 171 0 172 0 -7 573 c-3 314 -8 619 -11 677 -2\n    58 -1 96 2 85 44 -156 140 -420 305 -832 l202 -503 178 0 178 0 0 1000 0 1000\n    -171 0 -172 0 6 -457 c4 -252 13 -557 21 -678 8 -121 13 -221 12 -222 -2 -2\n    -26 63 -55 144 -41 114 -320 831 -456 1171 l-17 42 -179 0 -179 0 0 -1000z\" />\n            <path d=\"M5670 5520 l0 -1000 195 0 195 0 0 1000 0 1000 -195 0 -195 0 0\n    -1000z\" />\n            <path d=\"M6212 6508 c2 -7 103 -457 224 -1001 l219 -987 220 2 219 3 222 970\n    c122 534 225 982 228 998 l6 27 -215 0 c-118 0 -215 -2 -215 -5 0 -3 -27 -175\n    -60 -383 -88 -547 -106 -664 -135 -887 -14 -110 -28 -218 -32 -240 -5 -31 -14\n    18 -44 220 -34 236 -192 1218 -204 1273 -5 22 -6 22 -221 22 -169 0 -215 -3\n    -212 -12z\" />\n            <path d=\"M7690 5520 l0 -1000 450 0 450 0 0 170 0 170 -255 0 -255 0 0 270 0\n    270 225 0 225 0 0 160 0 160 -225 0 -225 0 0 230 0 230 240 0 240 0 0 170 0\n    170 -435 0 -435 0 0 -1000z\" />\n            <path d=\"M11340 5520 l0 -1000 195 0 195 0 0 1000 0 1000 -195 0 -195 0 0\n    -1000z\" />\n            <path d=\"M13501 5538 c-117 -541 -215 -991 -217 -1000 -5 -17 8 -18 184 -18\n    l190 0 44 228 44 227 174 3 c95 1 177 -1 181 -5 4 -5 24 -98 43 -208 20 -110\n    38 -210 41 -222 5 -23 6 -23 196 -23 l191 0 -5 23 c-3 12 -89 452 -191 977\n    -102 525 -188 965 -191 978 l-5 22 -233 0 -233 0 -213 -982z m464 431 c21\n    -149 83 -554 100 -656 l6 -33 -141 0 c-98 0 -140 3 -140 11 0 7 18 114 40 238\n    35 197 100 600 100 618 0 3 2 4 5 1 3 -3 16 -83 30 -179z\" />\n            <path d=\"M16115 4299 c-61 -84 -114 -158 -118 -165 -7 -12 17 -14 130 -14\n    l138 0 105 97 c58 53 138 127 179 165 l73 68 -199 0 -198 0 -110 -151z\" />\n            <path d=\"M17145 4020 c-274 -55 -469 -325 -529 -733 -18 -121 -21 -410 -6\n    -537 25 -203 85 -384 169 -513 104 -159 233 -233 421 -244 223 -12 402 85 518\n    282 50 85 104 245 129 380 26 145 26 610 0 739 -73 358 -226 566 -458 621 -68\n    16 -178 18 -244 5z m166 -353 c65 -44 106 -131 136 -289 14 -74 17 -147 17\n    -358 0 -281 -11 -383 -55 -517 -57 -174 -180 -225 -280 -116 -94 100 -136 334\n    -126 692 6 213 23 332 62 438 57 151 155 211 246 150z\" />\n            <path d=\"M974 4009 c-45 -5 -99 -12 -120 -17 l-39 -8 -3 -981 -2 -982 57 -8\n    c108 -15 451 -8 531 10 244 56 399 174 502 382 94 189 125 374 117 697 -6 228\n    -16 298 -67 446 -38 114 -82 184 -170 273 -86 88 -192 145 -320 174 -88 21\n    -361 29 -486 14z m385 -315 c168 -50 261 -280 261 -647 0 -468 -127 -727 -357\n    -727 l-63 0 0 689 c0 542 3 690 13 694 25 11 95 6 146 -9z\" />\n            <path d=\"M4050 4014 c-137 -16 -202 -26 -215 -30 -13 -5 -15 -132 -15 -990 l0\n    -984 195 0 195 0 0 374 0 374 118 4 c236 10 412 105 524 283 72 115 110 318\n    89 471 -37 266 -176 420 -431 479 -73 17 -373 29 -460 19z m377 -337 c41 -22\n    79 -66 105 -122 19 -42 23 -67 23 -160 0 -93 -4 -118 -23 -160 -48 -105 -124\n    -156 -244 -163 l-78 -5 0 312 0 311 23 5 c67 14 145 7 194 -18z\" />\n            <path d=\"M8940 4013 c-93 -8 -225 -25 -237 -30 -11 -4 -13 -175 -13 -989 l0\n    -984 195 0 195 0 0 400 0 400 53 0 c29 0 70 -9 93 -19 81 -37 110 -108 154\n    -377 28 -170 72 -373 86 -395 3 -5 96 -9 208 -9 l202 0 -23 73 c-13 39 -46\n    185 -74 322 -27 138 -57 273 -65 300 -34 105 -91 182 -169 230 l-37 22 48 28\n    c167 98 254 260 254 476 0 179 -31 275 -121 373 -93 101 -206 153 -384 175\n    -83 10 -281 12 -365 4z m338 -319 c52 -21 87 -58 113 -118 19 -42 23 -68 23\n    -151 0 -119 -21 -178 -87 -243 -51 -50 -109 -72 -188 -72 l-59 0 0 299 0 300\n    28 4 c43 8 130 -2 170 -19z\" />\n            <path d=\"M10664 4009 c-45 -5 -99 -12 -120 -17 l-39 -8 -3 -981 -2 -982 57 -8\n    c108 -15 451 -8 531 10 244 56 399 174 502 382 94 189 125 374 117 697 -6 228\n    -16 298 -67 446 -38 114 -82 184 -170 273 -86 88 -192 145 -320 174 -88 21\n    -361 29 -486 14z m385 -315 c168 -50 261 -280 261 -647 0 -468 -127 -727 -357\n    -727 l-63 0 0 689 c0 542 3 690 13 694 25 11 95 6 146 -9z\" />\n            <path d=\"M14860 4013 c-93 -8 -225 -25 -237 -30 -11 -4 -13 -175 -13 -989 l0\n    -984 195 0 195 0 0 400 0 400 53 0 c29 0 70 -9 93 -19 81 -37 110 -108 154\n    -377 28 -170 72 -373 86 -395 3 -5 96 -9 208 -9 l202 0 -23 73 c-13 39 -46\n    185 -74 322 -27 138 -57 273 -65 300 -34 105 -91 182 -169 230 l-37 22 48 28\n    c167 98 254 260 254 476 0 179 -31 275 -121 373 -93 101 -206 153 -384 175\n    -83 10 -281 12 -365 4z m338 -319 c52 -21 87 -58 113 -118 19 -42 23 -68 23\n    -151 0 -119 -21 -178 -87 -243 -51 -50 -109 -72 -188 -72 l-59 0 0 299 0 300\n    28 4 c43 8 130 -2 170 -19z\" />\n            <path d=\"M2240 3010 l0 -1000 450 0 450 0 0 170 0 170 -255 0 -255 0 0 270 0\n    270 225 0 225 0 0 160 0 160 -225 0 -225 0 0 230 0 230 240 0 240 0 0 170 0\n    170 -435 0 -435 0 0 -1000z\" />\n            <path d=\"M5150 3010 l0 -1000 195 0 195 0 0 1000 0 1000 -195 0 -195 0 0\n    -1000z\" />\n            <path d=\"M5860 3010 l0 -1000 171 0 172 0 -7 573 c-3 314 -8 619 -11 677 -2\n    58 -1 96 2 85 44 -156 140 -420 305 -832 l202 -503 178 0 178 0 0 1000 0 1000\n    -171 0 -172 0 6 -457 c4 -252 13 -557 21 -678 8 -121 13 -221 12 -222 -2 -2\n    -26 63 -55 144 -41 114 -320 831 -456 1171 l-17 42 -179 0 -179 0 0 -1000z\" />\n            <path d=\"M7431 3028 c-117 -541 -215 -991 -217 -1000 -5 -17 8 -18 184 -18\n    l190 0 44 228 44 227 174 3 c95 1 177 -1 181 -5 4 -5 24 -98 43 -208 20 -110\n    38 -210 41 -222 5 -23 6 -23 196 -23 l191 0 -5 23 c-3 12 -89 452 -191 977\n    -102 525 -188 965 -191 978 l-5 22 -233 0 -233 0 -213 -982z m464 431 c21\n    -149 83 -554 100 -656 l6 -33 -141 0 c-98 0 -140 3 -140 11 0 7 18 114 40 238\n    35 197 100 600 100 618 0 3 2 4 5 1 3 -3 16 -83 30 -179z\" />\n            <path d=\"M11930 3010 l0 -1000 450 0 450 0 0 170 0 170 -255 0 -255 0 0 270 0\n    270 225 0 225 0 0 160 0 160 -225 0 -225 0 0 230 0 230 240 0 240 0 0 170 0\n    170 -435 0 -435 0 0 -1000z\" />\n            <path d=\"M13070 3010 l0 -1000 450 0 450 0 0 165 0 165 -255 0 -255 0 0 835 0\n    835 -195 0 -195 0 0 -1000z\" />\n            <path d=\"M15980 3010 l0 -1000 195 0 195 0 0 1000 0 1000 -195 0 -195 0 0\n    -1000z\" />\n            <path d=\"M8449 1583 c-30 -43 -55 -81 -57 -85 -2 -4 27 -8 65 -8 l69 0 92 85\n    92 85 -103 0 -103 0 -55 -77z\" />\n            <path d=\"M5467 1426 c-54 -20 -111 -60 -141 -98 -126 -166 -153 -510 -59 -746\n    102 -256 423 -273 542 -29 51 104 65 182 65 367 0 141 -3 176 -22 243 -29 103\n    -54 150 -107 202 -67 68 -186 94 -278 61z m134 -187 c50 -50 74 -188 67 -378\n    -9 -206 -47 -301 -122 -301 -75 0 -115 95 -123 297 -8 192 16 323 69 380 28\n    30 80 31 109 2z\" />\n            <path d=\"M6227 1429 c-126 -30 -212 -132 -224 -269 -11 -121 44 -212 196 -319\n    101 -72 131 -110 131 -166 0 -38 -26 -83 -60 -100 -37 -19 -132 -19 -196 0\n    -27 8 -51 11 -55 7 -11 -12 -30 -155 -22 -162 18 -16 83 -31 159 -37 154 -11\n    280 52 341 171 23 43 27 64 27 136 1 139 -46 213 -200 315 -130 85 -157 154\n    -90 221 30 30 40 34 89 34 30 0 73 -7 96 -15 22 -8 41 -13 41 -12 0 1 7 40 15\n    87 8 46 11 87 7 91 -26 24 -182 35 -255 18z\" />\n            <path d=\"M7167 1429 c-126 -30 -212 -132 -224 -269 -11 -121 44 -212 196 -319\n    101 -72 131 -110 131 -166 0 -38 -26 -83 -60 -100 -37 -19 -132 -19 -196 0\n    -27 8 -51 11 -55 7 -11 -12 -30 -155 -22 -162 18 -16 83 -31 159 -37 154 -11\n    280 52 341 171 23 43 27 64 27 136 1 139 -46 213 -200 315 -130 85 -157 154\n    -90 221 30 30 40 34 89 34 30 0 73 -7 96 -15 22 -8 41 -13 41 -12 0 1 7 40 15\n    87 8 46 11 87 7 91 -26 24 -182 35 -255 18z\" />\n            <path d=\"M10957 1426 c-54 -20 -111 -60 -141 -98 -126 -166 -153 -510 -59\n    -746 102 -256 423 -273 542 -29 51 104 65 182 65 367 0 141 -3 176 -22 243\n    -29 103 -54 150 -107 202 -67 68 -186 94 -278 61z m134 -187 c50 -50 74 -188\n    67 -378 -9 -206 -47 -301 -122 -301 -75 0 -115 95 -123 297 -8 192 16 323 69\n    380 28 30 80 31 109 2z\" />\n            <path d=\"M13857 1429 c-126 -30 -212 -132 -224 -269 -11 -121 44 -212 196\n    -319 101 -72 131 -110 131 -166 0 -38 -26 -83 -60 -100 -37 -19 -132 -19 -196\n    0 -27 8 -51 11 -55 7 -11 -12 -30 -155 -22 -162 18 -16 83 -31 159 -37 154\n    -11 280 52 341 171 23 43 27 64 27 136 1 139 -46 213 -200 315 -130 85 -157\n    154 -90 221 30 30 40 34 89 34 30 0 73 -7 96 -15 22 -8 41 -13 41 -12 0 1 7\n    40 15 87 8 46 11 87 7 91 -26 24 -182 35 -255 18z\" />\n            <path d=\"M16547 1426 c-54 -20 -111 -60 -141 -98 -126 -166 -153 -510 -59\n    -746 102 -256 423 -273 542 -29 51 104 65 182 65 367 0 141 -3 176 -22 243\n    -29 103 -54 150 -107 202 -67 68 -186 94 -278 61z m134 -187 c50 -50 74 -188\n    67 -378 -9 -206 -47 -301 -122 -301 -75 0 -115 95 -123 297 -8 192 16 323 69\n    380 28 30 80 31 109 2z\" />\n            <path d=\"M17397 1429 c-142 -34 -255 -156 -303 -330 -25 -90 -25 -318 0 -409\n    52 -190 167 -294 339 -307 41 -3 97 0 131 7 l58 12 -6 56 c-14 118 -10 112\n    -75 106 -146 -16 -231 72 -249 258 -16 156 16 315 76 381 44 49 143 71 205 48\n    24 -9 25 -8 41 72 9 45 16 85 16 89 0 10 -96 28 -148 27 -26 -1 -64 -5 -85\n    -10z\" />\n            <path d=\"M390 910 l0 -520 100 0 100 0 0 220 0 220 110 0 110 0 0 -220 0 -220\n    100 0 100 0 0 520 0 520 -100 0 -100 0 0 -205 0 -205 -110 0 -110 0 0 205 0\n    205 -100 0 -100 0 0 -520z\" />\n            <path d=\"M1230 910 l0 -520 235 0 235 0 0 90 0 90 -135 0 -135 0 0 140 0 140\n    120 0 120 0 0 85 0 85 -120 0 -120 0 0 115 0 115 125 0 125 0 0 90 0 90 -225\n    0 -225 0 0 -520z\" />\n            <path d=\"M1975 1424 c-16 -2 -45 -7 -62 -10 l-33 -5 0 -509 0 -510 100 0 100\n    0 0 210 0 210 33 0 c73 0 98 -42 127 -211 12 -68 26 -143 32 -166 l10 -43 110\n    0 c104 0 108 1 99 19 -6 11 -24 88 -41 173 -38 189 -53 229 -100 272 l-37 33\n    46 34 c28 21 56 55 73 88 24 46 28 65 28 135 0 134 -57 222 -169 262 -45 16\n    -249 28 -316 18z m224 -170 c38 -22 51 -47 58 -105 12 -103 -45 -179 -134\n    -179 l-43 0 0 150 0 150 46 0 c25 0 58 -7 73 -16z\" />\n            <path d=\"M2641 963 c-18 -258 -35 -492 -38 -520 l-6 -53 86 0 c82 0 87 1 91\n    22 3 13 10 142 16 288 6 146 13 290 17 320 l6 55 22 -115 c13 -63 46 -211 74\n    -328 28 -117 51 -215 51 -218 0 -2 33 -4 73 -4 l73 0 57 233 c31 127 66 277\n    77 331 11 55 22 102 25 104 3 3 5 -37 5 -89 0 -108 19 -543 26 -576 4 -22 9\n    -23 95 -23 l90 0 -5 43 c-3 23 -17 247 -31 497 -15 250 -28 465 -31 478 -4 21\n    -9 22 -109 22 -100 0 -105 -1 -110 -22 -36 -155 -91 -412 -111 -523 -37 -208\n    -34 -204 -59 -75 -24 118 -122 571 -131 603 -5 15 -19 17 -113 17 l-107 0 -33\n    -467z\" />\n            <path d=\"M3815 1418 c-3 -7 -52 -231 -110 -498 -57 -267 -107 -495 -110 -507\n    -5 -23 -4 -23 94 -23 l99 0 22 120 22 120 93 0 c108 0 95 14 121 -137 l17\n    -103 99 0 c54 0 98 3 98 6 0 8 -189 980 -197 1012 -5 21 -9 22 -124 22 -87 0\n    -121 -3 -124 -12z m156 -425 c16 -106 29 -195 29 -198 0 -3 -33 -5 -73 -5\n    l-73 0 34 198 c18 108 36 208 39 222 l7 25 3 -25 c2 -14 17 -112 34 -217z\" />\n            <path d=\"M4420 910 l0 -520 90 0 90 0 -1 198 c-1 108 -4 265 -8 347 -4 83 -6\n    151 -5 152 0 2 15 -41 33 -94 17 -53 77 -211 133 -350 l102 -253 93 0 93 0 0\n    520 0 520 -92 0 -91 0 6 -267 c4 -148 9 -306 12 -353 l6 -85 -43 115 c-24 63\n    -86 222 -138 353 l-95 237 -92 0 -93 0 0 -520z\" />\n            <path d=\"M7775 1418 c-3 -7 -52 -231 -110 -498 -57 -267 -107 -495 -110 -507\n    -5 -23 -4 -23 94 -23 l99 0 22 120 22 120 93 0 c108 0 95 14 121 -137 l17\n    -103 99 0 c54 0 98 3 98 6 0 8 -189 980 -197 1012 -5 21 -9 22 -124 22 -87 0\n    -121 -3 -124 -12z m156 -425 c16 -106 29 -195 29 -198 0 -3 -33 -5 -73 -5\n    l-73 0 34 198 c18 108 36 208 39 222 l7 25 3 -25 c2 -14 17 -112 34 -217z\" />\n            <path d=\"M8380 910 l0 -520 100 0 100 0 0 520 0 520 -100 0 -100 0 0 -520z\" />\n            <path d=\"M8760 1340 l0 -89 149 -3 150 -3 -165 -368 c-152 -342 -164 -373\n    -164 -428 l0 -59 280 0 280 0 0 90 0 90 -155 0 c-85 0 -155 3 -155 8 0 4 70\n    164 155 356 155 347 155 348 155 422 l0 74 -265 0 -265 0 0 -90z\" />\n            <path d=\"M9721 963 c-18 -258 -35 -492 -38 -520 l-6 -53 86 0 c82 0 87 1 91\n    22 3 13 10 142 16 288 6 146 13 290 17 320 l6 55 22 -115 c13 -63 46 -211 74\n    -328 28 -117 51 -215 51 -218 0 -2 33 -4 73 -4 l73 0 57 233 c31 127 66 277\n    77 331 11 55 22 102 25 104 3 3 5 -37 5 -89 0 -108 19 -543 26 -576 4 -22 9\n    -23 95 -23 l90 0 -5 43 c-3 23 -17 247 -31 497 -15 250 -28 465 -31 478 -4 21\n    -9 22 -109 22 -100 0 -105 -1 -110 -22 -36 -155 -91 -412 -111 -523 -37 -208\n    -34 -204 -59 -75 -24 118 -122 571 -131 603 -5 15 -19 17 -113 17 l-107 0 -33\n    -467z\" />\n            <path d=\"M11530 910 l0 -520 90 0 90 0 -1 198 c-1 108 -4 265 -8 347 -4 83 -6\n    151 -5 152 0 2 15 -41 33 -94 17 -53 77 -211 133 -350 l102 -253 93 0 93 0 0\n    520 0 520 -92 0 -91 0 6 -267 c4 -148 9 -306 12 -353 l6 -85 -43 115 c-24 63\n    -86 222 -138 353 l-95 237 -92 0 -93 0 0 -520z\" />\n            <path d=\"M12300 1335 l0 -95 90 0 90 0 0 -425 0 -425 100 0 100 0 0 425 0 425\n    95 0 95 0 0 95 0 95 -285 0 -285 0 0 -95z\" />\n            <path d=\"M13020 910 l0 -520 235 0 235 0 0 90 0 90 -135 0 -135 0 0 140 0 140\n    120 0 120 0 0 85 0 85 -120 0 -120 0 0 115 0 115 125 0 125 0 0 90 0 90 -225\n    0 -225 0 0 -520z\" />\n            <path d=\"M14690 1425 c-8 -2 -32 -6 -52 -10 l-38 -6 0 -508 0 -508 53 -7 c196\n    -23 366 20 452 116 87 96 119 209 120 418 0 134 -3 165 -23 230 -60 193 -167\n    270 -387 276 -60 1 -117 1 -125 -1z m203 -169 c79 -32 116 -120 124 -291 12\n    -254 -55 -415 -172 -415 l-45 0 0 353 c0 195 3 357 7 360 11 11 51 8 86 -7z\" />\n            <path d=\"M15400 910 l0 -520 235 0 235 0 0 90 0 90 -135 0 -135 0 0 140 0 140\n    120 0 120 0 0 85 0 85 -120 0 -120 0 0 115 0 115 125 0 125 0 0 90 0 90 -225\n    0 -225 0 0 -520z\" />\n            <path d=\"M17945 1418 c-3 -7 -52 -231 -110 -498 -57 -267 -107 -495 -110 -507\n    -5 -23 -4 -23 94 -23 l99 0 22 120 22 120 93 0 c108 0 95 14 121 -137 l17\n    -103 99 0 c54 0 98 3 98 6 0 8 -189 980 -197 1012 -5 21 -9 22 -124 22 -87 0\n    -121 -3 -124 -12z m156 -425 c16 -106 29 -195 29 -198 0 -3 -33 -5 -73 -5\n    l-73 0 34 198 c18 108 36 208 39 222 l7 25 3 -25 c2 -14 17 -112 34 -217z\" />\n        </g>\n    </svg>\n</div>\n";

/***/ }),

/***/ 4790:
/*!*************************************************************************!*\
  !*** ./src/app/tab2/components/events/events.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n<app-maintenance></app-maintenance>";

/***/ }),

/***/ 5077:
/*!*************************************************************************!*\
  !*** ./src/app/tab2/components/header/header.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  \n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Buscar\" animated>\n    </ion-searchbar>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"8\" size-xs=\"12\">\n          <ion-segment (ionChange)=\"segmentChange($event)\">\n            <ion-segment-button *ngFor=\"let item of lateralbar\" [value]=\"item.name\">\n              <ion-label  class=\"ion-text-capitalize \">{{item.name}}</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n\n</ion-header>\n\n";

/***/ }),

/***/ 6081:
/*!*****************************************************************************************!*\
  !*** ./src/app/tab2/components/investigations/investigations.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n<app-maintenance></app-maintenance>";

/***/ }),

/***/ 783:
/*!********************************************************************************************!*\
  !*** ./src/app/tab2/components/notice-detail/information-notice.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"content\">\n  <header>\n    <div\n      class=\"header-container\"\n      style=\"background-image:url({{notice.jetpack_featured_media_url}});\"\n    >\n   \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n           <div style=\"height:10px \n           ;\"> <ion-icon\n            [routerLink]=\"['/tabs/tab2']\"\n            size=\"large\"\n            slot=\"start\"\n            name=\"chevron-back\"\n            class=\"icon\"\n            style=\"color:primary;\"\n          ></ion-icon></div>\n           </ion-col>\n          <ion-col> </ion-col>\n          <ion-col>\n            <app-popover></app-popover>\n          </ion-col>\n        </ion-row>\n       \n      </ion-grid>\n    </div>\n  </header>\n\n  <ion-card class=\"card-content\">\n    <ion-card-title class=\"title\" color=\"mycolor\"> {{notice.title.rendered}}</ion-card-title>\n    <ion-card-content >\n      <div class=\"predeterminado\" [innerHTML]=\"notice.content.rendered\"></div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<!-- <ion-content class=\"content\">\n  <ion-header collapse=\"fade\">\n    <ion-toolbar  >\n      <div  class=\"toolbar-img\" style=\"background-color:aqua ;\"></div>\n      <ion-img class=\"img\" [src]=\"notice.jetpack_featured_media_url\"></ion-img> \n    \n     \n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n\n    </ion-col>\n    <ion-col>\n    \n    </ion-col>\n    <ion-col>\n    <app-popover></app-popover>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n     \n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card class=\"container-detail\">\n\n     <h2 class=\"title\">  {{notice.title.rendered}}</h2>\n       \n   \n\n\n \n    \n      <div class=\"div-text predeterminado\" [innerHTML]=\"notice.content.rendered\"></div>\n\n\n \n\n  </ion-card>\n\n</ion-content>\n -->\n";

/***/ }),

/***/ 3813:
/*!*************************************************************************!*\
  !*** ./src/app/tab2/components/notice/notice.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n    <ion-grid>\n        <ion-row>\n\n            <ion-col size=\"12\" size-lg=\"4\" size-sm=\"6\" size-md=\"6\" size-xs=\"12\" *ngFor=\"let item of response\">\n                <ion-card [routerLink]=\"['/tab2/detail',item.id]\">\n                    <ion-img [src]=\"item.jetpack_featured_media_url\"></ion-img>\n                    <ion-card-header>\n                     \n                        <ion-card-title  [innerHTML]=\"item.title.rendered\"></ion-card-title>\n                    </ion-card-header>\n    \n                    <ion-card-content>\n                        <div [innerHTML]=\"item.excerpt.rendered\"></div>\n                        <a  style=\"text-decoration:none;\"  routerAnimation=\"['/tab2/detail',item.id]\">Leer más</a>\n                        <div class=\"d-flex\">\n                            <ion-note>{{item.date | date:'fullDate':'+0'}}</ion-note>\n                           \n                        </div>\n                    </ion-card-content>\n                </ion-card>\n                \n               \n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n</div>";

/***/ }),

/***/ 1114:
/*!***************************************************************************!*\
  !*** ./src/app/tab2/components/notices/notices.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<app-notice></app-notice>\n<ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>";

/***/ }),

/***/ 988:
/*!***************************************************************************!*\
  !*** ./src/app/tab2/components/popover/popover.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n \n    <ion-tab-button (click)=\"presentPopover($event)\" slot=\"end\">\n      <h2>A <span>A</span></h2>\n    </ion-tab-button>\n    \n    <ion-popover #popover [isOpen]=\"popoverIsOpen\" (didDismiss)=\"popoverIsOpen = false\">\n      <ng-template>\n        <ion-range #ionrange id=\"a\" (ionChange)=\"changeFont($event)\" (onDidDismiss)=\"resetEvent($event)\" [min]=\"1\" [max]=\"4\"\n          [step]=\"1\" [pin]=\"true\" [snaps]=\"true\" [ticks]=\"true\" color=\"primary\" [value]=\"cont\">\n          <ion-label slot=\"start\" color=\"primary\">A</ion-label>\n          <ion-label slot=\"end\" color=\"primary\">\n            <h2>A</h2>\n          </ion-label>\n    \n        </ion-range>\n    \n      </ng-template>\n    </ion-popover>\n\n";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<app-header (selectedsegment)=\"ChangeSegment($event)\"></app-header>\n\n<ion-content class=\"content\" [fullscreen]=\"true\">\n\n  <ion-header collapse=\"condense\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <div class=\"titulo\">\n        <ion-title class=\"categorytitle\">{{selectedsegment}}</ion-title>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-notices *ngIf=\"selectedsegment == 'Noticias'\">\n\n  </app-notices>\n  <app-maintenance *ngIf=\"selectedsegment == 'Eventos'\"></app-maintenance>\n  <app-maintenance *ngIf=\"selectedsegment == 'Investigaciones'\"></app-maintenance>\n  \n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map