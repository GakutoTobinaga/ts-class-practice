"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var short = require('short-uuid');
var translator = short();
var makeShortUuid = function () {
    var uuid = translator.new();
    console.log(uuid);
    return uuid;
};
makeShortUuid();
//# sourceMappingURL=functions.js.map