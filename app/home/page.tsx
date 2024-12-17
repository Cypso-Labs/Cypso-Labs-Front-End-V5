import React from "react";


export default function Home() {
    return (
        <div className="w-full max-h-screen">
            <section
                className="relative text-white m-5 rounded-[18px]"
                style={{
                backgroundImage: "url('/images/hero.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
            >
                <div className="container mx-auto flex flex-col items-center justify-center h-[80vh] sm:h-[96vh] text-center px-6 sm:px-12 md:px-20 lg:px-44">
                {/* Heading */}
                <h2 className="font-urbanist font-semibold text-[32px] leading-[40px] tracking-[0.0075em] md:text-[48px] md:leading-[56px] lg:text-[61px] lg:leading-[76.8px]">
                    Discover Innovative Excellence at Cyspo Labs
                </h2>

                {/* Paragraph */}
                <p className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[0.0075em] md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[28px] mt-6 md:mt-8 mb-4 md:mb-6">
                    Future-proof your business. Capitalize on emerging technologies. For
                    captivating websites and seamless mobile apps, we elevate your online
                    presence. Let&apos;s transform your vision into reality.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <button className="bg-[#0D476D] hover:bg-white text-white hover:text-[#0D476D] font-semibold py-3 px-6 rounded transition-all duration-300">
                    Explore Us 
                    </button>
                    <button className="bg-[#0D476D] hover:bg-white text-white hover:text-[#0D476D] font-semibold py-3 px-6 rounded transition-all duration-300">
                    Contact Us
                    </button>
                </div>
                </div>
            </section>
            </div>
    );
  }
  