import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import useStore from '../../store/store';
import styled from 'styled-components';

const Header = () => {
  const setUser = useStore((state) => state.setUser);

  const onLogout = () => {
    signOut(auth)
    .then(() => {
      console.log('signOut Success');
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
    setUser('');
  }

  return (
    <Container>
      <div className="logo">SEMO</div>
      <div className="btns">
        <button type="button" onClick={onLogout}>Logout</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  padding: 0 1rem;
  background-color: #fff;
  z-index: 9;
`;

export default Header