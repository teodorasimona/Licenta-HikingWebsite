import { useState, useEffect } from "react";
import Layout from "../layout";

export default function HomePage() {
  return (
    <div
      className="relative bg-transparent "
      style={{
        backgroundImage: "url('/carusel-image 1.png')",
        height: "700px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
          Gaseste noi trasee montane
        </h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-white">
          Visezi la trasee montane de neuitat si aventuri noi? Te ajutam noi!
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Vezi trasee
          </a>
        </div>
      </div>
    </div>
  );
}
