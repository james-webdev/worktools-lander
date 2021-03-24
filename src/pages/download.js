import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Download = () => {
  return (
    <>
      <Header />
      <div className="text-center mt-20 mb-20">Download form</div>
      <div className="hidden sm:block">
        <Footer />
      </div>
    </>
  );
};

export default Download;
