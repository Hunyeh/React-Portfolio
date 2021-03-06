import React from "react";
import { FaGithub, FaRocket } from "react-icons/fa";
import "../style.css"
import "../card.css"

function Projects() {
    const projects = [
        {
            name: 'The Huddle',
            url: 'https://markgranade.github.io/the-huddle/',
            repo: 'https://github.com/Hunyeh/the-huddle',
            Image: require("../images/thehuddle.JPG"),
            Description: 'An app that allows you to search your favorite football team being able to see the weather and schedule. ',
            technologies: 'HTML, CSS, JavaScript, Bulma, JQuery'
        },
        {
            name: 'Health Tracker',
            url: 'https://health-tracker-bootcamp.herokuapp.com/',
            repo: 'https://github.com/Hunyeh/health-tracker',
            Image: require("../images/healthtracker.JPG"),
            Description: 'An app that allows you to create an account and track your workouts on a daily basis.',
            technologies: 'JavaScript, Handlebars, MySQL, Bootstrap, Node'
        },
        {
            name: 'goghbuy',
            url: 'https://nameless-fjord-50324.herokuapp.com/',
            repo: 'https://github.com/Hunyeh/goghbuy',
            Image: require("../images/goghbuy.JPG"),
            Description: 'An app that allows you to create an account to be able to buy other peoples art and sell your own. ',
            technologies: 'React.js, CSS, MaterialUI, Stripe, GraphQL, MondoDB'
        },
        {
            name: 'Budget Tracker',
            url: 'https://floating-bastion-80872.herokuapp.com/',
            repo: 'https://github.com/Hunyeh/budget-tracker',
            Image: require("../images/budgettracker.JPG"),
            Description: 'An app that allows you to keep track of your daily/weekly/monthly income & expenses.',
            technologies: 'MongoDB, JavaScript, HTML, CSS, IndexedDB'
        },
        {
            name: 'Run Buddy',
            url: 'https://hunyeh.github.io/run-buddy/',
            repo: 'https://github.com/Hunyeh/run-buddy',
            Image: require("../images/runbuddy.JPG"),
            Description: 'An app that allows the user to create an account and schedule a running consultation.',
            technologies: 'HTML, CSS'
        },
        {
            name: 'Food Festival',
            url: 'https://hunyeh.github.io/food-festival/',
            repo: 'https://github.com/Hunyeh/food-festival',
            Image: require("../images/foodfest.JPG"),
            Description: 'An app that allows you to sign up for the regional food festival and see news for other festivals.',
            technologies: 'HTML, JavaScript, CSS'
        },
    ]

    return (
        <div className="container mx-auto mt-4">
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-6 xs-4 col-lg-4 scene">
                        <div className="card" style={{ width: '19rem' }}>
                            <div className="card-title card__face card__face--front" key={index}>
                                <img src={project.Image}
                                    className="card-img-top projectimg"
                                    key={project.name}
                                    width="300px"
                                    alt={project.name}
                                    height="230px"
                                />
                            </div>
                            <div className="card__face card__face--back card-text">
                                <h5 style={{ margin: '25px' }}>{project.name}</h5>
                                <p className="card-text">{project.Description}</p>
                                <p>Technologies: {project.technologies}</p>
                                <a href={project.repo} className="social-links">
                                    <div><FaGithub /></div>
                                </a>
                                <a href={project.url} className="social-links">
                                    <div><FaRocket /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;