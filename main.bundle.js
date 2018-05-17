webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_4__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "\n.dashboard{\n\twidth: 100%;\n\tbackground-color: #123456;\n\tcolor: white;\n\tpadding-top: 10px;\n\theight: 100%;\n\toverflow: auto;\n}\n\na{\n\tpadding-right: 30px;\n\tcolor: white;\n\ttext-decoration: none;\n}\n\nh1{\n\tpadding-top: 20px;\n\tpadding-bottom: 20px;\n\ttext-align: center !important;\n}\n\n.logout{\n\tpadding-bottom: 15px;\n\ttext-align: right;\n\tfont-size: 22px;\n\n}\n\n.dashboard-form{\n\tbackground-color: black;\n\tpadding:30px 20px;\t \n\tmargin-left: 35%;\n\tmargin-right: 35%;\n}\n\n.row{\npadding-top: 40px;\n}\n\ntable{\n\n\tmargin-left: 30%;\n\tmargin-bottom: 13%;\n\tborder:1px solid white;\n}\n\nth{\tborder:1px solid white;\n\ttext-align: center;\n\tpadding: 0 5px;\n}\n\ntd{\t\n\ttext-align: center;\n\t\tpadding: 5px 5px;\n\t\tborder:1px solid white;\n}\n\nbutton{\n\tmargin-left: 7px;\n\tfont-size: 18px;\n\tborder-radius: 5px;\n\tbackground-color: black;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n}\n\n.button{\n\tmargin-top: 15px;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tbackground-color: rgba(22, 149, 50, 0.81);\n}\n\n.button-flow{\n\tpadding-left: 60px;\n}\n\n/*---------media queries--------------*/\n\n@media (max-width: 1200px)\n{\n\n\n.dashboard-form{\t \n\tmargin-left: 35%;\n\tmargin-right: 35%;\n}\n\ntable{\n\tmargin-left: 20px;\n\tmargin-right: 20px;\n}\n}\n\n@media screen and (min-width: 992px) and (max-width: 1199px)\n{\n\n.dashboard-form{\t \n\tmargin-left: 30%;\n\tmargin-right: 30%;\n}\ntable{\n\tmargin-left: 25%;\n\tmargin-right:20%;\n}\n\n\n}\n\n@media screen and (min-width: 768px) and (max-width: 991px)\n{\n\n\n.dashboard-form{\t \n\tmargin-left: 25%;\n\tmargin-right: 25%;\n}\ntable{\n\tmargin-left: 20%;\n\tmargin-right:20%;\n}\n.button-flow{\n\tpadding-left: 40px;\n}\n\n}\n\n@media screen and (min-width: 576px) and (max-width: 767px)\n{\n\n.dashboard-form{\t \n\tmargin-left: 5%;\n\tmargin-right: 5%;\n}\ntable{\n\tmargin-left: 10%;\n\tmargin-right:10%;\n}\n.button-flow{\n\tpadding-left: 30px;\n}\n\n}\n\n@media (max-width: 575px)\n{\n.button-flow{\n\tpadding-left: 20px;\n}\n\n.dashboard-form{\n\tmargin-left: 20%;\n\tmargin-right: 20%;\n}\ntable{\n\tmargin-left: 10%;\n\tmargin-right:10%;\n}\n\n\n}\n\n/*---------end media query-------*/ \n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"dashboard\">\n<div class=\"logout\"><a  routerLink=\"/login\"><button>Log Out</button></a></div>\n<h1>Welcome to Dashboard</h1>\n<form  class=\"dashboard-form\"  #f=\"ngForm\"   >\n         <div class=\"form-group\">\n           <input type=\"text\"  class=\"form-control\" id=\"name\" placeholder=\"Task Name\" name=\"taskname\" ngModel required   [value]=\"name\">\n         </div>\n         <div class=\"form-group\" >\n           <input type=\"date\"  class=\"form-control\" id=\"date\" placeholder=\"Date\" name=\"date\" ngModel required  [value]=\"date\">\n         </div>\n       \n         <div>\n           <input type=\"text\"  class=\"form-control\" id=\"description\" placeholder=\"Description\" name=\"description\" ngModel [value]=\"description\">\n         </div>\n       <div>\n           <input type=\"hidden\"  class=\"form-control\" id=\"description\" placeholder=\"Description\" name=\"taskUpdate\" ngModel [value]=\"hidden\">\n         </div>\n         <div class=\"button-flow\">\n           <button class=\"button\"  type='submit' (click)=\"onSubmit(f.value)\" >Add Todo</button>\n                 \n           <button class=\"button\" type=\"submit\"  *ngIf=\"update\" (click)=\"updateItem(f.value)\" >Update</button>\n           </div>\n           \n       </form>\n\n<div class=\"row\">\n<table>\n<tr>\n <th>Task Name</th>\n <th>Description</th>\n <th>Date</th>\n <th>Edit</th>\n <th>Delete</th>\n</tr>\n\n<tbody *ngFor= \"let x of this.match\">\n<tr>\n<td>{{x.taskname}}</td>\n<td>{{x.description}}</td>\n<td>{{x.date}}</td>\n<td><button (click)=\"edit(x.taskname)\">Edit</button></td>\n<td><button (click)=\"delete(x.delete)\">Delete</button></td>\n</tr>\n\n\n</tbody>\n</table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.taskname = "";
        this.idInForm = "";
        this.taskUpdate = "";
        this.editItem = null;
        this.update = false;
        this.a = 0;
        this.myArray = JSON.parse(window.localStorage.getItem('storedTasks')) || [];
        this.match = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.match = JSON.parse(window.localStorage.getItem('storedTasks'));
    };
    DashboardComponent.prototype.onSubmit = function (form) {
        this.a = 0;
        this.taskname = form.taskname;
        this.date = form.date;
        this.description = form.description;
        if (this.taskname == "" && this.date == "" && this.description == "") {
            alert("Enter your details of task");
        }
        else {
            this.match = JSON.parse(window.localStorage.getItem('storedTasks'));
            if (this.match == null) {
                this.myArray.push(form);
                window.localStorage.setItem('storedTasks', JSON.stringify(this.myArray));
            }
            else {
                for (var i = 0; i < this.match.length; i++) {
                    if ((this.match[i].taskname) == this.taskname) {
                        this.a = 1;
                    }
                }
                if (this.a == 0) {
                    this.myArray.push(form);
                    window.localStorage.setItem('storedTasks', JSON.stringify(this.myArray));
                    alert("Task stored");
                }
                else {
                    alert("Task already exist");
                }
            }
        }
        this.match = JSON.parse(window.localStorage.getItem('storedTasks'));
    };
    DashboardComponent.prototype.delete = function (taskname) {
        alert(taskname);
        var fetchArray = JSON.parse(window.localStorage.getItem('storedTasks'));
        var j = 0;
        for (var i = 0; i < fetchArray.length; i++) {
            if (taskname == fetchArray[i].taskname) {
                j = i;
            }
        }
        this.myArray.splice(j, 1);
        console.log(this.myArray);
        window.localStorage.setItem('storedTasks', JSON.stringify(this.myArray));
        this.match = JSON.parse(window.localStorage.getItem('storedTasks'));
    };
    DashboardComponent.prototype.edit = function (taskname) {
        this.update = true;
        var fetchArray = JSON.parse(window.localStorage.getItem('storedTasks'));
        this.editItem = fetchArray.filter(function (fetchArray) { return fetchArray.taskname == taskname; });
        this.name = this.editItem[0].taskname;
        this.date = this.editItem[0].date;
        this.description = this.editItem[0].description;
        this.hidden = this.editItem[0].taskname;
    };
    DashboardComponent.prototype.updateItem = function (form) {
        this.taskname = form.taskname;
        this.date = form.date;
        this.description = form.description;
        form.taskname = this.hidden;
        this.taskUpdate = form.taskname;
        var inLocalStorage = JSON.parse(window.localStorage.getItem('storedTasks'));
        var itemUpdate = { "taskname": this.taskname, "date": this.date, "description": this.description };
        var j = 0;
        console.log("values to be entered in array");
        console.log(itemUpdate);
        for (var i = 0; i < inLocalStorage.length; i++) {
            if (this.taskUpdate == inLocalStorage[i].taskname) {
                j = i;
            }
        }
        this.myArray.splice(j, 1, itemUpdate);
        console.log(this.myArray);
        window.localStorage.setItem('storedTasks', JSON.stringify(this.myArray));
        this.match = JSON.parse(window.localStorage.getItem('storedTasks'));
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".absolute{\n\tpadding-top: 70px;\n\tpadding-bottom: 270px;\n\tbackground-color: #40aa9b;\n\ttext-align: center;\n\tcolor: white;\n\tfont-size: 18px;\n}\n\n\n.sign-in-form{\n\tborder-radius: 5px;\n\tbackground-color: black;\n\tpadding: 10px;\n\tpadding-top: 20px;\n\tmargin-left: 15%;\n\tmargin-right: 15%;\n}\n\n\n.button{\n\tpadding-top: 20px;\n\tpadding-bottom: 20px;\n}\n\n\n.button-btn\n{\t\n\n\tborder-radius: 10px;\n\tpadding-left:15px;\n\tpadding-right:15px;\n\tcolor: white;\n\tbackground-color: blue;\n\tfont-size: 22px;\n}\n\n\na{\n\tfont-size: 20px;\n\tcolor: white;\n\ttext-decoration: none;\n}\n\n\n.forget{\n\tpadding-top: 10px;\n}\n\n\n/*---------media queries--------------*/\n\n\n@media (min-width: 1200px)\n{\n\n\n.sign-in-form{\n\tmargin-left: 38%;\n\tmargin-right: 38%;\n}\n}\n\n\n@media screen and (min-width: 992px) and (max-width: 1199px)\n{\n\t\n.sign-in-form{\n\tmargin-left: 32%;\n\tmargin-right: 32%;\n}\n\n\n}\n\n\n@media screen and (min-width: 768px) and (max-width: 991px)\n{\n.sign-in-form{\n\tmargin-left: 30%;\n\tmargin-right: 30%;\n}\n\n\n}\n\n\n@media screen and (min-width: 576px) and (max-width: 767px)\n{\n.sign-in-form{\n\tmargin-left: 15%;\n\tmargin-right: 15%;\n}\n\n\n}\n\n\n@media (max-width: 575px)\n{\n\th1{\n\t\tfont-size: 24px;\n\t}\n}\n\n\n/*---------end media query-------*/ \n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"absolute\"  > \n       \n      <h1 class=\"sign\">Sign In your account</h1>\n      <form class=\"sign-in-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\" >\n         <div class=\"form-group\" >\n           <input type=\"email\"  class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\" ngModel required>\n         </div>\n       \n         <div>\n           <input type=\"password\"  class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\" ngModel required>\n         </div>          \n         <div  class=\"button\">\n           <button class=\"button-btn\" id=\"btn\" type='submit' routerLinl=\"/dashboard\">Sign In</button>\n         </div>\n       \n       </form> \n       <div class=\"forget\"><a routerLink=\"/\">Forget Password?</a>\n         <div class=\"sign-up\">\n          <p class=\"a\"> Don't have an account. <a class=\"last\" routerLink=\"/registration\"> Create new account</a></p>\n         <div>\n\n   </div>\n\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.email = "";
        this.pwd = "";
        this.a = 0;
        this.match = [];
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmit = function (form) {
        this.email = form.email;
        this.pwd = form.pwd;
        this.a = 0;
        if (this.email == "" && this.pwd == "") {
            alert("Enter your id and password");
        }
        else {
            this.match = JSON.parse(window.localStorage.getItem('name'));
            if (this.match == null) {
                alert("invalid credentials");
            }
            else {
                for (var i = 0; i < this.match.length; i++) {
                    if ((this.match[i].email) == this.email && (this.match[i].pwd == this.pwd)) {
                        this.a = 1;
                    }
                }
                if (this.a == 1) {
                    alert("Login successful");
                    this.router.navigate(['/dashboard']);
                }
                else {
                    alert("Id-password do not match");
                }
            }
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/***/ (function(module, exports) {

module.exports = ".absolute{\n\tcolor: white;\n\theight: 100%;\n\tbackground-color: #2845d1;\n\tpadding-top: 70px;\n\tpadding-bottom: 225px;\n}\n.sign-up-form{\n\tborder-radius: 10px;\n\tbackground-color: black;\n\tpadding: 20px;\n\tmargin-left:35%;\n\tmargin-right:35%;\n}\n.login{\n\tpadding-top: 20px;\n\tfont-size: 18px;\n\ttext-align: center;\n}\n.sign{\n\ttext-align: center;\n}\n.button{\n\tpadding-top: 20px;\n}\n.btn-info{\n\tbackground-color: #58dd6e;\n\tfont-size: 18px;\n}\na{\n\tcolor: white;\n\tfont-size: 24px;\n}\n/*---------media queries--------------*/\n@media (min-width: 1200px)\n{\n\n.sign-in-form{\n\tmargin-left:40%;\n\tmargin-right:40%;\n}\n.button{\npadding-left: 40%;\n\tpadding-right: 35%;\n\n}\n\n}\n@media screen and (min-width: 992px) and (max-width: 1199px)\n{\n\n.button{\npadding-left: 40%;\n\tpadding-right: 40%;\n\n}\n.sign-up-form{\n\tmargin-left:25%;\n\tmargin-right:25%;\n}\n\n\n}\n@media screen and (min-width: 768px) and (max-width: 991px)\n{\n\n.button{\npadding-left: 29%;\n\tpadding-right: 33%;\n\n}\n.sign-up-form{\n\tmargin-left:25%;\n\tmargin-right:25%;\n}\n\n}\n@media screen and (min-width: 576px) and (max-width: 767px)\n{\n.button{\npadding-left: 32%;\n\tpadding-right: 32%;\n\n}\n.sign-up-form{\n\tmargin-left:20%;\n\tmargin-right:20%;\n}\n\n}\n@media (max-width: 575px)\n{\n\t.button{\npadding-left: 15%;\n\tpadding-right: 15%;\n\n}\n.sign-up-form{\n\tmargin-left:15%;\n\tmargin-right:15%;\n}\n\n}\n/*---------end media query-------*/ \n"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"absolute\"  > \n       \n      <h1 class=\"sign\">Create a new account</h1>\n      <form class=\"sign-up-form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\" >\n         <div class=\"form-group\">\n           <input type=\"name\"  class=\"form-control\" id=\"name\" placeholder=\"Name\" name=\"name\" ngModel required>\n         </div>\n       \n         <div class=\"form-group\" >\n           <input type=\"email\"  class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\" ngModel required>\n         </div>\n       \n         <div>\n           <input type=\"password\"  class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"password\" ngModel required>\n         </div>          \n         <div  class=\"button\">\n           <button class=\"btn btn-primary btn btn-info btn-block\" id=\"btn\" type='submit' >Sign Up</button>\n         </div>\n       \n       </form> \n         <div class=\"login\">\n          <p class=\"a\"> Already have an account? <a class=\"last\" routerLink=\"/\"> Sign In</a></p>\n         <div>\n\n   </div>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router) {
        this.router = router;
        this.name = "";
        this.email = "";
        this.password = "";
        this.a = 0;
        this.myArray = JSON.parse(window.localStorage.getItem('name')) || [];
        this.match = [];
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function (form) {
        console.log(form);
        this.a = 0;
        this.name = form.name;
        this.email = form.email;
        this.password = form.password;
        if (this.name == "" && this.email == "" && this.password == "") {
            alert("Enter your details");
        }
        else {
            this.match = JSON.parse(window.localStorage.getItem('name'));
            if (this.match == null) {
                this.myArray.push(form);
                window.localStorage.setItem('name', JSON.stringify(this.myArray));
            }
            else {
                for (var i = 0; i < this.match.length; i++) {
                    if ((this.match[i].email) == this.email && (this.match[i].password == this.password)) {
                        this.a = 1;
                    }
                }
                if (this.a == 0) {
                    this.myArray.push(form);
                    window.localStorage.setItem('name', JSON.stringify(this.myArray));
                    alert("successfully registered");
                    this.router.navigate(['/']);
                }
                else {
                    alert("already exist");
                }
            }
        }
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map