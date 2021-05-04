import React from 'react';

const WindowsDownloadButton = () => {
  const downloadFile = () => {
    window.location.href = 'https://download.worktools.link/GuardianInstaller.exe';
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <button className="focus:outline-none" type="button" onClick={downloadFile}>
        {' '}
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="380px"
          height="380px"
          viewBox="0 0 1080 1080"
          enableBackground="new 0 0 1080 1080"
          className="-mb-10 shadow-xl rounded-lg mr-5 focus:bg-gray-200 hover:bg-gray-100"
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
      </button>
      <p className="poppins">Download for Windows</p>
    </div>
  );
};
export default WindowsDownloadButton;
