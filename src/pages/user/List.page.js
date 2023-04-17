import React from 'react';
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import UserList from '../../components/user/List';

const ListPage = () => {
  return (
    <>
      <Header />
      <div className="content-wrap">
        <SideMenu />
        <UserList />
      </div>
    </>
  )
}

export default ListPage;