// import Image from "next/image";
// import Python from "../../../public/icons/Python.png"; //image path

// const TechStack = () => {
//   return (
//     // <div className="relative w-full max-w-5xl mx-auto mt-10">
//     //   {/* Title */}
//     //   <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12">
//     //     Our Tech Stack
//     //   </h2>

//     //   {/* Container for SVG and Icons */}
//     //   <div className="relative w-full h-[600px] sm:h-[500px] mx-auto">
//     //     {/* SVG Paths for Curved Connectors */}
//     //     <svg
//     //       className="absolute inset-0 w-full h-full"
//     //       viewBox="0 0 800 800"
//     //       xmlns="http://www.w3.org/2000/svg"
//     //     >
//     //       {/* Top Connectors */}
//     //       <path
//     //         d="M 150 150 H 300 C 350 150, 350 200, 400 200"
//     //         stroke="#D1D5DB"
//     //         strokeWidth="2"
//     //         fill="none"
//     //       />
//     //       <path
//     //         d="M 400 200 H 500 C 550 200, 550 150, 600 150 V 100"
//     //         stroke="#D1D5DB"
//     //         strokeWidth="2"
//     //         fill="none"
//     //       />
//     //       {/* Left Connectors */}
//     //       <path
//     //         d="M 150 150 V 400 H 300"
//     //         stroke="#D1D5DB"
//     //         strokeWidth="2"
//     //         fill="none"
//     //       />
//     //       <path
//     //         d="M 150 500 H 400 C 450 500, 450 450, 500 450"
//     //         stroke="#D1D5DB"
//     //         strokeWidth="2"
//     //         fill="none"
//     //       />
//     //       {/* Bottom Connectors */}
//     //       <path
//     //         d="M 400 450 H 600 C 650 450, 650 500, 700 500 V 550"
//     //         stroke="#D1D5DB"
//     //         strokeWidth="2"
//     //         fill="none"
//     //       />
//     //     </svg>

//     //     {/* Tech Stack Icons */}
//     //     {/* Python */}
//     //     <div className="absolute top-[8%] left-[8%]">
//     //       <Image src={Python} alt="Python" width={90} height={90} />
//     //     </div>
//     //     {/* JS */}
//     //     <div className="absolute top-[8%] left-[45%]">
//     //       <Image src="/icons/javascript.png" alt="JavaScript" width={50} height={50} />
//     //     </div>
//     //     {/* React */}
//     //     <div className="absolute top-[8%] right-[8%]">
//     //       <Image src="/icons/react.png" alt="React" width={50} height={50} />
//     //     </div>
//     //     {/* MongoDB */}
//     //     <div className="absolute top-[20%] right-[10%]">
//     //       <Image src="/icons/mongodb.png" alt="MongoDB" width={50} height={50} />
//     //     </div>
//     //     {/* Vue */}
//     //     <div className="absolute top-[30%] left-[15%]">
//     //       <Image src="/icons/vue.png" alt="Vue" width={50} height={50} />
//     //     </div>
//     //     {/* Angular */}
//     //     <div className="absolute top-[50%] left-[8%]">
//     //       <Image src="/icons/angular.png" alt="Angular" width={50} height={50} />
//     //     </div>
//     //     {/* Photoshop */}
//     //     <div className="absolute top-[40%] left-[45%]">
//     //       <Image src="/icons/photoshop.png" alt="Photoshop" width={50} height={50} />
//     //     </div>
//     //     {/* MySQL */}
//     //     <div className="absolute top-[45%] right-[15%]">
//     //       <Image src="/icons/mysql.png" alt="MySQL" width={50} height={50} />
//     //     </div>
//     //     {/* Figma */}
//     //     <div className="absolute top-[30%] right-[25%]">
//     //       <Image src="/icons/figma.png" alt="Figma" width={50} height={50} />
//     //     </div>
//     //     {/* Spring */}
//     //     <div className="absolute bottom-[20%] left-[45%]">
//     //       <Image src="/icons/spring.png" alt="Spring" width={50} height={50} />
//     //     </div>
//     //     {/* Java */}
//     //     <div className="absolute bottom-[8%] right-[8%]">
//     //       <Image src="/icons/java.png" alt="Java" width={50} height={50} />
//     //     </div>
//     //     {/* Vite */}
//     //     <div className="absolute bottom-[8%] right-[20%]">
//     //       <Image src="/icons/vite.png" alt="Vite" width={50} height={50} />
//     //     </div>
//     //     {/* Firebase */}
//     //     <div className="absolute bottom-[8%] left-[45%]">
//     //       <Image src="/icons/firebase.png" alt="Firebase" width={50} height={50} />
//     //     </div>
//     //   </div>
//     // </div>
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
   
//     <path d="M100,100 C150,100 150,200 200,200 C250,200 250,300 300,300" stroke="#ddd" stroke-width="4" fill="none"/>
//     <path d="M200,200 C300,200 300,100 400,100 C500,100 500,300 600,300" stroke="#ddd" stroke-width="4" fill="none"/>
//     <path d="M400,100 C450,100 450,200 500,200 C550,200 550,400 600,400" stroke="#ddd" stroke-width="4" fill="none"/>
//     <path d="M300,300 C350,300 350,400 400,400 C450,400 450,500 500,500" stroke="#ddd" stroke-width="4" fill="none"/>
//     <path d="M100,400 C150,400 150,500 200,500 C250,500 250,400 300,400" stroke="#ddd" stroke-width="4" fill="none"/>
//     <path d="M600,300 C650,300 650,200 700,200" stroke="#ddd" stroke-width="4" fill="none"/>
  

//     <circle cx="100" cy="100" r="40" fill="white" stroke="#ccc" stroke-width="2"/>
//     <circle cx="200" cy="200" r="40" fill="white" stroke="#ccc" stroke-width="2"/>
//     <circle cx="400" cy="100" r="40" fill="white" stroke="#ccc" stroke-width="2"/>
//     <circle cx="600" cy="300" r="40" fill="white" stroke="#ccc" stroke-width="2"/>
//     <circle cx="300" cy="300" r="40" fill="white" stroke="#ccc" stroke-width="2"/>
//     <circle cx="400" cy="400" r="40" fill="white" stroke="#ccc" stroke-width="2"/>
//     <circle cx="100" cy="400" r="40" fill="white" stroke="#ccc" stroke-width="2"/>
//     <circle cx="500" cy="500" r="40" fill="white" stroke="#ccc" stroke-width="2"/>
//     <circle cx="200" cy="500" r="40" fill="white" stroke="#ccc" stroke-width="2"/>
//     <circle cx="700" cy="200" r="40" fill="white" stroke="#ccc" stroke-width="2"/>

//     <text x="100" y="105" font-size="20" text-anchor="middle" fill="#333">Py</text>
//     <text x="200" y="205" font-size="20" text-anchor="middle" fill="#333">ex</text>
//     <text x="400" y="105" font-size="20" text-anchor="middle" fill="#333">JS</text>
//     <text x="600" y="305" font-size="20" text-anchor="middle" fill="#333">Re</text>
//     <text x="300" y="305" font-size="20" text-anchor="middle" fill="#333">Fi</text>
//     <text x="400" y="405" font-size="20" text-anchor="middle" fill="#333">Sp</text>
//     <text x="100" y="405" font-size="20" text-anchor="middle" fill="#333">An</text>
//     <text x="500" y="505" font-size="20" text-anchor="middle" fill="#333">V</text>
//     <text x="200" y="505" font-size="20" text-anchor="middle" fill="#333">A</text>
//     <text x="700" y="205" font-size="20" text-anchor="middle" fill="#333">Mo</text>
//   </svg>
  
//   );
// };

// export default TechStack;
