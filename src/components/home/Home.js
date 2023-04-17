import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      Home
    </Container>
  )
}

const Container = styled.div`
  height: calc(100vh - 7rem);
  padding: 2rem;
  overflow-y: auto;
`;

export default Home;