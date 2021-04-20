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
    } }, styles: [".icon-bar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 2%;\r\n    transform: translateY(-50%);\r\n  }\r\n  \r\n  \r\n  \r\n  .icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 16px;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 20px;\r\n    width: 50%;\r\n  }\r\n  \r\n  \r\n  \r\n  .icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #32adff;\r\n  }\r\n  \r\n  .facebook[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n    width: 50px;\r\n  }\r\n  \r\n  .twitter[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n  }\r\n  \r\n  .google[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n  }\r\n  \r\n  .linkedin[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n  }\r\n  \r\n  .youtube[_ngcontent-%COMP%] {\r\n    background: #bb0000;\r\n    color: white;\r\n  }\r\n  \r\n  .vert-line[_ngcontent-%COMP%]\r\n  {\r\n      width: 0%;\r\n      margin: auto;\r\n      margin-top: 1rem;\r\n      margin-bottom: 1rem;\r\n      height: 8rem;\r\n      border-right: .5px solid #32adff;\r\n  }\r\n  \r\n  @media (max-width:900px) and (min-width:300px){\r\n      .icon-bar[_ngcontent-%COMP%] {\r\n        display: none;\r\n        }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb25iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsUUFBUTtJQUdSLDJCQUEyQjtFQUM3Qjs7RUFFQSw2QkFBNkI7O0VBQzdCO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUNBLHlEQUF5RDs7RUFDekQ7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBQ0E7O01BRUksU0FBUztNQUNULFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixnQ0FBZ0M7RUFDcEM7O0VBQ0E7TUFDSTtRQUNFLGFBQWE7UUFDYjtFQUNOIiwiZmlsZSI6Imljb25iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDIlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgaWNvbiBiYXIgbGlua3MgKi9cclxuICAuaWNvbi1iYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLyogU3R5bGUgdGhlIHNvY2lhbCBtZWRpYSBpY29ucyB3aXRoIGNvbG9yLCBpZiB5b3Ugd2FudCAqL1xyXG4gIC5pY29uLWJhciBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmFkZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnlvdXR1YmUge1xyXG4gICAgYmFja2dyb3VuZDogI2JiMDAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnZlcnQtbGluZVxyXG4gIHtcclxuICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIGhlaWdodDogOHJlbTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAuNXB4IHNvbGlkICMzMmFkZmY7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSBhbmQgKG1pbi13aWR0aDozMDBweCl7XHJcbiAgICAgIC5pY29uLWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgfSJdfQ== */"] });
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
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 37, vars: 0, consts: [[1, "container-gallery"], [1, "subhead"], ["data-aos", "fade-up", "data-aos-duration", "1500"], [1, "gallery-container"], ["data-aos", "zoom-in-right", "data-aos-duration", "1500", 1, "gallery"], ["target", "_blank", "href", "projects/CALIZSKATES/Index.html"], ["src", "assets/project1.png", "alt", "Cinque Terre", "width", "600", "height", "600"], [1, "desc"], ["data-aos", "zoom-in-left", "data-aos-duration", "1500", 1, "gallery"], ["target", "_blank", "href", "projects/portfolioV1/portfoliov1.html"], ["src", "assets/project2.jpg", "alt", "Forest", "width", "600", "height", "600"], ["target", "_blank", "href", "projects/the_ecology_site/index.html"], ["src", "assets/project3.jpg", "alt", "Northern Lights", "width", "600", "height", "600"], ["href", "https://glow-potions.com/"], ["src", "assets/project4.jpg", "alt", "Mountains", "width", "600", "height", "600"], ["target", "_blank", "href", "assets/project5.JPG"], ["src", "assets/project5.jpg", "alt", "Mountains", "width", "600", "height", "600"], ["target", "_blank", "href", "assets/project2.png"], ["src", "assets/project2.png", "alt", "Mountains", "width", "600", "height", "600"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Projects I've Worked on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Here are some of my previous web development projects. The technologies that I frequently use are bootstrap, vanilla JS, and more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "An online retail store for Caliz Skate Shop (ACTIVE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Web Portfolio Version 1-2019 (ACTIVE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "An online community site for nature lovers (ACTIVE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "A promotional website for glow potions. (ACTIVE)");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "An online community site for food lovers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-gallery[_ngcontent-%COMP%]{\r\n    padding-top: 6em;\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #121212;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: #CACACA;\r\n}\r\n.container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-top: 2em;\r\n    letter-spacing: .5pt;\r\n    font-family: roboto;\r\n    font-size: 12pt;\r\n    color:rgb(167, 167, 167);\r\n    margin-bottom: 5%;\r\n}\r\n.gallery-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 200px;\r\n}\r\n.gallery[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n}\r\ndiv.gallery[_ngcontent-%COMP%] {\r\nmargin: 20px;\r\nfloat: left;\r\nheight: 300px;\r\nmargin-bottom: 3em;\r\n\r\n}\r\ndiv.desc[_ngcontent-%COMP%]\r\n{\r\n    font-family: roboto;\r\n}\r\ndiv.gallery[_ngcontent-%COMP%]:hover {\r\nbackground-color: rgb(56, 56, 56);\r\n}\r\ndiv.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: auto;\r\n}\r\ndiv.desc[_ngcontent-%COMP%] {\r\npadding: 15px;\r\ncolor: rgb(141, 141, 141);\r\nfont-size: 10pt;\r\ntext-align: center;\r\nletter-spacing: 1pt;\r\n}\r\n.subhead[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #32adff;\r\n    font-family: roboto;\r\n    margin-bottom: 0%;\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: 1px solid #32adff;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n    .container-gallery[_ngcontent-%COMP%]\r\n    {\r\n        padding-top: 0px;\r\n        height: auto;\r\n    }\r\n    .gallery-container[_ngcontent-%COMP%]\r\n    {\r\n        width: 100%;\r\n        padding-left: 10%;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]\r\n    {\r\n        width: 75%;\r\n    }\r\n    div.gallery[_ngcontent-%COMP%] \r\n    {\r\n        float: none;\r\n    }\r\n    .container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-family: montserrat;\r\n        font-size: 20pt;\r\n        color: #CACACA;\r\n   }\r\n   .container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\r\n   {\r\n       width: 80%;\r\n       margin: auto;\r\n       margin-top: 10%;\r\n       margin-bottom: 10%;\r\n       line-height: 2rem;\r\n       text-align: justify;\r\n       font-size: 10pt;\r\n\r\n    }\r\n}\r\n@media (max-width:1300px) and (min-width:900px){\r\n    .container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 20pt;\r\n   }\r\n   .container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\r\n   {\r\n       width: 70%;\r\n       margin: auto;\r\n       line-height: 2rem;\r\n       font-size: 10pt;\r\n    }\r\n    .gallery-container[_ngcontent-%COMP%]\r\n    {\r\n        width: 100%;\r\n        height: auto;\r\n        padding-left: 15%;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]\r\n    {\r\n        width: 33%;\r\n    }\r\n    div.gallery[_ngcontent-%COMP%] \r\n    {\r\n        float: left;\r\n        height: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1gsYUFBYTtBQUNiLGtCQUFrQjs7QUFFbEI7QUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUVBO0FBQ0EsYUFBYTtBQUNiLHlCQUF5QjtBQUN6QixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSTs7UUFFSSxnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtJQUNBOztRQUVJLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7SUFDQTs7UUFFSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSx1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLGNBQWM7R0FDbkI7R0FDQTs7T0FFSSxVQUFVO09BQ1YsWUFBWTtPQUNaLGVBQWU7T0FDZixrQkFBa0I7T0FDbEIsaUJBQWlCO09BQ2pCLG1CQUFtQjtPQUNuQixlQUFlOztJQUVsQjtBQUNKO0FBQ0E7SUFDSTs7UUFFSSxlQUFlO0dBQ3BCO0dBQ0E7O09BRUksVUFBVTtPQUNWLFlBQVk7T0FDWixpQkFBaUI7T0FDakIsZUFBZTtJQUNsQjtJQUNBOztRQUVJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0lBQ0E7O1FBRUksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWdhbGxlcnl7XHJcbiAgICBwYWRkaW5nLXRvcDogNmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY29udGFpbmVyLWdhbGxlcnkgaDF7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG59XHJcbi5jb250YWluZXItZ2FsbGVyeSBwe1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHQ7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgY29sb3I6cmdiKDE2NywgMTY3LCAxNjcpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuLmdhbGxlcnktY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xyXG59XHJcbi5nYWxsZXJ5e1xyXG4gICAgd2lkdGg6IDM1JTtcclxufVxyXG5kaXYuZ2FsbGVyeSB7XHJcbm1hcmdpbjogMjBweDtcclxuZmxvYXQ6IGxlZnQ7XHJcbmhlaWdodDogMzAwcHg7XHJcbm1hcmdpbi1ib3R0b206IDNlbTtcclxuXHJcbn1cclxuZGl2LmRlc2Ncclxue1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxufVxyXG5kaXYuZ2FsbGVyeTpob3ZlciB7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcclxufVxyXG5cclxuZGl2LmdhbGxlcnkgaW1nIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogYXV0bztcclxufVxyXG5cclxuZGl2LmRlc2Mge1xyXG5wYWRkaW5nOiAxNXB4O1xyXG5jb2xvcjogcmdiKDE0MSwgMTQxLCAxNDEpO1xyXG5mb250LXNpemU6IDEwcHQ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubGV0dGVyLXNwYWNpbmc6IDFwdDtcclxufVxyXG4uc3ViaGVhZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzJhZGZmO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzJhZGZmO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSBhbmQgKG1pbi13aWR0aDozMDBweCl7XHJcbiAgICAuY29udGFpbmVyLWdhbGxlcnlcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5LWNvbnRhaW5lclxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgfVxyXG4gICAgLmdhbGxlcnlcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG4gICAgZGl2LmdhbGxlcnkgXHJcbiAgICB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWdhbGxlcnkgaDFcclxuICAgIHtcclxuICAgICAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICAgICAgY29sb3I6ICNDQUNBQ0E7XHJcbiAgIH1cclxuICAgLmNvbnRhaW5lci1nYWxsZXJ5IHBcclxuICAge1xyXG4gICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTMwMHB4KSBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgICAuY29udGFpbmVyLWdhbGxlcnkgaDFcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgIH1cclxuICAgLmNvbnRhaW5lci1nYWxsZXJ5IHBcclxuICAge1xyXG4gICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgfVxyXG4gICAgLmdhbGxlcnktY29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gICAgfVxyXG4gICAgLmdhbGxlcnlcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgfVxyXG4gICAgZGl2LmdhbGxlcnkgXHJcbiAgICB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59Il19 */"] });
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
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 46, vars: 0, consts: [[3, "click"], ["href", "assets/resume.pdf", 1, "resume-link"], [1, "container-header"], [1, "container-1"], [1, "container-2"], ["href", "mailto:piologabrielpineda@gmail.com"], ["target0", ""], ["target1", ""], ["target2", ""], ["target3", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx.scroll(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); return ctx.scroll(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); return ctx.scroll(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43); return ctx.scroll(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Front End ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hello, my name is Piolo Gabriel Pineda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "I specialize in front end development and designing user interfaces. Some technologies I've worked with are HTML5, CSS3, Javascript, Angular, Wordpress, Python, and PHP. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u200B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-iconbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-footer");
    } }, directives: [_iconbar_iconbar_component__WEBPACK_IMPORTED_MODULE_1__["IconbarComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\nnav[_ngcontent-%COMP%]{\r\n    height: 0px;\r\n    text-align: right;\r\n    position: sticky;\r\n    top: 0px;\r\n    width: 100%;\r\n    z-index: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    height: 0px;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    margin-right: 2.5em;\r\n    padding-top: 40px;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    font-family: montserrat;\r\n    font-weight: bold;\r\n    color: rgb(255, 255, 255);\r\n    letter-spacing: 0.1em;\r\n    transition-duration: 500ms;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: #32adff;\r\n    cursor: pointer;\r\n}\r\n.container-header[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 46em;\r\n    background-color: #121212;\r\n    max-height: 46em;\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n}\r\n.container-1[_ngcontent-%COMP%]\r\n{\r\n    width: 40%;\r\n    height: 100%;\r\n    color: #cacaca;\r\n    text-align: right;\r\n    font-family: montserrat;\r\n    font-weight:900;\r\n    font-size: 25pt;\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n}\r\n.container-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-top: 40%;\r\n}\r\n.container-2[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    height: 100%;\r\n    color: #CACACA;\r\n    text-align: left;\r\n    font-family: roboto;\r\n    font-size: 12pt;\r\n}\r\n.container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-top: 40%;\r\n    font-size: 16pt;\r\n    font-weight:900;\r\n    line-height: 2em;\r\n    letter-spacing: 2pt;\r\n    color: #32adff;\r\n}\r\n.container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: justify;\r\n    line-height: 2em;\r\n    letter-spacing: .5pt;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    border: none;\r\n    width: 30%;\r\n    padding: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    height: 5%;\r\n    font-family: roboto;\r\n    font-weight:500;\r\n    letter-spacing: .5pt;\r\n    background-color: #121212;\r\n    border: 2px solid #32adff;\r\n    color: #32adff;\r\n    transition-duration: 1000ms;\r\n    text-decoration: none;\r\n    border-radius: 5px;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    background-color: #32adff;\r\n    color: black;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n    nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-size: 9pt;\r\n        width: 100%;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n        width: 75%;\r\n        line-height: 2em;\r\n        margin: auto;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        margin-top: 0%;\r\n        width: 75%;\r\n        margin: auto;\r\n    }\r\n    .container-1[_ngcontent-%COMP%]\r\n    {\r\n        text-align: center;\r\n        width: 100%;\r\n        font-weight:700;\r\n        margin-left: 0%;\r\n        font-size: 15pt;\r\n        height: 20%;\r\n        margin-top: 50%;\r\n    }\r\n    .container-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        margin: 0%;\r\n    }\r\n    .container-header[_ngcontent-%COMP%]\r\n    {\r\n        overflow: hidden;\r\n        display:block;\r\n    }\r\n}\r\n@media (max-width:1300px) and (min-width:900px){\r\n    nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-size: 9pt;\r\n        width: 100%;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n        width: 50%;\r\n        line-height: 2em;\r\n        margin: auto;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n        margin: auto;\r\n        margin-top: 0%;\r\n    }\r\n    .container-1[_ngcontent-%COMP%]\r\n    {\r\n        text-align: center;\r\n        width: 100%;\r\n        font-weight:700;\r\n        margin-left: 0%;\r\n        font-size: 15pt;\r\n        height: 20%;\r\n        margin-top: 20%;\r\n        margin-bottom: 5%;\r\n    }\r\n    .container-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 42pt;\r\n        margin: auto;\r\n    }\r\n    .container-header[_ngcontent-%COMP%]\r\n    {\r\n        overflow: hidden;\r\n        display:block;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3RjtBQUN4RiwyRUFBMkU7QUFDM0U7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTs7UUFFSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGVBQWU7UUFDZixlQUFlO1FBQ2YsZUFBZTtRQUNmLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0lBQ0E7O1FBRUksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixjQUFjO0lBQ2xCO0lBQ0E7O1FBRUksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGVBQWU7UUFDZixXQUFXO1FBQ1gsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBOztRQUVJLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7O1FBRUksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcclxubmF2e1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5uYXYgdWx7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG59XHJcbm5hdiBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVlbTtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbm5hdiBsaSBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxufVxyXG5uYXYgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjMzJhZGZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250YWluZXItaGVhZGVyXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxuICAgIG1heC1oZWlnaHQ6IDQ2ZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLmNvbnRhaW5lci0xXHJcbntcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogI2NhY2FjYTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgICBmb250LXdlaWdodDo5MDA7XHJcbiAgICBmb250LXNpemU6IDI1cHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5jb250YWluZXItMSBoMXtcclxuICAgIG1hcmdpbi10b3A6IDQwJTtcclxufVxyXG4uY29udGFpbmVyLTJ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICNDQUNBQ0E7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxufVxyXG4uY29udGFpbmVyLTIgaDJ7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgICBmb250LXNpemU6IDE2cHQ7XHJcbiAgICBmb250LXdlaWdodDo5MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJwdDtcclxuICAgIGNvbG9yOiAjMzJhZGZmO1xyXG59XHJcbi5jb250YWluZXItMiBwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB0O1xyXG59XHJcbi5jb250YWluZXItMiBhe1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMyYWRmZjtcclxuICAgIGNvbG9yOiAjMzJhZGZmO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jb250YWluZXItMiBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyYWRmZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo5MDBweCkgYW5kIChtaW4td2lkdGg6MzAwcHgpe1xyXG4gICAgbmF2IGxpIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0ye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDlwdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0yIGgye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0xXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMSBoMVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbjogMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWhlYWRlclxyXG4gICAge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDoxMzAwcHgpIGFuZCAobWluLXdpZHRoOjkwMHB4KXtcclxuICAgIG5hdiBsaSBhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLTIgcHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMiBoMntcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMVxyXG4gICAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLTEgaDFcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDQycHQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1oZWFkZXJcclxuICAgIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcbn0iXX0= */"] });
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
    } }, styles: [".container-profile[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 30em;\r\n    background-color: #121212;\r\n    overflow: hidden;\r\n    padding-top: 5rem;\r\n}\r\n.container-profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    color: #cacaca;\r\n    font-size: 32pt;\r\n    text-align: center;\r\n    margin-bottom: 5%;\r\n}\r\n.container-both[_ngcontent-%COMP%]\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: inline-flex;\r\n}\r\n.container-background[_ngcontent-%COMP%]{\r\n    height: 75%;\r\n    width: 40%;\r\n    margin-left: 15%;\r\n}\r\n.container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: rgb(167, 167, 167);\r\n    font-family: roboto;\r\n    letter-spacing: .5pt;\r\n    width: 75%;\r\n    text-align: justify;\r\n    line-height: 2rem;\r\n    margin: auto;\r\n    margin-right: 0%;\r\n}\r\n.container-image[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin-left: 5%;\r\n}\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    opacity: 0.2;\r\n    transition-duration: 1000ms;\r\n}\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    opacity: 1;\r\n}\r\n.container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #32adff;\r\n}\r\n.resume-button[_ngcontent-%COMP%]{\r\n    color: #32adff;\r\n    text-decoration: none;\r\n    font-family: roboto;\r\n    border: 2px solid #32adff;\r\n    padding: 2.5%;\r\n    margin-left: 10%;\r\n    transition-duration: 1000ms;\r\n    border-radius: 5px;\r\n}\r\n.resume-button[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-color: #32adff;\r\n}\r\n.subhead[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #32adff;\r\n    font-family: roboto;\r\n    margin-bottom: 0%;\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: .5px solid #32adff;\r\n}\r\n@media (max-width:1100px) and (min-width:300px){\r\n    .container-both[_ngcontent-%COMP%]\r\n    {\r\n        height: 100%;\r\n        width: 100%;\r\n        display: block;\r\n        padding-bottom: 10%;\r\n    }\r\n    .container-background[_ngcontent-%COMP%]{\r\n        height: 75%;\r\n        width: 100%;\r\n        margin-left: 0%;\r\n    }\r\n    .container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n        text-align: justify;\r\n        margin:auto;\r\n        line-height: 2rem;\r\n        font-size: 10pt;\r\n    }\r\n    .container-profile[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: auto;\r\n        padding-top: 5rem;\r\n    }\r\n    .container-image[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        width: 75%;\r\n        height: 20%;\r\n        margin: auto;\r\n        margin-top: 5%;\r\n    }\r\n    .container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        height: 200px;\r\n        width: 200px;\r\n    }\r\n    .container-profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 20pt;\r\n    }\r\n    .subhead[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n@media (max-width:1300px) and (min-width:900px){\r\n    .container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n        text-align: justify;\r\n        margin:auto;\r\n        line-height: 2rem;\r\n        font-size: 10pt;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSTs7UUFFSSxZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxZQUFZO1FBQ1osY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1wcm9maWxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xyXG59XHJcbi5jb250YWluZXItcHJvZmlsZSBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgY29sb3I6ICNjYWNhY2E7XHJcbiAgICBmb250LXNpemU6IDMycHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4uY29udGFpbmVyLWJvdGhcclxue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4uY29udGFpbmVyLWJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG59XHJcbi5jb250YWluZXItYmFja2dyb3VuZCBwe1xyXG4gICAgY29sb3I6IHJnYigxNjcsIDE2NywgMTY3KTtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVwdDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG59XHJcbi5jb250YWluZXItaW1hZ2V7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5jb250YWluZXItaW1hZ2UgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG59XHJcbi5jb250YWluZXItaW1hZ2UgaW1nOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4uY29udGFpbmVyLWJhY2tncm91bmQgcCBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbn1cclxuLnJlc3VtZS1idXR0b257XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzJhZGZmO1xyXG4gICAgcGFkZGluZzogMi41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnJlc3VtZS1idXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhZGZmO1xyXG59XHJcbi5zdWJoZWFke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogLjVweCBzb2xpZCAjMzJhZGZmO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjExMDBweCkgYW5kIChtaW4td2lkdGg6MzAwcHgpe1xyXG4gICAgLmNvbnRhaW5lci1ib3RoXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWJhY2tncm91bmR7XHJcbiAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1iYWNrZ3JvdW5kIHB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItcHJvZmlsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWltYWdle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItaW1hZ2UgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1wcm9maWxlIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIH1cclxuICAgIC5zdWJoZWFke1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTMwMHB4KSBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgICAuY29udGFpbmVyLWJhY2tncm91bmQgcHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgfVxyXG59Il19 */"] });
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
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 35, vars: 0, consts: [[1, "container-skills"], [1, "subhead"], [1, "skills-container"], ["data-aos", "fade-up", "data-aos-duration", "1200"], [1, "container"], [1, "skills", "html"], [1, "skills", "css"], [1, "skills", "js"], [1, "skills", "php"], [1, "skills", "angular"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "55%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-skills[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 5em;\r\n    background-color: #121212;\r\n    width: 100%;\r\n    height: auto;\r\n    padding-bottom: 10%;\r\n    font-family: montserrat;\r\n    overflow: hidden;\r\n}\r\n.container-skills[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: #CACACA;\r\n}\r\n.skills-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 25em;\r\n}\r\n.skills-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-top: 2em;\r\n    color: white;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  background-color: rgb(255, 255, 255);\r\n  border-radius: 20px;\r\n}\r\n.skills[_ngcontent-%COMP%] {\r\n  text-align: right; \r\n  padding-bottom: 10px;\r\n  height: 10px;\r\n  color: rgb(0, 0, 0);\r\n  border-radius: 20px;\r\n}\r\n.html[_ngcontent-%COMP%] {width: 80%; background-color: #32adff;}\r\n.css[_ngcontent-%COMP%] {width: 80%; background-color: #32adff;}\r\n.js[_ngcontent-%COMP%] {width: 70%; background-color: #32adff;}\r\n.php[_ngcontent-%COMP%] {width: 40%; background-color: #32adff;}\r\n.angular[_ngcontent-%COMP%] {width: 55%; background-color: #32adff;}\r\n@media (max-width:900px) and (min-width:300px){\r\n  .skills-container[_ngcontent-%COMP%]\r\n  {\r\n    padding-left: 0px;\r\n  }\r\n  .container[_ngcontent-%COMP%]\r\n  {\r\n    width: 75%;\r\n    margin: auto;\r\n  }\r\n  .container-skills[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 20pt;\r\n  }\r\n  .skills-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\r\n  {\r\n    margin-left: 15%;\r\n  }\r\n}\r\n@media (max-width:1300px) and (min-width:900px){\r\n  .skills-container[_ngcontent-%COMP%]\r\n  {\r\n    padding-left: 0px;\r\n  }\r\n  .container[_ngcontent-%COMP%]\r\n  {\r\n    width: 60%;\r\n    margin: auto;\r\n  }\r\n  .container-skills[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 20pt;\r\n  }\r\n  .skills-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\r\n  {\r\n    margin-left: 20%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUEsT0FBTyxVQUFVLEVBQUUseUJBQXlCLENBQUM7QUFDN0MsTUFBTSxVQUFVLEVBQUUseUJBQXlCLENBQUM7QUFDNUMsS0FBSyxVQUFVLEVBQUUseUJBQXlCLENBQUM7QUFDM0MsTUFBTSxVQUFVLEVBQUUseUJBQXlCLENBQUM7QUFDNUMsVUFBVSxVQUFVLEVBQUUseUJBQXlCLENBQUM7QUFFaEQ7RUFDRTs7SUFFRSxpQkFBaUI7RUFDbkI7RUFDQTs7SUFFRSxVQUFVO0lBQ1YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFOztJQUVFLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItc2tpbGxzXHJcbntcclxuICAgIHBhZGRpbmctdG9wOiA1ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb250YWluZXItc2tpbGxzIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgICBmb250LXNpemU6IDMycHQ7XHJcbiAgICBjb2xvcjogI0NBQ0FDQTtcclxufVxyXG4uc2tpbGxzLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNWVtO1xyXG59XHJcbi5za2lsbHMtY29udGFpbmVyIHB7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5odG1sIHt3aWR0aDogODAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhZGZmO30gXHJcbi5jc3Mge3dpZHRoOiA4MCU7IGJhY2tncm91bmQtY29sb3I6ICMzMmFkZmY7fSBcclxuLmpzIHt3aWR0aDogNzAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhZGZmO30gXHJcbi5waHAge3dpZHRoOiA0MCU7IGJhY2tncm91bmQtY29sb3I6ICMzMmFkZmY7fSBcclxuLmFuZ3VsYXIge3dpZHRoOiA1NSU7IGJhY2tncm91bmQtY29sb3I6ICMzMmFkZmY7fSBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSBhbmQgKG1pbi13aWR0aDozMDBweCl7XHJcbiAgLnNraWxscy1jb250YWluZXJcclxuICB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lclxyXG4gIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5jb250YWluZXItc2tpbGxzIGgxe1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gIH1cclxuICAuc2tpbGxzLWNvbnRhaW5lciBwXHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTMwMHB4KSBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgLnNraWxscy1jb250YWluZXJcclxuICB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lclxyXG4gIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5jb250YWluZXItc2tpbGxzIGgxe1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gIH1cclxuICAuc2tpbGxzLWNvbnRhaW5lciBwXHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcbn0iXX0= */"] });
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
    } }, styles: ["div[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #121212;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    font-family: roboto;\r\n    padding-bottom: 5em;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: normal;\r\n    font-size: 10pt;\r\n    color: #32adff;\r\n    letter-spacing: 1pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XHJcbn1cclxuaDF7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB0O1xyXG59Il19 */"] });
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