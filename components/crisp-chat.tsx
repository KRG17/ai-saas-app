"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a43997e5-e5aa-4f0b-81e3-ad082ca29f63");
  }, []);

  return null;
};
