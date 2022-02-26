import React from "react";
import AvatarMaker from '../images/AvatarMaker.png'

function Header(props) {
    return (
        <header className="header">
            <h1>
                <a href="">Hunter</a>
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
                    <li>
                        <a href="#About" onClick={()=>props.setCurrentPage('About')}>About Me</a>
                    </li>
                    <li>
                        <a href="#Projects" onClick={()=>props.setCurrentPage('Portfolio')}>Projects</a>
                    </li>
                    <li>
                        <a href="#Contact" onClick={()=>props.setCurrentPage('Contact')}>Contact</a>
                    </li>
                    <li>
                        <a href="/Resume.pdf" target="_blank">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;