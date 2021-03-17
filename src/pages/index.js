import React, { useEffect, useState } from 'react';
import '@fontsource/poppins';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
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

export default () => (
  <Layout>
    <section>
      <div className="-ml-40 mt-5 w-60 sm:w-full">
        <img id="laptop" className="-mb-12 z-10" src={LaptopImage} alt="LaptopImage" />
      </div>
      <div className="">
        <Pulse />
      </div>
      <div className="mt-4 flex justify-center">
        <Button className="complianceblue">Download Now</Button>
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

    <div className="backgroundBlue h-40" />
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
    <div className="mt-20 mb-8 ml-10 mr-10">
      <HighlightText />
      </div>
    </section>
  </Layout>
);
