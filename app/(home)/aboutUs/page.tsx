"use client";
/* eslint-disable @next/next/no-img-element */
import { CoreValue } from "./CoreValue";
import { Founder } from "./Founder";
import { SectionHeading } from "./SectionHeading";
import { coreValues, founders } from "./data";

function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-neutral-50">
    
      <div
        className="relative w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
  

    
        <div className="text-center py-16 px-8 md:py-28 md:px-16 bg-black bg-opacity-60">
          <div className="flex justify-center mb-4">
            <img
              src="/cypso-logo.png" 
              alt="Cypso Labs Logo"
              className="w-12 h-12"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#5ABEF7]">Cypso Labs</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            At Cypso Labs (Pvt) Ltd, we specialize in transforming your ideas
            into digital reality. Our expert team crafts innovative, customized
            solutions that bring your vision to life, driving success in the
            digital world.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col items-center px-6 py-10 md:px-20 bg-neutral-50 max-md:px-5">
        <div className="flex flex-col w-full max-w-[1181px]">
          {/* "We Are Cypso Labs" Section */}
          <div className="flex flex-wrap gap-6 items-start">
            <div className="text-4xl md:text-6xl font-semibold tracking-wide text-neutral-900 w-full md:w-[478px]">
              We Are
              <br />
              <span className="font-bold text-[#5ABEF7]">Cypso Labs</span>
            </div>
            <div className="text-base md:text-lg font-medium tracking-normal leading-7 text-black text-opacity-80 w-full md:w-[678px]">
              We Are Cypso Labs (Pvt) Ltd, a dynamic team of innovators
              committed to delivering cutting-edge digital solutions that
              empower businesses to thrive in the digital age.
              <br />
              <br />
              With a passion for technology and a focus on excellence, we
              specialize in providing customized software development, Gaming,
              block chaining, and Financial systems services.
              <br />
              <br />
              Our mission is to help businesses unlock their full potential by
              offering solutions that are not only effective but also aligned
              with their unique goals. At Cypso Labs, your success is our top
              priority.
            </div>
          </div>

      
          <div className="flex flex-col mt-16 md:mt-24 w-full">
            <SectionHeading
              title="Our Core Values"
              description="Innovation, honesty, and customer focus drive everything we do. We're dedicated to delivering creative and reliable digital solutions that meet our clients' unique needs with care and integrity."
            />
            <div className="flex flex-wrap gap-6 mt-10 md:mt-16">
              {coreValues.map((value, index) => (
                <CoreValue key={index} {...value} />
              ))}
            </div>
          </div>


          <div className="flex flex-col mt-16 md:mt-24 w-full">
            <SectionHeading
              title="Our Founders"
              description="Our founders at Cypso Labs drive innovation and excellence, fostering a culture that challenges boundaries and inspires transformative software solutions."
            />
            <div className="flex flex-wrap gap-6 items-center mt-10 md:mt-16 text-center">
              {founders.map((founder, index) => (
                <Founder key={index} {...founder} />
              ))}
            </div>
          </div>


          <div className="flex flex-col mt-16 md:mt-24">
            <SectionHeading
              title="Our International Client Network"
              description="Our international client network spans across various industries and regions, reflecting our global expertise in delivering innovative solutions and exceptional service."
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/9b9092018e1691aaf82d91b17338b56c0909f082b95e2b2d3e5d4d1f616327d1?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&"
              className="object-contain mt-10 md:mt-16 w-full aspect-[2.04]"
              alt="Map showing our international client network"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
