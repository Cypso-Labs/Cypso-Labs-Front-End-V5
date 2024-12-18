import Image from "next/image";
import React from "react";
import bgImage from "../../public/images/hero.png";
import logo from "../../public/cypso-logo.svg";
import { Urbanist, Montserrat } from "next/font/google";

const urbanist = Urbanist({
  weight: ["500", "600"],
});

const montserrat = Montserrat({
  weight: ["500"],
});

function ContactUsPage() {
  return (
    <div>
      {/* ---------------------section 1--------------------- */}
      <section className="min-h-screen flex justify-center items-center">
        <Image
          className="object-cover -z-10 p-3 lg:p-4 rounded-[30px]"
          alt="Mountains"
          src={bgImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
        />

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
            Contact Us
          </h1>

          <p className={`${montserrat.className} text-[14px] lg:text-[18px]`}>
            Get in touch with Cypso Labs to explore tailored digital solutions
            in cybersecurity, software development, and AI-driven marketing.
            Let&apos;s transform your business together!
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactUsPage;
