import React from 'react';
import Header from "../components/layout/Header";
import SideMenu from "../components/layout/SideMenu";
import Home from '../components/home/Home';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="content-wrap">
        <SideMenu />
        <Home />
      </div>
    </>
  )
}

export default HomePage