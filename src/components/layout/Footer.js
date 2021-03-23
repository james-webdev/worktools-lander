import React from 'react';
import Instagram from '../Social_Media/Instagram';
import Twitter from '../Social_Media/Twitter';
import LinkedIn from '../Social_Media/LinkedIn';
import Facebook from '../Social_Media/Facebook';

const Footer = () => (
  <footer className="bg-black pb-10 mt-20 text-white">
    <div className="flex p-4 pl-5 pt-4 flex-col">
      <div className="flex flex-col">
        <h1 className="text-xl">Resources</h1>
        <a className="text-white p-1" href="">
          Visit our online store
        </a>
        <a className="text-white p-1" href="">
          Apple Mac Leasing
        </a>
        <a className="text-white p-1" href="">
          Microsoft Surface Leasing
        </a>
        <a className="text-white p-1" href="">
          Download
        </a>
        <a className="text-white p-1" href="">
          Contact
        </a>
      </div>
      <div className="flex mt-6 flex-col">
        <h1 className="text-xl">Legal</h1>
        <a className="text-white p-1" href="">
          Terms and Conditions
        </a>
        <a className="text-white p-1" href="">
          Terms of Service
        </a>
        <a className="text-white p-1" href="">
          Privacy Statement
        </a>
      </div>
    </div>
    <div className="mt-4 ml-8 mb-6 bg-black mr-8 flex items-center justify-between">
      <div>
        <Instagram />
      </div>
      <div>
        <Twitter />
      </div>
      <div>
        <LinkedIn />
      </div>
      <div>
        <Facebook />
      </div>
    </div>
  </footer>
);

export default Footer;
