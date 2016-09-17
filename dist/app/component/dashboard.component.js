System.register(['@angular/core', '../service/counselor.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, counselor_service_1, router_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (counselor_service_1_1) {
                counselor_service_1 = counselor_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(router, counselorService) {
                    this.router = router;
                    this.counselorService = counselorService;
                    this.counselors = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.counselorService.getCounselors()
                        .then(function (counselors) { return _this.counselors = counselors.slice(1, 5); });
                };
                DashboardComponent.prototype.gotoDetail = function (counselor) {
                    var link = ['/detail', counselor.id];
                    this.router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'app/html/dashboard.component.html',
                        styleUrls: ['app/css/dashboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, counselor_service_1.CounselorService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map