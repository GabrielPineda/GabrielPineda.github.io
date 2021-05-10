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
IconbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconbarComponent, selectors: [["app-iconbar"]], decls: 12, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")], [1, "icon-bar"], [1, "vert-line"], ["href", "https://github.com/GabrielPineda", 1, "facebook"], [1, "fa", "fa-github", "fa-lg"], ["href", "https://twitter.com/PioloGabrielPi1", 1, "twitter"], [1, "fa", "fa-twitter", "fa-lg"], ["href", "https://www.linkedin.com/in/piolo-pineda-345419210", 1, "linkedin"], [1, "fa", "fa-linkedin", "fa-lg"], ["href", "https://www.facebook.com/piologabriel.pineda/", 1, "facebook"], [1, "fa", "fa-facebook", "fa-lg"]], template: function IconbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".icon-bar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 2%;\r\n    transform: translateY(-50%);\r\n  }\r\n  \r\n  \r\n  \r\n  .icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 16px;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 20px;\r\n    width: 50%;\r\n  }\r\n  \r\n  \r\n  \r\n  .icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #3a57ff;\r\n  }\r\n  \r\n  .facebook[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n    width: 50px;\r\n  }\r\n  \r\n  .twitter[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n  }\r\n  \r\n  .google[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n  }\r\n  \r\n  .linkedin[_ngcontent-%COMP%] {\r\n    background: rgba(255, 0, 0, 0);\r\n    color: white;\r\n  }\r\n  \r\n  .youtube[_ngcontent-%COMP%] {\r\n    background: #bb0000;\r\n    color: white;\r\n  }\r\n  \r\n  .vert-line[_ngcontent-%COMP%]\r\n  {\r\n      width: 0%;\r\n      margin: auto;\r\n      margin-top: 1rem;\r\n      margin-bottom: 1rem;\r\n      height: 8rem;\r\n      border-right: 2px solid #715DF2;\r\n  }\r\n  \r\n  @media (max-width:900px) and (min-width:300px){\r\n      .icon-bar[_ngcontent-%COMP%] {\r\n        display: none;\r\n        }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb25iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsUUFBUTtJQUdSLDJCQUEyQjtFQUM3Qjs7RUFFQSw2QkFBNkI7O0VBQzdCO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUNBLHlEQUF5RDs7RUFDekQ7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBQ0E7O01BRUksU0FBUztNQUNULFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWiwrQkFBK0I7RUFDbkM7O0VBQ0E7TUFDSTtRQUNFLGFBQWE7UUFDYjtFQUNOIiwiZmlsZSI6Imljb25iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDIlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgaWNvbiBiYXIgbGlua3MgKi9cclxuICAuaWNvbi1iYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLyogU3R5bGUgdGhlIHNvY2lhbCBtZWRpYSBpY29ucyB3aXRoIGNvbG9yLCBpZiB5b3Ugd2FudCAqL1xyXG4gIC5pY29uLWJhciBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTU3ZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnlvdXR1YmUge1xyXG4gICAgYmFja2dyb3VuZDogI2JiMDAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnZlcnQtbGluZVxyXG4gIHtcclxuICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIGhlaWdodDogOHJlbTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzcxNURGMjtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpIGFuZCAobWluLXdpZHRoOjMwMHB4KXtcclxuICAgICAgLmljb24tYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICB9Il19 */"] });
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
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");




class GalleryComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 92, vars: 0, consts: [[1, "container-gallery"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "gallery-container"], [1, "gallery"], ["target", "_blank", "href", "projects/CALIZSKATES/Index.html"], ["src", "assets/project1.png", "alt", "Cinque Terre", "width", "600", "height", "600"], [1, "desc"], [1, "chips"], ["aria-label", "Fish selection", 1, "chips-container"], ["color", "primary", "selected", "", 1, "chips", 2, "width", "55px"], ["color", "primary", "selected", "", 1, "chips", 2, "width", "45px"], ["color", "primary", "selected", "", 1, "chips", 2, "width", "80px"], ["target", "_blank", "href", "projects/portfolioV1/portfoliov1.html"], ["src", "assets/project2.jpg", "alt", "Forest", "width", "600", "height", "600"], ["target", "_blank", "href", "projects/the_ecology_site/index.html"], ["src", "assets/project3.jpg", "alt", "Northern Lights", "width", "600", "height", "600"], ["color", "primary", "selected", "", 1, "chips", 2, "width", "auto"], ["href", "https://glow-potions.com/"], ["src", "assets/project4.jpg", "alt", "Mountains", "width", "600", "height", "600"], ["target", "_blank", "href", "https://dentalscheduler.000webhostapp.com/"], ["src", "assets/project5.jpg", "alt", "Mountains", "width", "600", "height", "600"], ["target", "_blank", "href", "https://piolopineda.000webhostapp.com/"], ["src", "assets/project6.jpg", "alt", "Mountains", "width", "600", "height", "600"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects I've Worked on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "These are some of my most notable projects that I've built over the years.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "An online retail store for Caliz Skate Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-chip", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The first iteration of my Web Portfolio Version 1-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-chip-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-chip", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-chip", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "An online community site for nature lovers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-chip-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Vue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "A promotional website for glow potions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-chip-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Wordpress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "An online scheduler made with php and mysql for HAU's dental clinic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-chip-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "The second iteration of my Web Portfolio V2-2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-chip-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Wordpress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"]], styles: [".container-gallery[_ngcontent-%COMP%]{\r\n    padding-top: 6em;\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #101010;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: white;\r\n}\r\n.container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: 'nunito sans';\r\n    letter-spacing: .5pt;\r\n    color:#ffffff;\r\n    margin-bottom: 5%;\r\n}\r\n.gallery-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 200px;\r\n}\r\n.gallery[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n}\r\ndiv.gallery[_ngcontent-%COMP%] {\r\nmargin: 20px;\r\nfloat: left;\r\nheight: 350px;\r\nmargin-bottom: 3em;\r\nbackground-color: #161616;\r\npadding-bottom: 15px;\r\ntransition: 300ms;\r\n}\r\ndiv.gallery[_ngcontent-%COMP%]:hover {\r\nbackground-color: rgb(34, 34, 34);\r\ntransition: 300ms;\r\n}\r\n.chips[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    height: 30px;\r\n    margin-left:20%;\r\n}\r\nmat-chip[_ngcontent-%COMP%]{\r\n    max-height: 50px;\r\n    max-width: 90px;\r\n    font-size: 9pt;\r\n    padding: 0px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    width: 32px;\r\n    background-color: red;\r\n}\r\ndiv.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: auto;\r\n}\r\ndiv.desc[_ngcontent-%COMP%] {\r\nfont-family: nunito sans;\r\npadding: 15px;\r\ncolor: #ffffff;\r\nfont-size: 11pt;\r\ntext-align: center;\r\nletter-spacing: .5pt;\r\n}\r\n.subhead[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #32adff;\r\n    font-family: roboto;\r\n    margin-bottom: 0%;\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: 1px solid #32adff;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n    .container-gallery[_ngcontent-%COMP%]\r\n    {\r\n        padding-top: 0px;\r\n        height: auto;\r\n    }\r\n    .gallery-container[_ngcontent-%COMP%]\r\n    {\r\n        width: 100%;\r\n        padding-left: 10%;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]\r\n    {\r\n        width: 75%;\r\n    }\r\n    div.gallery[_ngcontent-%COMP%] \r\n    {\r\n        float: none;\r\n    }\r\n    .container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-family: montserrat;\r\n        font-size: 20pt;\r\n        color: #CACACA;\r\n   }\r\n   .container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\r\n   {\r\n       width: 80%;\r\n       margin: auto;\r\n       margin-top: 10%;\r\n       margin-bottom: 10%;\r\n       line-height: 2rem;\r\n       text-align: justify;\r\n       font-size: 10pt;\r\n    }\r\n}\r\n@media (max-width:1300px) and (min-width:900px){\r\n    .container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 20pt;\r\n   }\r\n   .container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\r\n   {\r\n       width: 70%;\r\n       margin: auto;\r\n       line-height: 2rem;\r\n       font-size: 10pt;\r\n    }\r\n    .gallery-container[_ngcontent-%COMP%]\r\n    {\r\n        width: 100%;\r\n        height: auto;\r\n        padding-left: 15%;\r\n    }\r\n    .gallery[_ngcontent-%COMP%]\r\n    {\r\n        width: 33%;\r\n    }\r\n    div.gallery[_ngcontent-%COMP%] \r\n    {\r\n        float: left;\r\n        height: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxpQkFBaUI7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCLGFBQWE7QUFDYixjQUFjO0FBQ2QsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdDQUFnQztBQUNwQztBQUNBO0lBQ0k7O1FBRUksZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7SUFDQTs7UUFFSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0lBQ0E7O1FBRUksV0FBVztJQUNmO0lBQ0E7O1FBRUksdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixjQUFjO0dBQ25CO0dBQ0E7O09BRUksVUFBVTtPQUNWLFlBQVk7T0FDWixlQUFlO09BQ2Ysa0JBQWtCO09BQ2xCLGlCQUFpQjtPQUNqQixtQkFBbUI7T0FDbkIsZUFBZTtJQUNsQjtBQUNKO0FBQ0E7SUFDSTs7UUFFSSxlQUFlO0dBQ3BCO0dBQ0E7O09BRUksVUFBVTtPQUNWLFlBQVk7T0FDWixpQkFBaUI7T0FDakIsZUFBZTtJQUNsQjtJQUNBOztRQUVJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0lBQ0E7O1FBRUksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWdhbGxlcnl7XHJcbiAgICBwYWRkaW5nLXRvcDogNmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDEwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY29udGFpbmVyLWdhbGxlcnkgaDF7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29udGFpbmVyLWdhbGxlcnkgcHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbnVuaXRvIHNhbnMnO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHQ7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuLmdhbGxlcnktY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xyXG59XHJcbi5nYWxsZXJ5e1xyXG4gICAgd2lkdGg6IDM1JTtcclxufVxyXG5kaXYuZ2FsbGVyeSB7XHJcbm1hcmdpbjogMjBweDtcclxuZmxvYXQ6IGxlZnQ7XHJcbmhlaWdodDogMzUwcHg7XHJcbm1hcmdpbi1ib3R0b206IDNlbTtcclxuYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcclxucGFkZGluZy1ib3R0b206IDE1cHg7XHJcbnRyYW5zaXRpb246IDMwMG1zO1xyXG59XHJcbmRpdi5nYWxsZXJ5OmhvdmVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xyXG50cmFuc2l0aW9uOiAzMDBtcztcclxufVxyXG4uY2hpcHN7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjAlO1xyXG59XHJcbm1hdC1jaGlwe1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgIG1heC13aWR0aDogOTBweDtcclxuICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG5kaXYuZ2FsbGVyeSBpbWcge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5kaXYuZGVzYyB7XHJcbmZvbnQtZmFtaWx5OiBudW5pdG8gc2FucztcclxucGFkZGluZzogMTVweDtcclxuY29sb3I6ICNmZmZmZmY7XHJcbmZvbnQtc2l6ZTogMTFwdDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5sZXR0ZXItc3BhY2luZzogLjVwdDtcclxufVxyXG4uc3ViaGVhZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzJhZGZmO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzJhZGZmO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSBhbmQgKG1pbi13aWR0aDozMDBweCl7XHJcbiAgICAuY29udGFpbmVyLWdhbGxlcnlcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5LWNvbnRhaW5lclxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgfVxyXG4gICAgLmdhbGxlcnlcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG4gICAgZGl2LmdhbGxlcnkgXHJcbiAgICB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWdhbGxlcnkgaDFcclxuICAgIHtcclxuICAgICAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICAgICAgY29sb3I6ICNDQUNBQ0E7XHJcbiAgIH1cclxuICAgLmNvbnRhaW5lci1nYWxsZXJ5IHBcclxuICAge1xyXG4gICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDoxMzAwcHgpIGFuZCAobWluLXdpZHRoOjkwMHB4KXtcclxuICAgIC5jb250YWluZXItZ2FsbGVyeSBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgfVxyXG4gICAuY29udGFpbmVyLWdhbGxlcnkgcFxyXG4gICB7XHJcbiAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeS1jb250YWluZXJcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICB9XHJcbiAgICAuZ2FsbGVyeVxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICB9XHJcbiAgICBkaXYuZ2FsbGVyeSBcclxuICAgIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"] });
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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _iconbar_iconbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconbar/iconbar.component */ "FAw3");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");









class AppComponent {
    constructor() {
        this.title = 'midterm-proj';
    }
    scroll(el) {
        el.scrollIntoView();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 51, vars: 0, consts: [["src", "assets/logo.png", "alt", "", "height", "50px", 3, "click"], [3, "click"], ["href", "assets/resume.pdf", 1, "resume-link"], ["target0", ""], [1, "container-header"], [1, "container-2"], [1, "intro-head"], [1, "postion-head"], ["mat-raised-button", "", "color", "primary", "href", "mailto:piologabrielpineda@gmail.com"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["target1", ""], ["target2", ""], ["target3", ""], ["target4", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return ctx.scroll(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45); return ctx.scroll(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PROJECTS");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hello, I am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Piolo Gabriel Pineda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Front End Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "I'm a self proclaimed web developer who specializes in front end development and designing user interfaces. Some technologies I've worked with are HTML5, CSS3, Javascript, Angular, Wordpress, Python, and PHP. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u200B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact Me");
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
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _iconbar_iconbar_component__WEBPACK_IMPORTED_MODULE_2__["IconbarComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["nav[_ngcontent-%COMP%]{\r\n    height: 5rem;\r\n    background-color:rgba(255,0,0,0);\r\n    text-align: right;\r\n    display: inline-flex;\r\n    position: absolute;\r\n    top: 0px;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    height: 0px;\r\n    width: 50%;\r\n}\r\nnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    padding-top: 20px;\r\n    margin-left: 7rem;\r\n    margin-right: 35rem;\r\n}\r\nnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    cursor:pointer;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    margin-right: 2.5em;\r\n    padding-top: 40px;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    font-family: 'lato', 'montserrat', 'sans-serif';\r\n    font-weight: bold;\r\n    color: rgb(255, 255, 255);\r\n    letter-spacing: 0.1em;\r\n    padding-bottom: 10px;\r\n    transition: 300ms;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    transition: 300ms;\r\n    color: #32adff;\r\n    cursor: pointer;\r\n    border-bottom: 2px solid #3f51b5;\r\n}\r\n.container-header[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 7em;\r\n    position: relative;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url(\"/assets/blob-scene-haikei2.png\");\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n}\r\n.container-2[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    height: 100%;\r\n    color: #CACACA;\r\n    text-align: left;\r\n    padding-top: 4em;\r\n}\r\n.container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 64px;\r\n    font-weight:900;\r\n    font-family: montserrat;\r\n    color: #3a57ff ;\r\n    line-height: .8em;\r\n}\r\n.intro-head[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    color: rgb(184, 184, 184);\r\n    font-family: nunito sans;\r\n    letter-spacing: 2px;\r\n}\r\n.postion-head[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-size: 45px;\r\n}\r\n.container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-top: 3%;\r\n    width: 60%;\r\n    text-align: justify;\r\n    font-size: 16px;\r\n    letter-spacing: .5px;\r\n    font-family: 'nunito sans';\r\n    line-height: 25pt;\r\n}\r\n.container-2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]\r\n{\r\n    width: 150px;\r\n    height: 40px;\r\n    font-size: 16px;\r\n    transition: 300ms;\r\n}\r\n.container-2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover\r\n{\r\n    transition: 300ms;\r\n    width: 175px;\r\n    background-color: #bfc9ff;\r\n    height: 50px;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    background-color: #3a57ff;\r\n    width: 15%;\r\n    transition: 300ms;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    width: 20%;\r\n    transition: 300ms;\r\n    background-color: #8f8cff;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n    nav[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-size: 9pt;\r\n        width: 100%;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n        width: 75%;\r\n        line-height: 2em;\r\n        margin: auto;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n        font-size: 25pt;\r\n        margin: auto;\r\n        margin-bottom: 5%;\r\n    }\r\n    .postion-head[_ngcontent-%COMP%]{\r\n        font-size: 20pt;\r\n    }\r\n    .container-header[_ngcontent-%COMP%]\r\n    {\r\n        overflow: hidden;\r\n        display:block;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 12pt;\r\n        width: 70%;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        width: 150px;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n        width: 200px;\r\n    }\r\n}\r\n@media (max-width:1300px) and (min-width:900px){\r\n    nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-size: 9pt;\r\n        width: 100%;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 45pt;\r\n    }\r\n    .postion-head[_ngcontent-%COMP%]{\r\n        font-size: 35pt;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 12pt;\r\n        width: 50%;\r\n        line-height: 2em;\r\n        color: rgb(255, 255, 255);\r\n        margin: auto;\r\n        margin-top: 20px;\r\n    }\r\n    .container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n        margin: auto;\r\n        margin-top: 0%;\r\n    }\r\n    .container-header[_ngcontent-%COMP%]\r\n    {\r\n        overflow: hidden;\r\n        display:block;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLCtDQUErQztJQUMvQyxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixjQUFjO0lBQ2xCO0lBQ0E7O1FBRUksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMCwwLDApO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbm5hdiB1bHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbm5hdiBpbWd7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNXJlbTtcclxufVxyXG5uYXYgaW1nOmhvdmVye1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxubmF2IGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNWVtO1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxubmF2IGxpIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ2xhdG8nLCAnbW9udHNlcnJhdCcsICdzYW5zLXNlcmlmJztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbn1cclxubmF2IGxpIGE6aG92ZXJ7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcclxuICAgIGNvbG9yOiAjMzJhZGZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzZjUxYjU7XHJcbn1cclxuLmNvbnRhaW5lci1oZWFkZXJcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDdlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2Jsb2Itc2NlbmUtaGFpa2VpMi5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lci0ye1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiA0ZW07XHJcbn1cclxuLmNvbnRhaW5lci0yIGgye1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6OTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgICBjb2xvcjogIzNhNTdmZiA7XHJcbiAgICBsaW5lLWhlaWdodDogLjhlbTtcclxufVxyXG4uaW50cm8taGVhZHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiByZ2IoMTg0LCAxODQsIDE4NCk7XHJcbiAgICBmb250LWZhbWlseTogbnVuaXRvIHNhbnM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbi5wb3N0aW9uLWhlYWR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbn1cclxuLmNvbnRhaW5lci0yIHB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICBmb250LWZhbWlseTogJ251bml0byBzYW5zJztcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB0O1xyXG59XHJcbi5jb250YWluZXItMiBidXR0b25cclxue1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbn1cclxuLmNvbnRhaW5lci0yIGJ1dHRvbjpob3ZlclxyXG57XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmM5ZmY7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmNvbnRhaW5lci0yIGF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1N2ZmO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xyXG59XHJcbi5jb250YWluZXItMiBhIGl7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uY29udGFpbmVyLTIgYTpob3ZlcntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZjhjZmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSBhbmQgKG1pbi13aWR0aDozMDBweCl7XHJcbiAgICBuYXZ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLTIgcHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIC5jb250YWluZXItMiBoMntcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVwdDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcbiAgICAucG9zdGlvbi1oZWFke1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItaGVhZGVyXHJcbiAgICB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0yIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLTIgYXtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLTIgYTpob3ZlcntcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTMwMHB4KSBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgICBuYXYgbGkgYXtcclxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLTJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0yIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVwdDtcclxuICAgIH1cclxuICAgIC5wb3N0aW9uLWhlYWR7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0yIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci0yIGgye1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1oZWFkZXJcclxuICAgIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcbn0iXX0= */"] });
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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ProfileComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 23, vars: 0, consts: [[1, "container-profile"], [1, "heading-container"], ["data-aos", "zoom-in-left"], [1, "hori-line"], [1, "container-both"], ["data-aos", "fade-up", "data-aos-offset", "300", 1, "container-background"], ["href", "https://www.hau.edu.ph/"], [1, "container-image"], ["src", "assets/profile.jpg", "alt", "", "height", "250px", "width", "250px", "data-aos", "zoom-in-left", "data-aos-offset", "300"], ["mat-raised-button", "", "color", "primary", "href", "assets/resume.pdf", 1, "resume-button"], ["aria-hidden", "true", 1, "fa", "fa-file"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Let Me Introduce Myself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hi, My name is Piolo Gabriel Pineda and I'm a self proclaimed web developer who specializes in front-end development and UX design. I am currently a third year student at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Holy Angel University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " pursuing a degree in information technology with a major in web development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " I want to integrate the knowledge and experiences that I have acquired throughout my college carreer into an actual professional environment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "My Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]], styles: [".container-profile[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 75%;\r\n    background-image: url('/assets/blob-haikei2.png');\r\n    background-size: cover;\r\n    padding-top: 5rem;\r\n    padding-bottom: 10%;\r\n}\r\n.container-profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    color: white;\r\n    font-size: 32pt;\r\n    text-align: center;\r\n    margin-bottom: 7%;\r\n}\r\n.container-both[_ngcontent-%COMP%]\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: inline-flex;\r\n}\r\n.container-background[_ngcontent-%COMP%]{\r\n    height: 75%;\r\n    width: 40%;\r\n    margin-left: 15%;\r\n}\r\n.container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #cacaca;\r\n    font-family: nunito sans;\r\n    font-size: 16px;\r\n    width: 75%;\r\n    text-align: justify;\r\n    letter-spacing: 1px;\r\n    line-height: 25pt;\r\n    margin: auto;\r\n    margin-right: 0%;\r\n}\r\n.container-image[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin-left: 5%;\r\n}\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    opacity: 0.2;\r\n    transition-duration: 1000ms;\r\n}\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    opacity: 1;\r\n}\r\n.container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #32adff;\r\n}\r\n.container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    text-decoration: underline;\r\n}\r\n.container-image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n    background-color: #3a57ff;\r\n    transition: 300ms;\r\n}\r\n.container-image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n}\r\n.container-image[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    transition: 300ms;\r\n    background-color: #8f8cff;\r\n    width: 40%;\r\n}\r\n@media (max-width:1100px) and (min-width:300px){\r\n    .container-both[_ngcontent-%COMP%]\r\n    {\r\n        height: 100%;\r\n        width: 100%;\r\n        display: block;\r\n        padding-bottom: 10%;\r\n    }\r\n    .container-background[_ngcontent-%COMP%]{\r\n        height: 75%;\r\n        width: 100%;\r\n        margin-left: 0%;\r\n    }\r\n    .container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n        text-align: justify;\r\n        margin:auto;\r\n        line-height: 2rem;\r\n        font-size: 10pt;\r\n    }\r\n    .container-profile[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: auto;\r\n        padding-top: 5rem;\r\n        background-image: none;\r\n        background-color: #101010;\r\n    }\r\n    .container-image[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        width: 75%;\r\n        height: 20%;\r\n        margin: auto;\r\n        margin-top: 5%;\r\n    }\r\n    .container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        height: 200px;\r\n        width: 200px;\r\n    }\r\n    .container-profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 20pt;\r\n    }\r\n    .subhead[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n@media (max-width:1300px) and (min-width:900px){\r\n    .container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        width: 70%;\r\n        text-align: justify;\r\n        margin:auto;\r\n        line-height: 2rem;\r\n        font-size: 10pt;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaURBQWlEO0lBQ2pELHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsVUFBVTtBQUNkO0FBQ0E7SUFDSTs7UUFFSSxZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0Qix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVztRQUNYLFlBQVk7UUFDWixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXByb2ZpbGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2Jsb2ItaGFpa2VpMi5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuLmNvbnRhaW5lci1wcm9maWxlIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMycHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3JTtcclxufVxyXG4uY29udGFpbmVyLWJvdGhcclxue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4uY29udGFpbmVyLWJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG59XHJcbi5jb250YWluZXItYmFja2dyb3VuZCBwe1xyXG4gICAgY29sb3I6ICNjYWNhY2E7XHJcbiAgICBmb250LWZhbWlseTogbnVuaXRvIHNhbnM7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVwdDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbn1cclxuLmNvbnRhaW5lci1pbWFnZXtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLmNvbnRhaW5lci1pbWFnZSBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbn1cclxuLmNvbnRhaW5lci1pbWFnZSBpbWc6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi5jb250YWluZXItYmFja2dyb3VuZCBwIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxufVxyXG4uY29udGFpbmVyLWJhY2tncm91bmQgcCBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmNvbnRhaW5lci1pbWFnZSBhe1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTU3ZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcclxufVxyXG4uY29udGFpbmVyLWltYWdlIGEgaXtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5jb250YWluZXItaW1hZ2UgYTpob3ZlcntcclxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGNmZjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTEwMHB4KSBhbmQgKG1pbi13aWR0aDozMDBweCl7XHJcbiAgICAuY29udGFpbmVyLWJvdGhcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItYmFja2dyb3VuZHtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWJhY2tncm91bmQgcHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1wcm9maWxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWltYWdle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItaW1hZ2UgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1wcm9maWxlIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIH1cclxuICAgIC5zdWJoZWFke1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTMwMHB4KSBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgICAuY29udGFpbmVyLWJhY2tncm91bmQgcHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgfVxyXG59Il19 */"] });
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _iconbar_iconbar_component__WEBPACK_IMPORTED_MODULE_9__["IconbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"]] }); })();
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
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"]
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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ContactComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 8, vars: 0, consts: [[1, "container-contact"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["mat-raised-button", "", "color", "primary", "href", "mailto:piologabrielpineda@gmail.com"], ["aria-hidden", "true", 1, "fa", "fa-envelope"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "I'm always open for new opportunities, my inbox is always available. If you have a project in mind or just want to say hello, then send me a mail and I'll try to get back to you as soon as possible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]], styles: [".container-contact[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50%;\r\n    background-size: cover;\r\n    background-color: #101010;\r\n    text-align: center;\r\n    padding-top: 10em;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: white;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: nunito sans;\r\n    font-size: 12pt;\r\n    color: #ffffff;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 3em;\r\n    line-height: 25pt;\r\n    width: 40%;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 5%;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n    background-color: #3a57ff;\r\n    transition: 300ms;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background-color: #8f8cff;\r\n    width: 15%;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n    .container-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 20pt;\r\n    }\r\n    .container-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n        width: 60%;\r\n        text-align: justify;\r\n    }\r\n    .container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        width: 150px;\r\n    }\r\n    .container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n        width: 200px;\r\n    }\r\n}\r\n@media (max-width:1200px) and (min-width:900px){\r\n    .container-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n    {\r\n        font-size: 20pt;\r\n    }\r\n    .container-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 10pt;\r\n        width: 50%;\r\n        text-align: justify;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtBQUNBO0lBQ0k7O1FBRUksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUNBO0lBQ0k7O1FBRUksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWNvbnRhY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBlbTtcclxufVxyXG4uY29udGFpbmVyLWNvbnRhY3QgaDF7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29udGFpbmVyLWNvbnRhY3QgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBudW5pdG8gc2FucztcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB0O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4uY29udGFpbmVyLWNvbnRhY3QgYXtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1N2ZmO1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbn1cclxuLmNvbnRhaW5lci1jb250YWN0IGEgaXtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5jb250YWluZXItY29udGFjdCBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGNmZjtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpIGFuZCAobWluLXdpZHRoOjMwMHB4KXtcclxuICAgIC5jb250YWluZXItY29udGFjdCBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItY29udGFjdCBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWNvbnRhY3QgYXtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWNvbnRhY3QgYTpob3ZlcntcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6MTIwMHB4KSBhbmQgKG1pbi13aWR0aDo5MDBweCl7XHJcbiAgICAuY29udGFpbmVyLWNvbnRhY3QgaDFcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWNvbnRhY3QgcHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
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
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 36, vars: 0, consts: [[1, "container-skills"], [1, "skills-container"], ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-offset", "350", 1, "development-container"], ["aria-hidden", "true", 1, "fa", "fa-cogs"], [1, "icon-container"], ["data-aos", "fade-down", "data-aos-duration", "1000", "data-aos-offset", "350", 1, "design-container"], ["aria-hidden", "true", 1, "fa", "fa-paint-brush"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Wordpress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Adobe Illustrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-skills[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 5em;\r\n    background-image: url('/assets/blob-scatter-haikei.png');\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 80%;\r\n    padding-bottom: 10%;\r\n    font-family: montserrat;\r\n}\r\n.container-skills[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: white;\r\n}\r\n.container-skills[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  color: white;\r\n  font-family: nunito sans;\r\n  letter-spacing: .5pt;\r\n  margin: auto;\r\n  margin-bottom: 5rem;\r\n}\r\n.skills-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 60%;\r\n    display: inline-flex;\r\n}\r\n.development-container[_ngcontent-%COMP%]{\r\n  border-top-left-radius: 10%;\r\n  border-bottom-left-radius: 10%;\r\n  margin-left: 25%;\r\n  width: 25%;\r\n  background-color: #141414;\r\n  border-right: none;\r\n  height: 100%;\r\n}\r\n.development-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  margin-top: 5%;\r\n  font-size: 24pt;\r\n  color: #cacaca ;\r\n}\r\n.design-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  margin-top: 5%;\r\n  font-size: 24pt;\r\n  color: #3a57ff ;\r\n}\r\n.development-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  color: #CACACA;\r\n  font-family: 'nunito sans';\r\n  font-size: 12pt;\r\n  list-style-type: square;\r\n  margin-top: 1rem;\r\n\r\n}\r\n.design-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  color: #CACACA;\r\n  font-family: 'nunito sans';\r\n  font-size: 12pt;\r\n  list-style-type: square;\r\n  margin-top: 1rem;\r\n\r\n}\r\n.design-container[_ngcontent-%COMP%]{\r\n  border-top-right-radius: 10%;\r\n  border-bottom-right-radius: 10%;\r\n  width: 25%;\r\n  background-color: #141414;\r\n  border-left: none;\r\n  height: 100%;\r\n}\r\n.icon-container[_ngcontent-%COMP%]\r\n{\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n  margin-left: 20%;\r\n  height: auto;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n  .container-skills[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 20pt;\r\n}\r\n.container-skills[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 10pt;\r\n  width: 70%;\r\n  line-height: 1.5rem;\r\n}\r\n.development-container[_ngcontent-%COMP%]{\r\n  margin-left: 10%;\r\n  width: 40%;\r\n}\r\n.design-container[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n}\r\n.design-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  font-size: 10pt\r\n}\r\n.development-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  font-size: 10pt\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsd0RBQXdEO0lBQ3hELHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBOztFQUVFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0U7SUFDRSxlQUFlO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0EiLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lci1za2lsbHNcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDVlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9ibG9iLXNjYXR0ZXItaGFpa2VpLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbn1cclxuLmNvbnRhaW5lci1za2lsbHMgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29udGFpbmVyLXNraWxscyBwe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IG51bml0byBzYW5zO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuNXB0O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG59XHJcbi5za2lsbHMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbi5kZXZlbG9wbWVudC1jb250YWluZXJ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5kZXZlbG9wbWVudC1jb250YWluZXIgaDF7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgZm9udC1zaXplOiAyNHB0O1xyXG4gIGNvbG9yOiAjY2FjYWNhIDtcclxufVxyXG4uZGVzaWduLWNvbnRhaW5lciBoMXtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBmb250LXNpemU6IDI0cHQ7XHJcbiAgY29sb3I6ICMzYTU3ZmYgO1xyXG59XHJcbi5kZXZlbG9wbWVudC1jb250YWluZXIgdWwgbGl7XHJcbiAgY29sb3I6ICNDQUNBQ0E7XHJcbiAgZm9udC1mYW1pbHk6ICdudW5pdG8gc2Fucyc7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG59XHJcbi5kZXNpZ24tY29udGFpbmVyIHVsIGxpe1xyXG4gIGNvbG9yOiAjQ0FDQUNBO1xyXG4gIGZvbnQtZmFtaWx5OiAnbnVuaXRvIHNhbnMnO1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG5cclxufVxyXG4uZGVzaWduLWNvbnRhaW5lcntcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAlO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMCU7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uaWNvbi1jb250YWluZXJcclxue1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSBhbmQgKG1pbi13aWR0aDozMDBweCl7XHJcbiAgLmNvbnRhaW5lci1za2lsbHMgaDF7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbn1cclxuLmNvbnRhaW5lci1za2lsbHMgcHtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcbi5kZXZlbG9wbWVudC1jb250YWluZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5kZXNpZ24tY29udGFpbmVye1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuLmRlc2lnbi1jb250YWluZXIgdWwgbGl7XHJcbiAgZm9udC1zaXplOiAxMHB0XHJcbn1cclxuLmRldmVsb3BtZW50LWNvbnRhaW5lciB1bCBsaXtcclxuICBmb250LXNpemU6IDEwcHRcclxufVxyXG59Il19 */"] });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2021, Piolo Pineda, All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #121212;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    font-family: nunito sans;\r\n    padding-bottom: 5em;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    font-weight: normal;\r\n    font-size: 10pt;\r\n    color: #32adff;\r\n    letter-spacing: 1pt;\r\n}\r\n@media (max-width:900px) and (min-width:300px){\r\n    h1[_ngcontent-%COMP%]{\r\n        font-size: 8pt;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBudW5pdG8gc2FucztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XHJcbn1cclxuaDF7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB0O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSBhbmQgKG1pbi13aWR0aDozMDBweCl7XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDhwdDtcclxuICAgIH1cclxufSJdfQ== */"] });
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