import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';
import Beatnik from '../assets/images/Beatnik.png';
import AdDynamo from '../assets/images/addynamo.png';
import Wib from '../assets/images/aknibba.png';

function CarouselEx() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
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
        speed={400}
      >
        <div
          className="rounded-lg bg-green-300"
          style={{
            width: 300,
            height: 400,
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
        >
          {' '}
          <img className="w-20" src={Beatnik} alt="" />
          <p className="text-2xl mt-1 font-semibold">
            For us, its the most convenient way to manage out IT Security
          </p>
        </div>

        <div
          className="complianceblue rounded-lg"
          style={{
            width: 300,
            height: 400,
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
        >
          <p className="text-2xl mt-1 font-semibold">• Get expert help at the click of a button </p>
          <p className="text-2xl mt-3 font-semibold">
            {' '}
            • See the latest detailed analysis of your devices
          </p>
        </div>

        <div
          className="rounded-lg bg-blue-300"
          style={{
            width: 300,
            height: 400,
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
        >
          <p className="text-2xl mt-1 font-semibold">
            Share your status with clients and your employer
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselEx;
