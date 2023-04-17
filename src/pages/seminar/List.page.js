import React from 'react';
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import SeminarList from '../../components/seminar/List';

const ListPage = () => {
  return (
    <>
      <Header />
      <div className="content-wrap">
        <SideMenu />
        <SeminarList />
      </div>
    </>
  )
}

export default ListPage;