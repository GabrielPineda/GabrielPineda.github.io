(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\games\Desktop\Angular Projects\midterm-proj\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FAw3":
/*!**********************************************!*\
  !*** ./src/app/iconbar/iconbar.component.ts ***!
  \**********************************************/
/*! exports provided: IconbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconbarComponent", function() { return IconbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IconbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconbarComponent.ɵfac = function IconbarComponent_Factory(t) { return new (t || IconbarComponent)(); };
IconbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconbarComponent, selectors: [["app-iconbar"]], decls: 10, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")], [1, "icon-bar"], [1, "vert-line"], ["href", "https://github.com/GabrielPineda", 1, "facebook"], [1, "fa", "fa-github", "fa-lg"], ["href", "https://twitter.com/PioloGabrielPi1", 1, "twitter"], [1, "fa", "fa-twitter", "fa-lg"], ["href", "https://www.linkedin.com/in/piolo-pineda-345419210", 1, "linkedin"], [1, "fa", "fa-linkedin", "fa-lg"]], template: function IconbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".icon-bar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 2%;\r\n    transform: translateY(-50%);\r\n  }\r\n  \r\n  \r\n  \r\n  .icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 16px;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 20px;\r\n    width: 50%;\r\n  }\r\n  \r\n  \r\n  \r\n  .icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #32adff;\r\n  }\r\n  \r\n  .facebook[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n    width: 50px;\r\n  }\r\n  \r\n  .twitter[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n  }\r\n  \r\n  .google[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n  }\r\n  \r\n  .linkedin[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n  }\r\n  \r\n  .youtube[_ngcontent-%COMP%] {\r\n    background: #bb0000;\r\n    color: white;\r\n  }\r\n  \r\n  .vert-line[_ngcontent-%COMP%]\r\n  {\r\n      width: 0%;\r\n      margin: auto;\r\n      margin-top: 1rem;\r\n      margin-bottom: 1rem;\r\n      height: 8rem;\r\n      border-right: 3px solid #32adff;\r\n  }\r\n  \r\n  @media (max-width:900px) and (min-width:300px){\r\n      .icon-bar[_ngcontent-%COMP%] {\r\n        display: none;\r\n        }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb25iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsUUFBUTtJQUdSLDJCQUEyQjtFQUM3Qjs7RUFFQSw2QkFBNkI7O0VBQzdCO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUNBLHlEQUF5RDs7RUFDekQ7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBQ0E7O01BRUksU0FBUztNQUNULFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWiwrQkFBK0I7RUFDbkM7O0VBQ0E7TUFDSTtRQUNFLGFBQWE7UUFDYjtFQUNOIiwiZmlsZSI6Imljb25iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDIlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgaWNvbiBiYXIgbGlua3MgKi9cclxuICAuaWNvbi1iYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLyogU3R5bGUgdGhlIHNvY2lhbCBtZWRpYSBpY29ucyB3aXRoIGNvbG9yLCBpZiB5b3Ugd2FudCAqL1xyXG4gIC5pY29uLWJhciBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmFkZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnlvdXR1YmUge1xyXG4gICAgYmFja2dyb3VuZDogI2JiMDAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnZlcnQtbGluZVxyXG4gIHtcclxuICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIGhlaWdodDogOHJlbTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzMyYWRmZjtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpIGFuZCAobWluLXdpZHRoOjMwMHB4KXtcclxuICAgICAgLmljb24tYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iconbar',
                templateUrl: './iconbar.component.html',
                styleUrls: ['./iconbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ij5Q":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class GalleryComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 37, vars: 0, consts: [[1, "container-gallery"], [1, "subhead"], ["data-aos", "fade-up", "data-aos-duration", "1500"], [1, "gallery-container"], ["data-aos", "zoom-in-right", "data-aos-duration", "1500", 1, "gallery"], ["target", "_blank", "href", "projects/CALIZSKATES/Index.html"], ["src", "assets/project1.png", "alt", "Cinque Terre", "width", "600", "height", "600"], [1, "desc"], ["data-aos", "zoom-in-left", "data-aos-duration", "1500", 1, "gallery"], ["target", "_blank", "href", "projects/portfolioV1/portfoliov1.html"], ["src", "assets/project2.jpg", "alt", "Forest", "width", "600", "height", "600"], ["target", "_blank", "href", "projects/the_ecology_site/index.html"], ["src", "assets/project3.jpg", "alt", "Northern Lights", "width", "600", "height", "600"], ["href", "https://glow-potions.com/"], ["src", "assets/project4.jpg", "alt", "Mountains", "width", "600", "height", "600"], ["target", "_blank", "href", "https://dentalscheduler.000webhostapp.com/"], ["src", "assets/project5.jpg", "alt", "Mountains", "width", "600", "height", "600"], ["target", "_blank", "href", "https://piolopineda.000webhostapp.com/"], ["src", "assets/project6.jpg", "alt", "Mountains", "width", "600", "height", "600"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects I've Worked on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "These are some of my most notable projects that I've built over the years of my stay in college.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "An online retail store for Caliz Skate Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Web Portfolio Version 1-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "An online community site for nature lovers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "A promotional website for glow potions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "An online scheduler made with php and mysql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Web Portfolio V2-2020 Made using wordpress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-gallery[_ngcontent-%COMP%]{\r\n    padding-top: 6em;\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #121212;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: #CACACA;\r\n}\r\n.container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-top: 2em;\r\n    font-family: roboto mono;\r\n    font-size: 12pt;\r\n    color:#CACACA;\r\n    margin-bottom: 5%;\r\n}\r\n.gallery-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 200px;\r\n}\r\n.gallery[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n}\r\ndiv.gallery[_ngcontent-%COMP%] {\r\nmargin: 20px;\r\nfloat: left;\r\nheight: 300px;\r\nmargin-bottom: 3em;\r\n\r\n}\r\ndiv.gallery[_ngcontent-%COMP%]:hover {\r\nbackground-color: rgb(56, 56, 56);\r\n}\r\ndiv.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: auto;\r\n}\r\ndiv.desc[_ngcontent-%COMP%] {\r\nfont-family: roboto mono;\r\npadding: 15px;\r\ncolor: #cacaca;\r\nfont-size: 10pt;\r\ntext-align: center;\r\nletter-spacing: 1pt;\r\n}\r\n.subhead[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #32adff;\r\n    font-family: roboto;\r\n    margin-bottom: 0%;\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: 1px solid #32adff;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n    .container-gallery[_ngcontent-%COMP%]\r\n    {\r\n        padding-top: 0px;\r\n        height: auto;\r\n    }\r\n    .gallery-container[_ngcontent-%COMP%]\r\n    {\r\n        width: 100%;\r\n        padding-left: 10%;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]\r\n    {\r\n        width: 75%;\r\n    }\r\n    div.gallery[_ngcontent-%COMP%] \r\n    {\r\n        float: none;\r\n    }\r\n    .container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-family: montserrat;\r\n        font-size: 20pt;\r\n        color: #CACACA;\r\n   }\r\n   .container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\r\n   {\r\n       width: 80%;\r\n       margin: auto;\r\n       margin-top: 10%;\r\n       margin-bottom: 10%;\r\n       line-height: 2rem;\r\n       text-align: justify;\r\n       font-size: 10pt;\r\n\r\n    }\r\n}\r\n@media (max-width:1300px) and (min-width:900px){\r\n    .container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 20pt;\r\n   }\r\n   .container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\r\n   {\r\n       width: 70%;\r\n       margin: auto;\r\n       line-height: 2rem;\r\n       font-size: 10pt;\r\n    }\r\n    .gallery-container[_ngcontent-%COMP%]\r\n    {\r\n        width: 100%;\r\n        height: auto;\r\n        padding-left: 15%;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]\r\n    {\r\n        width: 33%;\r\n    }\r\n    div.gallery[_ngcontent-%COMP%] \r\n    {\r\n        float: left;\r\n        height: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0FBQ0EsWUFBWTtBQUNaLFdBQVc7QUFDWCxhQUFhO0FBQ2Isa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBRUE7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaO0FBRUE7QUFDQSx3QkFBd0I7QUFDeEIsYUFBYTtBQUNiLGNBQWM7QUFDZCxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSTs7UUFFSSxnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtJQUNBOztRQUVJLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7SUFDQTs7UUFFSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSx1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLGNBQWM7R0FDbkI7R0FDQTs7T0FFSSxVQUFVO09BQ1YsWUFBWTtPQUNaLGVBQWU7T0FDZixrQkFBa0I7T0FDbEIsaUJBQWlCO09BQ2pCLG1CQUFtQjtPQUNuQixlQUFlOztJQUVsQjtBQUNKO0FBQ0E7SUFDSTs7UUFFSSxlQUFlO0dBQ3BCO0dBQ0E7O09BRUksVUFBVTtPQUNWLFlBQVk7T0FDWixpQkFBaUI7T0FDakIsZUFBZTtJQUNsQjtJQUNBOztRQUVJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0lBQ0E7O1FBRUksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWdhbGxlcnl7XHJcbiAgICBwYWRkaW5nLXRvcDogNmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY29udGFpbmVyLWdhbGxlcnkgaDF7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG59XHJcbi5jb250YWluZXItZ2FsbGVyeSBwe1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90byBtb25vO1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgY29sb3I6I0NBQ0FDQTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5nYWxsZXJ5LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxufVxyXG4uZ2FsbGVyeXtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuZGl2LmdhbGxlcnkge1xyXG5tYXJnaW46IDIwcHg7XHJcbmZsb2F0OiBsZWZ0O1xyXG5oZWlnaHQ6IDMwMHB4O1xyXG5tYXJnaW4tYm90dG9tOiAzZW07XHJcblxyXG59XHJcbmRpdi5nYWxsZXJ5OmhvdmVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xyXG59XHJcblxyXG5kaXYuZ2FsbGVyeSBpbWcge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5kaXYuZGVzYyB7XHJcbmZvbnQtZmFtaWx5OiByb2JvdG8gbW9ubztcclxucGFkZGluZzogMTVweDtcclxuY29sb3I6ICNjYWNhY2E7XHJcbmZvbnQtc2l6ZTogMTBwdDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5sZXR0ZXItc3BhY2luZzogMXB0O1xyXG59XHJcbi5zdWJoZWFke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMmFkZmY7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpIGFuZCAobWluLXdpZHRoOjMwMHB4KXtcclxuICAgIC5jb250YWluZXItZ2FsbGVyeVxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmdhbGxlcnktY29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeVxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcbiAgICBkaXYuZ2FsbGVyeSBcclxuICAgIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItZ2FsbGVyeSBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgICAgICBjb2xvcjogI0NBQ0FDQTtcclxuICAgfVxyXG4gICAuY29udGFpbmVyLWdhbGxlcnkgcFxyXG4gICB7XHJcbiAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG5cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDoxMzAwcHgpIGFuZCAobWluLXdpZHRoOjkwMHB4KXtcclxuICAgIC5jb250YWluZXItZ2FsbGVyeSBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgfVxyXG4gICAuY29udGFpbmVyLWdhbGxlcnkgcFxyXG4gICB7XHJcbiAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeS1jb250YWluZXJcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeVxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICB9XHJcbiAgICBkaXYuZ2FsbGVyeSBcclxuICAgIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _iconbar_iconbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconbar/iconbar.component */ "FAw3");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");








class AppComponent {
    constructor() {
        this.title = 'midterm-proj';
    }
    scroll(el) {
        el.scrollIntoView();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 51, vars: 0, consts: [["src", "assets/logo.png", "alt", "", "height", "50px", 3, "click"], [3, "click"], ["href", "assets/resume.pdf", 1, "resume-link"], ["target0", ""], [1, "container-header"], [1, "container-1"], [1, "inner-head"], [1, "inner-head2"], [1, "container-2"], ["href", "mailto:piologabrielpineda@gmail.com"], ["target1", ""], ["target2", ""], ["target3", ""], ["target4", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.scroll(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38); return ctx.scroll(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45); return ctx.scroll(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return ctx.scroll(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48); return ctx.scroll(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Front End ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Hello, my name is Piolo Gabriel Pineda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "I specialize in front end development and designing user interfaces. Some technologies I've worked with are HTML5, CSS3, Javascript, Angular, Wordpress, Python, and PHP. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u200B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "CONTACT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-iconbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-footer");
    } }, directives: [_iconbar_iconbar_component__WEBPACK_IMPORTED_MODULE_1__["IconbarComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');\r\nnav[_ngcontent-%COMP%]{\r\n    height: 5rem;\r\n    background-color: #121212;\r\n    text-align: right;\r\n    display: inline-flex;\r\n    position: sticky;\r\n    top: 0px;\r\n    width: 100%;\r\n    z-index: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    height: 0px;\r\n    width: 50%;\r\n}\r\nnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    padding-top: 20px;\r\n    margin-left: 7rem;\r\n    margin-right: 35rem;\r\n}\r\nnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    cursor:pointer;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    margin-right: 2.5em;\r\n    padding-top: 40px;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    font-family: roboto mono;\r\n    font-weight: bold;\r\n    color: rgb(255, 255, 255);\r\n    letter-spacing: 0.1em;\r\n    transition-duration: 500ms;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: #32adff;\r\n    cursor: pointer;\r\n}\r\n.container-header[_ngcontent-%COMP%]\r\n{\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 46em;\r\n    background-color: #121212;\r\n    max-height: 46em;\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n}\r\n.container-1[_ngcontent-%COMP%]\r\n{\r\n    width: 40%;\r\n    height: 100%;\r\n    color: #cacaca;\r\n    text-align: right;\r\n    font-family: montserrat;\r\n    font-weight:900;\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n}\r\n.container-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-top: 40%;\r\n}\r\n.inner-head[_ngcontent-%COMP%]{\r\n    font-size: 64pt;\r\n}\r\n.inner-head2[_ngcontent-%COMP%]{\r\n    font-size: 37pt;\r\n    letter-spacing: 2pt;\r\n    color: #32adff;\r\n}\r\n.container-2[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    height: 100%;\r\n    color: #CACACA;\r\n    text-align: left;\r\n    font-family: roboto;\r\n    font-size: 12pt;\r\n}\r\n.container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-top: 40%;\r\n    font-size: 16pt;\r\n    font-weight:900;\r\n    font-family: roboto mono;\r\n    line-height: 2em;\r\n    letter-spacing: 1pt;\r\n    color: #32adff;\r\n}\r\n.container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    text-align: justify;\r\n    line-height: 2em;\r\n    letter-spacing: .5pt;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    border: none;\r\n    width: 30%;\r\n    padding: 1rem;\r\n    padding-left: 1.3rem;\r\n    padding-right: 1.3rem;\r\n    height: 5%;\r\n    font-family: roboto mono;\r\n    font-weight:bold;\r\n    font-size: 10pt;\r\n    letter-spacing: 1pt;\r\n    background-color: #121212;\r\n    color: #32adff;\r\n    transition-duration: 700ms;\r\n    border: 2px solid #32adff;\r\n    text-decoration: none;\r\n    border-radius: 5px;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    background-color: #32adff;\r\n    color: #121212;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n    nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-size: 9pt;\r\n        width: 100%;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n        width: 75%;\r\n        line-height: 2em;\r\n        margin: auto;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n        font-size: 14pt;\r\n        margin: auto;\r\n        margin-bottom: 5%;\r\n        \r\n    }\r\n    .inner-head[_ngcontent-%COMP%]{\r\n        font-size: 40pt;\r\n    }\r\n    .inner-head2[_ngcontent-%COMP%]{\r\n        font-size: 20pt;\r\n        letter-spacing: 2pt;\r\n        color: #32adff;\r\n    }\r\n    .container-1[_ngcontent-%COMP%]\r\n    {\r\n        text-align: center;\r\n        width: 100%;\r\n        font-weight:700;\r\n        margin-left: 0%;\r\n        font-size: 15pt;\r\n        height: 20%;\r\n        margin-top: 50%;\r\n    }\r\n    .container-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        margin: 0%;\r\n    }\r\n    .container-header[_ngcontent-%COMP%]\r\n    {\r\n        overflow: hidden;\r\n        display:block;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        margin-bottom: 10%;\r\n    }\r\n}\r\n@media (max-width:1300px) and (min-width:900px){\r\n    nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-size: 9pt;\r\n        width: 100%;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n        width: 50%;\r\n        line-height: 2em;\r\n        margin: auto;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n        margin: auto;\r\n        margin-top: 0%;\r\n    }\r\n    .container-1[_ngcontent-%COMP%]\r\n    {\r\n        text-align: center;\r\n        width: 100%;\r\n        font-weight:700;\r\n        margin-left: 0%;\r\n        font-size: 15pt;\r\n        height: 20%;\r\n        margin-top: 20%;\r\n        margin-bottom: 5%;\r\n    }\r\n    .container-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 42pt;\r\n        margin: auto;\r\n    }\r\n    .container-header[_ngcontent-%COMP%]\r\n    {\r\n        overflow: hidden;\r\n        display:block;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3RjtBQUN4RiwyRUFBMkU7QUFDM0UsZ0ZBQWdGO0FBQ2hGO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLFlBQVk7UUFDWixpQkFBaUI7O0lBRXJCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGNBQWM7SUFDbEI7SUFDQTs7UUFFSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGVBQWU7UUFDZixlQUFlO1FBQ2YsZUFBZTtRQUNmLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0lBQ0E7O1FBRUksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGNBQWM7SUFDbEI7SUFDQTs7UUFFSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGVBQWU7UUFDZixlQUFlO1FBQ2YsZUFBZTtRQUNmLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTs7UUFFSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubyZkaXNwbGF5PXN3YXAnKTtcclxubmF2e1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxubmF2IHVse1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxubmF2IGltZ3tcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cmVtO1xyXG59XHJcbm5hdiBpbWc6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5uYXYgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbi1yaWdodDogMi41ZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5uYXYgbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8gbW9ubztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG59XHJcbm5hdiBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lci1oZWFkZXJcclxue1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDZlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbi5jb250YWluZXItMVxyXG57XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICNjYWNhY2E7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgZm9udC13ZWlnaHQ6OTAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uY29udGFpbmVyLTEgaDF7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbn1cclxuLmlubmVyLWhlYWR7XHJcbiAgICBmb250LXNpemU6IDY0cHQ7XHJcbn1cclxuLmlubmVyLWhlYWQye1xyXG4gICAgZm9udC1zaXplOiAzN3B0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJwdDtcclxuICAgIGNvbG9yOiAjMzJhZGZmO1xyXG59XHJcbi5jb250YWluZXItMntcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogI0NBQ0FDQTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG59XHJcbi5jb250YWluZXItMiBoMntcclxuICAgIG1hcmdpbi10b3A6IDQwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDtcclxuICAgIGZvbnQtd2VpZ2h0OjkwMDtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8gbW9ubztcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB0O1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbn1cclxuLmNvbnRhaW5lci0yIHB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVwdDtcclxufVxyXG4uY29udGFpbmVyLTIgYXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjNyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjNyZW07XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90byBtb25vO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3MDBtcztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMmFkZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lci0yIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhZGZmO1xyXG4gICAgY29sb3I6ICMxMjEyMTI7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpIGFuZCAobWluLXdpZHRoOjMwMHB4KXtcclxuICAgIG5hdiBsaSBhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLTIgcHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMiBoMntcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuaW5uZXItaGVhZHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHQ7XHJcbiAgICB9XHJcbiAgICAuaW5uZXItaGVhZDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHQ7XHJcbiAgICAgICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLTFcclxuICAgIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0xIGgxXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luOiAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItaGVhZGVyXHJcbiAgICB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0yIHB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjEzMDBweCkgYW5kIChtaW4td2lkdGg6OTAwcHgpe1xyXG4gICAgbmF2IGxpIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0ye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDlwdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0yIGgye1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0xXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMSBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDJwdDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWhlYWRlclxyXG4gICAge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class ProfileComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 21, vars: 0, consts: [[1, "container-profile"], [1, "subhead"], ["data-aos", "zoom-in-left"], [1, "container-both"], ["data-aos", "fade-up", 1, "container-background"], ["href", "https://www.hau.edu.ph/"], [1, "container-image"], ["src", "assets/profile.jpg", "alt", "", "height", "250px", "width", "250px", "data-aos", "zoom-in-left"], ["href", "assets/resume.pdf", 1, "resume-button"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hi, My name is Piolo Gabriel Pineda and I'm a web developer that specializes in front-end development and UX design. I am currently a third year student at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Holy Angel University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " pursuing a degree in information technology with a major in web development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I want to integrate the knowledge and experiences that I have acquired throughout my college carreer into an actual professional environment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-profile[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 30em;\r\n    background-color: #121212;\r\n    overflow: hidden;\r\n    padding-top: 5rem;\r\n}\r\n.container-profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    color: #cacaca;\r\n    font-size: 32pt;\r\n    text-align: center;\r\n    margin-bottom: 5%;\r\n}\r\n.container-both[_ngcontent-%COMP%]\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: inline-flex;\r\n}\r\n.container-background[_ngcontent-%COMP%]{\r\n    height: 75%;\r\n    width: 40%;\r\n    margin-left: 15%;\r\n}\r\n.container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: rgb(167, 167, 167);\r\n    font-family: roboto;\r\n    letter-spacing: .5pt;\r\n    width: 75%;\r\n    text-align: justify;\r\n    line-height: 2rem;\r\n    margin: auto;\r\n    margin-right: 0%;\r\n}\r\n.container-image[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin-left: 5%;\r\n}\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    opacity: 0.2;\r\n    transition-duration: 1000ms;\r\n}\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    opacity: 1;\r\n}\r\n.container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #32adff;\r\n}\r\n.resume-button[_ngcontent-%COMP%]{\r\n    color: #32adff;\r\n    text-decoration: none;\r\n    font-family: roboto mono;\r\n    border: 2px solid #32adff;\r\n    padding: 1.5%;\r\n    margin-left: 10%;\r\n    transition-duration: 1000ms;\r\n    border-radius: 5px;\r\n}\r\n.resume-button[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-color: #32adff;\r\n}\r\n.subhead[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #32adff;\r\n    font-family: roboto;\r\n    margin-bottom: 0%;\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: .5px solid #32adff;\r\n}\r\n@media (max-width:1100px) and (min-width:300px){\r\n    .container-both[_ngcontent-%COMP%]\r\n    {\r\n        height: 100%;\r\n        width: 100%;\r\n        display: block;\r\n        padding-bottom: 10%;\r\n    }\r\n    .container-background[_ngcontent-%COMP%]{\r\n        height: 75%;\r\n        width: 100%;\r\n        margin-left: 0%;\r\n    }\r\n    .container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n        text-align: justify;\r\n        margin:auto;\r\n        line-height: 2rem;\r\n        font-size: 10pt;\r\n    }\r\n    .container-profile[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: auto;\r\n        padding-top: 5rem;\r\n    }\r\n    .container-image[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        width: 75%;\r\n        height: 20%;\r\n        margin: auto;\r\n        margin-top: 5%;\r\n    }\r\n    .container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        height: 200px;\r\n        width: 200px;\r\n    }\r\n    .container-profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 20pt;\r\n    }\r\n    .subhead[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n@media (max-width:1300px) and (min-width:900px){\r\n    .container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n        text-align: justify;\r\n        margin:auto;\r\n        line-height: 2rem;\r\n        font-size: 10pt;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSTs7UUFFSSxZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxZQUFZO1FBQ1osY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1wcm9maWxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xyXG59XHJcbi5jb250YWluZXItcHJvZmlsZSBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgY29sb3I6ICNjYWNhY2E7XHJcbiAgICBmb250LXNpemU6IDMycHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4uY29udGFpbmVyLWJvdGhcclxue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4uY29udGFpbmVyLWJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG59XHJcbi5jb250YWluZXItYmFja2dyb3VuZCBwe1xyXG4gICAgY29sb3I6IHJnYigxNjcsIDE2NywgMTY3KTtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVwdDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG59XHJcbi5jb250YWluZXItaW1hZ2V7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5jb250YWluZXItaW1hZ2UgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG59XHJcbi5jb250YWluZXItaW1hZ2UgaW1nOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4uY29udGFpbmVyLWJhY2tncm91bmQgcCBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbn1cclxuLnJlc3VtZS1idXR0b257XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8gbW9ubztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMmFkZmY7XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ucmVzdW1lLWJ1dHRvbjpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmFkZmY7XHJcbn1cclxuLnN1YmhlYWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAuNXB4IHNvbGlkICMzMmFkZmY7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTEwMHB4KSBhbmQgKG1pbi13aWR0aDozMDBweCl7XHJcbiAgICAuY29udGFpbmVyLWJvdGhcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItYmFja2dyb3VuZHtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWJhY2tncm91bmQgcHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1wcm9maWxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItaW1hZ2V7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1pbWFnZSBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLXByb2ZpbGUgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgfVxyXG4gICAgLnN1YmhlYWR7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDoxMzAwcHgpIGFuZCAobWluLXdpZHRoOjkwMHB4KXtcclxuICAgIC5jb250YWluZXItYmFja2dyb3VuZCBwe1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _iconbar_iconbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./iconbar/iconbar.component */ "FAw3");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _iconbar_iconbar_component__WEBPACK_IMPORTED_MODULE_9__["IconbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _iconbar_iconbar_component__WEBPACK_IMPORTED_MODULE_9__["IconbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class ContactComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 7, vars: 0, consts: [[1, "container-contact"], ["data-aos", "fade-up", "data-aos-duration", "2000"], ["data-aos", "fade-left", "data-aos-duration", "2000"], ["href", "mailto:piologabrielpineda@gmail.com", "data-aos", "zoom-in", "data-aos-duration", "3000"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "I'm always open for new opportunities, my inbox is always available. If you have a project in mind or just want to say hello, then send me a mail and I'll try to get back to you as soon as possible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Let's Talk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-contact[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: #121212;\r\n    height: 100%;\r\n    padding-top: 5em;\r\n    padding-bottom: 15%;\r\n    text-align: center;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: #CACACA;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: roboto;\r\n    font-size: 12pt;\r\n    color: #CACACA;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 3em;\r\n    line-height: 25pt;\r\n    width: 40%;\r\n    margin: auto;\r\n    margin-bottom: 5%;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    font-family: roboto;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border: 2px solid #32adff;\r\n    font-size: 14pt;\r\n    color: #32adff;\r\n    border-radius: 5px;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-color: #32adff;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n    .container-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 20pt;\r\n    }\r\n    .container-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n        width: 60%;\r\n        text-align: justify;\r\n    }\r\n}\r\n@media (max-width:1200px) and (min-width:900px){\r\n    .container-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 20pt;\r\n    }\r\n    .container-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n        width: 50%;\r\n        text-align: justify;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLG1CQUFtQjtJQUN2QjtBQUNKO0FBQ0E7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItY29udGFjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyLWNvbnRhY3QgaDF7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG59XHJcbi5jb250YWluZXItY29udGFjdCBwe1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB0O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jb250YWluZXItY29udGFjdCBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMmFkZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY29udGFpbmVyLWNvbnRhY3QgYTpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmFkZmY7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpIGFuZCAobWluLXdpZHRoOjMwMHB4KXtcclxuICAgIC5jb250YWluZXItY29udGFjdCBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItY29udGFjdCBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTIwMHB4KSBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgICAuY29udGFpbmVyLWNvbnRhY3QgaDFcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWNvbnRhY3QgcHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



class SkillsComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 34, vars: 0, consts: [[1, "container-skills"], [1, "skills-container"], [1, "development-container"], [1, "icon-container"], [1, "design-container"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Technologies I use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "These are some of the technologies that I've recently been working with.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Adobe Illustrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "inVision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-skills[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 5em;\r\n    background-color: #121212;\r\n    width: 100%;\r\n    height: 25rem;\r\n    padding-bottom: 10%;\r\n    padding-top: 15%;\r\n    font-family: montserrat;\r\n}\r\n.container-skills[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: #CACACA;\r\n}\r\n.container-skills[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  color: #CACACA;\r\n  font-family: roboto mono;\r\n  margin: auto;\r\n  margin-bottom: 5rem;\r\n}\r\n.skills-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 80%;\r\n    display: inline-flex;\r\n}\r\n.development-container[_ngcontent-%COMP%]{\r\n  margin-left: 25%;\r\n  width: 25%;\r\n  border: 3px solid #323232;\r\n  border-right: none;\r\n  height: 100%;\r\n}\r\n.development-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-size: 24pt;\r\n  color: #32adff;\r\n}\r\n.design-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-size: 24pt;\r\n  color: #cacaca;\r\n}\r\n.development-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  color: #CACACA;\r\n  font-family: roboto mono;\r\n  font-size: 12pt;\r\n  list-style-type: square;\r\n  margin-top: 1rem;\r\n  list-style-type: symbols('>');\r\n\r\n}\r\n.design-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  color: #CACACA;\r\n  font-family: roboto mono;\r\n  font-size: 12pt;\r\n  list-style-type: square;\r\n  margin-top: 1rem;\r\n  list-style-type: symbols('>');\r\n\r\n}\r\n.design-container[_ngcontent-%COMP%]{\r\n  width: 25%;\r\n  border: 3px solid #32adff;\r\n  border-left: none;\r\n  height: 100%;\r\n}\r\n.icon-container[_ngcontent-%COMP%]\r\n{\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n  margin-left: 20%;\r\n  height: auto;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n  .container-skills[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 20pt;\r\n}\r\n.container-skills[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 10pt;\r\n  width: 70%;\r\n  line-height: 1.5rem;\r\n}\r\n.development-container[_ngcontent-%COMP%]{\r\n  margin-left: 10%;\r\n  width: 40%;\r\n}\r\n.design-container[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n}\r\n.design-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  font-size: 10pt\r\n}\r\n.development-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  font-size: 10pt\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsNkJBQTZCOztBQUUvQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiw2QkFBNkI7O0FBRS9CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsZUFBZTtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0U7QUFDRjtBQUNBIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXItc2tpbGxzXHJcbntcclxuICAgIHBhZGRpbmctdG9wOiA1ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxufVxyXG4uY29udGFpbmVyLXNraWxscyBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgZm9udC1zaXplOiAzMnB0O1xyXG4gICAgY29sb3I6ICNDQUNBQ0E7XHJcbn1cclxuLmNvbnRhaW5lci1za2lsbHMgcHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNDQUNBQ0E7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90byBtb25vO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG59XHJcbi5za2lsbHMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbi5kZXZlbG9wbWVudC1jb250YWluZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICB3aWR0aDogMjUlO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzMjMyMzI7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uZGV2ZWxvcG1lbnQtY29udGFpbmVyIGgxe1xyXG4gIGZvbnQtc2l6ZTogMjRwdDtcclxuICBjb2xvcjogIzMyYWRmZjtcclxufVxyXG4uZGVzaWduLWNvbnRhaW5lciBoMXtcclxuICBmb250LXNpemU6IDI0cHQ7XHJcbiAgY29sb3I6ICNjYWNhY2E7XHJcbn1cclxuLmRldmVsb3BtZW50LWNvbnRhaW5lciB1bCBsaXtcclxuICBjb2xvcjogI0NBQ0FDQTtcclxuICBmb250LWZhbWlseTogcm9ib3RvIG1vbm87XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBzeW1ib2xzKCc+Jyk7XHJcblxyXG59XHJcbi5kZXNpZ24tY29udGFpbmVyIHVsIGxpe1xyXG4gIGNvbG9yOiAjQ0FDQUNBO1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG8gbW9ubztcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IHN5bWJvbHMoJz4nKTtcclxuXHJcbn1cclxuLmRlc2lnbi1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMzJhZGZmO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uaWNvbi1jb250YWluZXJcclxue1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSBhbmQgKG1pbi13aWR0aDozMDBweCl7XHJcbiAgLmNvbnRhaW5lci1za2lsbHMgaDF7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbn1cclxuLmNvbnRhaW5lci1za2lsbHMgcHtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcbi5kZXZlbG9wbWVudC1jb250YWluZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5kZXNpZ24tY29udGFpbmVye1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuLmRlc2lnbi1jb250YWluZXIgdWwgbGl7XHJcbiAgZm9udC1zaXplOiAxMHB0XHJcbn1cclxuLmRldmVsb3BtZW50LWNvbnRhaW5lciB1bCBsaXtcclxuICBmb250LXNpemU6IDEwcHRcclxufVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This portfolio was designed & coded by Piolo Pineda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #121212;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    font-family: roboto mono;\r\n    padding-bottom: 5em;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: normal;\r\n    font-size: 10pt;\r\n    color: #32adff;\r\n    letter-spacing: 1pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90byBtb25vO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVlbTtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map