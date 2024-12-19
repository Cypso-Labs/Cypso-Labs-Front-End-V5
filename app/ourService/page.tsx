'use client'
import React from "react";
import CaseStudyCard from "../components/models/caseStudyCard";
import image1 from "../../public/images/case study.jpeg"; 
import image2 from "../../public/images/2.jpeg";
import image3 from "../../public/images/3.jpeg"; 
import image4 from "../../public/images/hero1.jpeg"; 
import logo from "../../public/images/logo.png"; 
import Image from "next/image";
import { Montserrat, Urbanist } from "next/font/google";
// import TechStack from "../components/models/techStack";
import ContactUsBtn from "../components/ContactUsBtn";

// Case Studies Data
const caseStudies = [
  {
    title:
      "Innovative Digital Transformation: Building a Seamless Mobile Experience",
    description: "Java (Spring Boot) & React Native Expo",
    imgSrc: image1,
  },
  {
    title:
      "Driving Digital Growth: A Comprehensive E-commerce Platform Overhaul",
    description: "MERN Stack",
    imgSrc: image2,
  },
  {
    title: "Optimizing Workflow Efficiency: Developing a Scalable ERP System",
    description: "Java (Spring Boot) & Next.js",
    imgSrc: image3,
  },
];

const urbanist = Urbanist({
  weight: ["500", "600"],
});

const montserrat = Montserrat({
  weight: ["500"],
});

// Main Component
export default function Home() {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <section className="relative flex justify-center items-center h-[80vh] sm:h-[86vh] rounded-[18px] overflow-hidden bottom-10">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={image4}
            alt="Background"
            className="object-cover"
            layout="fill" 
            quality={100}
            sizes="100vw" 
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-white text-center space-y-4 px-6 sm:px-8 lg:px-16">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              className="w-[60px] sm:w-[70px] lg:w-[96px]"
              src={logo}
              alt="Logo"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-[24px] sm:text-[32px] lg:text-[48px] font-semibold leading-tight">
            Our Services
          </h1>
          <div className="max-w-3xl mx-auto">
            {/* Description */}
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
              Cypso Labs offers innovative digital solutions, specializing in
              cybersecurity, software development, AI-driven marketing, and
              more, tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-[10%]">
        <section className="text-center">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start mb-12 space-y-4 sm:space-y-0">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 text-center sm:text-left leading-tight">
              <span>Your Trusted Source</span>
              <br />
              <span>for IT Services</span>
            </h1>

            {/* Button */}
            <div className="relative flex justify-center sm:justify-start w-full sm:w-auto">
              <button className="w-full sm:w-[237.25px] h-[72px] bg-[#0D476D] py-2 px-6 rounded-lg text-white shadow-md text-center">
                Contact Us
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
              <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
                WEB 3.0 Software & Mobile App
              </h3>
              <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
                Transform your business with innovative, decentralized Web 3.0
                software and mobile apps.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
              <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
                Digital & AI Marketing
              </h3>
              <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
                Boost your brand with AI-driven marketing for personalized,
                measurable success.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
              <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
                Blockchain and Decentralized Applications
              </h3>
              <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
                Build secure blockchain solutions and decentralized apps for
                scalable, efficient processes.
              </p>
            </div>
            {/* Service 4 */}
            <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
              <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
                AI-Driven Finance Marketing Development
              </h3>
              <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
                Optimize finance marketing with AI-driven solutions for data
                analysis and decision-making.
              </p>
            </div>
            {/* Service 5 */}
            <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
              <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
                Cyber Security
              </h3>
              <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
                Protect your business with comprehensive cybersecurity solutions
                to prevent threats and secure data.
              </p>
            </div>
            {/* Service 6 */}
            <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
              <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
                Search Engine Optimization
              </h3>
              <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
                Improve online visibility with SEO strategies that drive organic
                traffic and boost rankings.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section
      <div className="max-w-screen-2xl mx-auto text-center">

      </div> */}

        {/* <div>
          <TechStack />
        </div> */}

        {/* Case Studies Section */}
        <section className="bg-gray-50 py-10 sm:py-20 px-4 sm:px-6">
  {/* Header Section */}
  <div className="flex flex-col sm:flex-row items-center sm:items-start text-start mb-8 sm:mb-12 w-full max-w-screen-lg mx-auto">
    <h1
      className={`${urbanist.className} text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4 sm:mb-0 sm:mr-6`}
    >
      Case Studies
    </h1>
    <p
      className={`${montserrat.className} text-base sm:text-lg text-gray-600 leading-6 font-medium max-w-lg`}
    >
      Our case studies showcase successful projects, highlighting innovative
      solutions, measurable results, and how we solve client challenges with
      expertise and technology.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-screen-lg mx-auto">
    {caseStudies.map((caseStudy, index) => (
      <CaseStudyCard
        key={index}
        title={caseStudy.title}
        description={caseStudy.description}
        imgSrc={caseStudy.imgSrc}
        techStack={undefined}
      />
    ))}
  </div>
</section>

        {/* <section>
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">Our Tech Stack</h1>
        <TechStack />
      </div>
      </section> */}
      </div>
    </div>
  );
}
