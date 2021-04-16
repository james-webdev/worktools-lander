import React from 'react';
import TextLoop from 'react-text-loop';

const TextLooper = () => {
  return (
    <div className="z-0 text-xl p-1 font-bold poppins flex flex-col sm:flex-row items-center justify-center">
      <div className="p-2 leading-loose">Could you do more to protect</div>
      <TextLoop className="z-0 complianceblue p-1 text-xl text-white rounded-lg">
        <p className="ml-2 z-0 mt-2">yourself?</p>
        <p className="ml-2 z-0 mt-2">your clients?</p>
        <p className="ml-2 z-0 mt-2">your business?</p>
        <p className="ml-2 z-0 mt-2">your colleagues?</p>
        <p className="ml-2 z-0 mt-2">your family?</p>
        <p className="ml-2 z-0 mt-2">your suppliers?</p>
      </TextLoop>{' '}
    </div>
  );
};

export default TextLooper;
