import React from "react";

function About() {
    return (
        <section id="About-Me" className="About-me">
            <div>
                <h2 className="about-header">
                    About Me
                </h2>
            </div>

            <div className="hero-full-container background-image-container white-text-container">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="hero-full-wrapper">
                                <div className="text-content">
                                    <h1>Hello,<br/>
                                        <span id="typed-strings">
                                            <span>I'm Hunter Doring</span>
                                            <span>Working as a Freelance</span>
                                            <span>Full Stack Web Developer</span>
                                        </span>
                                        <span id="typed"></span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-info">
                <p>
                    The words hadn't flowed from his fingers for the past few weeks.
                    He never imagined he'd find himself with writer's block, but here
                    he sat with a blank screen in front of him. That blank screen taunting
                    him day after day had started to play with his mind. He didn't
                    understand why he couldn't even type a single word, just one to begin the
                    process and build from there. And yet, he already knew that the eight hours
                    he was prepared to sit in front of his computer today would end with the
                    screen remaining blank.
                </p>
            </div>
        </section>
    )
}

export default About;