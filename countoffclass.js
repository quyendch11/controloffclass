"use strict";
exports.__esModule = true;
exports.Application = void 0;
var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
exports.Application = Application;
