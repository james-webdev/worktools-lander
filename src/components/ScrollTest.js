import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const ScrollTest = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 1800) {
        setScroll(true);
        console.log(window.scrollY);
        console.log('on scroll');
        // setTimeout(() => {
        //   setScroll(false);
        // }, 5000);
      }
    });
  }, []);

  return (
    <section id="features" className="sm:ml-40 sm:mr-40">
      <div className="container mx-auto text-center">
        <ScrollAnimation animateIn="animate__backInRight">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            See the latest detailed analysis of your devices
          </h1>
        </ScrollAnimation>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-wrapper flex sm:flex-wrap sm:justify-center flex-col sm:flex-row m-2 sm:ml-4 sm:mr-4">
            <div className="single-chart m-3 w-full sm:w-1/3 shadow-md p-12 rounded-lg border border-solid border-gray-200">
              <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path
                  className="circle-bg"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={scroll ? 'circle' : 'circle2'}
                  strokeDasharray="30, 100"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  30%
                </text>
              </svg>
              <p className="text-lg mt-6 font-semibold">
                See the latest detailed analysis of your devices
              </p>
            </div>

            <div className="single-chart w-full sm:w-1/3 m-3 shadow-md p-12 rounded-lg border border-solid border-gray-200">
              <svg viewBox="0 0 36 36" className="circular-chart green">
                <path
                  className="circle-bg"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={scroll ? 'circle' : 'circle2'}
                  strokeDasharray="60, 100"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  60%
                </text>
              </svg>
              <p className="text-lg mt-6 font-semibold">
                Easily manage your NCSC Cyber Essentials and GDPR compliance
              </p>
            </div>

            <div className="single-chart w-full sm:w-1/3 m-3 shadow-md p-12 rounded-lg border border-solid border-gray-200">
              <svg viewBox="0 0 36 36" className="circular-chart blue">
                <path
                  className="circle-bg"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={scroll ? 'circle' : 'circle2'}
                  strokeDasharray="90, 100"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  90%
                </text>
              </svg>
              <p className="mt-6 text-lg font-semibold">
                Understand the threats that your users and devices face.
              </p>
            </div>

            <div className="single-chart w-full sm:w-1/3 m-3 shadow-md p-12 rounded-lg border border-solid border-gray-200">
              <svg viewBox="0 0 36 36" className="circular-chart emerald">
                <path
                  className="circle-bg"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={scroll ? 'circle' : 'circle2'}
                  strokeDasharray="100, 100"
                  d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  100%
                </text>
              </svg>
              <p className="mt-6 text-lg font-semibold">Get expert help at the click of a button</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTest;
