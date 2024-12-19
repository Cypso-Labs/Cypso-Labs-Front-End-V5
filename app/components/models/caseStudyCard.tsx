import Image from 'next/image';
import { Urbanist } from "next/font/google";
import { Montserrat } from "next/font/google";

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

const CaseStudyCard = ({ title, description, techStack, imgSrc }) => {
  return (
    <div className="relative bg-white rounded-[24px] shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-[377px] aspect-[3/4] sm:aspect-[4/5] font-medium">
      {/* Image Section */}
      <div className="relative w-full h-full rounded-[24px]">
        <Image
          src={imgSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-[24px]"
        />
      </div>

      {/* Content Section */}
      <div className="rounded-[24px] p-6 absolute bottom-0">
        <div className="absolute backdrop-blur-sm bg-white/80 w-full h-full left-0 top-0 rounded-[24px] z-10"></div>
        <h3 className={`${urbanist.className} relative text-lg sm:text-base md:text-lg font-medium text-[#151515] mb-4 z-20`}>
          {title}
        </h3>
        <p className={`${montserrat.className} relative text-[#151515] opacity-80 mb-2 font-medium text-xs sm:text-sm z-20`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
