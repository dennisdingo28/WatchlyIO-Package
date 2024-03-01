"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSocket = void 0;
var zustand_1 = require("zustand");
exports.useSocket = (0, zustand_1.create)(function (set) { return ({
    socket: null,
    setSocket: function (socket) { return set({ socket: socket }); }
}); });
