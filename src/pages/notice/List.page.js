import React, { useEffect, useState } from 'react';
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import NoticeList from "../../components/notice/List";
import { getDocList } from "../../lib/doc";

const ListPage = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    const data = await getDocList('notice');
    setList(data);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Header />
      <div className="content-wrap">
        <SideMenu />
        <NoticeList list={list} />
      </div>
    </>
  )
}

export default ListPage