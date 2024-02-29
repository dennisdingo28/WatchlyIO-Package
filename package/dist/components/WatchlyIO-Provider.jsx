"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchlyIOProvider = void 0;
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var WatchlyIOProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), isMounted = _b[0], setIsMounted = _b[1];
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    if (!isMounted)
        return null;
    var queryClient = new react_query_1.QueryClient();
    return (<>
            <react_query_1.QueryClientProvider client={queryClient}>
                {children}
            </react_query_1.QueryClientProvider>
        </>);
};
exports.WatchlyIOProvider = WatchlyIOProvider;
