import React from "react";
import Typed from 'react-typed';

function About() {
    return (
        <section id="About-Me" className="my-5 About-me">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="hero-full-wrapper">
                            <div className="text-content">
                                <h1>Hello,<br />
                                    <Typed strings={['I\'m Hunter Doring',
                                        'Working as a',
                                        'Full Stack Web Developer'
                                    ]}
                                        typeSpeed={65}
                                        backSpeed={35}
                                        loop
                                    >
                                    </Typed>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row about-info">
                    <div className="col-xs-3 col-md-7 col-lg-5">
                        <div className="card">
                            <ul className="card__face1 card-text card__face--front aboutCard1">
                                <li>Advanced JS and CSS</li>
                                <li>JS Frameworks</li>
                                <li>Database Integrations</li>
                                <li>Deployment Pipelines</li>
                                <li>Problem Solving</li>
                                <li>Large Apps Architectures</li>
                                <li>Naming Conventions</li>
                            </ul>
                            <div className="card__face1 card-text card__face--back aboutCard2">
                                <p>
                                    I am from Brigantine, New Jersey and am a graduate from Rutgers Full Stack Web Development program as well as previously obtaining a Bachelors degree from Stockton University in Finance. Other than coding I enjoy surfing, doing martial arts and playing videogames. Please checkout my projects page and social media located above 😁.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;