import React, { useEffect, useState } from 'react';

const sub1 = ['Vino tinto', 'Vino blanco', 'Espumantes'];
const sub2 = ['Tequila', 'Ron', 'Grappa', 'Crema', 'Gin', 'Vodka', 'Whisky'];
const sub3 = ['Chocolates', 'Salsas', 'Galletas', 'Conservas'];
const sub4 = ['Agua natural', 'Agua carbonatada'];

const Filters = ({ onChange, arr, weights }) => {
  const [path, setPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setPath(window.location.pathname);
  }, []);

  const subcategory =
    path === '/vinos'
      ? sub1
      : path === '/licores'
      ? sub2
      : path === '/gourmet'
      ? sub3
      : path === '/bebidas'
      ? sub4
      : [];

  const data = [
    {
      name: 'SUBCATEGORÍA',
      arr: subcategory,
    },
    {
      name: 'TAMAÑO',
      arr: weights,
    },
  ];

  return (
    <div className="text-navbar px-5 mb-16">
      <p className="title">FILTROS</p>
      {data.map(
        (element, index) =>
          element.arr.length !== 0 && (
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
          )
      )}
    </div>
  );
};

export default Filters;
