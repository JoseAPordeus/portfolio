import React from 'react';
import ExperienceList from '../components/ExperienceList';
import ProjectList from '../components/ProjectList';

function Home() {
  return (
    <main>
      <h2>Bem-vindo ao Meu Portfólio</h2>
      <ExperienceList />
      <ProjectList />
    </main>
  );
}

export default Home;
