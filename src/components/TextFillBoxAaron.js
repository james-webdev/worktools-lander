import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from "react-spring";

const states = [
  {
    config: { duration: 300 },
    from: { opacity: 0.1, x: -120 },
    to: { opacity: 1, x:0}
  },
  {
    config: { duration: 300},
    from: { opacity: 0.1, x: -120  },
    to: { opacity: 1, x: 0 }
  }
];

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
  },
{
    title: 'Event management',
    content:
      'Costs, including emergency costs, following a data breach, including the costs of notifying data subjects. These might typically include payment for Legal, IT, Forensic & PR specialists.'
  },
  {
    title: 'Regulatory Investigations',
    content: 'Defence costs & regulatory fines (where insurable by law).'
  },
  {
    title: 'Loss of Electronic Data',
    content: 'Costs of remedying the issue that allowed the loss or damage to your data and costs to replace, restore or update your data.'
  }

];

const TextFillBox = () => {
  const [mainText, setMainText] = useState(buttonData[0].content);
  const [selectedButton, setSelectedButton] = useState(buttonData[0].title);
  const [toggle, setToggle] = useState(false);
   const [props, set] = useSpring(() => ({
    ...states[+toggle]
  }));

  const buttons = () => {
    return buttonData.map((btn, index) => (
      <button
      className="p-3 m-1 rounded-tr-lg rounded-bl-lg rounded-br-lg focus:outline-none"
        type="button"
        onClick={() => {
          setMainText(btn['content']);
          setSelectedButton(btn['title']);
          set({
                ...states[+!toggle]
              });
        }}
        key={'button' + String(index)}
        style={{
          backgroundColor: selectedButton === btn['title'] ? '#27aecc' : 'white'
        }}
      >
        <p
          style={{
            color: selectedButton !== btn['title'] ? '#27aecc' : 'white'
          }}
        >
          {btn['title']}
        </p>
      </button>
    ));
  };

  return (
    
    <div className="sm:flex sm:justify-center sm:items-center sm:mt-5">
    <div className="mt-3 flex flex-col sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:text-xl" >
      {buttons()}
      </div>
      <div className="text-center tab1 sm:text-xl font-medium text-white rounded-tr-lg rounded-bl-lg rounded-br-lg sm:flex sm:justify-center sm:items-center m-3 p-2 pr-5 pl-5">
        <animated.div style={props}>
        <p className="">{mainText}</p>
         </animated.div>
      </div>
    </div>
    

  );
};

export default function App() {
  return <div>{TextFillBox()}</div>;
}
