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
var counselor_1 = require('./counselor');
var CounselorDetailComponent = (function () {
    function CounselorDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', counselor_1.Counselor)
    ], CounselorDetailComponent.prototype, "counselor", void 0);
    CounselorDetailComponent = __decorate([
        core_1.Component({
            selector: 'counselor-detail',
            template: "\n\t\t<div *ngIf=\"counselor\">\n\t\t\t<h2>{{counselor.name}} details!</h2>\n\t\t\t<div><label>Id:</label> {{counselor.id}}</div>\n\t\t\t<div><label>Nome:</label> <input [(ngModel)]=\"counselor.name\" placeholder=\"name\" /></div>\n\t\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], CounselorDetailComponent);
    return CounselorDetailComponent;
}());
exports.CounselorDetailComponent = CounselorDetailComponent;
//# sourceMappingURL=counselor-detail.component.js.map