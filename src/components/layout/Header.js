import React, { useState } from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import BurgerMenu from '../BurgerMenu';
import BurgerDropMenu from '../BurgerDropMenu';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const onBurgerClick = () => setMenu(!menu);

  return (
    <>
      <header className="rounded sticky top-0 z-20 bg-white shadow">
        <div className="container flex justify-between items-center mx-auto py-2 px-8">
          <div className="flex items-center text-2xl">
            <div className="w-32 mr-3">
              <Link to="/">
                <LogoIcon />
              </Link>
            </div>
          </div>

          <div>
            <div className="mr-10 sm:hidden">
              <BurgerMenu menuOpen={menu} onClick={onBurgerClick} />
            </div>
          </div>

          <div className="hidden md:flex mt-4 sm:mt-0">
            <Link to="/" className="poppins text-black font-semibold px-4" href="#features">
              Home
            </Link>
            <Link to="/" className="poppins text-black font-semibold px-4" href="#pricing">
              Cyber Essentials
            </Link>
          </div>
          <div className="hidden md:block">
            <Link to="download">
              <Button className="text-sm">Download Now</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <BurgerDropMenu menuOpen={menu} />
        </div>
      </header>
    </>
  );
};

export default Header;
