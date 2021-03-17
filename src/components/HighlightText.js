import React from 'react';
import Highlighter from 'react-highlight-words';

const HighlightText = () => {
  return (
    <Highlighter
      highlightClassName="YourHighlightClass"
      searchWords={['and', 'or', 'the']}
      autoEscape={true}
      textToHighlight="Our aim is to provide ways for SMBs to manage and secure their IT and have instanst access
    to expert support to aid with challenging issues"
    />
  );
};

export default HighlightText;
