import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Contact from '../components/GetFormContactBlue';
import MacDownloadButton from '../components/MacDownloadButton';
import WindowsDownloadButton from '../components/WindowsDownloadButton';
import FreeForever from '../components/FreeForever';
import EasyInstallation from '../components/EasyInstallation';
import StayProtected from '../components/StayProtected';
import GuardianLogo from '../assets/images/guardianlogo.png';

const Download = () => {
  return (
    <>
      <Header />
      <div className="text-center mt-8 sm:mt-20 ml-5 mr-4 mb-20">
        <div className="sm:ml-20 sm:mr-20 text-left poppins">
          <h1 className="font-bold sm:pb-4 text-4xl">Download</h1>
          <div className="flex sm:flex sm:justify-start sm:items-center">
            <img className="w-28 h-24 sm:w-68 sm:h-40" src={GuardianLogo} alt="GuardianLogo" />
            <h2 className="sm:-ml-16 p-2 pt-8 sm:pt-5 text-center text-lg sm:text-2xl">
              works on Mac and Windows operating systems.
            </h2>
          </div>
        </div>
        <div className="hidden sm:pt-8 sm:ml-10 sm:mr-10 sm:flex sm:justify-around">
          <FreeForever />
          <EasyInstallation />
          <StayProtected />
        </div>
        <div className="ml-10 mr-10 flex justify-center items-center">
          <div className="lg:hidden ml-5">
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="200px"
              height="200px"
              viewBox="0 0 1080 1080"
              enableBackground="new 0 0 1080 1080"
              className="-mb-10"
            >
              <g>
                <g>
                  <image
                    overflow="visible"
                    opacity="0.15"
                    width="2748"
                    height="2709"
                    transform="matrix(0.24 0 0 0.24 215.9187 221.0651)"
                  />
                  <g>
                    <path
                      fill="#27AECD"
                      d="M711.695,301.46H296.314l0.197,406.045c0,39.644,32.138,71.782,71.782,71.782h343.403
				c39.644,0,71.782-32.138,71.782-71.782V373.242C783.477,333.598,751.339,301.46,711.695,301.46z"
                    />
                  </g>
                </g>
                <g>
                  <polygon
                    fill="#FFFFFF"
                    points="642.75,534.746 531.282,534.746 531.282,452.945 642.75,436.844 		"
                  />
                  <polygon
                    fill="#FFFFFF"
                    points="642.676,546.249 642.676,643.904 531.673,628.409 531.673,546.249 		"
                  />
                  <polygon
                    fill="#FFFFFF"
                    points="520.174,545.561 520.174,626.784 437.067,615.106 437.067,545.561 		"
                  />
                  <polygon
                    fill="#FFFFFF"
                    points="520.11,535.193 520.11,454.52 437.041,466.91 437.041,535.193 		"
                  />
                </g>
              </g>
            </svg>
            <p className="poppins">Download for Windows</p>
          </div>
          <div className="hidden lg:block mt-10 mb-32">
            <WindowsDownloadButton />
          </div>
          <div className="lg:hidden mr-5">
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="200px"
              height="200px"
              viewBox="0 0 1080 1080"
              enableBackground="new 0 0 1080 1080"
              className="-mb-10"
            >
              <g>
                <g>
                  <image
                    overflow="visible"
                    opacity="0.15"
                    width="2750"
                    height="2711"
                    transform="matrix(0.24 0 0 0.24 216.4241 220.8968)"
                  />
                  <g>
                    <path
                      fill="#C4C4C4"
                      d="M712.462,301.335h-415.6l0.197,406.259c0,39.665,32.155,71.819,71.819,71.819h343.584
				c39.665,0,71.819-32.155,71.819-71.819v-334.44C784.281,333.489,752.127,301.335,712.462,301.335z"
                    />
                  </g>
                </g>
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M630.32,497.903c-18.12,11.319-27.178,26.648-25.423,47.095c1.739,20.265,12.902,34.206,31.403,42.596
			c-7.985,17.401-17.132,33.608-30.328,47.25c-11.428,11.815-23.17,14.951-39.162,7.792c-14.851-6.649-29.395-6.632-44.176-0.168
			c-17.378,7.6-30.325,4.039-41.594-8.857c-26.87-30.752-40.736-65.953-34.864-107.309c3.968-27.945,30.48-51.384,56.811-50.044
			c7.616,0.388,15.375,2.441,22.6,5.034c12.607,4.525,24.628,4.822,37.146-0.397c18.831-7.85,37.202-7.044,54.127,5.348
			C621.359,489.536,625.332,493.546,630.32,497.903z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M582.172,424.131c3.016,24.162-16.128,49.424-39.646,52.595c-2.931,0.395-5.462,0.609-5.757-3.747
			c-1.475-21.794,22.226-48.27,44.109-49.038C581.201,423.93,581.529,424.033,582.172,424.131z"
                  />
                </g>
              </g>
            </svg>
            <p className="poppins">Download for Mac</p>
          </div>
          <div className="hidden lg:block mt-10 mb-32">
            <MacDownloadButton />
          </div>
        </div>
        <div className="lg:hidden pt-40">
          <p>Please view this page on a laptop or a desktop to download guardian to your device</p>
        </div>
      </div>
      <div className="hidden sm:block">
        <Contact className="" />
      </div>
      <div className="hidden sm:block">
        <Footer />
      </div>
    </>
  );
};

export default Download;
