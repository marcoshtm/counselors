"use strict";
var router_1 = require('@angular/router');
var counselors_component_1 = require('./counselors.component');
var dashboard_component_1 = require('./dashboard.component');
var login_component_1 = require('./login.component');
var home_component_1 = require('./home.component');
var counselor_detail_component_1 = require('./counselor-detail.component');
var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'counselors',
        component: counselors_component_1.CounselorsComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'detail/:id',
        component: counselor_detail_component_1.CounselorDetailComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map