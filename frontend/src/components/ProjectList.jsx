import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.section`
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

    a {
      color: #0077b6;
      font-weight: bold;
      font-size: 1.1rem;

      &:hover {
        color: #023e8a;
      }
    }
  }
`;

function ProjectList() {
  return (
    <ProjectContainer>
      <h3>Projetos no GitHub</h3>
      <ul>
        <li>
          <a href="https://github.com/JoseAPordeus/sistema-de-matriculas" target="_blank" rel="noopener noreferrer">
            Sistema de Matrículas
          </a>
        </li>
        {/* Adicione outros projetos conforme necessário */}
      </ul>
    </ProjectContainer>
  );
}

export default ProjectList;