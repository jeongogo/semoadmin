import React from 'react';
import styled from 'styled-components';

const Write = ({ form, setForm, handleFileUpload, handleWrite }) => {

  /** 포스터 업로드 */
  const onFileAdd = (e) => {
    if (e.target.files[0].fileSize > 15000000) {
      alert('15MB 이하의 파일만 첨부할 수 있습니다.');
      return;
    }
    handleFileUpload(e.target.files[0]);
  }

  /** 등록하기 */
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.title === '' || form.content === '' || form.content.posterUrl === '') {
      return;
    }
    handleWrite();
  }

  return (
    <Container>
      <h1 className="page-title">세미나 등록</h1>
      <form onSubmit={onSubmit}>
        <div className="text-wrap">
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({...form, title: e.target.value})}
            placeholder="제목"
            required
          />
        </div>
        <div className="text-wrap">
          <textarea
            value={form.content}
            onChange={(e) => setForm({...form, content: e.target.value})}
            placeholder="내용"
            required
          />
        </div>
        <div className="poster-wrap">
          {form.posterUrl
            ?
              <img src={form.posterUrl} alt="" />
            :
            <>
              <input type="file" id='file' onChange={onFileAdd} />
              <label htmlFor="file"><span className="blind">첨부</span></label>
            </>
          }
        </div>
        <div className="btn-wrap">
          <button className="primary" type="submit">등록하기</button>
        </div>
      </form>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin: 2rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: #fff;
  .text-wrap {
    margin-top: 1rem;
    input, textarea {
      width: 100%;
    }
  }
  .poster-wrap {
    img {
      width: 20rem;
      height: 20rem;
    }
  }
  .btn-wrap {
    margin-top: 5rem;
  }
`;

export default Write