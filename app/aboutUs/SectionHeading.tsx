import { SectionHeadingProps } from "./types";
import { Urbanist } from "next/font/google";
import { Montserrat } from "next/font/google";

const urbanist = Urbanist({
  weight: ["600"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["500"],
  subsets: ["latin"],
});

export const SectionHeading = ({ title, description }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <h2
        className={`${urbanist.className} text-6xl font-semibold tracking-wide text-neutral-900 max-md:max-w-full max-md:text-4xl`}
      >
        {title}
      </h2>
      <p
        className={`${montserrat.className} mt-3 text-lg font-medium tracking-normal leading-7 text-black text-opacity-80 max-md:max-w-full`}
      >
        {description}
      </p>
    </div>
  );
};
