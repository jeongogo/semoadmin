import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/store';
import styled from 'styled-components';
import { signOut } from "../../lib/auth";

const Header = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const onLogout = async () => {
    try {
      await signOut();
      setUser('');
      navigate('/');
    } catch (e) {
      console.log(e);
    }
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