import React from 'react';

const CyberBook = () => {
  const downloadFile = () => {
    window.location.href =
      'https://docs.google.com/open?id=1UXbAK_L_ruVoeGQSWAoGQV_betqeEhTzVLFMytU6IBQ&authuser=ben%40work.tools&usp=drive_fs';
  };
  return (
    <>
      <div className="backgroundBlue p-4 mt-5 text-center sm:flex sm:p-8">
        <div className="text-black text-left p-3 pl-8 pr-8">
          <h1 className="poppins font-medium text-3xl">Download our cyber security eBook!</h1>
          <p className="poppins mt-5">
            Learn everything you need to keep you, your clients and your company safe with our
            easy-to-follow 12 page eBook
          </p>
        </div>

        <div className="flex flex-col sm:flex-row">
          <button
            onClick={downloadFile}
            className="ml-10 mr-10 mt-5 mb-5 p-3 complianceblue text-white poppins compliancebuttonborder"
            type="submit"
          >
            Free Download
          </button>
        </div>
      </div>
    </>
  );
};

export default CyberBook;
