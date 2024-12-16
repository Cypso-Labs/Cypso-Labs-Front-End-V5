import React from "react";
import Image from "next/image";
import Robat from "../models/robot-blue 1.png"; //image path

export default function ContactUsSection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Main Container */}
      <div className="relative w-full max-w-screen-2xl bg-[#0C3B60] text-white p8 md:p-12 rounded-3xl shadow-lg overflow-hidden h-[500px]">
        {/* Background Grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-20 pointer-events-none">
          {Array.from({ length: 72 }, (_, i) => (
            <div key={i} className="border border-blue-400"></div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="max-w-5xl md:w-1/2 space-y-6 flex flex-col items-start pl-14">
            <h1 className="text-6xl md:text-6xl font-semibold leading-tight text-white">
              Interested in joining our team? Contact us today!
            </h1>
            <button className="flex items-center w-64 h-16 px-16 py-3 bg-[#00294D] hover:bg-[#001F3B] text-white rounded-md font-medium transition duration-300">
              Get Started
              <span className="ml-2 text-xl">↗</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute w-full md:w-1/2 right-11 h-full flex items-center justify-center pb-24">
        <Image
          src={Robat}
          alt="Robot"
          width={600}
          height={600}
          quality={100}
          priority
          className="h-auto object-contain shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
}
