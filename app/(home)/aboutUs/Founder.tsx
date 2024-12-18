/* eslint-disable @next/next/no-img-element */
import { FounderProps } from "./types";

export const Founder = ({
  image,
  decorativeImage,
  name,
  role,
}: FounderProps) => {
  return (
    <div className="flex overflow-hidden flex-col grow shrink self-stretch pb-7 pl-6 my-auto bg-white rounded-3xl min-w-[240px] shadow-[0px_0px_3px_rgba(0,0,0,0.25)] w-[302px]">
      <img
        loading="lazy"
        src={decorativeImage}
        className="object-contain self-end w-12 rounded-none aspect-square"
        alt=""
      />
      <img
        loading="lazy"
        src={image}
        className="object-contain self-center max-w-full aspect-square rounded-[1000px] w-[200px]"
        alt={name}
      />
      <div className="flex flex-col p-6 mt-3.5 max-w-full rounded-xl w-[329px] max-md:px-5">
        <h3 className="text-2xl font-bold tracking-normal leading-none text-sky-950">
          {name}
        </h3>
        <p className="gap-10 self-stretch w-full text-sm font-medium tracking-normal leading-7 text-sky-950 text-opacity-80">
          {role}
        </p>
      </div>
    </div>
  );
};
