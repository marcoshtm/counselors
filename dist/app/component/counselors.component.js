System.register(['@angular/core', './counselor-detail.component', '../service/counselor.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, counselor_detail_component_1, counselor_service_1, router_1;
    var CounselorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (counselor_detail_component_1_1) {
                counselor_detail_component_1 = counselor_detail_component_1_1;
            },
            function (counselor_service_1_1) {
                counselor_service_1 = counselor_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let CounselorsComponent = class CounselorsComponent {
                constructor(router, counselorService) {
                    this.router = router;
                    this.counselorService = counselorService;
                    this.title = 'Conselheiros';
                }
                ngOnInit() {
                    this.getCounselors();
                }
                getCounselors() {
                    this.counselorService.getCounselors().then((counselors) => this.counselors = counselors);
                }
                onSelect(counselor) {
                    this.selectedCounselor = counselor;
                }
                gotoDetail() {
                    let link = ['/detail', this.selectedCounselor.id];
                    this.router.navigate(link);
                }
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
            exports_1("CounselorsComponent", CounselorsComponent);
        }
    }
});

//# sourceMappingURL=counselors.component.js.map
