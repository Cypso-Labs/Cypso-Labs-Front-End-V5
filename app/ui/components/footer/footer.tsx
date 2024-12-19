import React from "react";
// import logo from "../../../../public/cypso-logo.svg";
// import Image from "next/image";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import "./index.css";

const lato = Lato({
  weight: "400",
});

const font = localFont({
  src: "../../fonts/NicoMoji-Regular.ttf",
});

function Footer() {
  return (
    <div>
      <footer className="">
        {/* <Image
          className="z-10 absolute top-[20px] end-[20px]"
          src={logo}
          alt="cypso logo"
        /> */}
        <div
          className={`rounded-edge text-[#F9F9F9] mx-auto w-full p-8 md:p-11 lg:p-16 pb-5 md:pb-10 mt-16 ${lato.className}`}
          style={{
            background:
              "linear-gradient(89.79deg, #0D476D 0.15%, #115684 99.79%)",
          }}
        >
          <div className="text-center">
            <h1 className={`${font.className} md:hidden`}>CYPSO LABS</h1>
          </div>

          <div className="md:flex md:justify-between">
            <div className="mt-5 flex justify-center gap-6 md:gap-11 lg:gap-28 xl:gap-56 md:mt-0">
              <div className="flex-grow ms-10 md:ms-0">
                <h2 className="mb-3 md:text-[17px] lg:text-[20px]">Quick Links</h2>
                <ul className="text-[14px] md:text-[17px] lg:text-[20px] text-[#FFFFFFCC]">
                  <li className="mb-3">
                    <a href="#" className=" hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className=" hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className=" hover:underline">
                      Services
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex-grow md:flex-grow-0">
                <h2 className="mb-3 md:text-[17px] lg:text-[20px]">Join With Us</h2>
                <ul className="text-[14px] md:text-[17px] lg:text-[20px] text-[#FFFFFFCC]">
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Intern Software Engineer
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Business Developer Manager
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      UI/UX Engineer
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Full Stack Developer
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center py-5 md:py-0 md:justify-center gap-3 text-[14px] md:text-[15px] md:items-start lg:text-[20px] text-center">
              <div className="text-center">
                <h1 className={`${font.className} hidden md:block text-[35px] lg:text-[45px]`}>
                  CYPSO LABS
                </h1>
              </div>

              <div className="flex gap-2 md:gap-1 items-center">
                <svg
                  className="h-[13px] md:h-[20px]"
                  // width="9"
                  // height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.58341 5.02987C8.58341 4.49364 8.4778 3.96266 8.27259 3.46724C8.06738 2.97183 7.76661 2.52169 7.38743 2.14251C7.00826 1.76334 6.55812 1.46257 6.06271 1.25736C5.56729 1.05215 5.03631 0.946533 4.50008 0.946533C3.96385 0.946533 3.43287 1.05215 2.93746 1.25736C2.44204 1.46257 1.9919 1.76334 1.61273 2.14251C1.23356 2.52169 0.93278 2.97183 0.727573 3.46724C0.522366 3.96266 0.416748 4.49364 0.416748 5.02987C0.416748 5.83895 0.655331 6.59145 1.06133 7.22612H1.05666L4.50008 12.6132L7.9435 7.22612H7.93941C8.35995 6.5708 8.58348 5.80851 8.58341 5.02987ZM4.50008 6.77987C4.03595 6.77987 3.59083 6.59549 3.26264 6.2673C2.93446 5.93912 2.75008 5.494 2.75008 5.02987C2.75008 4.56574 2.93446 4.12062 3.26264 3.79243C3.59083 3.46424 4.03595 3.27987 4.50008 3.27987C4.96421 3.27987 5.40933 3.46424 5.73752 3.79243C6.06571 4.12062 6.25008 4.56574 6.25008 5.02987C6.25008 5.494 6.06571 5.93912 5.73752 6.2673C5.40933 6.59549 4.96421 6.77987 4.50008 6.77987Z"
                    fill="currentColor"
                  />
                </svg>

                <p>No 421, Galle Road, Wadduwa, Sri Lanka</p>
              </div>

              <div className="flex gap-2 md:gap-1 items-center">
                <svg
                  className="h-[13px] md:h-[19px]"
                  // width="13"
                  // height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.15525 12.1906C8.31525 12.1597 5.93467 11.8307 3.4415 9.33814C0.948919 6.84498 0.620502 4.46498 0.589002 3.62439C0.542335 2.34339 1.5235 1.09914 2.65692 0.613228C2.7934 0.554292 2.94287 0.531853 3.09064 0.548114C3.23842 0.564374 3.37943 0.618775 3.49984 0.705978C4.43317 1.38614 5.07717 2.41514 5.63017 3.22423C5.75184 3.40199 5.80387 3.6183 5.77633 3.83194C5.74879 4.04559 5.64361 4.24163 5.48084 4.38273L4.34275 5.22798C4.28777 5.26768 4.24906 5.32599 4.23383 5.39208C4.2186 5.45817 4.22787 5.52754 4.25992 5.58731C4.51775 6.05573 4.97625 6.75339 5.50125 7.27839C6.02625 7.80339 6.75717 8.29223 7.25825 8.57923C7.32108 8.6145 7.39503 8.62435 7.4649 8.60678C7.53477 8.5892 7.59526 8.54552 7.63392 8.48473L8.37475 7.35714C8.51095 7.17622 8.71187 7.05502 8.93544 7.01892C9.159 6.98282 9.38786 7.03462 9.57409 7.16348C10.3948 7.73164 11.3527 8.36456 12.0538 9.26231C12.1481 9.38359 12.2081 9.52797 12.2275 9.68035C12.2469 9.83274 12.225 9.98753 12.1641 10.1286C11.6758 11.2678 10.4403 12.2379 9.15525 12.1906Z"
                    fill="currentColor"
                  />
                </svg>
                +94 78 724 7012
              </div>

              <div className="flex gap-2 md:gap-1 items-center">
                <svg
                className="h-[10px] md:h-[15px]"
                  // width="19"
                  // height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.083 -1.71997H0.787C-0.47085 -1.71997 -1.48857 -0.690821 -1.48857 0.567029L-1.5 14.289C-1.5 15.5469 -0.47085 16.576 0.787 16.576H19.083C20.3409 16.576 21.37 15.5469 21.37 14.289V0.567029C21.37 -0.690821 20.3409 -1.71997 19.083 -1.71997ZM19.083 2.85403L9.935 8.57153L0.787 2.85403V0.567029L9.935 6.28453L19.083 0.567029V2.85403Z"
                    fill="currentColor"
                  />
                </svg>
                info@cypsolabs.com
              </div>
            </div>
          </div>

          <hr className="my-6 border-[#FFFFFF80] mx-auto dark:border-gray-700 lg:my-8" />

          <div className="flex justify-between">
            <div className="flex gap-1 md:gap-1.5 items-center">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-[12px] md:h-[17px] lg:h-[22px]"
                  // width="12"
                  // height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3376 0.779785H0.6624C0.2964 0.779785 0 1.07619 0 1.44219V12.1174C0 12.4834 0.2964 12.7798 0.6624 12.7798H6.4092V8.13279H4.8456V6.32199H6.4092V4.98579C6.4092 3.43539 7.356 2.59179 8.739 2.59179C9.4014 2.59179 9.9702 2.64099 10.1364 2.66319V4.28319H9.1776C8.4252 4.28319 8.28 4.64079 8.28 5.16519V6.32139H10.0734L9.8394 8.13219H8.2794V12.7798H11.3376C11.7036 12.7798 12 12.4834 12 12.1174V1.44219C12 1.07619 11.7036 0.779785 11.3376 0.779785Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-[12px] md:h-[17px] lg:h-[22px]"
                  // width="12"
                  // height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.13929C0 0.664535 0.3945 0.279785 0.88125 0.279785H11.1187C11.6055 0.279785 12 0.664535 12 1.13929V11.4203C12 11.895 11.6055 12.2798 11.1187 12.2798H0.88125C0.3945 12.2798 0 11.895 0 11.4203V1.13929ZM3.70725 10.3253V4.90654H1.9065V10.3253H3.70725ZM2.80725 4.16629C3.435 4.16629 3.82575 3.75079 3.82575 3.23029C3.8145 2.69854 3.43575 2.29429 2.81925 2.29429C2.20275 2.29429 1.8 2.69929 1.8 3.23029C1.8 3.75079 2.19075 4.16629 2.79525 4.16629H2.80725ZM6.48825 10.3253V7.29904C6.48825 7.13704 6.50025 6.97504 6.54825 6.85954C6.678 6.53628 6.97425 6.20104 7.47225 6.20104C8.124 6.20104 8.38425 6.69754 8.38425 7.42654V10.3253H10.185V7.21729C10.185 5.55229 9.297 4.77829 8.112 4.77829C7.1565 4.77829 6.72825 5.30329 6.48825 5.67304V5.69179H6.47625L6.48825 5.67304V4.90654H4.68825C4.71075 5.41504 4.68825 10.3253 4.68825 10.3253H6.48825Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="h-[12px] md:h-[17px] lg:h-[22px]"
                  // width="12"
                  // height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-0.000244141 5.61312C-0.000244141 3.09912 -0.00024422 1.84179 0.781089 1.06112C1.56176 0.279785 2.81909 0.279785 5.33309 0.279785H6.66642C9.18042 0.279785 10.4378 0.279785 11.2184 1.06112C11.9998 1.84179 11.9998 3.09912 11.9998 5.61312V6.94645C11.9998 9.46045 11.9998 10.7178 11.2184 11.4985C10.4378 12.2798 9.18042 12.2798 6.66642 12.2798H5.33309C2.81909 12.2798 1.56176 12.2798 0.781089 11.4985C-0.00024422 10.7178 -0.000244141 9.46045 -0.000244141 6.94645V5.61312ZM9.99976 3.27979C9.99976 3.545 9.8944 3.79936 9.70686 3.98689C9.51933 4.17443 9.26497 4.27979 8.99976 4.27979C8.73454 4.27979 8.48019 4.17443 8.29265 3.98689C8.10511 3.79936 7.99976 3.545 7.99976 3.27979C7.99976 3.01457 8.10511 2.76021 8.29265 2.57268C8.48019 2.38514 8.73454 2.27979 8.99976 2.27979C9.26497 2.27979 9.51933 2.38514 9.70686 2.57268C9.8944 2.76021 9.99976 3.01457 9.99976 3.27979ZM7.33309 6.94645C7.33309 7.30007 7.19261 7.63921 6.94256 7.88926C6.69252 8.13931 6.35338 8.27979 5.99976 8.27979C5.64613 8.27979 5.307 8.13931 5.05695 7.88926C4.8069 7.63921 4.66642 7.30007 4.66642 6.94645C4.66642 6.59283 4.8069 6.25369 5.05695 6.00364C5.307 5.75359 5.64613 5.61312 5.99976 5.61312C6.35338 5.61312 6.69252 5.75359 6.94256 6.00364C7.19261 6.25369 7.33309 6.59283 7.33309 6.94645ZM8.66642 6.94645C8.66642 7.6537 8.38547 8.33197 7.88537 8.83207C7.38528 9.33217 6.707 9.61312 5.99976 9.61312C5.29251 9.61312 4.61423 9.33217 4.11414 8.83207C3.61404 8.33197 3.33309 7.6537 3.33309 6.94645C3.33309 6.23921 3.61404 5.56093 4.11414 5.06083C4.61423 4.56074 5.29251 4.27979 5.99976 4.27979C6.707 4.27979 7.38528 4.56074 7.88537 5.06083C8.38547 5.56093 8.66642 6.23921 8.66642 6.94645Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </a>
            </div>

            <div>
              <p className="text-[8px] md:text-[11px] lg:text-[14px]">
                © 2024 Cypso Labs. All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
