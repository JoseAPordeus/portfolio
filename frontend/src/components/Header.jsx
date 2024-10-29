import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #023e8a;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  h1 {
    font-size: 1.8rem;
    color: #90e0ef;
    margin-left: 2rem;
  }

  nav {
      margin-right: 1rem;
  }
  nav a {
    color: #90e0ef;
    margin-left: 1rem;
    font-weight: bold;

    &:hover {
      color: #caf0f8;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>Meu Portfólio</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header;