import React from 'react';
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import SeminarDetail from "../../components/seminar/Detail";

const DetailPage = () => {
  return (
    <>
      <Header />
      <div className="content-wrap">
        <SideMenu />
        <SeminarDetail />
      </div>
    </>
  )
}

export default DetailPage