import React from 'react';

const Footer = () => (
  <footer className="guardianblue -mr-20 -ml-20 shadow-lg rounded-t-full py-16 px-3 mt-48 text-gray-800">
    <div className="flex sm:ml-40 sm:mr-40">
      <div className="flex-1 px-3">
        <h2 className="text-lg text-white font-semibold">About Us</h2>
        <p className="text-sm text-white mt-5">
          Worktools provides ways for SMBs to better help themselves with the management of their
          IT.
        </p>
      </div>
      <div className="flex-1 text-white px-3">
        <h2 className="text-lg text-white font-semibold">Important Links</h2>
        <ul className="mt-4 text-white leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 text-white px-3">
        <h2 className="text-lg text-white font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.facebook.com/WORKdotTOOLS/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/work_tools/?hl=en">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/work_tools">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
