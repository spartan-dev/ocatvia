import React from 'react';
import { animated } from 'react-spring';

import Close from '../images/svg/close.svg';

const Modal = ({ style, children, onClick, className, btnClass }) => {
  return (
    <animated.div
      className={`z-20 w-72 sm:w-2/5 lg:w-96 h-full bg-white flex flex-col items-end ${className}`}
      style={{ ...style }}
    >
      <button onClick={() => onClick()} className={btnClass && btnClass}>
        <Close />
      </button>
      <div className="w-full h-full overflow-y-scroll">{children}</div>
    </animated.div>
  );
};

export default Modal;
