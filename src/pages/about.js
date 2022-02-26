import React from "react";
import Typed from 'react-typed';
// import AvatarMaker from '../images/AvatarMaker.png'

function About() {
    return (
        <section id="About-Me" className="my-5 About-me">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="hero-full-wrapper">
                                <div className="text-content">
                                    <h1>Hello,<br />
                                        <Typed strings={['I\'m Hunter Doring',
                                            'Working as a Freelance',
                                            'Full Stack Web Developer'
                                        ]}
                                            typeSpeed={40}
                                            backSpeed={50}
                                            loop
                                        >
                                        </Typed>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container about-info">
                <div className="row my-5">
                    <div className="col-xs-12 mb-5">
                        <p>
                            Hi, my name is Hunter Doring. I am from Brigantine, New Jersey and just recently graduated from Rutgers Full Stack Web Development program. I am passionate about learning coding and everything that comes along with being a full stack web developer. I enjoy working with all parts of web development, but excel with working on the back-end more. Other than coding I enjoy surfing, doing martial arts and playing videogames. Please checkout my portfolio and social media located below 😁.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;