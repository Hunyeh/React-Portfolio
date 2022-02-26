import React from "react";
import { FaGithub } from "react-icons/fa";

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
            name: 'goghbuy',
            url: 'https://nameless-fjord-50324.herokuapp.com/',
            repo: 'https://github.com/Hunyeh/goghbuy',
            Image: require("../images/goghbuy.JPG")
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

    return (
        <div className="container mx-auto mt-4">
            <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-md-4 xs-4 col-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-title" key={index}>
                               <h5>{project.name}</h5> 
                                <a target="_blank" href={project.url}>
                                    <img src={project.Image}
                                        className="card-img-top"
                                        width="300px"
                                        height="230px"
                                    />
                                </a>
                                <a href={project.repo} className="btn "><FaGithub /> Github</a>
                            </div>
                        </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Projects;