import React from "react";
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {

    return (
        <footer>
            <div className="container w-100 fixed-bottom">
                <div className="row justify-content-center my-2">
                    <div className="col-12 col-sm-4 footericons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/Hunyeh"> <FaGithub /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hunter-doring-7374a5134"> <FaLinkedin /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hunyeh/"> <FaInstagramSquare /></a>
                    </div>
                </div>
                <h2>&copy;{new Date().getFullYear()} by: Hunter Doring</h2>
            </div>
            
        </footer>
    )
}

export default Footer;

