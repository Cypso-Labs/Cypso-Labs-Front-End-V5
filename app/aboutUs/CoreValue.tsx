/* eslint-disable @next/next/no-img-element */
import { CoreValueProps } from "./types";

// export const CoreValue = ({ icon, title, description }: CoreValueProps) => {
//   return (
//     <div className="flex flex-col grow shrink justify-center px-8 py-12 bg-white rounded-3xl min-w-[240px] shadow-[0px_0px_3px_rgba(0,0,0,0.25)] w-[462px] max-md:px-5 max-md:max-w-full">
//       <div className="flex flex-col w-full max-md:max-w-full">
//         <div className="flex overflow-hidden gap-2.5 items-center p-3 w-12 h-12 rounded-md bg-black bg-opacity-10">
//           <img
//             loading="lazy"
//             src={icon}
//             className="object-contain self-stretch my-auto aspect-[0.96] w-[23px]"
//             alt=""
//           />
//         </div>
//         <h3 className="mt-3 text-2xl font-bold tracking-normal leading-none text-black max-md:max-w-full">
//           {title}
//         </h3>
//       </div>
//       <p className="mt-4 text-base font-medium tracking-normal leading-6 text-black text-opacity-80 max-md:max-w-full">
//         {description}
//       </p>
//     </div>
//   );
// };
export const CoreValue = ({ icon, title, description }: CoreValueProps) => {
  return (
    <div className="flex flex-col justify-center px-8 py-12 bg-white rounded-3xl shadow-md">
      <div className="flex items-center justify-center w-12 h-12 p-3 rounded-md bg-black bg-opacity-10">
        <img
          loading="lazy"
          src={icon}
          className="object-contain w-6 h-6"
          alt=""
        />
      </div>
      <h3 className="mt-3 text-xl font-bold text-black">{title}</h3>
      <p className="mt-4 text-base font-medium text-black text-opacity-80">
        {description}
      </p>
    </div>
  );
};
