import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = ({list}) => {
  return (
    <Container>
      <div className="list">
        <ul>
          {list && list.map((i) => (
            <li key={i.id}>
              <div className="title">{i.title}</div>
              <div className="content">{i.content}</div>
              <div className="poster">
                <img src={i.posterUrl} alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="btn">
        <Link className="primary" to='/notice/write'>등록하기</Link>
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
        .poster {
          img {
            width: 200px;
          }
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