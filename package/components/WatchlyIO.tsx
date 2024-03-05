"use client";

import { WatchlyIOProvider } from "./WatchlyIO-Provider";
import { WatchlyIOAnalytics } from "./WatchlyIO-Analytics";
import { WatchlyIOSocket } from "./WatchlyIO-Socket";
import { WatchlyIOUserIdentifier } from "./WatchlyIO-UserIdentifier";

export const WatchlyIO = () => {
  return (
    <WatchlyIOProvider>
      <WatchlyIOAnalytics/>
      <WatchlyIOUserIdentifier/>
      <WatchlyIOSocket/>
    </WatchlyIOProvider>
  );
};
