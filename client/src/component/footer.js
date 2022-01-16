import React from "react";
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-2">
                    <a href="https://github.com/Hunyeh"> <FaGithub /></a>
                    <FaLinkedin />
                    <FaInstagramSquare />
                    </div>
                </div>
            </div>
            <h2>&copy;{new Date().getFullYear()} by: Hunter Doring</h2>
        </footer>
    )
}

export default Footer;

