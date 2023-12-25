"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import CustomNavbar from "@/components/CustomNavbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

export default function Provider({ children }) {
  return (
    <NextUIProvider>
      <div className="bg-gradient-to-bl from-gray-900 to-gray-600 min-h-screen">
        <CustomNavbar></CustomNavbar>
        {children}
        <Footer></Footer>
        <Toaster></Toaster>
      </div>
    </NextUIProvider>
  );
}
