import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import NoticeWrite from '../../components/notice/Write';
import { createDoc } from "../../lib/doc";

const ListPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    content: '',
  });

  /** 등록하기 */
  const handleWrite = async () => {
    try {
      const docRef = await createDoc('notice', form)
      console.log(docRef);
      navigate('/notice')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Header />
      <div className="content-wrap">
        <SideMenu />
        <NoticeWrite form={form} setForm={setForm} handleWrite={handleWrite} />
      </div>
    </>
  )
}

export default ListPage;