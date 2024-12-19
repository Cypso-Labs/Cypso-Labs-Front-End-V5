// import React from "react";
// import CaseStudyCard from "../app/components/models/caseStudyCard";
// import image1 from "../public/images/case study.jpeg"; //image path
// import image2 from "../public/images/2.jpeg"; //image path
// import image3 from "../public/images/3.jpeg"; //image path
// import image4 from "../public/images/hero1.jpeg"; //image path
// import logo from "../public/images/logo.png"; //image path
// import Image from "next/image";
// import { Montserrat, Urbanist } from "next/font/google";

// // Case Studies Data
// const caseStudies = [
//   {
//     title:
//       "Innovative Digital Transformation: Building a Seamless Mobile Experience",
//     description: "Java (Spring Boot) & React Native Expo",
//     imgSrc: image1,
//   },
//   {
//     title:
//       "Driving Digital Growth: A Comprehensive E-commerce Platform Overhaul",
//     description: "MERN Stack",
//     imgSrc: image2,
//   },
//   {
//     title: "Optimizing Workflow Efficiency: Developing a Scalable ERP System",
//     description: "Java (Spring Boot) & Next.js",
//     imgSrc: image3,
//   },
// ];

// const urbanist = Urbanist({
//   weight: ["500", "600"],
// });

// const montserrat = Montserrat({
//   weight: ["500"],
// });

// // Main Component
// export default function Home() {
//   return (
//     <div className="bg-gray-50 py-16 px-6">
//       <section className="relative flex justify-center items-center h-[80vh] sm:h-[86vh] rounded-[18px] overflow-hidden bottom-10">
//         {/* Background Image */}
//         <div className="absolute inset-0 w-full h-full">
//           <Image
//             src={image4}
//             alt="Background"
//             className="object-cover"
//             layout="fill" /* Ensures the image covers the container */
//             quality={100}
//             sizes="100vw" /* The image takes 100% of the viewport width */
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 text-white text-center space-y-4 px-8 sm:px-16 lg:px-24">
//           {/* Logo */}
//           <div className="flex justify-center">
//             <Image
//               className="w-[70px] lg:w-[96px]"
//               src={logo}
//               alt="Logo"
//               priority
//             />
//           </div>

//           {/* Title */}
//           <h1 className="text-[28px] sm:text-[36px] lg:text-[56px] font-semibold leading-tight">
//             Our Services
//           </h1>
//           <div className="max-w-4xl">
//             {/* Description */}
//             <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
//               Cypso Labs offers innovative digital solutions, specializing in
//               cybersecurity, software development, AI-driven marketing, and
//               more, tailored to your business needs.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="px-[10%]">
//         <section className="text-center">
//           <div className="max-w-xl">
//             <h1 className="text-6xl font-bold text-gray-800 mb-12 text-left">
//               Your Trusted Source for IT Services
//             </h1>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Service 1 */}
//             <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
//               <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
//                 WEB 3.0 Software & Mobile App
//               </h3>
//               <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
//                 Transform your business with innovative, decentralized Web 3.0
//                 software and mobile apps.
//               </p>
//             </div>
//             {/* Service 2 */}
//             <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
//               <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
//                 Digital & AI Marketing
//               </h3>
//               <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
//                 Boost your brand with AI-driven marketing for personalized,
//                 measurable success.
//               </p>
//             </div>
//             {/* Service 3 */}
//             <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
//               <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
//                 Blockchain and Decentralized Applications
//               </h3>
//               <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
//                 Build secure blockchain solutions and decentralized apps for
//                 scalable, efficient processes.
//               </p>
//             </div>
//             {/* Service 4 */}
//             <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
//               <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
//                 AI-Driven Finance Marketing Development
//               </h3>
//               <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
//                 Optimize finance marketing with AI-driven solutions for data
//                 analysis and decision-making.
//               </p>
//             </div>
//             {/* Service 5 */}
//             <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
//               <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
//                 Cyber Security
//               </h3>
//               <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
//                 Protect your business with comprehensive cybersecurity solutions
//                 to prevent threats and secure data.
//               </p>
//             </div>
//             {/* Service 6 */}
//             <div className="bg-white drop-shadow-[0_0px_3px_rgba(0,0,0,0.20)]  rounded-[24px] p-12 flex flex-col items-center space-y-6 aspect-[377/274]">
//               <h3 className="text-start text-[28px] leading-7 font-semibold text-gray-800">
//                 Search Engine Optimization
//               </h3>
//               <p className="text-[18px] leading-[26px] text-start text-gray-600 font-medium">
//                 Improve online visibility with SEO strategies that drive organic
//                 traffic and boost rankings.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Services Section
//       <div className="max-w-screen-2xl mx-auto text-center">

//       </div> */}

//         {/* Case Studies Section */}
//         <section className="bg-gray-50 py-20 px-6">
//           <div className="flex flex-wrap bg-white w-full mx-auto text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//               Case Studies
//             </h1>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               Our case studies showcase successful projects, highlighting
//               innovative solutions, measurable results, and how we solve client
//               challenges with expertise and technology.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
//             {caseStudies.map((caseStudy, index) => (
//               <CaseStudyCard
//                 key={index}
//                 title={caseStudy.title}
//                 description={caseStudy.description}
//                 imgSrc={caseStudy.imgSrc}
//                 techStack={undefined}
//               />
//             ))}
//           </div>
//         </section>

//         {/* <section>
//       <div>
//         <h1 className="text-4xl font-bold text-center mb-10">Our Tech Stack</h1>
//         <TechStack />
//       </div>
//       </section> */}
//       </div>
//     </div>
//   );
// }
