import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = ({list}) => {
  console.log(list)
  return (
    <Container>
      <div className="list">
        <ul>
          {list && list.map((i) => (
            <li key={i.id}>
              <div className="title">
                <Link to={`/user/${i.id}`}>{i.displayName}</Link>
              </div>
              {i.photoURL &&
                <div className="poster">
                  <img src={i.photoURL} alt="" />
                </div>
              }
            </li>
          ))}
        </ul>
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
`;

export default List