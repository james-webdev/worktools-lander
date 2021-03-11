import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import ScrollTest from '../components/ScrollTest';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import CarouselEx from '../components/Carousel';
import SplitSection from '../components/SplitSection';
import GWebGreen from '../assets/images/gwebgreen.png';
import Beatnik from '../assets/images/Beatnik.png';
import AdDynamo from '../assets/images/addynamo.png';
import Wib from '../assets/images/aknibba.png';

export default () => (
  <Layout>
    <section className="guardianblue sm:-ml-40 sm:-mr-40 sm:rounded-b-full shadow-lg pt-10">
      <div className="mx-auto sm:flex sm:ml-40 sm:mr-40 sm:justify-center">
        <div className="sm:flex-col sm:mb-20 sm:justify-center sm:items-center pt-20 text-center sm:w-1/3">
          <ScrollAnimation animateIn="animate__backInLeft">
            <h1 className="pt-10 text-4xl text-white lg:text-5xl xl:text-6xl font-bold leading-none">
              Worktools
            </h1>
          </ScrollAnimation>

          <div className="sm:flex text-white sm:justify-center sm:items-center">
            <ul className="text-xl lg:text-2xl mt-6 semibold">
              <ScrollAnimation animateIn="animate__backInUp">
                <li className="pt-5">
                  As a business, you have total visibility to manage your compliance
                </li>
              </ScrollAnimation>
              {/* <li className="fade2 pt-5"> Get alerts when something needs your attention. </li>
            <li className="fade3 pt-5">
              Resolve Compliance, Cybersecurity & common IT issues yourself.
            </li> */}
            </ul>
          </div>
          {/* <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
        </div>
        <div className="sm:flex-col sm:mb-20 sm:justify-center sm:items-center text-center sm:w-1/2">
          <div className="flex justify-center items-center">
            <div id="mainImage" className="w-full">
              <div id="blob" className="flex justify-center items-center">
                <div className="blob"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="sm:ml-40 sm:mt-20 sm:mr-40 text-center">
      <ScrollAnimation animateIn="animate__backInLeft">
        <h2 className="text-3xl lg:text-5xl font-semibold">
          With Worktools, get simple certification with continuous assessment.
        </h2>
      </ScrollAnimation>
    </div>

    <div className="sm:mt-20 sm:ml-40 sm:mr-40">
      <CarouselEx />
    </div>

    <section className="container shadow-lg sm:mr-4 mx-auto my-20 py-24 guardianblue rounded-sm text-center">
      <h3 className="text-3xl text-white font-semibold">Ready to protect your business?</h3>
      <p className="mt-8">
        <Button className="bg-gray-400 text-blue-900 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ...">
          Download Now
        </Button>
      </p>
    </section>

    <ScrollTest />

    <section className="container sm:mr-4 mx-auto my-20 py-24 shadow-lg guardianblue text-center">
      <h3 className="text-3xl text-white sm:ml-40 sm:mr-40 font-semibold">
        We fully address the issue of freelancers, contract workers, temporary staff, and the use of
        personal devices.
      </h3>
      <p className="mt-8">
        <Button className="bg-gray-400 text-blue-900 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ...">
          Download Now
        </Button>
      </p>
    </section>

    <section id="pricing" className="mt-20 w-full">
      <div class="container flex flex-wrap pt-4 pb-20 m-auto mt-2 md:mt-5 lg:px-12 xl:px-16">
        <div class="w-full px-0 lg:px-4">
          <h2 class="px-12 font-bold text-center text-3xl lg:text-5xl font-semibold md:text-2xl">
            Pricing
          </h2>
          <p class="py-1 text-md mt-5 sm:ml-40 sm:mr-40 text-center mb-10">
            We are continually adding new features to our platform all the time and we can tailor
            plans to your specific needs, please get in touch to discuss your requirements further.
          </p>
          <div class="flex flex-wrap mt-10 items-center justify-center py-4 pt-0">
            <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
              <label class="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl">
                <div class="w-full px-4 py-6 rounded-t-lg card-section-1">
                  <h3 class="mx-auto text-base font-semibold text-center underline text-blue-500 group-hover:text-white">
                    Beta
                  </h3>
                  <p class="text-3xl font-semibold text-center group-hover:text-white text-blue-500">
                    Free<span class="text-3xl"></span>
                  </p>
                </div>
                <div class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-gray-500">
                  <p class="text-xl text-white">1 month</p>
                  <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-400">
                    Get Started
                  </button>
                </div>
              </label>
            </div>

            <div class="w-full p-4 md:w-1/2 lg:w-1/4">
              <label class="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
                <div class="w-full px-4 py-8 rounded-t-lg bg-white">
                  <h3 class="mx-auto text-center underline text-blue-600 group-hover:text-white">
                    Standard
                  </h3>
                  <p class="text-3xl font-semibold text-center text-blue-600">
                    £19.<span class="text-3xl">00</span>
                  </p>
                  {/* <ul>
                    <p>Protection, Insights and Reporting</p>
                    <li>NCSC Cyber Essentials Self-Management</li>
                    <li>Next-Gen AI Antivirus & Threat Protection</li>
                    <li>Automated Device Health Monitoring</li>
                    <li>Automated Threat Monitoring </li>
                    <li>Automated Anomaly Detection</li>
                    <li>Automated Device & Software Asset Management</li>
                    <li>Automated Security Policy Enforcement </li>
                    <li>Automated Non-compliance Alerting</li>
                    <p>UNLIMITED Professional Assistance</p>
                    <li>IT Support (Remote & On-Prem)</li>
                    <li>Virtual CTO/CISO/IT Director</li>
                    <li>Breach & Data Protection Assistance</li>
                    <li>Cybersecurity Assistance</li>
                    <li>IT Architecture reviews </li>
                    <li>Compliance Consultancy Sessions</li>
                    <li>Office Visits</li>
                    <p>UNLIMITED IT Lifecycle Management</p>
                    <li>User Device Management</li>
                    <li>Cloud Services Management</li>
                    <li>Network Management</li>
                    <li>Local Server Management</li>
                    <li>Encryption Management</li>
                    <p>Plus</p>
                    <li>1 hour Incident Response</li>
                  </ul> */}
                </div>
                <div class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg guardianblue">
                  <p class="text-xl text-white">3 months</p>
                  <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                    Save 15%
                  </button>
                </div>
              </label>
            </div>

            <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
              <label class="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl">
                <div class="w-full px-4 py-6 rounded-t-lg card-section-1">
                  <h3 class="mx-auto text-base font-semibold text-center underline text-blue-500 group-hover:text-white">
                    Unlimited
                  </h3>
                  <p class="text-3xl font-semibold text-center group-hover:text-white text-blue-500">
                    £74.<span class="text-3xl">00</span>
                  </p>
                </div>
                <div class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-gray-500">
                  <p class="text-xl text-white">6 months</p>
                  <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                    Save 25%
                  </button>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section
      id="testimonials"
      className="guardianblue sm:-ml-40 sm:-mr-40 rounded-full py-3 px-6 shadow-lg flex justify-center items-center"
    >
      <div className="container sm:mt-20 mx-auto text-center">
        <ScrollAnimation animateIn="animate__pulse">
          <h2 className="text-3xl text-white lg:text-1xl font-semibold">
            What our clients are saying:
          </h2>
        </ScrollAnimation>
        <div className="flex flex-col pt-4 sm:ml-40 sm:mr-40 sm:mb-20 sm:justify-around sm:flex-row">
          <div className="p-5 bg-white shadow-lg m-10 rounded-lg w-95% sm:w-1/3">
            <div className="text-md pt-3 text-black">
              <p className="font-medium text-center">
                “For us, its the most convenient way to manage out IT Security”
              </p>
              <p className="mt-2 font-light">Damien Cerri - CEO Beatnik Games</p>
            </div>
            <div className="flex justify-center items-center">
              <img className="mt-4 w-32" src={Beatnik} alt="" />
            </div>
          </div>
          <div className="p-5 bg-white shadow-lg m-10 rounded-lg w-95% sm:w-1/3">
            <div className="text-md pt-2 text-black" />
            <p className="font-medium text-center">
              {' '}
              "Awesome! Glad we decided to go with Worktools. Saved us loads of time and hassle."
            </p>
            <p className="mt-2 font-light">Adam Knibb Director - Adam Knibb Architects</p>
            <div className="flex justify-center items-center rounded-sm">
              <img className="mt-4 w-32" src={Wib} alt="" />
            </div>
          </div>
          <div className="p-5 bg-white shadow-lg m-10 rounded-lg w-95% sm:w-1/3">
            <div className="text-md pt-3 text-black">
              <div />
              <p className="font-medium text-center">
                “Worktools helped us to fix all our historic non-compliances within 48 hours of
                on-boarding - result!”
              </p>
              <p className="mt-2 font-light">Sam Wriley - Director - AD Dynamo</p>
              <div className="flex justify-center items-center">
                <img className="mt-16 w-32" src={AdDynamo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </Layout>
);
