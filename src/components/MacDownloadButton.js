import React from 'react';

const MacDownloadButton = () => {
  const downloadFile = () => {
    window.location.href = 'https://download.worktools.link/GuardianInstaller.pkg';
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
          className="-mb-10 shadow-xl rounded-lg ml-5 hover:bg-gray-100"
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
      </button>
      <p className="poppins">Download for Mac</p>
    </div>
  );
};
export default MacDownloadButton;
