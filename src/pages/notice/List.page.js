import React from 'react';
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import NoticeList from "../../components/notice/List";

const ListPage = () => {
  return (
    <>
      <Header />
      <div className="content-wrap">
        <SideMenu />
        <NoticeList />
      </div>
    </>
  )
}

export default ListPage