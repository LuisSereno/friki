var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var Skills = (function () {
    function Skills() {
        this.range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.VELOCIDAD = 1;
        this.ESQUIVAR = 2;
        this.DISTANCIA = 3;
        this.MANA = 4;
        this.RESISTENCIA = 5;
        this.ALMA = 6;
        this.SUERTE = 7;
        this.FUERZA = 8;
        this.VIDA = 9;
        this.DEFENSA = 10;
    }
    return Skills;
}());
__decorate([
    Input("tipo"),
    __metadata("design:type", Number)
], Skills.prototype, "datoNumber", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Skills.prototype, "cantidad", void 0);
Skills = __decorate([
    Component({
        selector: 'skills',
        templateUrl: 'skills.html'
    }),
    __metadata("design:paramtypes", [])
], Skills);
export { Skills };
//# sourceMappingURL=skills.js.map