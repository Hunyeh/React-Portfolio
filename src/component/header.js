import React from "react";
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

function Header(props) {
    return (
        <header className="header">
            <h1>
                <div className="col-12 col-lg-col-sm-4 footericons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/Hunyeh"> <FaGithub /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hunter-doring-7374a5134"> <FaLinkedin /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hunyeh/"> <FaInstagramSquare /></a>
                    </div>
                <div className="container">
                <div className="row d-flex ">
                    <div className="col-xs-12 mb-12">
                        {/* <img alt="" src={AvatarMaker}></img> */}
                    </div>
                </div>
            </div>
            </h1>
            <nav>
                <ul>
                    <li><a href="#About" onClick={()=>props.setCurrentPage('About')}>About Me</a></li>
                    <li><a href="#Projects" onClick={()=>props.setCurrentPage('Portfolio')}>Projects</a></li>
                    <li><a href="#Contact" onClick={()=>props.setCurrentPage('Contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;