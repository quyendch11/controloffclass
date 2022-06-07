"use strict";
exports.__esModule = true;
var countoffclass_1 = require("./countoffclass");
console.log(countoffclass_1.Application.count);
var app1 = new countoffclass_1.Application('App One');
console.log(countoffclass_1.Application.count);
var app2 = new countoffclass_1.Application('App Two');
console.log(countoffclass_1.Application.count);
