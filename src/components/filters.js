import React from 'react';

const data = [
  {
    name: 'SUBCATEGORÍA',
    arr: ['Tequila', 'Ron', 'Vodka', 'Crema', 'Grappa', 'Gin', 'Whisky'],
  },
  {
    name: 'TAMAÑO',
    arr: [
      '1.75 L.',
      '1.5 L.',
      '1.25 L.',
      '1 L.',
      '750 ml.',
      '700 ml.',
      '500 ml.',
      '200 ml.',
      '100 ml.',
    ],
  },
];

const Filters = ({ onChange, arr }) => {
  return (
    <div className="text-navbar px-5 mb-16">
      <p className="title">FILTROS</p>
      {data.map((element, index) => (
        <div className="mt-8" key={index}>
          <p className="font-gotham-medium my-6">{element.name}</p>
          <ul>
            {element.arr.map((item, index) => (
              <li className="font-gotham-book my-3" key={index}>
                <input
                  type="checkbox"
                  name={item}
                  checked={arr.includes(item)}
                  className="checkbox mr-5"
                  onChange={({ target }) => onChange(target)}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Filters;
