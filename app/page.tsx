import React from "react";

export default function Home() {
  return (
    <div className="w-full">
            <section
                className="relative text-white m-5 rounded-[18px] bg-gray-50"
                style={{
                backgroundImage: "url('/images/hero.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
            >
                <div className="container mx-auto flex flex-col items-center justify-center h-[80vh] sm:h-[100vh] text-center px-12 sm:px-12 md:px-20 lg:px-44">
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
                    <button className="bg-[#0D476D] hover:bg-white text-white hover:text-[#0D476D] font-semibold py-3 px-6 rounded-lg transition-all duration-300 font-montserrat">
                    Explore Us 
                    </button>
                    <button className="bg-[#0D476D] hover:bg-white text-white hover:text-[#0D476D] font-semibold py-3 px-6 rounded-lg transition-all duration-300 font-montserrat">
                    Contact Us
                    </button>
                </div>
                </div>
            </section>

            <section className="w-full min-h-screen bg-gray-50 relative">
              <div className="max-w-7xl mx-auto text-center py-20 px-6">
                {/* Section Title */}
                <h2 className="font-urbanist text-4xl md:text-6xl font-medium text-gray-800 mb-8 md:mt-[40px]">
                  We Provide Affordable and Efficient <br /> Digital Solutions
                </h2>
                <p className="text-gray-600 text-lg mb-16 lg:px-[215px] font-montserrat">
                  We offer powerful, budget-friendly solutions tailored to your unique needs. From sleek websites to 
                  targeted marketing and intuitive apps, we help you grow your business without breaking the bank.
                </p>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 xl:px-56 font-montserrat">
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


            <section className="relative w-full min-h-screen py-10 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-10">
                    {/* Left Side - Button */}
                    <button className="bg-[#0D476D] hover:bg-white text-white hover:text-[#0D476D] font-semibold rounded-[12px] h-[72px] px-[38px] border-2 border-transparent hover:border-[#0D476D] py-[8px] transition-all duration-300 mb-4 md:mb-0 sm:mt-0 mt-5 font-montserrat">
                        Get Started
                    </button>

                    {/* Right Side - Heading */}
                    <h2 className="font-urbanist text-center md:text-right font-[500] text-[36px] md:text-[56px] leading-[1.2] tracking-[0.0075em] text-gray-800">
                        Customized Solutions for <br /> Optimal Performance
                    </h2>
                </div>


                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {/* Card 1 */}
                  <div className="group bg-white shadow-lg rounded-3xl p-6 hover:bg-gradient-to-r from-[#0D476D] to-[#115684] transition-all duration-300">
                    <h3 className="font-urbanist text-2xl font-semibold text-gray-800 mb-4 group-hover:text-white">
                      Cyber Security
                    </h3>
                    <p className="text-black group-hover:text-white text-lg font-montserrat">
                      Protect your business with comprehensive cybersecurity, including threat detection,
                      vulnerability assessments, and data protection to secure assets.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="group bg-[#0D476D] shadow-lg rounded-3xl p-6 hover:bg-white transition-all duration-300">
                    <h3 className="text-white font-urbanist text-2xl font-semibold mb-4 group-hover:text-black">Software & Mobile App Development</h3>
                    <p className="text-white group-hover:text-black text-lg font-montserrat">
                      Transform ideas into scalable, user-friendly software and mobile apps tailored to meet your
                      unique business needs.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="group bg-[#0D476D] shadow-lg rounded-3xl p-6 hover:bg-white transition-all duration-300">
                    <h3 className="text-white font-urbanist text-2xl font-semibold mb-4 group-hover:text-black">AI-Driven Finance Marketing</h3>
                    <p className="text-white group-hover:text-black text-lg font-montserrat">
                      Enhance financial strategies with AI tools for predictive analytics, risk management, and
                      automated decision-making to optimize operations.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="group bg-white shadow-lg rounded-3xl p-6 hover:bg-gradient-to-r from-[#0D476D] to-[#115684] transition-all duration-300">
                    <h3 className="font-urbanist text-2xl font-semibold text-gray-800 mb-4 group-hover:text-white">Digital & AI Marketing</h3>
                    <p className="text-black group-hover:text-white text-lg font-montserrat">
                      Leverage AI in digital marketing to create data-driven campaigns, personalize experiences,
                      and maximize ROI through optimized performance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative w-full bg-gray-50 py-20">
              <div className="max-w-7xl mx-auto text-center px-6">
                {/* Video Section */}
                <div className="relative mb-8">
                  <video
                    className="w-[1180px] h-[652px] top-12 rounded-3xl"
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
