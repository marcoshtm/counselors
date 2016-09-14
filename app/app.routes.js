System.register(['@angular/router', './component/login.component', './component/counselors.component', './component/dashboard.component', './component/home.component', './component/give.component', './component/ask.component', './component/counselor-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, login_component_1, counselors_component_1, dashboard_component_1, home_component_1, give_component_1, ask_component_1, counselor_detail_component_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (counselors_component_1_1) {
                counselors_component_1 = counselors_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (give_component_1_1) {
                give_component_1 = give_component_1_1;
            },
            function (ask_component_1_1) {
                ask_component_1 = ask_component_1_1;
            },
            function (counselor_detail_component_1_1) {
                counselor_detail_component_1 = counselor_detail_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'counselors', component: counselors_component_1.CounselorsComponent },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'give', component: give_component_1.GiveComponent },
                { path: 'ask', component: ask_component_1.AskComponent },
                { path: 'detail/:id', component: counselor_detail_component_1.CounselorDetailComponent }
            ];
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map