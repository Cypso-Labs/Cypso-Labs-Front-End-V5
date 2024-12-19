import Image from "next/image";
import React from "react";
import bgImage from '../../../public/images/hero.png'

function HeroImage() {
  return (
    <div>
      <Image
        src={bgImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        placeholder="blur"
        priority
        />
    </div>
  );
}

export default HeroImage;