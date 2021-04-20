import React, { useState } from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import BurgerMenu from '../BurgerMenu';
import Menu from '../BurgerDropMenu';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const onBurgerClick = () => setMenu(!menu);

  return (
    <>
      <header className="sticky top-0 z-20 bg-white shadow">
        <div className="container flex justify-between items-center mx-auto py-2 px-8">
          <div className="flex items-center text-2xl">
            <div className="w-32 mr-3">
              <Link to="/">
                <LogoIcon />
              </Link>
            </div>
          </div>

          <div>
            <div className="mr-5 sm:hidden">
              <BurgerMenu menuOpen={menu} onClick={onBurgerClick} />
            </div>
          </div>

          <div className="hidden md:flex mt-4 sm:mt-0">
            <Link to="/" className="poppins text-black font-semibold px-4">
              Home
            </Link>
            <Link to="/cyberessentials" className="poppins text-black font-semibold px-4">
              Cyber Essentials
            </Link>
          </div>
          <div className="hidden md:block">
            <Link to="download">
              <Button
                onClick="https://download.worktools.link/GuardianInstaller.exe"
                className="text-sm"
              >
                Download Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Menu menuOpen={menu} />
        </div>
      </header>
    </>
  );
};

export default Header;
