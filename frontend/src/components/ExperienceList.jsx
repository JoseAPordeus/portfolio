import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  margin: 1.5rem 0;
  width: 80%;
  max-width: 600px;

  h3 {
    color: #023e8a;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0.8rem;
    border-bottom: 1px solid #f0f2f5;

    &:last-child {
      border-bottom: none;
    }

    strong {
      color: #0077b6;
      font-size: 1.1rem;
    }
  }
`;

function ExperienceList() {
  return (
    <ExperienceContainer>
      <h3>Experiências de Trabalho</h3>
      <ul>
        <li>
          <strong>Desenvolvedor Frontend</strong> - Empresa X (2020-2022)
        </li>
        <li>
          <strong>Desenvolvedor Backend</strong> - Empresa Y (2018-2020)
        </li>
      </ul>
    </ExperienceContainer>
  );
}

export default ExperienceList;