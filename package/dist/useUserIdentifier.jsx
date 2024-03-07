"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserIdentifier = void 0;
var zustand_1 = require("zustand");
exports.useUserIdentifier = (0, zustand_1.create)(function (set) { return ({
    id: null,
    setUserIdentifier: function (id) { return set({ id: id }); },
}); });
