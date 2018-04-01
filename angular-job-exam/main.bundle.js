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

module.exports = "h1 {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-header\">\n    <h1>{{ title }}</h1>\n  </div>\n  <app-fizzbuzz></app-fizzbuzz>\n  <hr>\n  <app-result></app-result>\n</div>\n"

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
        this.title = 'FizzBuzz Generator';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fizzbuzz_fizzbuzz_component__ = __webpack_require__("./src/app/fizzbuzz/fizzbuzz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__counter_service__ = __webpack_require__("./src/app/counter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__result_result_component__ = __webpack_require__("./src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__result_service__ = __webpack_require__("./src/app/result.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__fizzbuzz_fizzbuzz_component__["a" /* FizzbuzzComponent */],
                __WEBPACK_IMPORTED_MODULE_6__result_result_component__["a" /* ResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__counter_service__["a" /* CounterService */], __WEBPACK_IMPORTED_MODULE_7__result_service__["a" /* ResultService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/counter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterService = /** @class */ (function () {
    function CounterService() {
        this.from = 0;
        this.to = 100;
    }
    CounterService.prototype.next = function () {
        if ((this.current === undefined) || (this.current === null)) {
            this.current = this.from;
        }
        else if (this.current < this.to) {
            this.current += 1;
        }
        else {
            // do nothing
        }
    };
    CounterService.prototype.reset = function () {
        this.current = undefined;
    };
    CounterService.prototype.fizzbuzz = function () {
        if (this.current >= this.to) {
            return 'end';
        }
        var result = '';
        if (this.current % 3 === 0) {
            result = 'fizz';
        }
        if (this.current % 5 === 0) {
            result = result + "buzz";
        }
        if (result.length === 0) {
            result = this.current.toString();
        }
        return result;
    };
    CounterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CounterService);
    return CounterService;
}());



/***/ }),

/***/ "./src/app/fizzbuzz/fizzbuzz.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fizzbuzz/fizzbuzz.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fizzbuzz\" class=\"row\">\n  <div id=\"fizzbuzz-form\" class=\"form-horizontal\">\n    <div id=\"fizzbuzz-form__from\" class=\"form-group\">\n      <label for=\"fizzbuzz-form__from__input\" class=\"col-sm-3 control-label\">start</label>\n      <div class=\"col-sm-6\">\n        <input type=\"number\" id=\"fizzbuzz-form__from__input\"\n          name=\"from\"\n          class=\"form-control\"\n          [(ngModel)]=\"counterService.from\"\n          placeholder=\"Please input number\"\n          required\n          #from=\"ngModel\">\n      </div>\n      <div id=\"fizzbuzz-form__from__validate\" class=\"col-sm-3\">\n        <div *ngIf=\"from.invalid && (from.dirty || from.touched)\">\n          <div *ngIf=\"from.errors.required\" class=\"badge\">Start is required</div>\n        </div>\n      </div>\n    </div>\n    <div id=\"fizzbuzz-form__to\" class=\"form-group\">\n      <label for=\"fizzbuzz-form__to__input\" class=\"col-sm-3 control-label\">end</label>\n      <div class=\"col-sm-6\">\n        <input type=\"number\" id=\"fizzbuzz-form__to__input\"\n          name=\"to\"\n          class=\"form-control\"\n          [(ngModel)]=\"counterService.to\"\n          placeholder=\"Please input number\"\n          required\n          #to=\"ngModel\">\n      </div>\n      <div id=\"fizzbuzz-form__to__validate\" class=\"col-sm-3\">\n        <div *ngIf=\"to.invalid && (to.dirty || to.touched)\">\n          <div *ngIf=\"to.errors.required\" class=\"badge\">End is required</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-3 col-sm-offset-9\">\n      <button class=\"btn btn-primary next\" (click)=\"next()\">next</button>\n      <button class=\"btn btn-danger reset\" (click)=\"reset()\">reset</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/fizzbuzz/fizzbuzz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FizzbuzzComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter_service__ = __webpack_require__("./src/app/counter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_service__ = __webpack_require__("./src/app/result.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FizzbuzzComponent = /** @class */ (function () {
    function FizzbuzzComponent(counterService, resultService) {
        this.counterService = counterService;
        this.resultService = resultService;
    }
    FizzbuzzComponent.prototype.ngOnInit = function () { };
    FizzbuzzComponent.prototype.next = function () {
        this.counterService.next();
        this.resultService.set(this.counterService.fizzbuzz());
    };
    FizzbuzzComponent.prototype.reset = function () {
        this.counterService.reset();
        this.resultService.initialize();
    };
    FizzbuzzComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-fizzbuzz',
            template: __webpack_require__("./src/app/fizzbuzz/fizzbuzz.component.html"),
            styles: [__webpack_require__("./src/app/fizzbuzz/fizzbuzz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__counter_service__["a" /* CounterService */], __WEBPACK_IMPORTED_MODULE_2__result_service__["a" /* ResultService */]])
    ], FizzbuzzComponent);
    return FizzbuzzComponent;
}());



/***/ }),

/***/ "./src/app/result.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultService = /** @class */ (function () {
    function ResultService() {
        this.result = '';
        this.initialize();
    }
    ResultService.prototype.initialize = function () {
        this.result = 'start';
    };
    ResultService.prototype.set = function (message) {
        this.result = message;
    };
    ResultService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ResultService);
    return ResultService;
}());



/***/ }),

/***/ "./src/app/result/result.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"resultService.result.length\" class=\"row\">\n  <div class=\"col-sm-2\"></div>\n  <div class=\"col-sm-8 well\">\n    <h2>result</h2>\n    <span id=\"result\">{{resultService.result}}</span>\n  </div>\n  <div class=\"col-sm-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__result_service__ = __webpack_require__("./src/app/result.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultComponent = /** @class */ (function () {
    function ResultComponent(resultService) {
        this.resultService = resultService;
    }
    ResultComponent.prototype.ngOnInit = function () { };
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-result',
            template: __webpack_require__("./src/app/result/result.component.html"),
            styles: [__webpack_require__("./src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__result_service__["a" /* ResultService */]])
    ], ResultComponent);
    return ResultComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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