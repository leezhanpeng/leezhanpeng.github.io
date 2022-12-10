import React from 'react';
import '../styles/Information.css';
import { forwardRef } from 'react';

import github from '../images/github.png';
import doc from '../images/document.png';
import playbtn from '../images/playbutton.png';

import stb from '../images/stb-logo.png';

import creditcardgif from '../images/creditcard.gif';
import playbaylogo from '../images/playbay.gif';

import pandas from '../images/pandas.png';
import numpy from '../images/numpy.png';
import keras from '../images/keras.png';
import scikitlearn from '../images/scikitlearn.png';
import python from '../images/python-logo.png';
import reactlogo from '../images/react.png';
import nodejs from '../images/nodejs.jpg';
import mongodb from '../images/mongodb.jpg';
import unity from '../images/unity.png';
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

            <div className="full-background">
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
                            <img className="stb" alt="STB logo" src={stb}></img>
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
                <div ref={ref.projects}></div>
                <div className="projects scroll-appear">
                    <div className="projects-title">
                        <p>Projects</p>
                        <br />
                    </div>
                    <div className="projects-para">
                        <div className="project-block">
                            <div className="image-blocks">
                                <img className="creditcardgif" alt="credit card gif" src={creditcardgif}></img>
                                <div>
                                    <a href="https://github.com/leezhanpeng/Credit-Card-Application-Enhancement"><img className="redirect-icon" alt="github icon" src={github}></img></a>
                                    <a href="https://github.com/leezhanpeng/Credit-Card-Application-Enhancement/blob/main/Project%20Report.pdf"><img className="redirect-icon" alt="document icon" src={doc}></img></a>
                                </div>
                            </div>
                            <div className="project-texts">
                                <p className="project-name">Credit Card Application Enhancement</p>
                                <p className="project-name" style={{color: "rgb(101, 255, 139)"}}>[Machine Learning]</p>
                                <br />
                                <p className="project-desc">
                                    An ML project done for the module
                                    IT1244 Artificial Intelligence: Technology and Impact.
                                    <br />
                                    The goal was to improve bank's current credit card application process by
                                    integrating non-financial attributes of clients to the approval process of 
                                    each credit card application.
                                </p>
                            </div>
                        </div>
                        <div className="techstack techstack-1">
                                <img className="python" alt="python logo" src={python}></img>
                                <img className="pandas" alt="pandas logo" src={pandas}></img>
                                <img className="numpy" alt="numpy logo" src={numpy}></img>
                                <img className="keras" alt="keras logo"src={keras}></img>
                                <img className="scikitlearn" alt="scikitlearn logo" src={scikitlearn}></img>
                        </div>
                        <hr></hr>
                        <div className="project-block">
                            <div className="image-blocks">
                                <img className="playbay-logo" alt="playbay logo" src={playbaylogo}></img>
                                <div>
                                    <a href="https://github.com/leezhanpeng/Orbital2022"><img className="redirect-icon" alt="github icon" src={github}></img></a>
                                    <a href="https://drive.google.com/file/d/1ppQXsLMzhuwa-fVF_erysG9s7_Sz9ipM/view?usp=sharing"><img className="redirect-icon" alt="document icon" src={doc}></img></a>
                                    <a href="https://drive.google.com/file/d/16avL9P6SDLJYeIgjb5x6rxqOqzv_YpjI/view?usp=sharing"><img className="redirect-icon" alt="playbtn icon" src={playbtn}></img></a>
                                </div>
                            </div>
                            <div className="project-texts">
                                <p className="project-name">Online Web Browser Site (PlayBay)</p>
                                <p className="project-name" style={{color: "rgb(101, 255, 139)"}}>[Software Development]</p>
                                <br />
                                <p className="project-desc">
                                    A software engineering project done during the summer of 2022 as part of the module
                                    CP2106 Individual Software Development Project.
                                    <br />
                                    The project is an online multiplayer browser game website that involves fullstack development.
                                    It was an interesting project as this was my first exposure in enforcing SWE practices and also
                                    the use of Git and Github for version control. Had a lot of fun developing the project!
                                </p>
                            </div>
                        </div>
                        <div className="techstack techstack-2">
                                <img className="react" alt="react icon" src={reactlogo}></img>
                                <img className="nodejs" alt="nodejs icon" src={nodejs}></img>
                                <img className="mongodb" alt="mongodb icon" src={mongodb}></img>
                                <img className="unity" alt="unity icon" src={unity}></img>
                        </div>
                    </div>
                </div>
                <div ref={ref.skills}></div>
                <div className="skills scroll-appear">
                    <div className="skills-title">
                        <p>Skills</p>
                        <br />
                    </div>
                    <div className= "skills-para">
                        <div className='skill-block'>
                            <div>
                                <img className="python" alt="python icon" src={python}></img>
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
                                <img className="r" alt="r logo" src={r}></img>
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
                                <img className="sql" alt="sql logo" src={sql}></img>
                                <p className="skill-name">SQL</p>
                            </div>
                            <p className="skill-desc">
                                I have not learned this efficiently. Soon...
                            </p>
                        </div>
                        <hr></hr>
                        <div className='skill-block'>
                            <div>
                                <img className="java" alt="java logo" src={java}></img>
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