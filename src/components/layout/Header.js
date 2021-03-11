import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="rounded sticky top-0 z-20 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-2 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-32 mr-3">
          <LogoIcon />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="guardianbluetext px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="guardianbluetext px-4" href="#pricing">
          Pricing
        </AnchorLink>
        <AnchorLink className="guardianbluetext px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button onClick="https://download.worktools.link/GuardianInstaller.exe" className="text-sm">
          Download Now
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
