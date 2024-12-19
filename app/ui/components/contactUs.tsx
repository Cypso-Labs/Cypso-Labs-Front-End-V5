import React from "react";
import Image from "next/image";
import robat from "../../../public/images/robot-blue 1.png";
import { Urbanist, Montserrat } from "next/font/google";

const urbanist = Urbanist({
  weight: ["500"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
});

export default function ContactUsSection() {
  return (
    <>
      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative w-full max-w-screen-2xl bg-[#0C3B60] text-white p8 md:p-12 rounded-3xl shadow-lg overflow-hidden h-[500px]">
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
      </div> */}

      <div className="max-w-[1180px] mx-auto">
        <div className="flex max-h-[164px] lg:max-h-[470px] bg-[#0D476D] p-8 lg:p-32 rounded-[7.28px] lg:rounded-[24px]">
          <div className="space-y-2 lg:space-y-5">
            <h1
              className={`${urbanist.className} font-[500] text-[#FFFFFF] md:text-[48px]`}
            >
              Interested in joining our <br /> team? Contact us{" "}
              <br className="md:hidden" /> today!
            </h1>

            <button
              type="button"
              style={{ boxShadow: "0px 0px 15px 0px #0000001A" }}
              className={`${montserrat.className} text-[7px] md:text-[20px] font-[700] flex items-center gap-2 focus:outline-none text-white bg-[#092D48] hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-3 py-2`}
            >
              Contact Us
              <svg
                className="h-[6px] md:h-[23px]"
                // width="6"
                // height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.02087 0.274742C5.10127 0.274792 5.17836 0.306752 5.23521 0.363602C5.29207 0.420453 5.32403 0.497544 5.32408 0.577943L5.32408 4.01041C5.32551 4.05112 5.31873 4.09171 5.30414 4.12975C5.28955 4.16779 5.26745 4.20251 5.23915 4.23182C5.21086 4.26113 5.17695 4.28445 5.13944 4.30037C5.10194 4.31629 5.06162 4.3245 5.02087 4.3245C4.98013 4.3245 4.93981 4.31629 4.9023 4.30037C4.8648 4.28445 4.83089 4.26113 4.80259 4.23182C4.7743 4.20251 4.75219 4.16779 4.7376 4.12975C4.72301 4.09171 4.71624 4.05112 4.71767 4.01041V1.3102L0.658785 5.36909C0.601888 5.42599 0.52472 5.45795 0.444256 5.45795C0.363792 5.45795 0.286624 5.42599 0.229727 5.36909C0.172831 5.31219 0.140866 5.23503 0.140866 5.15456C0.140866 5.0741 0.17283 4.99693 0.229727 4.94003L4.28862 0.881143L1.58841 0.881144C1.54769 0.882581 1.5071 0.875802 1.46906 0.861212C1.43102 0.846622 1.39631 0.82452 1.367 0.796223C1.33768 0.767926 1.31437 0.734015 1.29845 0.696513C1.28252 0.659011 1.27432 0.618685 1.27432 0.577943C1.27432 0.5372 1.28252 0.496875 1.29845 0.459373C1.31437 0.42187 1.33768 0.387959 1.367 0.359663C1.39631 0.331366 1.43102 0.309263 1.46906 0.294673C1.5071 0.280083 1.54769 0.273304 1.58841 0.274742L5.02087 0.274742Z"
                  fill="#F9F9F9"
                />
              </svg>
            </button>
          </div>

          <div className="absolute right-1">
            <Image
              className="relative w-[184px] lg:w-[554px] bottom-[53px] right-3 lg:bottom-[220px] lg:right-28 h-auto"
              src={robat}
              alt="logo"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}
