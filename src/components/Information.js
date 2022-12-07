import '../styles/Information.css';
import { forwardRef } from 'react';

import stb from '../images/stb-logo.png';
import python from '../images/python-logo.png';
import r from '../images/r-logo.png';
import sql from '../images/sql-logo.jpg';
import java from '../images/java-logo.png';

function appear() {
    var popout = document.querySelectorAll(".scroll-appear");

    for (var i = 0; i < popout.length; i++) {
        var screenHeight = window.innerHeight;
        var itemTopGap = popout[i].getBoundingClientRect().top;
        var itemAppear = 150;

        if (itemTopGap < screenHeight - itemAppear) {
            popout[i].classList.add("show")
        }

        else {
            popout[i].classList.remove("show")
        }
    }
}

function disappear() {
    var arrows = document.querySelector(".arrows");
    var popout = document.querySelector(".intro-content");

    if (popout.classList.contains("show")) {
        arrows.classList.add("disappear")
    }

    else {
        arrows.classList.remove("disappear")
    }
}

window.addEventListener("scroll", appear);
window.addEventListener("scroll", disappear);

const Information = forwardRef((props, ref) => {

    return (
        <div className="introduction" ref={ref.about}>
            <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>

            <div>
                <div className="intro-content scroll-appear">
                    <div className="intro-title">
                        <p>About me</p>
                        <br />
                    </div>
                    <div className= "intro-para">
                        <p>
                            I am currently a year 2 Data Science and Analytics undergraduate in the National University of Singapore &#40;NUS&#41;.
                            I am also fortunate enough to be taking up a second major in Computer Science to fuel my passion for programming and
                            enhance my ability as a data scientist/machine learning expert!
                        </p>
                    </div>
                </div>
                <div ref={ref.experience}></div>
                <div className="experiences scroll-appear">
                    <div className="exp-title">
                        <p>Experiences</p>
                        <br />
                    </div>
                    <div className= "exp-para">
                        <div className='exp-block'>
                            <img className="stb" src={stb}></img>
                            <div className="exp-texts">
                                <p className="exp-name">HR Data Analyst @ Singapore Tourism Board</p>
                                <br />
                                <p className="exp-desc">
                                    For the summer of 2022, I was a part of the human resources team in Singapore Tourism Board
                                    as their data analyst intern. My role was to harness insights from the organisation's
                                    expenditure costs and provide explanation to their rising manpower expenditure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div  ref={ref.skills}></div>
                <div className="skills scroll-appear">
                    <div className="skills-title">
                        <p>Skills</p>
                        <br />
                    </div>
                    <div className= "skills-para">
                        <div className='skill-block'>
                            <div>
                                <img className="python" src={python}></img>
                                <p className="skill-name">Python</p>
                            </div>
                            <p className="skill-desc">
                                Used in data science projects and even in programming puzzles! It's as if Python's my
                                native language...
                                <br />
                                Libraries: Pandas, Numpy, matplotlib, keras, scikit-learn
                            </p>
                        </div>
                        <hr></hr>
                        <div className='skill-block'>
                            <div>
                                <img className="r" src={r}></img>
                                <p className="skill-name">R</p>
                            </div>
                            <p className="skill-desc">
                                I used R during my stint with Singapore Tourism Board as their data analyst intern.
                                R was also rigorously used in modules suchs as DSA1101 Introduction to Data Science 
                                and DSA2101 Data Visualisation.
                                <br />
                                Libraries: tidyverse, readxl
                            </p>
                        </div>
                        <hr></hr>
                        <div className='skill-block'>
                            <div>
                                <img className="sql" src={sql}></img>
                                <p className="skill-name">SQL</p>
                            </div>
                            <p className="skill-desc">
                                I have not learned this efficiently. Soon...
                            </p>
                        </div>
                        <hr></hr>
                        <div className='skill-block'>
                            <div>
                                <img className="java" src={java}></img>
                                <p className="skill-name">Java</p>
                            </div>
                            <p className="skill-desc">
                                Java is used for the module CS2040 Data Structures & Algorithms.
                                I also do programming puzzles with Java to make sure I stay comfortable with the programming language.
                                <br />
                                Moving forward, there are plans for me to take up CS2030 Programming Methodology II, as well as
                                CS2103 Software Engineering which requires a firm understanding of the language.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
 
export default Information;