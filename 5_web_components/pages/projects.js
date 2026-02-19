import { PROJECTS } from "../data/data-projects.js";

export const projectsPage = () => {
    console.log("Loaded Projects");
    const projects = PROJECTS;
    const setTemplate = () => `<section id="projects">
      <h2>Proyectos</h2>

      ${projects
          .map(
              (p) =>
                  `<details>
                    <summary>${p.name}</summary>
                    <p>ID: ${p.id}</p>
                    <p><input type="checkbox" ${p.isCompleted && 'checked'}>Completado</p>
                    <p>${p.description}</p>
                    <p>${p.author}</p>
                </details>`,
          )
          .join("")}
    
    </section>`;

    document.querySelector("main").innerHTML = setTemplate();
};


// HTML -> atributos
// DOM -> propiedades

