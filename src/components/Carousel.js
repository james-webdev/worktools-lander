import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';
import { Icon, InlineIcon } from '@iconify/react';
import commaIcon from '@iconify-icons/mdi/comma';

function CarouselEx() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className="flex bold text-center justify-center items-center pb-5">
        <h1 className="ml-5 mr-5 poppins text-3xl">We think our clients put it best!</h1>
      </div>
      <div className="mt-8">
        <Carousel
          updateOnItemClick
          containerProps={{
            style: {
              width: '100%',
              justifyContent: 'space-between'
            }
          }}
          activeSlideIndex={activeSlide}
          activeSlideProps={{
            style: {
              objectFit: 'cover'
            }
          }}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: '>',
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: 'center'
            }
          }}
          backwardBtnProps={{
            children: '<',
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: 'center'
            }
          }}
          itemsToShow={1}
          speed={200}
        >
          <div
            className="tab1 m-2 rounded-tr-lg rounded-bl-lg rounded-br-lg border border-8 border-white"
            style={{
              width: 300,
              height: 450,
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            {' '}
            <div className="mr-6 ml-6">
              <p className="text-4xl p-2 mt-1 pt-2 text-white">Beatnik Games</p>
              <div className="flex opacity-25 -ml-8 -mb-12">
                <Icon className="w-20 -mr-10 h-20" icon={commaIcon} color="white" rotate="180deg" />
                <Icon className="w-20 h-20" icon={commaIcon} color="white" rotate="180deg" />
              </div>
              <p className="text-md p-2 mt-5 text-white">
                For us, its the most convenient way to manage out IT Security
              </p>
              <div className="flex justify-end opacity-25 -mr-8 -mt-8">
                <Icon className="w-20 h-20" icon={commaIcon} color="white" />
                <Icon className="w-20 -ml-10 h-20" icon={commaIcon} color="white" />
              </div>
              <p className="text-2xl p-2 mt-8 text-white font-semibold">Damien Cerri</p>
              <p className="opacity-75 text-white">CEO</p>
            </div>
          </div>

          <div
            className="tab2 m-2 rounded-tr-lg rounded-bl-lg rounded-br-lg border border-8 border-white"
            style={{
              width: 300,
              height: 450,
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            {' '}
            <div className="mr-6 ml-6">
              <p className="text-4xl p-2 pt-5 mt-1 text-white">AD Dynamo</p>
              <div className="flex opacity-25 pt-10 -ml-8 -mb-12">
                <Icon className="w-20 -mr-10 h-20" icon={commaIcon} color="white" rotate="180deg" />
                <Icon className="w-20 h-20" icon={commaIcon} color="white" rotate="180deg" />
              </div>
              <p className="text-md p-2 mt-5 text-white">
                Worktools helped us to fix all our historic non-compliances within 48 hours of
                on-boarding - result!
              </p>
              <div className="flex justify-end opacity-25 -mr-8 -mt-8">
                <Icon className="w-20 h-20" icon={commaIcon} color="white" />
                <Icon className="w-20 -ml-10 h-20" icon={commaIcon} color="white" />
              </div>
              <p className="text-2xl p-2 mt-2 text-white font-semibold">Sam Wriley</p>
              <p className="opacity-75 text-white">Director</p>
            </div>
          </div>

          <div
            className="rounded-tr-lg rounded-bl-lg rounded-br-lg m-2 tab3 border border-8 border-white"
            style={{
              width: 300,
              height: 450,
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            {' '}
            <div className="mr-6 ml-6">
              <p className="text-4xl p-2 pt-2 mt-1 text-white">Adam Knibb Architects</p>
              <div className="flex opacity-25 -ml-8 -mb-12">
                <Icon className="w-20 -mr-10 h-20" icon={commaIcon} color="white" rotate="180deg" />
                <Icon className="w-20 h-20" icon={commaIcon} color="white" rotate="180deg" />
              </div>
              <p className="text-md p-2 mt-5 text-white">
                Awesome! Glad we decided to go with Worktools. Saved us loads of time and hassle.
              </p>
              <div className="flex justify-end opacity-25 -mr-8 -mt-8">
                <Icon className="w-20 h-20" icon={commaIcon} color="white" />
                <Icon className="w-20 -ml-10 h-20" icon={commaIcon} color="white" />
              </div>
              <p className="text-2xl p-2 mt-8 text-white font-semibold">Adam Knibb</p>
              <p className="opacity-75 text-white">Director</p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselEx;
