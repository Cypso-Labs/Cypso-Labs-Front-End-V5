import Image from "next/image";
import React from "react";
import hero from '../public/images/hero.png';
import { Urbanist, Montserrat } from 'next/font/google';
import HeroImage from "./ui/components/hero-image";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div >
        <section className="relative text-white m-5 rounded-[18px] overflow-hidden">
            Background Image
            <div className="absolute inset-0 w-full h-full z-0">
                <HeroImage />
            </div>

            {/* Content */}
            <div className="relative container mx-auto flex flex-col items-center justify-center min-h-screen text-center px-12 z-10">
                {/* Heading */}
                <h2 className={`${urbanist.className} font-semibold text-[28px] leading-[36px] sm:text-[32px] sm:leading-[40px] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[76.8px]`}>
                Discover Innovative Excellence at <br /> Cyspo Labs
                </h2>

                {/* Paragraph */}
                <p className={`${montserrat.className} font-normal text-[16px] leading-[22px] md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[28px] mt-4 md:mt-6 mb-4 md:mb-6`}>
                Future-proof your business. Capitalize on emerging technologies. For
                captivating websites and seamless mobile apps, we elevate your online
                presence. Let&apos;s transform your vision into reality.
                </p>

                {/* Buttons */}
                <div className={`${montserrat.className} flex flex-col sm:flex-row gap-4 md:gap-6`}>
                <button className="bg-[#0D476D] hover:bg-white text-white hover:text-[#0D476D] shadow-md hover:shadow-lg font-semibold py-3 rounded-lg transition-all duration-300 flex w-[279px] md:w-[234px] items-center justify-center">
                    Explore Us
                    <svg
                      className="h-[15px] pl-2"
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
                <button className="border-2 border-white hover:border-[#0D476D] text-white hover:text-[#0D476D] shadow-md hover:shadow-lg font-semibold py-3 rounded-lg transition-all duration-300 w-[279px] md:w-[234px]">
                    Contact
                </button>
                </div>
            </div>
            </section>



            <section className="bg-gray-50 relative justify-center">
                <div className="max-w-7xl mx-auto text-center py-16 lg:py-28 px-6 md:px-10 lg:px-14">
                    {/* Section Title */}
                    <h2 className={`${urbanist.className} text-3xl md:text-5xl lg:text-6xl font-medium text-gray-800 mb-6`}>
                    We Provide Affordable and Efficient <br /> Digital Solutions
                    </h2>
                    <p className={`${montserrat.className} text-gray-600 text-sm md:text-base lg:text-lg mb-12`}>
                    We offer powerful, budget-friendly solutions tailored to your unique needs. From sleek websites to
                    targeted marketing and intuitive apps, we help you grow your business without breaking the bank.
                    </p>

                    {/* Cards Section */}
                    <div className={`${montserrat.className} flex flex-row sm:flex-row justify-center gap-2 sm:gap-8 overflow-x-auto`}>
                    {/* Card 1 */}
                    <div className="border border-[#DEDEDE] shadow-lg rounded-[5px] p-4 md:p-8 lg:p-10 bg-white w-full md:w-1/5">
                        <h3 className="text-3xl lg:text-[56px] font-bold text-[#0D476D] mb-4 lg:mb-6">50+</h3>
                        <p className="text-gray-600 text-xs md:text-base lg:text-lg">Completed Projects</p>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-[#DEDEDE] shadow-lg rounded-[5px] p-4 md:p-8 lg:p-10 bg-white w-full md:w-1/5">
                        <h3 className="text-3xl lg:text-[56px] font-bold text-[#0D476D] mb-4 lg:mb-6">5+</h3>
                        <p className="text-gray-600 text-[8px] md:text-base lg:text-lg">Years Experience</p>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-[#DEDEDE] shadow-lg rounded-[5px] p-4 md:p-8 lg:p-10 bg-white w-full md:w-1/5">
                        <h3 className="text-3xl lg:text-[56px] font-bold text-[#0D476D] mb-4 lg:mb-6">30+</h3>
                        <p className="text-gray-600 text-xs md:text-base lg:text-lg">Team Members</p>
                    </div>
                    </div>
                </div>
            </section>




            <section className="relative py-10 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-10">
                    {/* Left Side - Button */}
                    <button className={`${montserrat.className} bg-[#0D476D] hover:bg-white text-white hover:text-[#0D476D] font-semibold rounded-[12px] h-[56px] lg:h-[72px] w-[279px] md:w-[243px] border-2 border-transparent hover:border-[#0D476D] py-[8px] transition-all duration-300 mb-4 md:mb-0 sm:mt-0 mt-4 flex justify-center items-center`}>
                        Get Started
                        <svg
                      className="h-[15px] pl-2"
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

                    {/* Right Side - Heading */}
                    <h2 className={`${urbanist.className} text-center md:text-right font-[500] text-[28px] md:text-[40px] lg:text-[56px] leading-[1.2] tracking-[0.0075em] text-gray-800`}>
                        Customized Solutions for <br /> Optimal Performance
                    </h2>
                </div>


                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {/* Card 1 */}
                  <div className="group bg-white shadow-lg rounded-3xl p-6 hover:bg-gradient-to-r from-[#0D476D] to-[#115684] transition-all duration-300">
                    <h3 className={`${urbanist.className} text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 group-hover:text-white`}>
                      Cyber Security
                    </h3>
                    <p className={`${montserrat.className} text-black group-hover:text-white text-sm md:text-base lg:text-lg`}>
                      Protect your business with comprehensive cybersecurity, including threat detection,
                      vulnerability assessments, and data protection to secure assets.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="group bg-[#0D476D] shadow-lg rounded-3xl p-6 hover:bg-white transition-all duration-300">
                    <h3 className={`${urbanist.className} text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4 group-hover:text-black`}>Software & Mobile App Development</h3>
                    <p className={`${montserrat.className} text-white group-hover:text-black text-sm md:text-base lg:text-lg`}>
                      Transform ideas into scalable, user-friendly software and mobile apps tailored to meet your
                      unique business needs.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="group bg-[#0D476D] shadow-lg rounded-3xl p-6 hover:bg-white transition-all duration-300">
                    <h3 className={`${urbanist.className} text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4 group-hover:text-black`}>AI-Driven Finance Marketing</h3>
                    <p className={`${montserrat.className} text-white group-hover:text-black text-sm md:text-base lg:text-lg`}>
                      Enhance financial strategies with AI tools for predictive analytics, risk management, and
                      automated decision-making to optimize operations.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="group bg-white shadow-lg rounded-3xl p-6 hover:bg-gradient-to-r from-[#0D476D] to-[#115684] transition-all duration-300">
                    <h3 className={`${urbanist.className} text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 group-hover:text-white`}>Digital & AI Marketing</h3>
                    <p className={`${montserrat.className} text-black group-hover:text-white text-sm md:text-base lg:text-lg`}>
                      Leverage AI in digital marketing to create data-driven campaigns, personalize experiences,
                      and maximize ROI through optimized performance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative w-full bg-gray-50 py-20 lg:min-h-screen">
              <div className="max-w-7xl mx-auto text-center px-2">
                {/* Video Section */}
                <div className="relative mb-8">
                  <video
                    className="w-full top-12 rounded-lg"
                    controls
                    preload="none"
                  >
                    <source src="/path/to/video.mp4" type="video/mp4" />
                    <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </section>


    </div>
  );
}
