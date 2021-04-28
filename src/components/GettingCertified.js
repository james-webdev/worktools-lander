import React from 'react';
import Mailto from './MailTo';

const GettingCertified = () => {
  return (
    <div className="tab3 rounded rounded-tr-lg rounded-bl-lg rounded-br-lg p-4 mt-5 text-center sm:flex sm:p-8">
      <div className="text-white text-left p-3 pl-8 pr-8">
        <h1 className="poppins font-medium text-3xl">Getting certified?</h1>
        <p className="poppins mt-5">
          Already on the path to securing your company, or considering it soon?
        </p>
      </div>

      <div className="flex flex-col sm:flex-row">
        <button
          className="ml-10 mr-10 mt-5 mb-5 p-3 bg-white poppins rounded rounded-tr-lg rounded-bl-lg rounded-br-lg "
          type="submit"
        >
          <div className="">
            <Mailto email="hi@work.tools" subject="I have a question" body="Hey!">
              Get in touch
            </Mailto>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GettingCertified;
