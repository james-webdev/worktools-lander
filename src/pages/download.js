import React from 'react';
import DownLoadHeader from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Download = () => {
  return (
    <>
      <DownLoadHeader />
      <div className="text-center mt-20 mb-20">Download form</div>
      <div className="hidden sm:block">
        <Footer />
      </div>
    </>
  );
};

export default Download;
