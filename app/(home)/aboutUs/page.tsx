
"use client";
/* eslint-disable @next/next/no-img-element */
import { CoreValue } from "./CoreValue";
import { Founder } from "./Founder";
import { SectionHeading } from "./SectionHeading";
import { coreValues, founders } from "./data";

 function AboutPage() {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-24 bg-neutral-50 pb-[720px] max-md:px-5 max-md:pb-24">
      <div className="flex flex-col w-full max-w-[1181px] max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start">
          <div className="text-6xl font-semibold tracking-wide text-neutral-900 w-[478px] max-md:max-w-full max-md:text-4xl">
            We Are
            <br />
            <span className="font-bold">Cypso Labs</span>
          </div>
          <div className="text-lg font-medium tracking-normal leading-7 text-black text-opacity-80 w-[678px] max-md:max-w-full">
            We Are Cypso Labs (Pvt) Ltd a dynamic team of innovators committed
            to delivering cutting-edge digital solutions that empower businesses
            to thrive in the digital age.
            <br />
            <br />
            With a passion for technology and a focus on excellence, we
            specialize in providing customized software development, Gaming,
            block chaining and Financial systems services.
            <br />
            <br />
            Our mission is to help businesses unlock their full potential by
            offering solutions that are not only effective but also aligned with
            their unique goals. At Cypso Labs, your success is our top priority.
          </div>
        </div>

        <div className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
          <SectionHeading
            title="Our Core Values"
            description="Innovation, honesty, and customer focus drive everything we do. We're dedicated to delivering creative and reliable digital solutions that meet our clients' unique needs with care and integrity."
          />
          <div className="flex flex-wrap gap-6 items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
            {coreValues.map((value, index) => (
              <CoreValue key={index} {...value} />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
          <SectionHeading
            title="Our Founders"
            description="Our founders at Cypso Labs drive innovation and excellence, fostering a culture that challenges boundaries and inspires transformative software solutions."
          />
          <div className="flex flex-wrap gap-6 items-center mt-16 w-full text-center max-md:mt-10 max-md:max-w-full">
            {founders.map((founder, index) => (
              <Founder key={index} {...founder} />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-24 max-md:mt-10 max-md:max-w-full">
          <SectionHeading
            title="Our International Client Network"
            description="Our international client network spans across various industries and regions, reflecting our global expertise in delivering innovative solutions and exceptional service."
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/9b9092018e1691aaf82d91b17338b56c0909f082b95e2b2d3e5d4d1f616327d1?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&"
            className="object-contain mt-16 w-full aspect-[2.04] max-md:mt-10"
            alt="Map showing our international client network"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
