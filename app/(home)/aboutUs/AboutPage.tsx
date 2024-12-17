/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { CoreValue } from "./CoreValue";
import { Founder } from "./Founder";
import { CoreValueProps, FounderProps } from "./types";

const coreValues: CoreValueProps[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/30de542ab52034b42f60636f2cc7e530418d12f4160a103ac37399ddbbd6b310?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&",
    title: "Trust",
    description:
      "At Cypso Labs (Pvt) Ltd, trust is the foundation of our relationships. We prioritize transparency, reliability, and accountability in all our dealings, ensuring that our clients can depend on us to deliver solutions that meet their expectations every time.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/246516949fe8f3de93f88d2be768c113e9cdc923e4b303c0ade0ea98ccaa1ff0?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&",
    title: "Faster",
    description:
      "Faster is at the heart of our approach. We deliver digital solutions with speed and precision, ensuring your business stays ahead in a competitive market. With efficient processes and rapid execution, we help you achieve your goals quickly and effectively.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/38afdd2c1300a07a3854eebdfe321544fbc6c044e7fd3501c1f9a01d84d5fa1f?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&",
    title: "Creative",
    description:
      "Creative solutions are our specialty. We bring fresh ideas and innovative approaches to every project, crafting unique digital solutions that stand out. By blending imagination with technical expertise, we turn challenges into opportunities, helping your business thrive in a competitive landscape.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/14bef96496e7c844551c3f387d5cf519e55fb62b221218a27421bb6e1868e37f?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&",
    title: "24 Hours Service",
    description:
      "Our 24-hour service ensures that your business is always supported, no matter the time. We're here around the clock to provide prompt assistance, resolve issues, and keep your operations running smoothly, so you can focus on what matters most.",
  },
];

const founders: FounderProps[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/29705591d9a55e7420cc2679e78063ba47ce25e36862be448439234aaa806116?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&",
    decorativeImage:
      "https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/0a8fcf7f0c9019a2e8013370aafec31d16a08955980461e536f9666359e8625d?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&",
    name: "Vithum Vindeep",
    role: "Co-Founder & CEO",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/eed1842edabde9cc8d9f33c345996d4c473f02c7b52f21223b21b4a430f4f1f2?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&",
    decorativeImage:
      "https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/b26a3afcb3ff184e73bf6b9c1612b34ae38d49f4676ed400e388636f7f726338?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&",
    name: "Dulanjaya Lakshan",
    role: "MD & Founder",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/099bd988406f33d6c44d003d75238015198e94ae3ed67e54e176b05b73622124?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&",
    decorativeImage:
      "https://cdn.builder.io/api/v1/image/assets/2bffdf0374bd4d8684a4bf944b4d21b9/4a1c1824a05cf7d69e1ccdf4cad949f26804e42316ee60c2384ffeda4bdd06ed?apiKey=2bffdf0374bd4d8684a4bf944b4d21b9&",
    name: "Nipuna Ruwan",
    role: "Hr & Co-Founder",
  },
];

 function AboutUs() {
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
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-6xl font-semibold tracking-wide text-neutral-900 max-md:max-w-full max-md:text-4xl">
              Our Core Values
            </div>
            <div className="mt-3 text-lg font-medium tracking-normal leading-7 text-black text-opacity-80 max-md:max-w-full">
              Innovation, honesty, and customer focus drive everything we do.
              We re dedicated to delivering creative and reliable digital
              solutions that meet our clients unique needs with care and
              integrity.
            </div>
          </div>
          <div className="flex flex-wrap gap-6 items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
            {coreValues.map((value, index) => (
              <CoreValue key={index} {...value} />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-6xl font-semibold tracking-wide text-neutral-900 max-md:max-w-full max-md:text-4xl">
              Our Founders
            </div>
            <div className="mt-3 text-lg font-medium tracking-normal leading-7 text-black text-opacity-80 max-md:max-w-full">
              Our founders at Cypso Labs drive innovation and excellence,
              fostering a culture that challenges boundaries and inspires
              transformative software solutions.
            </div>
          </div>
          <div className="flex flex-wrap gap-6 items-center mt-16 w-full text-center max-md:mt-10 max-md:max-w-full">
            {founders.map((founder, index) => (
              <Founder key={index} {...founder} />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-6xl font-semibold tracking-wide text-neutral-900 max-md:max-w-full max-md:text-4xl">
              Our International Client Network
            </div>
            <div className="mt-3 text-lg font-medium tracking-normal leading-7 text-black text-opacity-80 max-md:max-w-full">
              Our international client network spans across various industries
              and regions, reflecting our global expertise in delivering
              innovative solutions and exceptional service.
            </div>
          </div>
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

export default AboutUs;
