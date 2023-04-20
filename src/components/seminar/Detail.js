import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import useStore from '../../store/store';
import styled from 'styled-components';

const Detail = () => {
  const navigate = useNavigate();
  const semiar = useStore((state) => state.seminar);
  const setSeminar = useStore((state) => state.setSeminar);

  useEffect(() => {
    return () => {
      setSeminar('');
    }
  }, [setSeminar]);

  return (
    <Container>
      <div>{semiar.title}</div>
      <div>{semiar.content}</div>
      <div className="img">
        <img src={semiar.posterUrl} alt="" />
      </div>
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
  .img {
    img {
      width: 10rem;
    }
  }
`;

export default Detail