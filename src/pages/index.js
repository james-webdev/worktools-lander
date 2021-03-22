import React, { useEffect, useState } from 'react';
import '@fontsource/poppins';
import Layout from '../components/layout/Layout';
import Button from '../components/Button';
import CarouselEx from '../components/Carousel';
import Pulse from '../components/Pulse';
import LaptopImage from '../assets/images/Laptop1.png';
import Heart from '../components/Heart';
import Target from '../components/Target';
import Shield from '../components/Shield';
import Mobiles from '../components/Mobiles';
import HighlightText from '../components/HighlightText';
import Contact from './GetFormContact';

export default () => (
  <Layout>
    <section>
      <div className="-ml-40 sm:ml-0 mt-5 w-60 sm:w-full">
        <img id="laptop" className="-mb-12 z-10" src={LaptopImage} alt="LaptopImage" />
      </div>
      <div className="">
        <Pulse />
      </div>
      <div className="sm:flex sm:flex-col">
        <div className="z-10 text-left -mt-5 ml-6 mr-10">
          <h1 className="text-3xl text-black lg:text-4xl font-bold">Continually</h1>
          <h1 className="text-3xl text-black lg:text-4xl font-bold">assess your</h1>
          <h1 className="compliancebluetext text-3xl lg:text-4xl font-bold"> compliance to </h1>
          <h1 className="compliancebluetext text-3xl lg:text-4xl font-bold">IT standards</h1>
        </div>
        <div className="mt-4 flex justify-center">
          <Button className="complianceblue">Download Now</Button>
        </div>
      </div>
    </section>

    <section>
      <div className="flex-col mt-5 justify-center items-center sm:flex sm:flex-row sm:ml-20 sm:mr-20">
        <div className="flex pt-4 justify-center sm:w-1/3">
          <Heart />
        </div>
        <div className="flex pt-4 justify-center sm:w-1/3">
          <Shield />
        </div>
        <div className="flex pt-4 justify-center sm:w-1/3">
          <Target />
        </div>
      </div>
    </section>

    {/* <div className="backgroundBlue h-40" /> */}
    <section>
      <div className="mt-20 sm:ml-40 sm:mr-40">
        <CarouselEx />
      </div>
    </section>

    <section>
      <div className="mt-20 mb-8 ml-10 mr-10">
        <Mobiles />
      </div>
    </section>

    <section>
      <div className="mt-20 mb-20 mb-8 ml-10 mr-10">
        <HighlightText />
      </div>
    </section>

    <div className="mt-20 mb-20 mb-8 ml-10 mr-10">
      <Contact />
    </div>
  </Layout>
);
