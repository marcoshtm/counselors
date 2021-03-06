System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var AskComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AskComponent = (function () {
                function AskComponent(router) {
                    this.router = router;
                }
                AskComponent.prototype.submit = function (event) {
                    this.router.navigate(['/home']);
                };
                AskComponent = __decorate([
                    core_1.Component({
                        selector: 'ask',
                        templateUrl: 'app/advice/ask/ask.component.html',
                        styleUrls: ['app/advice/ask/ask.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AskComponent);
                return AskComponent;
            }());
            exports_1("AskComponent", AskComponent);
        }
    }
});
//# sourceMappingURL=ask.component.js.map