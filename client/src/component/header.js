import React from "react";

function Header(props) {
    return (
        <header class="header">
            <h1>
                <a href="index.html">Hunter</a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#" onClick={()=>props.setCurrentPage('About')}>About Me</a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>props.setCurrentPage('Projects')}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>props.setCurrentPage('Contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;