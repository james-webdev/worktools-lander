import React from 'react';

const Shield = () => {
  return (
    <div className="flex justify-center items-center ml-4 mr-4">
      <div>
        <svg
          className="w-24 ml-3 pt-10 pb-10 p-1"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          enableBackground="new 0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <path
              fill="#162862"
              d="M27.285,61.902c0,0,55.165,13.791,229.279-62.061v267.403H65.19C48.895,212.17,35.522,146.07,27.285,61.902
		z"
            />
            <path
              fill="#46A4CB"
              d="M256.564,267.244v244.597C231.977,500.92,127.329,477.25,65.19,267.244H256.564z"
            />
            <path
              fill="#215D9E"
              d="M485.844,61.902c0,0-55.165,13.791-229.279-62.061v267.403h191.374
		C464.234,212.17,477.606,146.07,485.844,61.902z"
            />
            <path
              fill="#82CEE2"
              d="M256.564,267.244v244.597C281.151,500.92,385.8,477.25,447.938,267.244H256.564z"
            />
          </g>
        </svg>
      </div>
      <div className="p-2 ml-4 text-left flex-col">
        <h1 className="text-lg">Compliance</h1>
        <p>Easily mange your NCSC Cyber Essentials and GDPR compliance</p>
      </div>
    </div>
  );
};

export default Shield;
