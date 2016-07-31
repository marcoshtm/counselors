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
var counselor_service_1 = require('./counselor.service');
var AppComponent = (function () {
    function AppComponent(counselorService) {
        this.counselorService = counselorService;
        this.title = 'Conselheiros';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCounselors();
    };
    AppComponent.prototype.getCounselors = function () {
        var _this = this;
        this.counselorService.getCounselors().then(function (counselors) { return _this.counselors = counselors; });
    };
    AppComponent.prototype.onSelect = function (counselor) {
        this.selectedCounselor = counselor;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<h1>{{title}}</h1>\n\t\n\t<h2>Os dez melhores conselheiros:</h2>\n\t<ul class=\"counselors\">\n\t  <li *ngFor=\"let counselor of counselors\" [class.selected]=\"counselor == selectedCounselor\" (click)=\"onSelect(counselor)\">\n\t\t<span class=\"badge\">{{counselor.name}} - {{counselor.id}}</span>\n\t  </li>\n\t</ul>\n\t\n\t<counselor-detail [counselor]=\"selectedCounselor\"></counselor-detail>",
            styles: ["\n\t  .selected {\n\t\tbackground-color: #CFD8DC !important;\n\t\tcolor: white;\n\t  }\n\t  .counselors {\n\t\tmargin: 0 0 2em 0;\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\twidth: 15em;\n\t  }\n\t  .counselors li {\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tleft: 0;\n\t\tbackground-color: #EEE;\n\t\tmargin: .5em;\n\t\tpadding: .3em 0;\n\t\theight: 1.6em;\n\t\tborder-radius: 4px;\n\t  }\n\t  .counselors li.selected:hover {\n\t\tbackground-color: #BBD8DC !important;\n\t\tcolor: white;\n\t  }\n\t  .counselors li:hover {\n\t\tcolor: #607D8B;\n\t\tbackground-color: #DDD;\n\t\tleft: .1em;\n\t  }\n\t  .counselors .text {\n\t\tposition: relative;\n\t\ttop: -3px;\n\t  }\n\t  .counselors .badge {\n\t\tdisplay: inline-block;\n\t\tfont-size: small;\n\t\tcolor: white;\n\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\tbackground-color: #607D8B;\n\t\tline-height: 1em;\n\t\tposition: relative;\n\t\tleft: -1px;\n\t\ttop: -4px;\n\t\theight: 1.8em;\n\t\tmargin-right: .8em;\n\t\tborder-radius: 4px 0 0 4px;\n\t  }\n\t"],
            directives: [counselor_detail_component_1.CounselorDetailComponent],
            providers: [counselor_service_1.CounselorService]
        }), 
        __metadata('design:paramtypes', [counselor_service_1.CounselorService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map