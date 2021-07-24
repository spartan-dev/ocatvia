import React, { useState } from 'react';

import Layout from '../components/layout';

import Chevron from '../images/svg/chevron.svg';

const data = [
  {
    name: 'Pregunta 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Pregunta 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Pregunta 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Pregunta 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Pregunta 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Pregunta 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const Faqs = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleIndex, setToggleIndex] = useState(null);

  return (
    <Layout>
      <div className="container min-h-full">
        <p className="title pt-6 md:pt-24">PREGUNTAS FRECUENTES</p>
        <ul className="mt-8 text-navbar">
          {data.map((item, index) => (
            <li
              key={index}
              className={`border-b border-beige
              ${toggle && toggleIndex === item.name ? 'pt-6 pb-2' : 'py-6'}`}
            >
              <button
                className="w-full"
                onClick={() => {
                  setToggle(toggle && toggleIndex === item.name ? false : true);
                  setToggleIndex(item.name);
                }}
              >
                <div className="flex justify-between items-center font-gotham-medium">
                  {item.name}
                  <Chevron
                    className={
                      toggle &&
                      toggleIndex === item.name &&
                      'transform rotate-180'
                    }
                  />
                </div>
              </button>

              {toggle && toggleIndex === item.name && (
                <p className="font-gotham-book py-4">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Faqs;
