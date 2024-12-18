import React from "react";

export default function Home() {
  return (
    <div className="w-full">
            <section
                className="relative text-white m-5 rounded-[18px]"
                style={{
                backgroundImage: "url('/images/hero.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
            >
                <div className="container mx-auto flex flex-col items-center justify-center h-[80vh] sm:h-[98vh] text-center px-6 sm:px-12 md:px-20 lg:px-44">
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

            <section className="bg-white w-full max-h-screen">
                <div className="max-w-7xl mx-auto text-center py-20 px-6">
                    {/* Section Title */}
                    <h2 className="font-urbanist text-4xl md:text-6xl font-medium text-gray-800 mb-8 md:mt-[40px]">
                    We Provide Affordable and Efficient <br /> Digital Solutions
                    </h2>
                    <p className="text-gray-600 text-lg mb-16 lg:px-[215px]">
                    We offer powerful, budget-friendly solutions tailored to your unique needs. From sleek websites to 
                    targeted marketing and intuitive apps, we help you grow your business without breaking the bank.
                    </p>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 xl:px-56">
                    {/* Card 1 */}
                    <div className="shadow-lg rounded-lg p-8 bg-white">
                        <h3 className="text-6xl font-bold text-[#0D476D] mb-12">50+</h3>
                        <p className="text-gray-600 text-lg">Completed Projects</p>
                    </div>

                    {/* Card 2 */}
                    <div className="shadow-lg rounded-lg p-8 bg-white">
                        <h3 className="text-6xl font-bold text-[#0D476D] mb-12">5+</h3>
                        <p className="text-gray-600 text-lg">Years Experience</p>
                    </div>

                    {/* Card 3 */}
                    <div className="shadow-lg rounded-lg p-8 bg-white">
                        <h3 className="text-6xl font-bold text-[#0D476D] mb-12">30+</h3>
                        <p className="text-gray-600 text-lg">Team Members</p>
                    </div>
                    </div>
                </div>
            </section>
    </div>
  );
}
