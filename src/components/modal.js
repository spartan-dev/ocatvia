import React from "react"

import Close from "../images/svg/close.svg"

const Modal = ({ children, onClick }) => {
  return (
    <div className="z-20 absolute top-0 w-screen h-screen bg-smoke">
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
