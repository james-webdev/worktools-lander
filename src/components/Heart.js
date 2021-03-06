import React from 'react';
import styled, { keyframes } from 'styled-components';

const animateHeart = keyframes`
0% {
  transform: scale(0.8);
}
5% {
  transform: scale(0.9);
}
10% {
  transform: scale(0.8);
}
15% {
  transform: scale(1);
}
50% {
  transform: scale(0.8);
}
100% {
  transform: scale(0.8);
}
`;

const HeartDiv = styled.div`
  animation-name: ${animateHeart};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const Heart = () => {
  return (
    <div className="flex justify-center items-center ml-4 mr-4 lg:flex-col lg:mt-6">
      <HeartDiv>
        <svg
          className="w-32 pt-10 pb-10 sm:pb-0 pr-1 sm:pr-0"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 780 780"
          enableBackground="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <g transform="translate(100 90)">
            <path
              opacity="0.4"
              fill="#27AECD"
              d="M258.986,96.59c9.854-10.71,18.751-22.367,29.583-31.805
		c44.687-38.934,107.953-46.266,155.468-18.885c48.088,27.711,75.979,89.326,66.783,145.546
		c-8.564,52.358-36.223,94.757-69.22,134.187c-51.512,61.555-114.247,110.614-178.833,157.41c-2.704,1.959-9.179,2.218-11.759,0.336
		c-76.232-55.589-150.435-113.481-205.376-191.823C21.691,257.419,3.526,220.533,0.848,178.169
		C-2.862,119.461,30.085,63.087,79.862,40.511c49.771-22.573,110.899-9.828,153.925,32.045
		C241.164,79.734,248.679,86.768,258.986,96.59z"
            />

            <path
              opacity="0.8"
              fill="#1A719A"
              d="M258.243,145.809c6.832-7.425,13-15.507,20.51-22.05
		c30.982-26.993,74.844-32.076,107.787-13.093c33.34,19.212,52.676,61.93,46.301,100.908c-5.937,36.3-25.113,65.695-47.99,93.032
		c-35.713,42.676-79.208,76.689-123.986,109.133c-1.875,1.358-6.364,1.538-8.153,0.233
		c-52.852-38.54-104.297-78.677-142.388-132.992c-16.599-23.669-29.193-49.242-31.049-78.613
		c-2.573-40.702,20.27-79.787,54.781-95.438c34.507-15.65,76.886-6.814,106.717,22.217
		C245.887,134.122,251.098,138.999,258.243,145.809z"
            />
            <path
              fill="#2C5894"
              d="M257.5,195.027c3.81-4.14,7.249-8.647,11.437-12.296c17.277-15.052,41.736-17.887,60.105-7.301
		c18.591,10.713,29.374,34.534,25.819,56.269c-3.311,20.242-14.004,36.634-26.761,51.878
		c-19.915,23.798-44.169,42.764-69.138,60.856c-1.045,0.757-3.549,0.857-4.546,0.13c-29.472-21.491-58.159-43.873-79.4-74.16
		c-9.256-13.198-16.279-27.459-17.314-43.837c-1.435-22.697,11.303-44.492,30.547-53.219c19.242-8.727,42.874-3.8,59.509,12.389
		C250.61,188.511,253.516,191.23,257.5,195.027z"
            />
          </g>
          {/* <animateTransform
            attributeName="transform"
            type="scale"
            dur="1s"
            values="1; 1.5; 1.25; 1.5; 1.5; 1;"
            repeatCount="indefinite"
            additive="sum"
          /> */}
        </svg>
      </HeartDiv>
      <div className="p-2 text-left flex-col sm:text-center sm:ml-10 sm:mr-10 sm:mb-0 sm:mt-3 lg:mt-0">
        <h1 className="mt-3 sm:mt-0 font-bold text-lg lg:mt-3">IT Health</h1>
        <p className="sm:mt-1 lg:mt-0">Know exactly when IT issues may be on the horizon</p>
      </div>
    </div>
  );
};

export default Heart;
