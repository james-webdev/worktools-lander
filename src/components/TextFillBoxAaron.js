import React, { useState, useEffect, useRef } from 'react';

const buttonData = [
  {
    title: 'Liability',
    content:
      'Claims made against you arising out of media activities and privacy and security wrongful acts.'
  },
  {
    title: 'Extortion Demands',
    content: 'Ransoms and other cyber extortion.'
  },
  {
    title: 'Business Interruption',
    content: 'Loss of profit and/or operational expenses caused by a network compromise.'
  }
];

const HowItShouldBe = () => {
  const [mainText, setMainText] = useState(buttonData[0].content);
  const [selectedButton, setSelectedButton] = useState(buttonData[0].title);

  const buttons = () => {
    return buttonData.map((btn, index) => (
      <button
        type="button"
        onClick={() => {
          setMainText(btn['content']);
          setSelectedButton(btn['title']);
        }}
        key={'button' + String(index)}
        style={{
          backgroundColor: selectedButton === btn['title'] ? 'blue' : 'white'
        }}
      >
        <p
          style={{
            color: selectedButton !== btn['title'] ? 'blue' : 'white'
          }}
        >
          {btn['title']}
        </p>
      </button>
    ));
  };

  return (
    <div style={{ marginBottom: 50 }}>
      {buttons()}
      <div className="tab1 text-white">
        <p>{mainText}</p>
      </div>
    </div>
  );
};

export default function App() {
  return <div>{HowItShouldBe()}</div>;
}
