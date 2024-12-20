"use client";

import * as React from "react";
import { Urbanist } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";

import { FormInput } from "./FormInput";
import { FileUpload } from "./FileUpload";
import { JobDetails } from "./JobDetails";
import { JobDescription } from "./JobDescription";
import CareersHeader from "./CareersHeader";

const urbanist = Urbanist({
  weight: ["600"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["500"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const JobPosting: React.FC = () => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "firstName",
      (document.getElementById("firstName") as HTMLInputElement).value
    );
    formData.append(
      "lastName",
      (document.getElementById("lastName") as HTMLInputElement).value
    );
    formData.append(
      "email",
      (document.getElementById("email") as HTMLInputElement).value
    );
    formData.append(
      "phone",
      (document.getElementById("phone") as HTMLInputElement).value
    );
    formData.append(
      "coverLetter",
      (document.getElementById("coverLetter") as HTMLTextAreaElement).value
    );
    if (selectedFile) {
      formData.append("resume", selectedFile);
    }

    // Simulate form submission
    console.log("Form submitted", formData);

    // Reset the form
    setSelectedFile(null);
  };

  const brTags = Array(10).fill(<br />); // Create an array with 20 <br /> tags

  return (
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-24 max-md:px-5">
          <br/><br/><br></br> <br></br>
          <CareersHeader/>
      {brTags.map((tag, index) => (
        <React.Fragment key={index}>{tag}</React.Fragment>
      ))}

      <div className="flex flex-col w-full max-w-[1180px] max-md:max-w-full">
        <div className="flex flex-col text-center max-md:max-w-full">
          <h1
            className={`${urbanist.className} text-6xl font-bold tracking-wide leading-tight text-black max-md:max-w-full max-md:text-4xl`}
          >
            Full Stack Software Engineer (Intern)
          </h1>
          <p
            className={`${montserrat.className} self-center mt-8 text-lg font-medium leading-7 text-black text-opacity-80 max-md:max-w-full`}
          >
            Cypso Labs is looking for a motivated and talented Full Stack
            Software Engineer Intern to join our dynamic team. This is a
            hands-on opportunity to work on real-world projects, collaborate
            with experienced engineers, and gain invaluable skills in developing
            and maintaining software solutions. If you are passionate about
            coding, problem-solving, and learning, this role is perfect for you.
          </p>
        </div>

        <JobDetails
          title="About the job"
          description={<JobDescription />}
          location="Remote"
          type="Full time"
        />

        <div className="flex flex-col self-center mt-16 w-full max-w-[980px] max-md:mt-10">
          <h2 className="self-start text-3xl font-bold tracking-wide leading-none text-center text-black">
            Apply for this job
          </h2>
          <form className="flex flex-col mt-12 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-6 w-full">
              <div className="flex-1 min-w-[240px]">
                <FormInput
                  label="First Name"
                  type="text"
                  placeholder="First name"
                  id="firstName"
                  className={inter.className} 
                />
              </div>
              <div className="flex-1 min-w-[240px]">
                <FormInput
                  label="Last Name"
                  type="text"
                  placeholder="Last name"
                  id="lastName"
                  className={inter.className} 
                />
              </div>
            </div>

            <FormInput
              label="Email Address"
              type="email"
              placeholder="Email address"
              id="email"
              className={inter.className} // Apply Inter font to the form fields
            />

            <FormInput
              label="Phone Number"
              type="tel"
              placeholder="+94 (000)-000 0000"
              id="phone"
              className={inter.className} // Apply Inter font to the form fields
            />

            <div className="flex flex-col mt-8 w-full">
              <label
                htmlFor="coverLetter"
                className={`${inter.className} text-lg tracking-normal text-black`}
              >
                Cover letter
              </label>
              <textarea
                id="coverLetter"
                className="flex mt-2.5 w-full bg-white rounded-xl border border-solid border-neutral-200 min-h-[237px]"
                aria-label="Cover letter"
              />
            </div>

            <FileUpload
              label="Resume/CV"
              acceptedFileTypes="PDF"
              maxSize="Max 5MB"
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />

            <button
              type="submit"
              className="gap-2.5 self-stretch p-2.5 mt-8 w-full text-lg font-extrabold tracking-normal text-white rounded-xl bg-sky-950"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;
