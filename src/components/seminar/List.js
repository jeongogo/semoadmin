import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../store/store';
import styled from 'styled-components';

const List = ({list}) => {
  const navigate = useNavigate();
  const setSeminar = useStore((state) => state.setSeminar);

  const goDetail = (item) => {
    setSeminar(item);
    navigate(`/seminar/${item.id}`);
  }

  return (
    <Container>
      <div className="list">
        <ul>
          {list && list.map((i) => (
            <li key={i.id}>
              <button className="title" onClick={() => goDetail(i)}>{i.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="btn">
        <Link className="primary" to='/seminar/write'>등록하기</Link>
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
  .list {
    ul {
      li {
        border-bottom: 1px solid #ededed;
        button {
          display: block;
          width: 100%;
          padding: 1.5rem 1rem;
          text-align: left;
        }
      }
    }
  }
  .btn {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`;

export default List