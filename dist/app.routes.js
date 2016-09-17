System.register(['@angular/router', './login/login.component', './home/home.component', './advice/ask/ask.component', './advice/give/give.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, login_component_1, home_component_1, ask_component_1, give_component_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (ask_component_1_1) {
                ask_component_1 = ask_component_1_1;
            },
            function (give_component_1_1) {
                give_component_1 = give_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'give', component: give_component_1.GiveComponent },
                { path: 'ask', component: ask_component_1.AskComponent }
            ];
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map