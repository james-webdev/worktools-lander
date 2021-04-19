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
              width: 25,
              height: 25,
              minWidth: 25,
              alignSelf: 'center'
            }
          }}
          backwardBtnProps={{
            children: '<',
            style: {
              width: 25,
              height: 25,
              minWidth: 25,
              alignSelf: 'center'
            }
          }}
          itemsToShow={1}
          speed={200}
        >
          <div
            className="border border-black tab1 m-2 rounded-tr-lg rounded-bl-lg rounded-br-lg border border-8 border-white"
            style={{
              width: 281.25,
              height: 422.5,
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            {' '}
            <div className="mr-6 ml-6">
              <p className="text-3xl p-2 pt-2 mt-1 text-white">Beatnik Games</p>
              <div className="flex opacity-25 -ml-5 -mb-12">
                <Icon className="w-10 -mr-5 h-10" icon={commaIcon} color="white" rotate="180deg" />
                <Icon className="w-10 h-10" icon={commaIcon} color="white" rotate="180deg" />
              </div>
              <p className="text-md p-2 mt-5 text-white">
                For us, its the most convenient way to manage out IT Security
              </p>
              <div className="flex justify-end opacity-25 -mr-5 -mt-5">
                <Icon className="w-10 h-10" icon={commaIcon} color="white" />
                <Icon className="w-10 -ml-5 h-10" icon={commaIcon} color="white" />
              </div>
              <div className="">
                <p className="text-lg p-2 mt-4 text-white font-semibold">Damien Cerri</p>
                <p className="opacity-75 text-white">CEO</p>
              </div>
            </div>
          </div>

          <div
            className="tab2 m-2 rounded-tr-lg rounded-bl-lg rounded-br-lg border border-8 border-white"
            style={{
              width: 281.25,
              height: 422.5,
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            {' '}
            <div className="mr-3 ml-3">
              <p className="text-3xl p-2 pt-2 mt-1 text-white">AD Dynamo</p>
              <div className="flex mt-4 opacity-25 -ml-5 -mb-12">
                <Icon className="w-10 -mr-5 h-10" icon={commaIcon} color="white" rotate="180deg" />
                <Icon className="w-10 h-10" icon={commaIcon} color="white" rotate="180deg" />
              </div>
              <p className="text-md p-2 mt-5 text-white">
                Worktools helped us to fix all our historic non-compliances within 48 hours of
                on-boarding - result!
              </p>
              <div className="flex justify-end opacity-25 -mr-5 -mt-5">
                <Icon className="w-10 h-10" icon={commaIcon} color="white" />
                <Icon className="w-10 -ml-5 h-10" icon={commaIcon} color="white" />
              </div>
              <div className="">
                <p className="text-lg p-2 mt-4 text-white font-semibold">Sam Wriley</p>
                <p className="opacity-75 text-white">Director</p>
              </div>
            </div>
          </div>

          <div
            className="rounded-tr-lg rounded-bl-lg rounded-br-lg m-2 tab3 border border-8 border-white"
            style={{
              width: 281.25,
              height: 422.5,
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            {' '}
            <div className="mr-6 ml-6">
              <p className="text-3xl p-2 pt-2 mt-1 text-white">Adam Knibb Architects</p>
              <div className="flex opacity-25 -ml-5 -mb-12">
                <Icon className="w-10 -mr-5 h-10" icon={commaIcon} color="white" rotate="180deg" />
                <Icon className="w-10 h-10" icon={commaIcon} color="white" rotate="180deg" />
              </div>
              <p className="text-md p-2 mt-5 text-white">
                Awesome! Glad we decided to go with Worktools. Saved us loads of time and hassle.
              </p>
              <div className="flex justify-end opacity-25 -mr-5 -mt-5">
                <Icon className="w-10 h-10" icon={commaIcon} color="white" />
                <Icon className="w-10 -ml-5 h-10" icon={commaIcon} color="white" />
              </div>
              <div className="">
                <p className="text-lg p-2 mt-4 text-white font-semibold">Adam Knibb</p>
                <p className="opacity-75 text-white">Director</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselEx;
