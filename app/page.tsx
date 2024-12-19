import Image from "next/image";
import React from "react";
import hero from '../public/images/hero.png';
import { Urbanist, Montserrat } from 'next/font/google';

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div >
        <section className="relative text-white m-5 rounded-[18px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                src={hero}
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                placeholder="blur"
                priority
                />
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
                <button className="bg-[#0D476D] hover:bg-white text-white hover:text-[#0D476D] shadow-md hover:shadow-lg font-semibold py-3 px-16 rounded-lg transition-all duration-300">
                    Explore Us
                </button>
                <button className="border-2 border-white hover:border-[#0D476D] text-white hover:text-[#0D476D] shadow-md hover:shadow-lg font-semibold py-3 px-16 rounded-lg transition-all duration-300">
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
                    <button className={`${montserrat.className} bg-[#0D476D] hover:bg-white text-white hover:text-[#0D476D] font-semibold rounded-[12px] h-[72px] px-[38px] border-2 border-transparent hover:border-[#0D476D] py-[8px] transition-all duration-300 mb-4 md:mb-0 sm:mt-0 mt-4`}>
                        Get Started
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
