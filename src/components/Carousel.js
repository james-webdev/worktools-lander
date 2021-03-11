import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';
import Nscs from '../assets/images/nscs.png';
import OnBoard from '../assets/images/onboard.png';
import Tickets from '../assets/images/tickets.png';

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
          className="carodiv"
          style={{
            width: 700,
            height: 700,
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
        >
          {' '}
          <img src={Tickets} alt="" />
          <p className="text-2xl mt-1 font-semibold">
            • Continuously scan your device for security issues{' '}
          </p>
          <p className="text-2xl mt-3 font-semibold">
            • Get alerts when something needs your attention
          </p>
        </div>

        <div
          className="carodiv"
          style={{
            width: 700,
            height: 700,
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
        >
          <img src={Nscs} alt="" />{' '}
          <p className="text-2xl mt-1 font-semibold">• Get expert help at the click of a button </p>
          <p className="text-2xl mt-3 font-semibold">
            {' '}
            • See the latest detailed analysis of your devices
          </p>
        </div>

        <div
          className="carodiv"
          style={{
            width: 700,
            height: 700,
            textAlign: 'center',
            boxSizing: 'border-box'
          }}
        >
          <img src={OnBoard} alt="" />
          <p className="text-2xl mt-1 font-semibold">
            Share your status with clients and your employer
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselEx;
