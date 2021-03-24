import React from 'react';
import { Link } from 'gatsby';
import Button from './Button';

const Menu = ({ menuOpen }) => {
  return (
    <div
      className={
        menuOpen ? 'transitionMenu flex flex-col text-center sm:hidden' : 'hidden opacity-0'
      }   
    >
      <Link to="/" className="poppins text-black font-medium p-3" href="#features">
        Home
      </Link>
      <Link to="/" className="poppins text-black font-medium p-3" href="#pricing">
        Cyber Essentials
      </Link>
      <div className="mb-5 mt-5 rounded-tr-lg rounded-bl-lg rounded-br-lg">
        <Link to="download">
          <Button className="complianceblue">Download Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
