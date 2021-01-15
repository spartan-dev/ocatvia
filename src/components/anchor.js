import React from "react"

import Arrow from "../images/svg/arrow.svg"

const Anchor = ({ text, href }) => {
  return (
    <div className="mt-4 flex items-center">
      <span className="text-lg font-gotham-medium">
        {text}
      </span>
      <a className="ml-2" href={href}>
        <Arrow />
      </a>
    </div>
  )
}

export default Anchor
