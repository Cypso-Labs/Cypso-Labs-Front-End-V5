import { BsFillSendFill } from "react-icons/bs";
import { FaClock, FaBriefcase } from "react-icons/fa";
import { Urbanist, Montserrat } from "next/font/google";
import { GoArrowUpRight } from "react-icons/go";

const urbanist = Urbanist({
    subsets: ["latin"],
  });
  
  const montserrat = Montserrat({
    subsets: ["latin"],
  });

  const jobData = [
    {
      title: "UI/UX Designer",
      description:
        "Join as a UI/UX Design Intern to assist in creating user-centered designs, collaborating on prototypes, and enhancing user experiences.",
    },
    {
      title: "Frontend Developer",
      description:
        "Work as a Frontend Developer to create stunning and responsive web applications with a focus on performance and user experience.",
    },
    {
      title: "Backend Engineer",
      description:
        "Join our team as a Backend Engineer to design and implement scalable APIs, optimize database performance, and improve system reliability.",
    },
    {
        title: "UI/UX Designer",
        description:
          "Join as a UI/UX Design Intern to assist in creating user-centered designs, collaborating on prototypes, and enhancing user experiences.",
      },
      {
        title: "Frontend Developer",
        description:
          "Work as a Frontend Developer to create stunning and responsive web applications with a focus on performance and user experience.",
      },
      {
        title: "Backend Engineer",
        description:
          "Join our team as a Backend Engineer to design and implement scalable APIs, optimize database performance, and improve system reliability.",
      },
  ];

export default function JobCard() {
  return (
    <div className="bg-gray-50 p-4 lg:py-10 xl:px-[130px] grid grid-cols-1 md:grid-cols-2 gap-6">
    {jobData.map((job, index) => (

    <div className="border border-gray-300 rounded-2xl p-6 lg:py-11 bg-white shadow-md" key={index}>
      {/* Job Title */}
      <h3 className={`${urbanist.className} text-lg lg:text-[24px] font-[600] mb-2 lg:mb-4`}>{job.title}</h3>
      {/* Job Tags */}
      <div className="flex gap-2 mb-4 lg:mb-1">
        <span className={`${montserrat.className} px-[6px] py-[2px] text-xs lg:text-sm xl:text-base font-medium bg-[#E0F1FE] text-[#05639F] rounded-full flex items-center`}>
        <BsFillSendFill className="mr-1"/> 
          Remote
        </span>
        <span className={`${montserrat.className} px-[6px] py-[2px] text-xs lg:text-sm xl:text-base font-medium bg-[#E0F1FE] text-[#05639F] rounded-full flex items-center`}>
        <FaClock className="mr-2"/>
          Full-Time
        </span>
        <span className={`${montserrat.className} px-[6px] py-[2px] text-xs lg:text-sm xl:text-base font-medium bg-[#E0F1FE] text-[#05639F] rounded-full flex items-center`}>
        <FaBriefcase className="mr-2"/>
          Internship
        </span>
      </div>

      <div className="border-t border-gray-300 my-4 lg:mt-0"></div>

      {/* Job Description */}
      <p className={`${montserrat.className} text-gray-600 mb-4 text-[14px] lg:text-[18px] font-medium`}>
        {job.description}
      </p>

      {/* View Job Button */}
      <div className="flex justify-center lg:justify-normal">
        <button className={`${montserrat.className} w-[279px] h-[48px] lg:w-[190px] lg:h-[56px] flex items-center justify-center px-4 py-2 bg-[#0D476D] text-white font-medium rounded-[12px] transition`}>
            View Job
            <GoArrowUpRight/>
        </button>
      </div>
    </div>
    ))}
    </div>
  );
}
