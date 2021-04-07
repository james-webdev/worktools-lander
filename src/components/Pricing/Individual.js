import React from 'react';
import { Link } from 'gatsby';

const Individual = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 complianceborder p-4 mt-5 text-center sm:flex">
      <div>
        <h1 className="text-2xl font-bold">Individual</h1>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-5xl font-bold">£0</p>
        <p className="text-sm mt-4">/month</p>
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
          <p>Unlimited Devices</p>
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
          <p>Continuous Assessment</p>
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
          <p>Self-Help & E-learning</p>
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
          <p>Expert help (+£60)</p>
        </div>
      </div>

      <Link
        to="/download"
        className="mt-5 mb-5 p-3 complianceblue text-white poppins compliancebuttonborder w-5/6"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Individual;
