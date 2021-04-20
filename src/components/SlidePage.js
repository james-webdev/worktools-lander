import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import Company from './Company';
import CyberBook from './CyberBook';
import Individual from './Individual';
import Complete from './Pricing/Complete';
import Enhanced from './Pricing/Enhanced';
import Essential from './Pricing/Essential';
import IndividualPrice from './Pricing/IndividualPrice';

export default function SlidePage() {
  const [page, setPage] = useState(1);

  const refPage1 = useRef(null);
  const refPage2 = useRef(null);

  const currentPageHeight =
    (page === 1 ? refPage1.current : refPage2.current)?.scrollHeight || 'auto';

  return (
    <div className="App">
      <section className="mt-20 backgroundBlue shadow-sm opacity-100">
        <div className="flex justify-center text-xl items-center ml-10 mr-10">
          {page === 2 ? (
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
              <input type="checkbox" onClick={() => setPage(page === 1 ? 2 : 1)} />
              <span className="slider round" />
            </label>
          </div>
          {page === 2 ? (
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
      {/* <div className="flex justify-center items-center mb-8 ml-10 mr-10">
        <label className="switch">
          <input type="checkbox" onClick={() => setPage(page === 1 ? 2 : 1)} />
          <span className="slider round" />
        </label>
      </div> */}

      <div className="wrapper">
        <motion.div
          animate={{
            height: currentPageHeight
          }}
          transition={{ type: 'spring', bounce: 0.1, duration: 1 }}
        >
          <div ref={refPage1} className="page" />{' '}
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
          <motion.div
            ref={refPage2}
            className="page page-blue mb-20"
            initial={false}
            animate={{
              x: page === 2 ? 0 : '100%'
            }}
            transition={{ type: 'spring', bounce: 0, duration: 1 }}
          >
            {' '}
            <>
              <section>
                <div className="text-center mt-8 mb-8 ml-10 mr-10">
                  <Company />
                </div>
              </section>
              <div className="text-4xl text-white ml-10 mr-10 text-left font-bold mt-20 poppins">
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
