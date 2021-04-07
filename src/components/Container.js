import React from 'react';
import { Link } from 'gatsby';
import '@fontsource/poppins';
import Layout from './layout/Layout';
import Button from './Button';
import CarouselEx from './Carousel';
import LaptopImage from '../assets/images/Laptop1.png';
import Heart from './Heart';
import Target from './Target';
import Shield from './Shield';
import HighlightText from './HighlightText';
import Contact from './GetFormContact';
import ContactBlue from './GetFormContactBlue';
import ScrollTest from './ScrollTest';
import Pulse from './Pulse';
import Individual from './Pricing/Individual';
import Essential from './Pricing/Essential';
import Enhanced from './Pricing/Enhanced';
import Complete from './Pricing/Complete';

const Container = () => {
  return (
    <Layout>
      <section>
        <div className="flex flex-col-reverse sm:flex sm:flex-row">
          <div className="sm:flex sm:flex-col sm:justify-center sm:items-left sm:ml-16 sm:mt-10 sm:-mr-8">
            <div className="z-10 text-left -mt-1 ml-6 mr-10">
              <h1 className="text-3xl text-black md:text-5xl font-bold">Continually</h1>
              <h1 className="text-3xl text-black md:text-5xl font-bold">assess your</h1>
              <h1 className="compliancebluetext text-3xl md:text-5xl font-bold"> compliance to </h1>
              <h1 className="compliancebluetext text-3xl md:text-5xl font-bold">IT standards</h1>
            </div>
            <div className="w-2/3 hidden poppins md:block sm:ml-6 sm:mr-10">
              Resolve compliance, cybersecurity & common IT issues yourself. We are on hand to help.{' '}
            </div>
            <div className="mt-4 flex justify-center sm:justify-start sm:ml-6">
              <Link to="download">
                <Button className="complianceblue">Download Now</Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="-ml-32 sm:ml-0 sm:mt-10 sm:mr-6 mt-5 w-68">
              <img
                id="laptop"
                className="-mb-12 sm:-mb-48 z-10"
                src={LaptopImage}
                alt="LaptopImage"
              />
            </div>
            <div className="">
              <div className="sm:mb-60">
                <Pulse />
              </div>
            </div>
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

      <div className="mt-20 mb-20 mb-8 ml-10 mr-10 sm:ml-48 sm:mr-48">
        <Contact />
      </div>

      {/* <div className="backgroundBlue h-40" /> */}
      <section>
        <div className="mt-20 sm:ml-40 sm:mr-40">
          <CarouselEx />
        </div>
      </section>

      <section>
        <div className="mt-20 mb-8 ml-10 mr-10">
          <Individual />
        </div>
      </section>

      <section>
        <div className="mt-20 mb-8 ml-10 mr-10">
          <Essential />
        </div>
      </section>

      <section>
        <div className="mt-20 mb-8 ml-10 mr-10">
          <Enhanced />
        </div>
      </section>

      <section>
        <div className="mt-20 mb-8 ml-10 mr-10">
          <Complete />
        </div>
      </section>

      {/* <section>
      <div className="mt-20 mb-8 ml-10 mr-10">
        <Mobiles />
      </div>
    </section> */}

      {/* <section>
      <div className="mt-20 mb-20 mb-8 ml-10 mr-10">
        <HighlightText />
      </div>
    </section> */}

      {/* <section>
      <div className="mt-20 mb-20 mb-8 ml-10 mr-10">
        <ScrollTest />
      </div>
    </section> */}

      {/* <section>
      <div className="mt-20">
        <ContactBlue />
      </div>
    </section> */}
    </Layout>
  );
};

export default Container;