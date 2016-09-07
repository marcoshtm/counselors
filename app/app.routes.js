"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./component/login.component');
var counselors_component_1 = require('./component/counselors.component');
var dashboard_component_1 = require('./component/dashboard.component');
var home_component_1 = require('./component/home.component');
var give_component_1 = require('./component/give.component');
var ask_component_1 = require('./component/ask.component');
var counselor_detail_component_1 = require('./component/counselor-detail.component');
var routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'counselors', component: counselors_component_1.CounselorsComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'give', component: give_component_1.GiveComponent },
    { path: 'ask', component: ask_component_1.AskComponent },
    { path: 'detail/:id', component: counselor_detail_component_1.CounselorDetailComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map