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
                                            typeSpeed={65}
                                            backSpeed={55}
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
                            I am from Brigantine, New Jersey and am a graduate from Rutgers Full Stack Web Development program as well as previously obtaining a Bachelors degree from Stockton University in Finance. I am passionate about coding and everything that comes along with being a full stack web developer. I enjoy working with all parts of web development, but excel with working on the back-end more. I am profecient with JavaScript and HTML and have an itch for learning more CSS. NoSQL databases are my strong suit and something that i understand easily. React is something ive become stronger at and continue to work towards getting better with. Other than coding I enjoy surfing, doing martial arts and playing videogames. Please checkout my portfolio and social media located below 😁.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;