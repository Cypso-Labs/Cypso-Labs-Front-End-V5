import Image from "next/image";
import React from "react";
import logo from "../../public/cypso-logo.svg";
import { Urbanist, Montserrat } from "next/font/google";
import { FaSearch } from "react-icons/fa";
import JobCard from "../ui/components/jobCard";

const urbanist = Urbanist({
    weight: ["500", "600"],
    subsets: ["latin"],
  });
  
  const montserrat = Montserrat({
    weight: ["500"],
    subsets: ["latin"],
  });

function Careers() {
  return (
    <div>
        <section className="min-h-screen flex justify-center items-center">
            <div className="text-[#F9F9F9] text-center space-y-3 mx-14 xl:mx-56">
            <div className="flex justify-center">
                <Image
                className="w-[70px] lg:w-[96px]"
                src={logo}
                alt="logo"
                sizes="100vw"
                />
            </div>

            <h1
                className={`${urbanist.className} text-[32px] lg:text-[56px] font-[600]`}
            >
                Careers
            </h1>

            <p className={`${montserrat.className} text-[14px] lg:text-[18px] font-[500]`}>
            At Cypso Labs, we innovate with cutting-edge technology, fostering collaboration, growth, and problem-solving. Join us to build the future.
            </p>
            </div>
        </section>

        <section className="min-h-screen justify-center py-[70px] xl:py-[100px]">
            {/* Page Header */}
            <header className="text-center py-4">
              <h1 className={`${urbanist.className} text-[32px] lg:text-[56px] font-bold text-black`}>Current Job Openings</h1>
            </header>

            {/* Search Bar */}
            <div className="flex justify-center">
              <div className="flex border border-gray-300 rounded-full px-4 py-2 bg-gray-100 shadow-sm w-[359px] h-[40px] lg:w-[579px] lg:h-[56px]">
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Search for jobs"
                  className={`${montserrat.className} flex-grow bg-transparent text-gray-800 outline-none`}
                />
                {/* Search Icon */}
                <FaSearch className="text-gray-500 mr-3" />
              </div>
            </div>
            <div >
              <JobCard />
            </div>
        </section>
    </div>
  );
}

export default Careers;
