import axios from 'axios';

export const fetchGitHubProjects = async () => {
  const response = await axios.get('https://api.github.com/users/JoseAPordeus/site-portfolio/tree/main/frontend');
  return response.data;
};
