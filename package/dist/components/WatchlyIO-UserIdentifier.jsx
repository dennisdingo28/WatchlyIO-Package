"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchlyIOUserIdentifier = void 0;
var react_1 = require("react");
var __1 = require("..");
var useSocket_1 = require("../useSocket");
var WatchlyIOUserIdentifier = function () {
    var socket = (0, useSocket_1.useSocket)(function (state) { return state; }).socket;
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
                socket.emit("identifier-deprecated", { id: event.oldValue });
            }
        });
        return function () {
            removeEventListener("storage", function () { });
        };
    }, [socket]);
    return null;
};
exports.WatchlyIOUserIdentifier = WatchlyIOUserIdentifier;
