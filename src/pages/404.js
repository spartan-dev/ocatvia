import React from 'react';

import Layout from '../components/layout';

import error from '../images/assets/icon-404.png';

const NotFound = () => {
  return (
    <Layout>
      <div className="container mt-6 lg:mt-24 flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img alt="not found" src={error} className="w-3/5 lg:w-4/5" />
        </div>
        <div>
          <p className="font-gotham-bold text-2xl lg:text-5xl">
            No encontramos la página que estás buscando
          </p>
          <p className="font-gotham-book lg:text-3xl">Inténtalo de nuevo</p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
