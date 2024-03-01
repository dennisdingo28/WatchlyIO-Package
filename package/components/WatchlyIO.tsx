"use client";

import { WatchlyIOProvider } from "./WatchlyIO-Provider";
import { WatchlyIOAnalytics } from "./WatchlyIO-Analytics";
import { WatchlyIOSocket } from "./WatchlyIO-Socket";

export const WatchlyIO = () => {
  return (
    <WatchlyIOProvider>
      <WatchlyIOAnalytics/>
      <WatchlyIOSocket/>
    </WatchlyIOProvider>
  );
};
