import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import useStore from '../../store/store';
import styled from 'styled-components';

const Detail = () => {
  const navigate = useNavigate();
  const notice = useStore((state) => state.seminar);
  const setNotice = useStore((state) => state.setNotice);

  useEffect(() => {
    return () => {
      setNotice('');
    }
  }, [setNotice]);

  return (
    <Container>
      <div>{notice.title}</div>
      <div>{notice.content}</div>
      <div className="btn">
        <button type="button" onClick={() => navigate(-1)}>목록</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: #fff;
`;

export default Detail