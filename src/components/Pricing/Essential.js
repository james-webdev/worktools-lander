import React from 'react';
import { Link } from 'gatsby';

const Essential = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 complianceborderwhite p-4 mt-4 text-center sm:flex sm:mb-10">
      <div>
        <h1 className="text-2xl text-white font-bold">Essential</h1>
      </div>
      <div className="flex text-white justify-center items-center">
        <p className="text-5xl font-bold">£0</p>
        <div className="relative">
          <p className="text-sm mt-4 absolutely">*</p>
        </div>
        <p className="text-sm mt-4 font-semibold">/month</p>
      </div>
      <div className="text-left">
        <div className="p-1 flex items-center">
          <div className="mr-2">
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="28px"
              height="28px"
              viewBox="0 0 256 256"
              enableBackground="new 0 0 256 256"
            >
              <g>
                <polygon
                  fill="#26A7C2"
                  points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                />
              </g>
            </svg>
          </div>
          <p className="text-white">Unlimited Devices</p>
        </div>
        <div className="p-1 flex items-center">
          <div className="mr-2">
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="28px"
              height="28px"
              viewBox="0 0 256 256"
              enableBackground="new 0 0 256 256"
            >
              <g>
                <polygon
                  fill="#26A7C2"
                  points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                />
              </g>
            </svg>
          </div>
          <p className="text-white">Certification Toolkit*</p>
        </div>
        <div className="p-1 flex items-center">
          <div className="mr-2">
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="28px"
              height="28px"
              viewBox="0 0 256 256"
              enableBackground="new 0 0 256 256"
            >
              <g>
                <polygon
                  fill="#26A7C2"
                  points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                />
              </g>
            </svg>
          </div>
          <p className="text-white">Smart IT Policies</p>
        </div>
        <div className="p-1 flex items-center">
          <div className="mr-2">
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="28px"
              height="28px"
              viewBox="0 0 256 256"
              enableBackground="new 0 0 256 256"
            >
              <g>
                <polygon
                  fill="#26A7C2"
                  points="81.813,209.846 9.351,139.05 28.262,119.695 81.592,171.797 226.854,26.535 245.989,45.67 	"
                />
              </g>
            </svg>
          </div>
          <p className="text-white">Risk Management</p>
        </div>
      </div>

      <Link
        to="/download"
        className="mt-5 mb-5 p-3 bg-white text-black poppins compliancebuttonborderwhite w-5/6"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Essential;
