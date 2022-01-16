import React from "react";

function Header(props) {
    return (
        <header className="header">
            <h1>
                <a href="index.html">Hunter</a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#About" onClick={()=>props.setCurrentPage('About')}>About Me</a>
                    </li>
                    <li>
                        <a href="#Projects" onClick={()=>props.setCurrentPage('Portfolio')}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#Contact" onClick={()=>props.setCurrentPage('Contact')}>Contact</a>
                    </li>
                    <li>
                        <a href="#Resume" onClick={()=>props.setCurrentPage('Resume')}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;