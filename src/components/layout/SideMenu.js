import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideMenu = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to='/seminar'>세미나</Link>
        </li>
        <li>
          <Link to='/notice'>공지사항</Link>
        </li>
        <li>
          <Link to='/user'>회원</Link>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.div`
  flex-shrink: 0;
  width: 20rem;
  height: calc(100vh - 7rem);
  padding: 1rem;
  background-color: #fff;
  z-index: 9;
`;

export default SideMenu;