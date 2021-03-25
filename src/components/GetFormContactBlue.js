import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
      message: false
    });
    if (ok) {
      form.reset();
    }
    if (msg) {
      console.log(msg);
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true, message: true });
    axios({
      method: 'post',
      url: 'https://getform.io/f/4a979712-4299-4337-9e90-ef82347d75b3',
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!', form);
        console.log(r.data);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <>
      {serverState.message && (
        <div className="poppins rounded mt-3 p-3 complianceblue text-center text-black text-1xl">
          <p>Thanks! Your email has been submitted.</p>
        </div>
      )}
      <div className="flex justify-around backgroundBlue p-4 mt-5 text-center rounded-tr-lg rounded-bl-lg rounded-br-lg">
        <div className="text-black ml-10">
          <h1 className="poppins text-4xl">Get Notified.</h1>
          <p className="poppins">Sign up to be notified when the product is released</p>
        </div>
        <form className="flex w-1/2 justify-between" onSubmit={handleOnSubmit}>
          <div>
            <input
              className="h-10 ml-4 mt-4 mb-4 backgroundBlue text-black text-center border border-b-3"
              type="email"
              name="email"
              placeholder="You@Example.com"
            />
          </div>
          <div>
            <button
              className="ml-10 mr-20 mt-5 mb-5 p-3 complianceblue text-white poppins rounded-tr-lg rounded-bl-lg rounded-br-lg"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
