import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';

function CarouselEx() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className="flex bold text-center pb-5">
        <h1 className="text-5xl bold">We think our clients put it best!</h1>
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
            children: '🢂',
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: 'center'
            }
          }}
          backwardBtnProps={{
            children: '🢀',
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: 'center'
            }
          }}
          itemsToShow={1}
          speed={400}
        >
          <div
            className="tab1 m-2 rounded-lg shadow-md"
            style={{
              width: 300,
              height: 400,
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            {' '}
            <div className="mr-6 ml-6">
              <p className="text-4xl p-2 mt-1 text-white">Beatnik Games</p>
              <p className="text-md p-2 mt-5 text-white">
                For us, its the most convenient way to manage out IT Security
              </p>
              <p className="text-2xl p-2 mt-8 text-white font-semibold">Damien Cerri</p>
              <p className="text-opacity-50 text-white">CEO</p>
            </div>
          </div>

          <div
            className="tab2 m-2 rounded-lg shadow-md"
            style={{
              width: 300,
              height: 400,
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            {' '}
            <div className="mr-6 ml-6">
              <p className="text-4xl p-2 mt-1 text-white">AD Dynamo</p>
              <p className="text-md p-2 mt-5 text-white">
                Worktools helped us to fix all our historic non-compliances within 48 hours of
                on-boarding - result!
              </p>
              <p className="text-2xl p-2 mt-8 text-white font-semibold">Sam Wriley</p>
              <p className="text-opacity-50 text-white">Director</p>
            </div>
          </div>

          <div
            className="rounded-lg m-2 tab3 shadow-md"
            style={{
              width: 300,
              height: 400,
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            {' '}
            <div className="mr-6 ml-6">
              <p className="text-4xl p-2 mt-1 text-white">Adam Knibb Architects</p>
              <p className="text-md p-2 mt-5 text-white">
                Awesome! Glad we decided to go with Worktools. Saved us loads of time and hassle.
              </p>
              <p className="text-2xl p-2 mt-8 text-white font-semibold">Adam Knibb</p>
              <p className="text-opacity-50 text-white">Director</p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselEx;
