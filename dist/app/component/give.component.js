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
    var GiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let GiveComponent = class GiveComponent {
                constructor(router) {
                    this.router = router;
                }
                submit(event) {
                    this.router.navigate(['/home']);
                }
            };
            GiveComponent = __decorate([
                core_1.Component({
                    selector: 'give',
                    templateUrl: 'app/html/give.component.html',
                    styleUrls: ['app/css/give.component.css']
                }), 
                __metadata('design:paramtypes', [router_1.Router])
            ], GiveComponent);
            exports_1("GiveComponent", GiveComponent);
        }
    }
});

//# sourceMappingURL=give.component.js.map
