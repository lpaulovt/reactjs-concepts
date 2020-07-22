import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import mbIcon from './assets/mh.jpg'

import Header from './components/Header/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);


  async function handleAddProject() {
    const projectName = document.getElementById('projectName');
    const projectOwner = document.getElementById('projectOwner');

    const response = await api.post('projects', {
      title: projectName.value,
      owner: projectOwner.value,
    });

    const project = response.data;

    setProjects([...projects, project]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" logo={mbIcon} />
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <h1>{projects.length}</h1>

      <input type="text" name="" id="projectName" />
      <input type="text" name="" id="projectOwner" />
      <button type="button" onClick={handleAddProject}>ADD</button>
    </>
  );
}

export default App;