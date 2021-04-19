import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '@fontsource/poppins';
import Sticky from 'react-sticky-el';
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
import Essential from './Pricing/Essential';
import Enhanced from './Pricing/Enhanced';
import Complete from './Pricing/Complete';
import CyberBook from './CyberBook';
import Company from './Company';
import IndividualPrice from './Pricing/IndividualPrice';
import Individual from './Individual';

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

      <div className="mt-20 mb-20 mb-8 ml-12 mr-12 sm:ml-48 sm:mr-48">
        <Contact />
      </div>

      {/* <div className="backgroundBlue h-40" /> */}
      <section>
        <div className="mt-20 sm:ml-40 sm:mr-40">
          <CarouselEx />
        </div>
      </section>

      <div
        className="relative
      "
      >
        {/* <Sticky className="opacity-100"> */}
          <section className="mt-20 backgroundBlue shadow rounded opacity-100">
            {/* <div className="flex justify-center text-center font-bold text-2xl items-center ml-10 mr-10 poppins">
          <p>We have plans which target your specific needs.</p>
        </div>
        <div className="mt-8 flex justify-center text-left font-bold text-2xl items-center ml-10 mr-10 poppins">
          <p className=""> Which are you?</p>
        </div> */}

            <div className="flex justify-center text-xl items-center mb-8 ml-10 mr-10">
              {isOn ? (
                <div className="mt-5 mb-5 p-3 text-gray-500 poppins">
                  <div className="flex text-center justify-center items-center">
                    <p>I'm a freelancer </p>
                  </div>
                </div>
              ) : (
                <div className="mt-5 mb-5 compliancebluetext font-semibold p-3 text-xl poppins">
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
                <div className="mt-8 mb-5 p-3 rounded-lg compliancedarkbluetext text-xl font-semibold poppins">
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
        {/* </Sticky> */}
      </div>

      {isOn ? (
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
      )}

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
