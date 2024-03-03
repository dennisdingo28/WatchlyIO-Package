"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchlyIOSocket = void 0;
var socket_io_client_1 = require("socket.io-client");
var useSocket_1 = require("../useSocket");
var react_1 = require("react");
var __1 = require("..");
var WatchlyIOSocket = function () {
    var _a = (0, useSocket_1.useSocket)(function (state) { return state; }), socket = _a.socket, setSocket = _a.setSocket;
    (0, react_1.useEffect)(function () {
        var alreadyExists = localStorage.getItem("".concat(__1.PREFIX, "UserIdentifier")) || "";
        if (!alreadyExists) {
            var watchlyIOUserIdentifier = (0, __1.generateWatchlyIOUserIdentifier)();
            if (!socket) {
                var newSocket = (0, socket_io_client_1.io)("http://localhost:3002/workspaceUser", { query: { id: watchlyIOUserIdentifier, apiKey: process.env.NEXT_PUBLIC_WATCHLY_IO_API_KEY } });
                setSocket(newSocket);
            }
        }
        else {
            if (!socket) {
                var newSocket = (0, socket_io_client_1.io)("http://localhost:3002/workspaceUser", { query: { id: alreadyExists, apiKey: process.env.NEXT_PUBLIC_WATCHLY_IO_API_KEY } });
                setSocket(newSocket);
            }
        }
    }, []);
    return null;
};
exports.WatchlyIOSocket = WatchlyIOSocket;
