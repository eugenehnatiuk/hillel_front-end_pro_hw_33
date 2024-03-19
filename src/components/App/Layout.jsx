import React from 'react';
import Header from '../Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer.jsx';

const Leyout = () => {
  return (
    <>
      <Header/>
      <main>
        <section className="main-section container">
        <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Leyout;
