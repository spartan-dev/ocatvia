import React from "react"

import Close from "../images/svg/close.svg"

const Modal = ({ children, onClick, className, top }) => {
  return (
    <div className={`z-20 absolute w-screen h-screen ${top && "top-0 bg-smoke"}`}>
      <div className={`w-4/5 sm:w-2/5 lg:w-106 h-full bg-white p-6 flex flex-col items-end ${className}`}>
        <button onClick={() => onClick()}>
          <Close />
        </button>
        <div className="w-full h-full overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
