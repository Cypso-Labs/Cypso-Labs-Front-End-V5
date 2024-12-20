import React from "react";

const CareersHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16  text-white">
      <img
        src="/images/logo.png"
        alt="Cypso Labs Logo"
        className="h-12 mb-4"
      />
      <h1 className="text-4xl font-bold">Careers</h1>
      <p className="mt-4 text-xl max-w-4xl text-center">
        At Cypso Labs, we innovate with cutting-edge technology, fostering
        collaboration, growth, and problem-solving. Join us to build the future.
      </p>
    </div>
  );
};

export default CareersHeader;
