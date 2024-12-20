import * as React from "react";
import Image from "next/image";
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
        <Image
          src="/images/rounded.svg"
          alt="Location icon"
          width={24}
          height={24} // Adjust these dimensions to match the design
          className="object-contain shrink-0"
        />
        <span>{location}</span>
        <Image
          src="/images/bag.svg"
          alt="Job type icon"
          width={24}
          height={24}
          className="object-contain shrink-0"
        />
        <span>{type}</span>
      </div>
      <div className="mt-8 text-base font-medium leading-6 text-black">
        {description}
      </div>
    </div>
  );
};
