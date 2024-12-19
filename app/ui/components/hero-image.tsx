import Image from "next/image";
import React from "react";
import bgImage from '../../../public/images/hero.png'

function HeroImage() {
  return (
    <div>
      <Image
        className="dark-bg object-cover -z-10 p-3 lg:p-4 rounded-[30px]"
        alt="Mountains"
        src={bgImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
      />
    </div>
  );
}

export default HeroImage;
