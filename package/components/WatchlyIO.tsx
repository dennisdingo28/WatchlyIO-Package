"use client";

import { WatchlyIOProvider } from "./WatchlyIO-Provider";
import { WatchlyIOAnalytics } from "./WatchlyIO-Analytics";
import { WatchlyIOUserIdentifier } from "./WatchlyIO-UserIdentifier";
import { WatchlyIOSocket } from "./WatchlyIO-Socket";

export const WatchlyIO = () => {
  return (
    <WatchlyIOProvider>
      <WatchlyIOSocket/>
      <WatchlyIOAnalytics/>
      <WatchlyIOUserIdentifier/>
    </WatchlyIOProvider>
  );
};
