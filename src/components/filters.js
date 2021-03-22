import React from 'react';

const Filters = ({ onChange, arr, weights }) => {
  const data = {
    name: 'TAMAÑO',
    arr: weights,
  };

  return (
    <div className="text-navbar px-5 mb-16">
      <p className="title">FILTROS</p>
      <div className="mt-8">
        <p className="font-gotham-medium my-6">{data.name}</p>
        <ul>
          {data.arr.map((item, index) => (
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
    </div>
  );
};

export default Filters;
