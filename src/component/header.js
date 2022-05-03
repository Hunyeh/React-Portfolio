import React from "react";
import { FaGithub, FaInstagramSquare, FaLinkedin, FaGoogle } from 'react-icons/fa';

function Header(props) {
    return (
        <header className="header">
            <h1>
                <div className="col-12 col-lg-col-sm-4 footericons">
                    <a target="_blank" rel="noreferrer" href="https://github.com/Hunyeh"> <FaGithub /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hunter-doring-7374a5134"> <FaLinkedin /></a>
                    {/* <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hunyeh/"> <FaInstagramSquare /></a> */}
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/19tFWjeTEe5oXVO0vtqmSCoeX4qPQHLWNqbmPXTj4feY/edit?usp=sharing"> <FaGoogle /></a>
                </div>
            </h1>
            <nav>
                <ul>
                    <li><a href="#About" onClick={() => props.setCurrentPage('About')}>About Me</a></li>
                    <li><a href="#Projects" onClick={() => props.setCurrentPage('Portfolio')}>Projects</a></li>
                    <li><a href="#Contact" onClick={() => props.setCurrentPage('Contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;