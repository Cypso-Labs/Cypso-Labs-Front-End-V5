import Image from "next/image";
import React from "react";
import bgImage from "../../public/images/hero.png";
import logo from "../../public/cypso-logo.svg";
import { Urbanist, Montserrat } from "next/font/google";

const urbanist = Urbanist({
  preload: false,
  weight: ["500", "600"],
});

const montserrat = Montserrat({
  preload: false,
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

      {/* ---------------------section 2--------------------- */}
      <section className="p-3 lg:p-16 xl:p-24 md:flex md:justify-center md:gap-5">
        <div className="space-y-5 md:flex-grow">
          <h1
            className={`${urbanist.className} text-[32px] md:text-[56px] font-[600]`}
          >
            Get in Touch
          </h1>

          <p className={`${montserrat.className} text-[14px] md:text-[18px]`}>
            Connect with Cypso Labs to discuss innovative <br /> solutions
            tailored to your business needs. Reach <br /> out to us for
            inquiries, support, or collaboration <br /> opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex gap-3">
              <div>
                <svg
                  className="h-[33px] md:h-[48px]"
                  //   width="32"
                  //   height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.780029"
                    width="32"
                    height="32"
                    rx="16"
                    fill="#092D48"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.338 26.4359C18.9658 26.3854 15.0769 25.848 11.0042 21.7762C6.93236 17.7034 6.39587 13.8155 6.34441 12.4424C6.26818 10.3498 7.87098 8.31718 9.7225 7.5234C9.94546 7.42713 10.1896 7.39047 10.431 7.41703C10.6724 7.4436 10.9028 7.53246 11.0995 7.67492C12.6241 8.78602 13.6762 10.467 14.5795 11.7887C14.7783 12.079 14.8633 12.4324 14.8183 12.7814C14.7733 13.1304 14.6015 13.4507 14.3356 13.6812L12.4764 15.0619C12.3866 15.1268 12.3234 15.222 12.2985 15.33C12.2736 15.438 12.2888 15.5513 12.3411 15.6489C12.7623 16.4141 13.5113 17.5538 14.3689 18.4114C15.2265 19.2691 16.4206 20.0676 17.2391 20.5364C17.3417 20.594 17.4625 20.6102 17.5767 20.5814C17.6908 20.5527 17.7896 20.4814 17.8528 20.3821L19.063 18.5401C19.2855 18.2445 19.6137 18.0465 19.9789 17.9876C20.3441 17.9286 20.718 18.0132 21.0222 18.2237C22.3629 19.1518 23.9276 20.1858 25.073 21.6523C25.2271 21.8504 25.325 22.0863 25.3567 22.3352C25.3884 22.5841 25.3526 22.837 25.2531 23.0674C24.4555 24.9284 22.4373 26.5131 20.338 26.4359Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </div>

              <div>
                <p
                  className={`${urbanist.className} text-[18px] md:text-[24px] font-[600]`}
                >
                  Phone Number
                </p>
                <p
                  className={`${montserrat.className} text-[14px] md:text-[18px]`}
                >
                  +94 78 724 7012
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <svg
                  className="h-[33px] md:h-[48px]"
                  //   width="32"
                  //   height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.780029"
                    width="32"
                    height="32"
                    rx="16"
                    fill="#092D48"
                  />
                  <path
                    d="M22.6709 13.9213C22.6709 13.0453 22.4984 12.1779 22.1632 11.3686C21.8279 10.5593 21.3366 9.82398 20.7172 9.20457C20.0978 8.58517 19.3624 8.09383 18.5532 7.75861C17.7439 7.42339 16.8765 7.25085 16.0005 7.25085C15.1245 7.25085 14.2571 7.42339 13.4478 7.75861C12.6385 8.09383 11.9032 8.58517 11.2838 9.20457C10.6644 9.82398 10.1731 10.5593 9.83783 11.3686C9.50261 12.1779 9.33008 13.0453 9.33008 13.9213C9.33008 15.243 9.71982 16.4722 10.3831 17.509H10.3754L16.0005 26.3092L21.6256 17.509H21.6189C22.3059 16.4385 22.671 15.1932 22.6709 13.9213ZM16.0005 16.78C15.2423 16.78 14.5152 16.4788 13.9791 15.9427C13.4429 15.4066 13.1417 14.6795 13.1417 13.9213C13.1417 13.1631 13.4429 12.4359 13.9791 11.8998C14.5152 11.3637 15.2423 11.0625 16.0005 11.0625C16.7587 11.0625 17.4858 11.3637 18.0219 11.8998C18.5581 12.4359 18.8592 13.1631 18.8592 13.9213C18.8592 14.6795 18.5581 15.4066 18.0219 15.9427C17.4858 16.4788 16.7587 16.78 16.0005 16.78Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </div>

              <div>
                <p
                  className={`${urbanist.className} text-[18px] md:text-[24px] font-[600]`}
                >
                  Address
                </p>
                <p
                  className={`${montserrat.className} text-[14px] md:text-[18px]`}
                >
                  No 421, Galle Road, Wadduwa, <br /> Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <svg
                  className="h-[33px] md:h-[48px]"
                  //   width="32"
                  //   height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.780029"
                    width="32"
                    height="32"
                    rx="16"
                    fill="#092D48"
                  />
                  <g clipPath="url(#clip0_595_5151)">
                    <path
                      d="M21.3349 11.2763H10.6622C9.92846 11.2763 9.3348 11.8766 9.3348 12.6104L9.32812 20.6149C9.32812 21.3486 9.92846 21.949 10.6622 21.949H21.3349C22.0686 21.949 22.669 21.3486 22.669 20.6149V12.6104C22.669 11.8766 22.0686 11.2763 21.3349 11.2763ZM21.3349 13.9445L15.9985 17.2797L10.6622 13.9445V12.6104L15.9985 15.9456L21.3349 12.6104V13.9445Z"
                      fill="#F9F9F9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_595_5151">
                      <rect
                        width="13.3408"
                        height="13.3408"
                        fill="white"
                        transform="translate(9.3291 10.1096)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div>
                <p
                  className={`${urbanist.className} text-[18px] md:text-[24px] font-[600]`}
                >
                  Email
                </p>
                <p
                  className={`${montserrat.className} text-[14px] md:text-[18px]`}
                >
                  info@cypsolabs.com
                </p>
              </div>
            </div>
          </div>

          <hr className="border bg-[#00000080]"></hr>

          <h1 className={`${urbanist.className} text-[24px] font-[600]`}>
            Follow Us :
          </h1>

          <div className="flex gap-5">
            <div>
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.929 0.780029H1.51491C0.677865 0.780029 0 1.45789 0 2.29494V26.7091C0 27.5461 0.677865 28.224 1.51491 28.224H14.6578V17.5963H11.0819V13.455H14.6578V10.3991C14.6578 6.85337 16.8231 4.92407 19.9861 4.92407C21.501 4.92407 22.8018 5.03659 23.1819 5.08736V8.79229H20.9891C19.2684 8.79229 18.9363 9.61012 18.9363 10.8094V13.4536H23.0378L22.5027 17.5949H18.935V28.224H25.929C26.7661 28.224 27.4439 27.5461 27.4439 26.7091V2.29494C27.4439 1.45789 26.7661 0.780029 25.929 0.780029Z"
                  fill="#092D48"
                />
              </svg>
            </div>

            <div>
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.444336 2.7457C0.444336 1.65995 1.34656 0.780029 2.45975 0.780029H25.8729C26.9861 0.780029 27.8883 1.65995 27.8883 2.7457V26.2583C27.8883 27.3441 26.9861 28.224 25.8729 28.224H2.45975C1.34656 28.224 0.444336 27.3441 0.444336 26.2583V2.7457ZM8.9228 23.754V11.3614H4.80449V23.754H8.9228ZM6.8645 9.66844C8.30017 9.66844 9.19381 8.71819 9.19381 7.52781C9.16808 6.3117 8.30188 5.38718 6.89195 5.38718C5.48202 5.38718 4.56093 6.31342 4.56093 7.52781C4.56093 8.71819 5.45457 9.66844 6.83706 9.66844H6.8645ZM15.2829 23.754V16.833C15.2829 16.4625 15.3104 16.092 15.4202 15.8279C15.7169 15.0886 16.3944 14.3219 17.5333 14.3219C19.0239 14.3219 19.6191 15.4574 19.6191 17.1246V23.754H23.7374V16.6461C23.7374 12.8382 21.7065 11.0681 18.9964 11.0681C16.8112 11.0681 15.8318 12.2688 15.2829 13.1144V13.1572H15.2555L15.2829 13.1144V11.3614H11.1663C11.2178 12.5243 11.1663 23.754 11.1663 23.754H15.2829Z"
                  fill="#092D48"
                />
              </svg>
            </div>

            <div>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.887695 12.9774C0.887695 7.22784 0.887695 4.35232 2.6746 2.56694C4.45999 0.780029 7.33551 0.780029 13.085 0.780029H16.1344C21.8839 0.780029 24.7594 0.780029 26.5448 2.56694C28.3317 4.35232 28.3317 7.22784 28.3317 12.9774V16.0267C28.3317 21.7762 28.3317 24.6517 26.5448 26.4371C24.7594 28.224 21.8839 28.224 16.1344 28.224H13.085C7.33551 28.224 4.45999 28.224 2.6746 26.4371C0.887695 24.6517 0.887695 21.7762 0.887695 16.0267V12.9774ZM23.7577 7.64103C23.7577 8.24758 23.5167 8.82929 23.0878 9.25818C22.659 9.68708 22.0772 9.92803 21.4707 9.92803C20.8641 9.92803 20.2824 9.68708 19.8535 9.25818C19.4246 8.82929 19.1837 8.24758 19.1837 7.64103C19.1837 7.03448 19.4246 6.45277 19.8535 6.02388C20.2824 5.59498 20.8641 5.35403 21.4707 5.35403C22.0772 5.35403 22.659 5.59498 23.0878 6.02388C23.5167 6.45277 23.7577 7.03448 23.7577 7.64103ZM17.659 16.0267C17.659 16.8354 17.3378 17.611 16.7659 18.1829C16.194 18.7548 15.4184 19.076 14.6097 19.076C13.801 19.076 13.0254 18.7548 12.4535 18.1829C11.8816 17.611 11.5604 16.8354 11.5604 16.0267C11.5604 15.218 11.8816 14.4424 12.4535 13.8705C13.0254 13.2986 13.801 12.9774 14.6097 12.9774C15.4184 12.9774 16.194 13.2986 16.7659 13.8705C17.3378 14.4424 17.659 15.218 17.659 16.0267ZM20.7084 16.0267C20.7084 17.6442 20.0658 19.1954 18.9221 20.3391C17.7784 21.4828 16.2272 22.1254 14.6097 22.1254C12.9922 22.1254 11.441 21.4828 10.2973 20.3391C9.15356 19.1954 8.51103 17.6442 8.51103 16.0267C8.51103 14.4092 9.15356 12.858 10.2973 11.7143C11.441 10.5706 12.9922 9.92803 14.6097 9.92803C16.2272 9.92803 17.7784 10.5706 18.9221 11.7143C20.0658 12.858 20.7084 14.4092 20.7084 16.0267Z"
                  fill="#092D48"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          style={{ boxShadow: "0px 0px 3px 0px #00000040" }}
          className="rounded-[24px] px-8 py-14 md:py-10 my-20 lg:flex-grow"
        >
          <form className="max-w-xl mx-auto space-y-5">
            <h1
              className={`${urbanist.className} text-[24px] md:text-[36px] font-[600] text-[#092D48]`}
            >
              Send a Message
            </h1>

            <div className={`space-y-5 ${montserrat.className}`}>
              <input
                style={{ boxShadow: "0px 0px 4px 0px #00000040 inset" }}
                type="text"
                className="h-[30px] text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Name"
                required
              />

              <input
                style={{ boxShadow: "0px 0px 4px 0px #00000040 inset" }}
                type="email"
                className="h-[30px] text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email"
                required
              />

              <input
                style={{ boxShadow: "0px 0px 4px 0px #00000040 inset" }}
                type="tel"
                className="h-[30px] text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Phone"
                required
              />

              <textarea
                style={{ boxShadow: "0px 0px 4px 0px #00000040 inset" }}
                className="resize-none h-[115px] text-gray-900 text-sm rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Subject"
                required
              />

              <p className="text-[8px] text-[#575757]">
                *We promise not to disclose your personal information to third
                parties.
              </p>

              <button
                type="submit"
                className="md:text-[16px] flex justify-center items-center h-[32px] text-white bg-[#0B3E63] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[5px] text-sm w-full px-5 py-2.5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ---------------------section 3--------------------- */}
      <section>
        <div className="flex justify-center">
          <iframe
            className="w-full max-w-screen-xl h-[145px] md:h-[300px] lg:h-[470px] rounded-[30px] px-3"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1981.4079291614898!2d79.928243!3d6.669726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24872fce1ad3d%3A0x73d5ab8d79ce8942!2s500%20Colombo%20-%20Galle%20-%20Hambantota%20-%20Wellawaya%20Rd%2C%20Wadduwa!5e0!3m2!1sen!2slk!4v1734502632507!5m2!1sen!2slk"
            // width="600"
            // height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default ContactUsPage;
