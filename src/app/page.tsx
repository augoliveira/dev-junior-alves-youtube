"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import dynamic from 'next/dynamic';


export default async function HomePage() {
  return (
    <>
    <div className="h-[40rem] w-full bg-black/20 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Aceternity
      </h1>
    </div>
    </>
  );
}
