import React from "react";

function Projects() {
    const projects = [
        {
            name: 'The Huddle',
            url: 'https://markgranade.github.io/the-huddle/',
            repo: 'https://github.com/Hunyeh/the-huddle',
            src: ''
        },
        {
            name: 'Health Tracker',
            url: 'https://health-tracker-bootcamp.herokuapp.com/',
            repo: 'https://github.com/Hunyeh/health-tracker',
            src: ''
        },
        {
            name: 'Photo Portfolio',
            url: 'https://hunyeh.github.io/photo-port/',
            repo: 'https://github.com/Hunyeh/photo-port',
            src: ''
        },
        {
            name: 'Budget Tracker',
            url: 'https://floating-bastion-80872.herokuapp.com/',
            repo: 'https://github.com/Hunyeh/budget-tracker',
            src: ''
        },
        {
            name: 'Run Buddy',
            url: 'https://hunyeh.github.io/run-buddy/',
            repo: 'https://github.com/Hunyeh/run-buddy',
            src: ''
        },
        {
            name: 'Food Festival',
            url: 'https://hunyeh.github.io/food-festival/',
            repo: 'https://github.com/Hunyeh/food-festival',
            src: ''
        },

    ]

    return(
       <div className="container">
           <div className="row">
               {projects.map((project) => (
                   <div className="col-4">
                       {project.name}
                       <a href={project.url}>Project Link</a>
                       <a href={project.repo}>GitHub Repository</a>
                   </div>
               ))}
           </div>
       </div>
    )
}

export default Projects;