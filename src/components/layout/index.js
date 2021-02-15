import React from 'react';

import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="mt-16 text-body h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
