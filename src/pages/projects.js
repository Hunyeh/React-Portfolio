import React from "react";

function Projects() {
    const projects = [
        {
            name: 'The Huddle',
            url: 'https://markgranade.github.io/the-huddle/',
            repo: 'https://github.com/Hunyeh/the-huddle',
            Image: require("../images/thehuddle.JPG")
        },
        {
            name: 'Health Tracker',
            url: 'https://health-tracker-bootcamp.herokuapp.com/',
            repo: 'https://github.com/Hunyeh/health-tracker',
            Image: require("../images/healthtracker.JPG")
        },
        {
            name: 'Photo Portfolio',
            url: 'https://hunyeh.github.io/photo-port/',
            repo: 'https://github.com/Hunyeh/photo-port',
            Image: require("../images/photoport.JPG")
        },
        {
            name: 'Budget Tracker',
            url: 'https://floating-bastion-80872.herokuapp.com/',
            repo: 'https://github.com/Hunyeh/budget-tracker',
            Image: require("../images/budgettracker.JPG")
        },
        {
            name: 'Run Buddy',
            url: 'https://hunyeh.github.io/run-buddy/',
            repo: 'https://github.com/Hunyeh/run-buddy',
            Image: require("../images/runbuddy.JPG")
        },
        {
            name: 'Food Festival',
            url: 'https://hunyeh.github.io/food-festival/',
            repo: 'https://github.com/Hunyeh/food-festival',
            Image: require("../images/foodfest.JPG")
        },

    ]

    return(
       <div className="container">
           <div className="row d-flex my-5">
               {projects.map((project, index) => (
                   <div className="col-4 my-4 projectss" key={index}>
                       {project.name}
                       <a target="_blank" href={project.url}>
                       <img src={project.Image}
                        width="300px"
                        height="230px"
                       />
                       </a>
                       <a href={project.repo}>GitHub Repository</a>
                   </div>
               ))}
           </div>
       </div>
    )
}

export default Projects;