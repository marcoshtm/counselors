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
var counselor_detail_component_1 = require('./counselor-detail.component');
var counselor_service_1 = require('../service/counselor.service');
var router_1 = require('@angular/router');
var CounselorsComponent = (function () {
    function CounselorsComponent(router, counselorService) {
        this.router = router;
        this.counselorService = counselorService;
        this.title = 'Conselheiros';
    }
    CounselorsComponent.prototype.ngOnInit = function () {
        this.getCounselors();
    };
    CounselorsComponent.prototype.getCounselors = function () {
        var _this = this;
        this.counselorService.getCounselors().then(function (counselors) { return _this.counselors = counselors; });
    };
    CounselorsComponent.prototype.onSelect = function (counselor) {
        this.selectedCounselor = counselor;
    };
    CounselorsComponent.prototype.gotoDetail = function () {
        var link = ['/detail', this.selectedCounselor.id];
        this.router.navigate(link);
    };
    CounselorsComponent = __decorate([
        core_1.Component({
            selector: 'my-counselors',
            templateUrl: 'app/html/counselors.component.html',
            styleUrls: ['app/css/counselors.component.css'],
            directives: [counselor_detail_component_1.CounselorDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, counselor_service_1.CounselorService])
    ], CounselorsComponent);
    return CounselorsComponent;
}());
exports.CounselorsComponent = CounselorsComponent;
//# sourceMappingURL=counselors.component.js.map