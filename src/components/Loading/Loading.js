import React from 'react';
import './spiner.css';
const Loading = () => {
  return (
    <div>
      <div className="spinner-container">
        <div className="spinner">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Loading;
