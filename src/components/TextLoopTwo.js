import React from 'react';
import TextLoop from 'react-text-loop';

const TextLooperTwo = () => {
  return (
    <div className="text-xl p-1 font-bold poppins flex flex-col sm:flex-row items-center justify-center">
      <TextLoop className="bg-white p-1 text-xl rounded-lg">
        <p className="ml-2 mt-2">data loss.</p>
        <p className="ml-2 mt-2">regulatory compliance.</p>
        <p className="ml-2 mt-2">brand reputation.</p>
        <p className="ml-2 mt-2">operational security risks.</p>
      </TextLoop>{' '}
    </div>
  );
};

export default TextLooperTwo;
