import * as React from "react";
import { JobDetailProps } from "./types";

export const JobDetails: React.FC<JobDetailProps> = ({
  title,
  description,
  location,
  type,
}) => {
  return (
    <div className="flex flex-col mt-16">
      <h2 className="self-start text-3xl font-bold leading-none text-center text-black">
        {title}
      </h2>
      <div className="flex gap-4 mt-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4ce350aa64044b4391cfb1a87f55ff22/790a3a275ebe575d71e79a4fc09f2aa0f3201001b7629c8dffa793adfa6166ca?apiKey=4ce350aa64044b4391cfb1a87f55ff22&"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <span>{location}</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4ce350aa64044b4391cfb1a87f55ff22/0f611b8cd9199541376543d54eeddf001947c3cb16b92654355dd209a42f32b3?apiKey=4ce350aa64044b4391cfb1a87f55ff22&"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <span>{type}</span>
      </div>
      <div className="mt-8 text-base font-medium leading-6 text-black">
        {description}
      </div>
    </div>
  );
};
