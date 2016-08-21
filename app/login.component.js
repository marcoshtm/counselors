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
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n\t\t<section class=\"register-container\">\n\t\t\t<div class=\"calling-panel\">\n\t\t\t\t<p>\"Amizades. Em conversas particulares.\"</p> <br /><br />\n\t\t\t\t<p>Pe\u00E7a um conselho, ou aconselhe algu\u00E9m.<br />\n\t\t\t\t<p>\u00C9 gratificante e revelador.</p> <br />\n\t\t\t</div>\n\t\t\t<div class=\"register-panel\">\n\t\t\t\t<input class=\"register-item register-input\" type=\"text\" placeholder=\"Nome\" /> <br />\n\t\t\t\t<input class=\"register-item register-input\" type=\"text\" placeholder=\"Sobrenome\" /> <br />\n\t\t\t\t<input class=\"register-item register-input\" type=\"text\" placeholder=\"Email\" /> <br />\n\t\t\t\t<input class=\"register-item register-input\" type=\"password\" placeholder=\"Nova senha\" /> <br />\n\t\t\t\t<input class=\"register-item register-button\" type=\"button\" value=\"Cadastre-se\" /> <br />\n\t\t\t</div>\n\t\t</section>\n\t",
            styleUrls: ['app/css/site.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map