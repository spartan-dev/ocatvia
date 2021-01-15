import React from "react"

import Close from "../images/svg/close.svg"

const Modal = ({ children, onClick, className }) => {
  return (
    <div className={`z-20 absolute w-screen h-screen ${className}`}>
      <div className="w-4/5 h-full sm:w-2/5 bg-white p-6 flex flex-col items-end">
        <button className="focus:outline-none"
          onClick={() => onClick()}>
          <Close />
        </button>
        <div className="w-full overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
