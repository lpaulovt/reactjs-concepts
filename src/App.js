import React, { useState } from 'react';

import Header from './components/Header';
import Button from './components/Button';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Desenvolvimento de portfólio', 'Front-end web']);

  function handleAddProject() {
    const projectName = document.getElementById('projectName');
    // projects.push(`Nome do projeto: ${projectName.value} - Data de criação: ${Date.now()}`);
    setProjects([... projects, `Nome do projeto: ${projectName.value} - Data de criação: ${Date.now()}`]);

    console.log(projects);

  }

  const [name, setName] = useState("");

  function handleName() {
    const inputName = document.getElementById('projectName');

    setName(`${inputName.value}`);
  }

  const [value, setValue] = useState(0);

  function Increment() {
    let value1 = 1;
    setValue(value + value1);
  }

  function decrement() {
    let value1 = 1;

    setValue(value - value1);
  }

  return (
    <>
        <Header title={name}/> 
   
        <Header title="Projects" />
        <ul>
          {projects.map(project => <li key={project  }>{project}</li>)}
        </ul>
        
        <h1>{projects.length}</h1>

        <input type="text" name="" id="projectName"/>
        <button type="button" onClick={handleAddProject}>ADD</button>
        <button type="button" onClick={handleName}> Digite um novo título</button>

        <h1>{value}</h1>

        <button type="button" onClick={Increment}> +1</button>
        <button type="button" onClick={decrement}> -1</button>
    </>
  );
}

export default App;