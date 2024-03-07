"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchlyIOUserIdentifier = void 0;
var react_1 = require("react");
var __1 = require("..");
var useSocket_1 = require("../useSocket");
var useUserIdentifier_1 = require("../useUserIdentifier");
var WatchlyIOUserIdentifier = function () {
    var socket = (0, useSocket_1.useSocket)(function (state) { return state; }).socket;
    var id = (0, useUserIdentifier_1.useUserIdentifier)(function (state) { return state; }).id;
    (0, react_1.useEffect)(function () {
        addEventListener("storage", function (event) {
            console.log(event);
            if (!socket)
                return;
            if (event.key === "".concat(__1.PREFIX, "UserIdentifier")) {
                if (event.oldValue !== event.newValue) {
                    socket.emit("identifier-deprecated", { id: event.oldValue });
                }
            }
            else {
                socket.emit("identifier-deprecated", { id: id });
            }
        });
        return function () {
            removeEventListener("storage", function () { });
        };
    }, [socket]);
    return null;
};
exports.WatchlyIOUserIdentifier = WatchlyIOUserIdentifier;
