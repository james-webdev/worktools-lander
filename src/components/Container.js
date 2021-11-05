import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '@fontsource/poppins';
import Layout from './layout/Layout';
import Button from './Button';
import CarouselEx from './Carousel';
import LaptopImage from '../assets/images/Laptop1.png';
import Heart from './Heart';
import Target from './Target';
import Shield from './Shield';
import Contact from './GetFormContact';
import Pulse from './Pulse';
import SlidePage from './SlidePage';
import Testimonials from './Testimonials';

const Container = () => {
  const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  };

  const [isOn, toggleIsOn] = useToggle();

  // const StickyToggle = {
  //   top: '87px'
  // };
  return (
    <Layout>
      <section>
        <div className="flex flex-col-reverse sm:flex sm:flex-row lg:ml-20 lg:mr-20">
          <div className="lg:flex lg:flex-col lg:justify-center sm:items-left sm:ml-16 sm:mt-10 sm:-mr-8">
            <div className="z-10 text-left -mt-1 ml-6 mr-10">
              <h1 className="text-3xl text-black lg:text-5xl font-bold">Continually</h1>
              <h1 className="text-3xl text-black lg:text-5xl font-bold">assess your</h1>
              <h1 className="compliancebluetext text-3xl sm:text-xl lg:text-5xl font-bold">
                {' '}
                compliance to{' '}
              </h1>
              <h1 className="compliancebluetext text-3xl sm:text-xl lg:text-5xl font-bold">
                IT standards
              </h1>
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
            <div className="-ml-32 sm:ml-0 sm:mt-10 sm:mr-20 mt-5 sm:mt-20">
              <img
                id="laptop"
                className="-mb-12 sm:-mb-48 z-10"
                src={LaptopImage}
                alt="LaptopImage"
              />
            </div>
            <div className="sm:hidden lg:block">
              <div className="sm:mb-60">
                <Pulse />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center md:mt-20 lg:mt-40">
        <div className="flex-col lg:flex lg:flex-row" style={{ maxWidth: 1200 }}>
          <div className="lg:w-1/3 mx-12 my-4 xl:ml-0">
            <Heart />
          </div>
          <div className="lg:w-1/3 mx-12 my-4">
            <Shield />
          </div>
          <div className="lg:w-1/3 mx-12 my-4 xl:mr-0">
            <Target />
          </div>
        </div>
      </section>

      {/* <section className="" >
        <div className="border border-black grid grid-cols-3 gap-4 mt-5  lg:ml-20 lg:mr-20 lg:mt-10">
          <div className="grid p-4 lg:w-1/3">
            <Heart />
          </div>
          <div className="grid p-4 lg:mb-5 lg:mt-5 lg:w-1/3">
            <Shield />
          </div>
          <div className="grid  p-4 mr-3 lg:w-1/3">
            <Target />
          </div>
        </div>
      </section> */}

      {/* <section>
        <div className="flex-col mt-5 justify-center items-center lg:flex lg:flex-row lg:ml-20 lg:mr-20 lg:mt-10">
          <div className="flex p-4 justify-center lg:w-1/3">
            <Heart />
          </div>
          <div className="flex p-4 justify-center lg:mb-5 lg:mt-5 lg:w-1/3">
            <Shield />
          </div>
          <div className="flex p-4 justify-center mr-3 lg:w-1/3">
            <Target />
          </div>
        </div>
      </section> */}

      <div className="halfBackgroundBlue">
        <div className="mt-20 mb-8 ml-10 mr-10 lg:ml-48 lg:mr-48">
          <Contact />
        </div>
      </div>

      <div className="backgroundBlueBanner h-40" />
      <section>
        <div className="mt-20 sm:ml-40 sm:mr-40 md:hidden">
          <CarouselEx />
        </div>
        <div className="hidden md:block mt-20">
          <Testimonials />
        </div>
      </section>

      <section>
        <div className="mt-20">
          <SlidePage />
        </div>
      </section>

      {/* <div
        className="relative
      "
      >
        {/* <Sticky className="opacity-100"> 
        <section className="mt-20 backgroundBlue shadow-sm  opacity-100">
          <div className="flex justify-center text-xl items-center mb-8 ml-10 mr-10">
            {isOn ? (
              <div className="mt-5 mb-5 p-3 text-gray-500 poppins">
                <div className="flex text-center justify-center items-center">
                  <p>I'm a freelancer </p>
                </div>
              </div>
            ) : (
              <div className="mt-5 mb-5 compliancebluetext font-bold p-3 text-xl poppins">
                <div className="flex text-center justify-center items-center">
                  <p>I'm a freelancer </p>
                </div>
              </div>
            )}

            <div className="">
              <label className="switch">
                <input type="checkbox" onClick={toggleIsOn} />
                <span className="slider round" />
              </label>
            </div>
            {isOn ? (
              <div className="mt-8 mb-5 p-3 rounded-lg compliancedarkbluetext text-xl font-bold poppins">
                <div className="flex text-center justify-center items-center">
                  <p>I'm a business owner </p>
                </div>
              </div>
            ) : (
              <div className="mt-8 mb-5 text-gray-500 p-3 text-xl poppins">
                <div className="flex text-center justify-center items-center">
                  <p>I'm a business owner </p>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* </Sticky> 
      </div> */}

      {/* {isOn ? (
        <>
          <section>
            <div className="text-center mt-8 mb-8 ml-10 mr-10">
              <Company />
            </div>
          </section>
          <div className="text-4xl ml-10 mr-10 text-left font-bold mt-20 poppins">
            <h2>Pricing</h2>{' '}
          </div>
          <div className="sm:flex sm:justify-center sm:items-center">
            <section>
              <div className="mb-8 ml-10 mr-10">
                <Essential />
              </div>
            </section>

            <section>
              <div className="mt-10 mb-8 ml-10 mr-10">
                <Enhanced />
              </div>
            </section>

            <section>
              <div className="mt-10 mb-8 ml-10 mr-10">
                <Complete />
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          <section>
            <div className="z-0 mt-8 mb-8 ml-10 mr-10">
              <Individual />
            </div>
          </section>
          <div className="text-4xl ml-10 mr-10 text-left font-bold mt-20 poppins">
            <h2>Pricing</h2>{' '}
          </div>
          <section>
            <div className="mb-8 ml-10 mr-10">
              <IndividualPrice />
            </div>
          </section>
          <section>
            <div className="mt-20">
              <CyberBook />
            </div>
          </section>
        </>
      )} */}

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
