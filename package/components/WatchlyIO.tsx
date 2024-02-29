"use client";

import { WatchlyIOProvider } from "./WatchlyIO-Provider";
import { WatchlyIOAnalytics } from "./WatchlyIO-Analytics";

export const WatchlyIO = () => {
  return (
    <WatchlyIOProvider>
      <WatchlyIOAnalytics/>
    </WatchlyIOProvider>
  );
};
