import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed, className }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    const length = visibleText.length;
    const timeout = setTimeout(() => {
      setVisibleText(text.substr(0, length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [visibleText, text, speed]);

  return (
    <>
      <span className={className} dangerouslySetInnerHTML={{ __html: visibleText }}></span>
      <span className="cursor">|</span>
    </>
  );
};

export default TypingAnimation;
