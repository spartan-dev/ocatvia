import React from 'react';
import { Link } from 'gatsby';

import Arrow from '../images/svg/arrow.svg';

const Anchor = ({ text, linkTo }) => {
  return (
    <div className="mt-4 flex items-center">
      <span className="text-lg font-gotham-medium">{text}</span>
      <Link className="ml-2" to={linkTo}>
        <Arrow />
      </Link>
    </div>
  );
};

export default Anchor;
