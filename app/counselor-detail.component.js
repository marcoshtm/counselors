"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var counselor_1 = require('./counselor');
var counselor_service_1 = require('./service/counselor.service');
var CounselorDetailComponent = (function () {
    function CounselorDetailComponent(counselorService, route) {
        this.counselorService = counselorService;
        this.route = route;
    }
    CounselorDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.counselorService.getCounselor(id)
                .then(function (counselor) { return _this.counselor = counselor; });
        });
    };
    CounselorDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    CounselorDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', counselor_1.Counselor)
    ], CounselorDetailComponent.prototype, "counselor", void 0);
    CounselorDetailComponent = __decorate([
        core_1.Component({
            selector: 'counselor-detail',
            templateUrl: 'app/html/counselor-detail.component.html',
            styleUrls: ['app/css/counselor-detail.component.css']
        }), 
        __metadata('design:paramtypes', [counselor_service_1.CounselorService, router_1.ActivatedRoute])
    ], CounselorDetailComponent);
    return CounselorDetailComponent;
}());
exports.CounselorDetailComponent = CounselorDetailComponent;
//# sourceMappingURL=counselor-detail.component.js.map