import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../share/footer/Footer';
import Header from '../share/Header/Header';

const Main = () => {
    return (<>
         <Header/>
          <Outlet/>
         <Footer/>
    </>

    );
};

export default Main;