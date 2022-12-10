import React from 'react';
import '../styles/Navbar.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';

const Navbar = ({ resultRef }) => {

    const toHome = (e) => {
        e.preventDefault();
        window.scrollTo({ top:0, behavior: "smooth" });
    };

    const toAbout = (e) => {
        e.preventDefault();
        resultRef.about.current.scrollIntoView({ behavior: "smooth" });
    };

    const toExp = (e) => {
        e.preventDefault();
        resultRef.experience.current.scrollIntoView({ behavior: "smooth" });
    };

    const toProjects = (e) => {
        e.preventDefault();
        resultRef.projects.current.scrollIntoView({ behavior: "smooth" });
    };

    const toSkills = (e) => {
        e.preventDefault();
        resultRef.skills.current.scrollIntoView({ behavior: "smooth" });
    };

    return ( 
        <ul className="navbar">
            <div className="navigate">
                <li className="logo"><button onClick={toHome} className="nav-txt">Lee ZP</button></li>
                <button onClick={toAbout} className="nav-btn"><li className="nav-txt">About</li></button>
                <button onClick={toExp} className="nav-btn"><li className="nav-txt">Experiences</li></button>
                <button onClick={toProjects} className="nav-btn"><li className="nav-txt">Projects</li></button>
                <button onClick={toSkills} className="nav-btn skill"><li className="nav-txt">Skills</li></button>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/leezhanpeng"><img className="icon" alt="linkedin icon" src={linkedin}></img></a>
                <a href="https://www.github.com/leezhanpeng"><img className="icon" alt="github icon" src={github}></img></a>
                <a href="https://www.instagram.com/zhanpengg_/"><img className="icon" alt="instagram icon" src={instagram}></img></a>
            </div>
        </ul>
    );
}
 
export default Navbar;