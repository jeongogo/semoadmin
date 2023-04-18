import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import SideMenu from "../../components/layout/SideMenu";
import SeminarWrite from '../../components/seminar/Write';
import { createDoc } from "../../lib/doc";
import { uploadFile } from "../../lib/file";

const ListPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    content: '',
    posterUrl: '',
  });

  /** 포스터 업로드 */
  const handleFileUpload = async (file) => {
    try {
      const downloadURL = await uploadFile(file);
      setForm({...form, posterUrl: downloadURL})
    } catch (e) {
      console.log(e);
    }
  }

  /** 등록하기 */
  const handleWrite = async () => {
    try {
      const docRef = await createDoc('seminar', form)
      console.log(docRef);
      navigate('/seminar')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Header />
      <div className="content-wrap">
        <SideMenu />
        <SeminarWrite form={form} setForm={setForm} handleFileUpload={handleFileUpload} handleWrite={handleWrite} />
      </div>
    </>
  )
}

export default ListPage;