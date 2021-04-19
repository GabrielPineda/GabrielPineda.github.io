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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Web Development Projects");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "A promotional website for glow potions. Visit glow-potions.com (ACTIVE)");
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
    } }, styles: [".container-gallery[_ngcontent-%COMP%]{\r\n    padding-top: 6em;\r\n    width: 100%;\r\n    height: 80em;\r\n    background-color: #121212;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: #CACACA;\r\n}\r\n.container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-top: 2em;\r\n    margin-bottom: 2em;\r\n    font-family: roboto;\r\n    font-size: 12pt;\r\n    color: #868686;\r\n    margin-bottom: 5%;\r\n}\r\n.gallery-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 200px;\r\n}\r\n.gallery[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n}\r\ndiv.gallery[_ngcontent-%COMP%] {\r\nmargin: 20px;\r\nfloat: left;\r\nheight: 300px;\r\nmargin-bottom: 3em;\r\n\r\n}\r\ndiv.desc[_ngcontent-%COMP%]\r\n{\r\n    font-family: roboto;\r\n}\r\ndiv.gallery[_ngcontent-%COMP%]:hover {\r\nbackground-color: rgb(56, 56, 56);\r\n}\r\ndiv.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: auto;\r\n}\r\ndiv.desc[_ngcontent-%COMP%] {\r\npadding: 15px;\r\ncolor: rgb(141, 141, 141);\r\nfont-size: 10pt;\r\ntext-align: center;\r\nletter-spacing: 1pt;\r\n}\r\n.subhead[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #32adff;\r\n    font-family: roboto;\r\n    margin-bottom: 0%;\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: 1px solid #32adff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1gsYUFBYTtBQUNiLGtCQUFrQjs7QUFFbEI7QUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUVBO0FBQ0EsYUFBYTtBQUNiLHlCQUF5QjtBQUN6QixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6ImdhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZ2FsbGVyeXtcclxuICAgIHBhZGRpbmctdG9wOiA2ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb250YWluZXItZ2FsbGVyeSBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgZm9udC1zaXplOiAzMnB0O1xyXG4gICAgY29sb3I6ICNDQUNBQ0E7XHJcbn1cclxuLmNvbnRhaW5lci1nYWxsZXJ5IHB7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgY29sb3I6ICM4Njg2ODY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4uZ2FsbGVyeS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XHJcbn1cclxuLmdhbGxlcnl7XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcbmRpdi5nYWxsZXJ5IHtcclxubWFyZ2luOiAyMHB4O1xyXG5mbG9hdDogbGVmdDtcclxuaGVpZ2h0OiAzMDBweDtcclxubWFyZ2luLWJvdHRvbTogM2VtO1xyXG5cclxufVxyXG5kaXYuZGVzY1xyXG57XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG59XHJcbmRpdi5nYWxsZXJ5OmhvdmVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xyXG59XHJcblxyXG5kaXYuZ2FsbGVyeSBpbWcge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5kaXYuZGVzYyB7XHJcbnBhZGRpbmc6IDE1cHg7XHJcbmNvbG9yOiByZ2IoMTQxLCAxNDEsIDE0MSk7XHJcbmZvbnQtc2l6ZTogMTBwdDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5sZXR0ZXItc3BhY2luZzogMXB0O1xyXG59XHJcbi5zdWJoZWFke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMmFkZmY7XHJcbn0iXX0= */"] });
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
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");







class AppComponent {
    constructor() {
        this.title = 'midterm-proj';
    }
    scroll(el) {
        el.scrollIntoView();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 45, vars: 0, consts: [[3, "click"], ["href", "assets/resume.pdf", 1, "resume-link"], [1, "container-header"], [1, "container-1"], [1, "container-2"], ["href", "mailto:piologabrielpineda@gmail.com"], ["target0", ""], ["target1", ""], ["target2", ""], ["target3", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return ctx.scroll(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); return ctx.scroll(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return ctx.scroll(_r3); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-footer");
    } }, directives: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\nnav[_ngcontent-%COMP%]{\r\n    height: 0px;\r\n    text-align: right;\r\n    position: sticky;\r\n    top: 0px;\r\n    width: 100%;\r\n    z-index: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    height: 0px;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    margin-right: 2.5em;\r\n    padding-top: 40px;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    font-family: montserrat;\r\n    font-weight: bold;\r\n    color: rgb(255, 255, 255);\r\n    letter-spacing: 0.1em;\r\n    transition-duration: 500ms;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: #32adff;\r\n    cursor: pointer;\r\n}\r\n.container-header[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 46em;\r\n    background-color: #121212;\r\n    max-height: 46em;\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n}\r\n.container-1[_ngcontent-%COMP%]\r\n{\r\n    width: 40%;\r\n    height: 100%;\r\n    color: #cacaca;\r\n    text-align: right;\r\n    font-family: montserrat;\r\n    font-weight:900;\r\n    font-size: 25pt;\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n}\r\n.container-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-top: 40%;\r\n}\r\n.container-2[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    height: 100%;\r\n    color: #CACACA;\r\n    text-align: left;\r\n    font-family: roboto;\r\n    font-size: 12pt;\r\n}\r\n.container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-top: 40%;\r\n    font-size: 16pt;\r\n    font-weight:900;\r\n    line-height: 2em;\r\n    letter-spacing: 3px;\r\n    color: #32adff;\r\n}\r\n.container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 30em;\r\n    text-align: justify;\r\n    line-height: 2em;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    border: none;\r\n    width: 30%;\r\n    padding: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    height: 5%;\r\n    font-family: roboto;\r\n    font-weight:500;\r\n    letter-spacing: .5pt;\r\n    background-color: #121212;\r\n    border: 2px solid #32adff;\r\n    color: #32adff;\r\n    transition-duration: 1000ms;\r\n    text-decoration: none;\r\n    border-radius: 5px;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    background-color: #32adff;\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3RjtBQUN4RiwyRUFBMkU7QUFDM0U7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XHJcbm5hdntcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxubmF2IHVse1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxufVxyXG5uYXYgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbi1yaWdodDogMi41ZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5uYXYgbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbn1cclxubmF2IGxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGFpbmVyLWhlYWRlclxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDZlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbi5jb250YWluZXItMVxyXG57XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICNjYWNhY2E7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgZm9udC13ZWlnaHQ6OTAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uY29udGFpbmVyLTEgaDF7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbn1cclxuLmNvbnRhaW5lci0ye1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuLmNvbnRhaW5lci0yIGgye1xyXG4gICAgbWFyZ2luLXRvcDogNDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB0O1xyXG4gICAgZm9udC13ZWlnaHQ6OTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxufVxyXG4uY29udGFpbmVyLTIgcHtcclxuICAgIHdpZHRoOiAzMGVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbn1cclxuLmNvbnRhaW5lci0yIGF7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVwdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzJhZGZmO1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lci0yIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhZGZmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */"] });
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
    } }, styles: [".container-profile[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 30em;\r\n    background-color: #121212;\r\n    overflow: hidden;\r\n    padding-top: 5rem;\r\n}\r\n.container-profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    color: #cacaca;\r\n    font-size: 32pt;\r\n    text-align: center;\r\n    margin-bottom: 5%;\r\n}\r\n.container-both[_ngcontent-%COMP%]\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: inline-flex;\r\n}\r\n.container-background[_ngcontent-%COMP%]{\r\n    height: 75%;\r\n    width: 40%;\r\n    margin-left: 15%;\r\n}\r\n.container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: rgb(167, 167, 167);\r\n    font-family: roboto;\r\n    letter-spacing: 1pt;\r\n    width: 75%;\r\n    text-align: justify;\r\n    line-height: 2rem;\r\n    margin: auto;\r\n    margin-right: 0%;\r\n}\r\n.container-image[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin-left: 5%;\r\n}\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    opacity: 0.2;\r\n    transition-duration: 1000ms;\r\n}\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    opacity: 1;\r\n}\r\n.container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #32adff;\r\n}\r\n.resume-button[_ngcontent-%COMP%]{\r\n    color: #32adff;\r\n    text-decoration: none;\r\n    font-family: roboto;\r\n    border: 2px solid #32adff;\r\n    padding: 2.5%;\r\n    margin-left: 10%;\r\n    transition-duration: 1000ms;\r\n    border-radius: 5px;\r\n}\r\n.resume-button[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-color: #32adff;\r\n}\r\n.subhead[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #32adff;\r\n    font-family: roboto;\r\n    margin-bottom: 0%;\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: .5px solid #32adff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItcHJvZmlsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxufVxyXG4uY29udGFpbmVyLXByb2ZpbGUgaDF7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGNvbG9yOiAjY2FjYWNhO1xyXG4gICAgZm9udC1zaXplOiAzMnB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuLmNvbnRhaW5lci1ib3RoXHJcbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLmNvbnRhaW5lci1iYWNrZ3JvdW5ke1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufVxyXG4uY29udGFpbmVyLWJhY2tncm91bmQgcHtcclxuICAgIGNvbG9yOiByZ2IoMTY3LCAxNjcsIDE2Nyk7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFwdDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG59XHJcbi5jb250YWluZXItaW1hZ2V7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5jb250YWluZXItaW1hZ2UgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG59XHJcbi5jb250YWluZXItaW1hZ2UgaW1nOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4uY29udGFpbmVyLWJhY2tncm91bmQgcCBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbn1cclxuLnJlc3VtZS1idXR0b257XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzJhZGZmO1xyXG4gICAgcGFkZGluZzogMi41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnJlc3VtZS1idXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhZGZmO1xyXG59XHJcbi5zdWJoZWFke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogLjVweCBzb2xpZCAjMzJhZGZmO1xyXG59Il19 */"] });
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
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
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
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 11, vars: 0, consts: [[1, "container-contact"], ["data-aos", "fade-up", "data-aos-duration", "2000"], ["data-aos", "fade-left", "data-aos-duration", "2000"], ["href", "mailto:piologabrielpineda@gmail.com", "data-aos", "zoom-in", "data-aos-duration", "3000"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "I'm open for new opportunities, my inbox is always open.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " If you have a project in mind or just want to say hello, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I'll get back to you as soon as possible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Let's Talk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-contact[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: #121212;\r\n    height: 100%;\r\n    padding-top: 5em;\r\n    padding-bottom: 15%;\r\n    text-align: center;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: #CACACA;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: roboto;\r\n    font-size: 12pt;\r\n    color: #CACACA;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 3em;\r\n    line-height: 25pt;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    font-family: roboto;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border: 2px solid #32adff;\r\n    font-size: 14pt;\r\n    color: #32adff;\r\n    border-radius: 5px;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-color: #32adff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItY29udGFjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyLWNvbnRhY3QgaDF7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG59XHJcbi5jb250YWluZXItY29udGFjdCBwe1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB0O1xyXG59XHJcbi5jb250YWluZXItY29udGFjdCBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMmFkZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uY29udGFpbmVyLWNvbnRhY3QgYTpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmFkZmY7XHJcbn1cclxuIl19 */"] });
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
    } }, styles: [".container-skills[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 5em;\r\n    background-color: #121212;\r\n    width: 100%;\r\n    height: auto;\r\n    padding-bottom: 10%;\r\n    font-family: montserrat;\r\n    overflow: hidden;\r\n}\r\n.container-skills[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: #CACACA;\r\n}\r\n.skills-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 25em;\r\n}\r\n.skills-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-top: 1.5em;\r\n    color: white;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  background-color: #ddd;\r\n}\r\n.skills[_ngcontent-%COMP%] {\r\n  text-align: right; \r\n  padding-top: 10px; \r\n  padding-bottom: 10px; \r\n  color: white; \r\n}\r\n.html[_ngcontent-%COMP%] {width: 80%; background-color: #4CAF50;}\r\n.css[_ngcontent-%COMP%] {width: 80%; background-color: #2196F3;}\r\n.js[_ngcontent-%COMP%] {width: 70%; background-color: #f44336;}\r\n.php[_ngcontent-%COMP%] {width: 40%; background-color: #808080;}\r\n.angular[_ngcontent-%COMP%] {width: 55%; background-color: #ff57db;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtBQUVBLE9BQU8sVUFBVSxFQUFFLHlCQUF5QixDQUFDO0FBQzdDLE1BQU0sVUFBVSxFQUFFLHlCQUF5QixDQUFDO0FBQzVDLEtBQUssVUFBVSxFQUFFLHlCQUF5QixDQUFDO0FBQzNDLE1BQU0sVUFBVSxFQUFFLHlCQUF5QixDQUFDO0FBQzVDLFVBQVUsVUFBVSxFQUFFLHlCQUF5QixDQUFDIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1za2lsbHNcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDVlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNvbnRhaW5lci1za2lsbHMgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG59XHJcbi5za2lsbHMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1ZW07XHJcbn1cclxuLnNraWxscy1jb250YWluZXIgcHtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctdG9wOiAxMHB4OyBcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDsgXHJcbiAgY29sb3I6IHdoaXRlOyBcclxufVxyXG5cclxuLmh0bWwge3dpZHRoOiA4MCU7IGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7fSBcclxuLmNzcyB7d2lkdGg6IDgwJTsgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMzt9IFxyXG4uanMge3dpZHRoOiA3MCU7IGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7fSBcclxuLnBocCB7d2lkdGg6IDQwJTsgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDt9IFxyXG4uYW5ndWxhciB7d2lkdGg6IDU1JTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTdkYjt9ICJdfQ== */"] });
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