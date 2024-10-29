import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: black;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  margin-top: auto;

  p {
    color: white;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}

export default Footer;