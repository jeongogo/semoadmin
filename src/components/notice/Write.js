import React from 'react';
import styled from 'styled-components';

const Write = ({ form, setForm, handleWrite }) => {

  /** 등록하기 */
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.title === '' || form.content === '') {
      return;
    }
    handleWrite();
  }

  return (
    <Container>
      <h1 className="page-title">공지사항 등록</h1>
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
  .btn-wrap {
    margin-top: 5rem;
  }
`;

export default Write