"use client";

import { useAnalytics } from "app/hooks/useAnalytics"; // Adjust the path as needed

export const AnalyticsProvider = () => {
  useAnalytics(); // This runs only on client
  return null;
};
