import React from 'react';
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import NoticeDetail from "../../components/notice/Detail";

const DetailPage = () => {
  return (
    <>
      <Header />
      <div className="content-wrap">
        <SideMenu />
        <NoticeDetail />
      </div>
    </>
  )
}

export default DetailPage