import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Individual = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-blue-300 p-4 mt-5 text-center rounded-tr-lg rounded-bl-lg rounded-br-lg sm:flex">
      <div>
        <h1>Individual</h1>
      </div>
      <div className="">
          <p></p>
          <p></p>
      </div>
      <div className="border border-black flex">
        <FontAwesomeIcon style={{ color: 'lightblue' }} icon={faCheck} size="2x" />
        <p>text</p>
      </div>
      <div className="border border-black flex">
        <FontAwesomeIcon style={{ color: 'lightblue' }} icon={faCheck} size="2x" />
        <p>text</p>
      </div>
      <div className="border border-black flex">
        <FontAwesomeIcon style={{ color: 'lightblue' }} icon={faCheck} size="2x" />
        <p>text</p>
      </div>
      <div className="border border-black flex">
        <FontAwesomeIcon style={{ color: 'lightblue' }} icon={faCheck} size="2x" />
        <p>text</p>
      </div>
      <Link
        to="/download"
        className="mt-5 mb-5 p-3 complianceblue text-white poppins rounded-tr-lg rounded-bl-lg rounded-br-lg w-full"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Individual;
