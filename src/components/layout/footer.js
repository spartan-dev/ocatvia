import React from 'react';
import { Link } from 'gatsby';

import Facebook from '../../images/svg/facebook.svg';
import Instagram from '../../images/svg/instagram.svg';

const categories = ['vinos', 'licor', 'gourmet', 'bebidas'];
const subcategories = [
  'vino-tinto',
  'vino-blanco',
  'espumantes',
  'tequila',
  'ron',
  'grappa',
  'cremas',
  'gin',
  'vodka',
  'whisky',
  'chocolates',
  'salsas',
  'galletas',
  'conservas',
  'agua-natural',
  'agua-carbonatada',
];

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center">
        <div className="h-24 w-20 flex justify-between items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Octavia-Mundo-Gourmet-101731011808480"
          >
            <Facebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/octaviamundogourmet/"
          >
            <Instagram />
          </a>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container md:h-56 mx-auto flex flex-row justify-evenly sm:justify-start items-start lg:items-center py-8 md:py-6 lg:py-0 ">
          <div className="sm:w-1/4 md:w-1/5 lg:w-1/6">
            <p className="tracking-widest text-yellow font-gotham-medium mb-5 text-sm lg:text-base">
              CATEGORÍAS
            </p>
            <ul className="grid grid-cols-1 gap-4 text-xs font-gotham-book">
              {categories.map((item, index) => (
                <Link key={index} to={`/${item}`}>
                  <li className="tracking-widest">{item.replace(/-/g, ' ')}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="sm:w-3/4 md:w-4/5 lg:w-4/6">
            <p className="tracking-widest text-yellow font-gotham-medium mb-5 text-sm lg:text-base">
              SUBCATEGORÍAS
            </p>
            <ul className="grid lg:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs font-gotham-book">
              {subcategories.map((item, index) => (
                <Link key={index} to={`/${item}`}>
                  <li className="tracking-widest">{item.replace(/-/g, ' ')}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
