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

    const toExp= (e) => {
        e.preventDefault();
        resultRef.experience.current.scrollIntoView({ behavior: "smooth" });
    };

    const toSkills= (e) => {
        e.preventDefault();
        resultRef.skills.current.scrollIntoView({ behavior: "smooth" });
    };

    return ( 
        <ul className="navbar">
            <div className="navigate">
                <li className="logo"><a onClick={toHome} className="nav-txt">ZP</a></li>
                <a onClick={toAbout} className="nav-btn"><li className="nav-txt">About</li></a>
                <a onClick={toExp} className="nav-btn"><li className="nav-txt">Experiences</li></a>
                <a onClick={toSkills} className="nav-btn"><li className="nav-txt">Skills</li></a>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/leezhanpeng"><img className="icon" src={linkedin}></img></a>
                <a href="https://www.github.com/leezhanpeng"><img className="icon" src={github}></img></a>
                <a href="https://www.instagram.com/zhanpengg_/"><img className="icon" src={instagram}></img></a>
            </div>
        </ul>
    );
}
 
export default Navbar;