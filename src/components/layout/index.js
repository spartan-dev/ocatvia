import React from 'react';
import { Link } from 'gatsby';

import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Link
        to="/faqs"
        className="bg-yellow text-navbar text-sm z-20 fixed top-1/2 
      transform -rotate-90 px-4 py-2 font-gotham-medium rounded-b-2xl
      cursor-pointer -left-10 -ml-px"
      >
        AYUDA
        <span
          className="ml-2 border-2 border-navbar rounded-full h-6 w-6 
        inline-flex items-center justify-center"
        >
          ?
        </span>
      </Link>
      <main className="mt-16 text-body h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
