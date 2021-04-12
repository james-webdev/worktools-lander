import React from 'react';

const GettingCertified = () => {
  return (
    <div className="backgroundBlue p-4 mt-5 text-center sm:flex sm:p-8">
      <div className="text-black text-left p-3 pl-8 pr-8">
        <h1 className="poppins font-medium text-3xl">Getting certified?</h1>
        <p className="poppins mt-5">
          Already on the path to securing your company, or considering it soon?
        </p>
      </div>

      <div className="flex flex-col sm:flex-row">
        <button
          className="ml-10 mr-10 mt-5 mb-5 p-3 complianceblue text-white poppins compliancebuttonborder"
          type="submit"
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default GettingCertified;
