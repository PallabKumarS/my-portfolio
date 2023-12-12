"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import CustomNavbar from "@/components/CustomNavbar";

export default function Provider({ children }) {
  return (
    <NextUIProvider>
      <div className="bg-gradient-to-bl from-gray-900 to-gray-600 min-h-screen">
        <CustomNavbar></CustomNavbar>
        {children}
      </div>
    </NextUIProvider>
  );
}
