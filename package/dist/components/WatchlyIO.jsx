"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchlyIO = void 0;
var WatchlyIO_Provider_1 = require("./WatchlyIO-Provider");
var WatchlyIO_Analytics_1 = require("./WatchlyIO-Analytics");
var WatchlyIO = function () {
    return (<WatchlyIO_Provider_1.WatchlyIOProvider>
      <WatchlyIO_Analytics_1.WatchlyIOAnalytics />
    </WatchlyIO_Provider_1.WatchlyIOProvider>);
};
exports.WatchlyIO = WatchlyIO;
