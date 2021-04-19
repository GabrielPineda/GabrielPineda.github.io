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
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 36, vars: 0, consts: [[1, "container-gallery"], ["data-aos", "fade-up", "data-aos-duration", "1500"], [1, "gallery-container"], ["data-aos", "zoom-in-right", "data-aos-duration", "1500", 1, "gallery"], ["target", "_blank", "href", "projects/CALIZSKATES/Index.html"], ["src", "assets/project1.png", "alt", "Cinque Terre", "width", "600", "height", "600"], [1, "desc"], ["data-aos", "zoom-in-left", "data-aos-duration", "1500", 1, "gallery"], ["target", "_blank", "href", "projects/portfolioV1/portfoliov1.html"], ["src", "assets/project2.jpg", "alt", "Forest", "width", "600", "height", "600"], ["target", "_blank", "href", "projects/the_ecology_site/index.html"], ["src", "assets/project3.jpg", "alt", "Northern Lights", "width", "600", "height", "600"], ["href", "https://glow-potions.com/"], ["src", "assets/project4.jpg", "alt", "Mountains", "width", "600", "height", "600"], ["target", "_blank", "href", "assets/project5.JPG"], ["src", "assets/project5.jpg", "alt", "Mountains", "width", "600", "height", "600"], ["target", "_blank", "href", "assets/project2.png"], ["src", "assets/project2.png", "alt", "Mountains", "width", "600", "height", "600"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Web Development Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Here are some of my previous web development projects. The technologies that I frequently use are bootstrap, vanilla JS, and more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "An online retail store for Caliz Skate Shop (ACTIVE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Web Portfolio Version 1-2019 (ACTIVE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "An online community site for nature lovers (ACTIVE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "A promotional website for glow potions. Visit glow-potions.com (ACTIVE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "An online scheduler made with php and mysql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "An online community site for food lovers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-gallery[_ngcontent-%COMP%]{\r\n    padding-top: 3em;\r\n    width: 100%;\r\n    height: 80em;\r\n    background-color: #121212;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.container-gallery[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: #CACACA;\r\n}\r\n.container-gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-top: 2em;\r\n    margin-bottom: 2em;\r\n    font-family: roboto;\r\n    font-size: 12pt;\r\n    color: #868686;\r\n}\r\n.gallery-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 200px;\r\n}\r\n.gallery[_ngcontent-%COMP%]{\r\n    width: 35%;\r\n}\r\ndiv.gallery[_ngcontent-%COMP%] {\r\nmargin: 20px;\r\nfloat: left;\r\nheight: 300px;\r\nmargin-bottom: 3em;\r\n\r\n}\r\ndiv.desc[_ngcontent-%COMP%]\r\n{\r\n    font-family: roboto;\r\n}\r\ndiv.gallery[_ngcontent-%COMP%]:hover {\r\nbackground-color: rgb(56, 56, 56);\r\n}\r\ndiv.gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: auto;\r\n}\r\ndiv.desc[_ngcontent-%COMP%] {\r\npadding: 15px;\r\ncolor: rgb(141, 141, 141);\r\nfont-size: 10pt;\r\ntext-align: center;\r\nletter-spacing: 1pt;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1gsYUFBYTtBQUNiLGtCQUFrQjs7QUFFbEI7QUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUVBO0FBQ0EsYUFBYTtBQUNiLHlCQUF5QjtBQUN6QixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWdhbGxlcnl7XHJcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY29udGFpbmVyLWdhbGxlcnkgaDF7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG59XHJcbi5jb250YWluZXItZ2FsbGVyeSBwe1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGNvbG9yOiAjODY4Njg2O1xyXG59XHJcbi5nYWxsZXJ5LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxufVxyXG4uZ2FsbGVyeXtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuZGl2LmdhbGxlcnkge1xyXG5tYXJnaW46IDIwcHg7XHJcbmZsb2F0OiBsZWZ0O1xyXG5oZWlnaHQ6IDMwMHB4O1xyXG5tYXJnaW4tYm90dG9tOiAzZW07XHJcblxyXG59XHJcbmRpdi5kZXNjXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbn1cclxuZGl2LmdhbGxlcnk6aG92ZXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XHJcbn1cclxuXHJcbmRpdi5nYWxsZXJ5IGltZyB7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmRpdi5kZXNjIHtcclxucGFkZGluZzogMTVweDtcclxuY29sb3I6IHJnYigxNDEsIDE0MSwgMTQxKTtcclxuZm9udC1zaXplOiAxMHB0O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmxldHRlci1zcGFjaW5nOiAxcHQ7XHJcbn0iXX0= */"] });
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
    } }, directives: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\nnav[_ngcontent-%COMP%]{\r\n    height: 0px;\r\n    text-align: right;\r\n    position: sticky;\r\n    top: 0px;\r\n    width: 100%;\r\n    z-index: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    height: 0px;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    margin-right: 2.5em;\r\n    padding-top: 40px;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    font-family: montserrat;\r\n    font-weight: bold;\r\n    color: rgb(255, 255, 255);\r\n    letter-spacing: 0.1em;\r\n    transition-duration: 500ms;\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: #32adff;\r\n    cursor: pointer;\r\n}\r\n.container-header[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 46em;\r\n    background-size: cover;\r\n    background-blend-mode:overlay;\r\n    background-color: #121212;\r\n    max-height: 46em;\r\n    overflow: hidden;\r\n    display: inline-flex;\r\n}\r\n.container-1[_ngcontent-%COMP%]\r\n{\r\n    width: 40%;\r\n    height: 100%;\r\n    color: #cacaca;\r\n    text-align: right;\r\n    font-family: montserrat;\r\n    font-weight:900;\r\n    font-size: 25pt;\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n}\r\n.container-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-top: 40%;\r\n}\r\n.container-2[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    height: 100%;\r\n    color: #CACACA;\r\n    text-align: left;\r\n    font-family: roboto;\r\n    font-size: 12pt;\r\n}\r\n.container-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-top: 40%;\r\n    font-size: 16pt;\r\n    font-weight:900;\r\n    line-height: 2em;\r\n    letter-spacing: 3px;\r\n    color: #32adff;\r\n}\r\n.container-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 30em;\r\n    text-align: justify;\r\n    line-height: 2em;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    border: none;\r\n    width: 30%;\r\n    padding: .5rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    height: 5%;\r\n    font-family: roboto;\r\n    font-weight:500;\r\n    letter-spacing: .5pt;\r\n    background-color: #121212;\r\n    border: 2px solid #32adff;\r\n    color: #32adff;\r\n    transition-duration: 1000ms;\r\n    text-decoration: none;\r\n}\r\n.container-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    background-color: #32adff;\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3RjtBQUN4RiwyRUFBMkU7QUFDM0U7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG5uYXZ7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbm5hdiB1bHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbn1cclxubmF2IGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNWVtO1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxubmF2IGxpIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG59XHJcbm5hdiBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lci1oZWFkZXJcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ2ZW07XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOm92ZXJsYXk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgbWF4LWhlaWdodDogNDZlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4uY29udGFpbmVyLTFcclxue1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAjY2FjYWNhO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtd2VpZ2h0OjkwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVwdDtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLmNvbnRhaW5lci0xIGgxe1xyXG4gICAgbWFyZ2luLXRvcDogNDAlO1xyXG59XHJcbi5jb250YWluZXItMntcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogI0NBQ0FDQTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG59XHJcbi5jb250YWluZXItMiBoMntcclxuICAgIG1hcmdpbi10b3A6IDQwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDtcclxuICAgIGZvbnQtd2VpZ2h0OjkwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgY29sb3I6ICMzMmFkZmY7XHJcbn1cclxuLmNvbnRhaW5lci0yIHB7XHJcbiAgICB3aWR0aDogMzBlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtO1xyXG59XHJcbi5jb250YWluZXItMiBhe1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMyYWRmZjtcclxuICAgIGNvbG9yOiAjMzJhZGZmO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5jb250YWluZXItMiBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyYWRmZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"] });
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
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 15, vars: 0, consts: [[1, "container-profile"], ["data-aos", "zoom-in-left"], [1, "container-both"], ["data-aos", "fade-up", 1, "container-background"], ["href", "https://www.hau.edu.ph/"], [1, "container-image"], ["src", "assets/profile.jpg", "alt", "", "height", "250px", "width", "250px", "data-aos", "zoom-in-left"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi, My name is Piolo Gabriel Pineda and I'm a web developer that specializes in front-end development and UX design. I am currently a third year student at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Holy Angel University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " pursuing a degree in information technology with a major in web development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I want to integrate the knowledge and experiences that I have acquired throughout my college carreer into an actual professional environment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-profile[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 40em;\r\n    background-color: #121212;\r\n    overflow: hidden;\r\n    padding-top: 5rem;\r\n}\r\n.container-profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    color: #cacaca;\r\n    font-size: 32pt;\r\n    text-align: center;\r\n    margin-bottom: 5%;\r\n}\r\n.container-both[_ngcontent-%COMP%]\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: inline-flex;\r\n}\r\n.container-background[_ngcontent-%COMP%]{\r\n    height: 75%;\r\n    width: 40%;\r\n    margin-left: 15%;\r\n}\r\n.container-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: rgb(167, 167, 167);\r\n    font-family: roboto;\r\n    letter-spacing: 1pt;\r\n    width: 75%;\r\n    text-align: justify;\r\n    line-height: 2rem;\r\n    margin: auto;\r\n    margin-right: 0%;\r\n}\r\n.container-image[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin-left: 5%;\r\n}\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 5px;\r\n    opacity: 0.2;\r\n    transition-duration: 1000ms;\r\n}\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n    opacity: 1;\r\n}\r\n.container-background[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: #32adff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXByb2ZpbGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy10b3A6IDVyZW07XHJcbn1cclxuLmNvbnRhaW5lci1wcm9maWxlIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgICBjb2xvcjogI2NhY2FjYTtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5jb250YWluZXItYm90aFxyXG57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbi5jb250YWluZXItYmFja2dyb3VuZHtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbn1cclxuLmNvbnRhaW5lci1iYWNrZ3JvdW5kIHB7XHJcbiAgICBjb2xvcjogcmdiKDE2NywgMTY3LCAxNjcpO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHQ7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxufVxyXG4uY29udGFpbmVyLWltYWdle1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uY29udGFpbmVyLWltYWdlIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcclxufVxyXG4uY29udGFpbmVyLWltYWdlIGltZzpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNvbnRhaW5lci1iYWNrZ3JvdW5kIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxufSJdfQ== */"] });
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
    } }, styles: [".container-contact[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: #121212;\r\n    height: 100%;\r\n    padding-top: 5em;\r\n    padding-bottom: 15%;\r\n    text-align: center;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: montserrat;\r\n    font-size: 32pt;\r\n    color: #CACACA;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: roboto;\r\n    font-size: 12pt;\r\n    color: #CACACA;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 3em;\r\n    line-height: 25pt;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    font-family: roboto;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border: 2px solid #32adff;\r\n    font-size: 14pt;\r\n    color: #32adff;\r\n    transition-duration: 1000ms;\r\n}\r\n.container-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    background-color: #32adff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItY29udGFjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyLWNvbnRhY3QgaDF7XHJcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICAgIGZvbnQtc2l6ZTogMzJwdDtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG59XHJcbi5jb250YWluZXItY29udGFjdCBwe1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGNvbG9yOiAjQ0FDQUNBO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB0O1xyXG59XHJcbi5jb250YWluZXItY29udGFjdCBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMmFkZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBjb2xvcjogIzMyYWRmZjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMDBtcztcclxufVxyXG4uY29udGFpbmVyLWNvbnRhY3QgYTpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMmFkZmY7XHJcbn1cclxuIl19 */"] });
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
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 34, vars: 0, consts: [[1, "container-skills"], [1, "skills-container"], ["data-aos", "fade-up", "data-aos-duration", "1200"], [1, "container"], [1, "skills", "html"], [1, "skills", "css"], [1, "skills", "js"], [1, "skills", "php"], [1, "skills", "angular"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "55%");
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