import React from "react";

function Projects() {
    return(
        <section id="Portfolio" class="Portfolio">
            <div>
                <h2 class="port-header">My Portfolio</h2>
            </div>

            <div class="flex-container">
                <nav class="flex-item">

                    <span>Horiseon</span>
                    <a href="https://hunyeh.github.io/Horiseon-live/">
                        <img src="/images/Project1.JPG" alt="Horiseon"/>
                    </a>
                </nav>
                <nav class="flex-item">
                    <span>The Huddle</span>
                    <a href="https://markgranade.github.io/the-huddle/weather.html">
                        <img src="/images/The-Huddle.JPG" alt="the-huddle"/>
                    </a>
                </nav>
                <nav class="flex-item">
                    <span>Health Tracker</span>
                    <a href="https://health-tracker-bootcamp.herokuapp.com/">
                        <img src="/images/Health-tracker.JPG" alt="the-huddle"/>
                    </a>
                </nav>
                <nav class="flex-item">
                    <span>Project 4</span>
                    <img src="/images/placeholder.jpg" alt="placeholder4"/>
                </nav>

            </div>
        </section>
    )
}

export default Projects;