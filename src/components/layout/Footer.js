import React from 'react';
import Instagram from '../Social_Media/Instagram';
import Twitter from '../Social_Media/Twitter';
import LinkedIn from '../Social_Media/LinkedIn';
import Facebook from '../Social_Media/Facebook';
import GoogleMaps from '../GoogleMaps';
import WhatsAppMobile from '../Social_Media/WhatsApp';
import CyberEssentialsLogo from '../../svg/CyberEssentialsLogo';

const Footer = () => (
  <footer className="bg-black pb-10 text-white">
    <div className="sm:flex sm:justify-between">
      <div className="sm:flex sm:flex-col">
        <div className="flex p-4 ml-2 pl-5 pt-5 flex-col sm:flex sm:flex-row sm:justify-left sm:items-center">
          <div className="flex flex-col mt-1 sm:mt-2 sm:p-4">
            <h1 className="text-xl">Resources</h1>
            <div className="sm:mt-1 text-small flex flex-col">
              <a className="footergrey hover:text-gray-200" href="https://shop.work.tools/">
                Visit our online store
              </a>
              <a
                className="footergrey hover:text-gray-200"
                href="https://shop.work.tools/collections/apple"
              >
                Apple Mac Leasing
              </a>
              <a
                className="footergrey hover:text-gray-200"
                href="https://shop.work.tools/collections/microsoft"
              >
                Microsoft Surface Leasing
              </a>
              <a className="footergrey hover:text-gray-200" href="/download">
                Download
              </a>
              <a className="footergrey hover:text-gray-200" href="">
                Contact
              </a>
            </div>
          </div>
          <div className="flex mt-6 sm:mb-16 sm:ml-7 flex-col sm:p-4">
            <h1 className="text-xl">Legal</h1>
            <div className="sm:mt-1 text-small flex flex-col">
              <a className="footergrey hover:text-gray-200" href="">
                Terms and Conditions
              </a>
              <a className="footergrey hover:text-gray-200" href="">
                Terms of Service
              </a>
              <a className="footergrey hover:text-gray-200" href="">
                Privacy Statement
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 ml-10 mb-8 bg-black mr-10 flex items-center justify-between sm:justify-around sm:p-2">
          <div>
            <LinkedIn />
          </div>
          <div>
            <Twitter />
          </div>
          <div>
            <Facebook />
          </div>
          <div>
            <WhatsAppMobile />
          </div>
        </div>
        <div className="mt-5 justify-center items-center flex mb-5 p-4 sm:hidden">
          <div className="text-sm footergrey flex justify-center items-center">
            <p>Cyber Essentials Certified</p>
          </div>
          <div className="ml-3">
            <CyberEssentialsLogo />
          </div>
        </div>
        <div className="footergrey hidden sm:flex sm:p-3 sm:ml-5 sm:mb-8 sm:text-center sm:text-sm">
          Wortktools is a trading name of DeskServe LTD. Registered in England, Company Number
          09251779. Registered Office 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ © 2021.
          All rights reserved.
        </div>
      </div>
      <div className="mapBnW flex justify-center items-center m-1 sm:p-5 sm:mr-20">
        <GoogleMaps />
      </div>
      <div className="footergrey ml-5 mr-5 mt-10 p-1 leading-loose text-xs sm:hidden">
        Wortktools is a trading name of DeskServe LTD. Registered in England, Company Number
        09251779. Registered Office 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ © 2021.
        All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
