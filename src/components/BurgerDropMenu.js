import React from 'react';
import { Link } from 'gatsby';
import ContactMobile from './GetFormMobile';
import FacebookMobile from './Social_Media/FaceBookMobile';
import LinkedInMobile from './Social_Media/LinkedinMobile';
import InstagramMobile from './Social_Media/InstagramMobile';
import TwitterMobile from './Social_Media/TwitterMobile';
import WhatsAppMobile from './Social_Media/WhatsAppMobile';

const Menu = ({ menuOpen }) => {
  return (
    <div
      className={
        menuOpen
          ? 'ml-6 mr-6 transitionMenu flex flex-col text-center sm:hidden'
          : 'hidden opacity-0'
      }
    >
      <div className="mt-1">
        <div>
          <Link
            to="/"
            className=" flex justify-left items-center poppins text-black font-medium p-3"
            href="#features"
          >
            <div className="">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="52px"
                height="38px"
                viewBox="0 0 2000 1500"
                enableBackground="new 0 0 2000 1500"
              >
                <g>
                  <path
                    fill="#82CADF"
                    d="M1000.62,420.751c25.984,21.36,51.444,42.238,76.849,63.183
		c136.375,112.433,272.696,224.932,409.217,337.188c7.074,5.817,10.297,11.674,10.278,21.026
		c-0.282,133.158-0.138,266.317-0.231,399.476c-0.026,36.672-22.817,60.498-59.163,60.615
		c-106.222,0.342-212.447,0.121-318.67,0.101c-1.847,0-3.693-0.25-6.992-0.488c0-109.738,0-219.096,0-329.401
		c-74.449,0-147.415,0-221.832,0c0,109.631,0,219.024,0,329.921c-5.491,0-9.544,0-13.597,0c-102.809,0-205.618,0.037-308.428-0.018
		c-41.43-0.022-63.67-22.515-63.676-64.233c-0.019-131.261,0.105-262.523-0.221-393.784c-0.026-10.464,3.025-17.278,11.229-24.021
		c157.64-129.568,315.015-259.458,472.452-389.274C991.88,427.708,996.002,424.465,1000.62,420.751z"
                  />
                  <path
                    fill="#82CADF"
                    d="M1000.366,344.454c-46.429,38.703-92.156,76.813-137.876,114.933
		C712.152,584.737,561.82,710.094,411.475,835.436c-20.824,17.361-34.756,15.888-52.109-5.121
		c-14.012-16.964-28.347-33.66-42.323-50.652c-15.624-18.997-14.366-32.9,4.574-48.686
		c147.446-122.896,294.952-245.72,442.428-368.579c53.335-44.432,107.111-88.35,159.785-133.552
		c31.811-27.299,67.01-38.556,107.306-26.482c14.41,4.318,28.48,12.841,40.225,22.471c64.823,53.151,128.878,107.239,193.2,161.001
		c3.104,2.594,6.244,5.147,11.302,9.313c0.307-6.242,0.665-10.17,0.668-14.098c0.038-48.186-0.003-96.373,0.035-144.559
		c0.022-27.879,8.856-36.72,36.751-36.745c48.945-0.044,97.891-0.053,146.836,0.003c27.394,0.031,36.609,9.436,36.612,37.19
		c0.013,109.653,0.158,219.306-0.257,328.957c-0.037,9.851,3.133,15.903,10.465,21.939
		c55.646,45.804,110.993,91.972,166.429,138.031c3.501,2.909,7.117,5.701,10.428,8.815c13.099,12.319,14.925,26.355,3.738,40.468
		c-16.49,20.802-33.494,41.235-51.06,61.135c-13.25,15.011-27.975,14.817-44.998,0.654
		c-49.868-41.487-99.653-83.074-149.474-124.617c-143.341-119.525-286.682-239.049-430.034-358.562
		C1008.523,350.858,1004.927,348.095,1000.366,344.454z"
                  />
                </g>
              </svg>{' '}
            </div>
            <div className="ml-1 font-bold text-2xl">
              <h1>Home</h1>
            </div>
          </Link>
        </div>
        <div>
          <Link
            to="/download"
            className=" flex justify-left items-center poppins text-black font-medium p-3"
            href="#features"
          >
            <div className="">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="52px"
                height="38px"
                viewBox="0 0 2000 1500"
                enableBackground="new 0 0 2000 1500"
              >
                <path
                  fill="#43A2C2"
                  d="M1307.162,787.963c-21.417-35.789-50.299-64.382-87.053-87.027c46.313-35.193,71.796-80.237,79.454-134.802
	c7.843-55.882-10.955-105.089-43.671-150.595c26.911-5.397,51.582-11.076,76.525-15.041c12.604-2.004,16.008-7.506,15.756-19.702
	c-0.744-36.069-1.373-72.211,0.182-108.228c0.829-19.22-2.962-25.653-24.266-25.373c-104.396,1.37-208.82,0.583-313.233,0.651
	c-24.553,0.016-49.04,0.38-73.408,4.63c-106.695,18.609-188.332,71.57-224.482,176.733
	c-35.035,101.918-17.611,195.052,66.725,272.245c-6.728,5.188-12.145,9.441-17.639,13.591
	c-156.029,117.871-150.883,360.208,11.454,469.127c113.538,76.178,238.286,85.607,365.522,44.749
	C1330.114,1167.56,1408.583,957.444,1307.162,787.963z M1000.421,418.347c56.777,0.279,100.653,48.603,101.527,111.822
	c0.873,63.159-42.288,110.174-101.347,110.397c-60.696,0.229-109.269-48.986-108.721-110.156
	C892.422,470,942.725,418.064,1000.421,418.347z M1001.635,1070.864c-81.966,0.082-146.286-59.043-145.697-133.93
	c0.597-75.974,64.081-135.572,144.599-135.748c80.057-0.174,143.753,60.9,142.815,136.935
	C1142.429,1012.849,1080.576,1070.785,1001.635,1070.864z"
                />
              </svg>
            </div>
            <div className="ml-1 font-bold text-2xl">
              <h1>Download</h1>
            </div>
          </Link>
        </div>
        <div>
          <Link
            to="/cyberessentials"
            className="flex justify-left items-center poppins text-black font-medium p-3"
          >
            <div className="">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="52px"
                height="38px"
                viewBox="0 0 2000 1500"
                enableBackground="new 0 0 2000 1500"
              >
                <path
                  fill="#215D9B"
                  d="M1000,119.669C571.288,306.435,435.462,272.48,435.462,272.48c20.28,207.241,53.207,369.993,93.334,505.599
	c152.999,517.08,410.667,575.359,471.204,602.252c60.537-26.893,318.205-85.172,471.204-602.252
	c40.127-135.606,73.054-298.358,93.334-505.599C1564.538,272.48,1428.712,306.435,1000,119.669z"
                />
              </svg>
            </div>
            <div className="ml-1 font-bold text-2xl">
              <h1>Cyber Essentials</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex p-2 mt-5 justify-around items-center ">
        <div className="poppins text-left ">
          <div className="opacity-50">Email</div>
          <div className="text-lg font-bold">hi@work.tools</div>
        </div>
        <div className="poppins text-left ml-3">
          <div className="opacity-50">Phone</div>
          <div className="text-lg font-bold">0333 0508 805</div>
        </div>
      </div>
      <div className="mt-6 ml-3 mr-3 p-2 flex items-center justify-between">
        <div>
          <LinkedInMobile />
        </div>
        <div>
          <TwitterMobile />
        </div>
        <div>
          <FacebookMobile />
        </div>
        <div>
          <WhatsAppMobile />
        </div>
      </div>
      <div className="ml-2 mr-2">
        <ContactMobile />
      </div>
    </div>
  );
};

export default Menu;
