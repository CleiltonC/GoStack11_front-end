import React, { useState } from 'react';

import Header from "./components/Header";

/**
 * Components = Componentes
 * Properties = Propriedades
 * State = Estado
 */

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    // useState retorn um array com 2 posições
    // 
    // 1. Variável com seu valor inicial
    // 2. Função para atualizar o valor

    function addProject(){
        // projects.push(`Novo projeto ${Date.now()}`);

        setProjects([...projects, `Novo projeto ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>            
            <Header title="projects" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={addProject}>Adicionar projeto</button>

        </>
    );
}

export default App;