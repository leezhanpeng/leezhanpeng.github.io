import React from 'react';
import '../styles/Information.css';
import { forwardRef } from 'react';

import github from '../images/github.png';
import doc from '../images/document.png';
import playbtn from '../images/playbutton.png';

import mindef from '../images/mindef-logo.jpg';
import stb from '../images/stb-logo.png';

import utilitybillgif from '../images/utilitybill.gif';
import creditcardgif from '../images/creditcard.gif';
import playbaylogo from '../images/playbay.gif';

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
                            I am a year 3 undergraduate at the National University of Singapore &#40;NUS&#41;, majoring in Data Science and Analytics
                            with a specialisation in Statistical Methodology.
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
                            <img className="mindef" alt="MINDEF logo" src={mindef}></img>
                            <div className="exp-texts">
                                <p className="exp-name">Data Science Intern @ Ministry of Defence</p>
                                <br />
                                <p className="exp-desc">
                                    During the summer of 2023, I had the opportunity to join MINDEF's Data Science Department as a
                                    data science intern. I actively participated in several of their projects that are within the 
                                    domain of Natural Language Processing, which gave me valuable insights into Large Language Models,
                                    Topic Modelling, and Explainable AI.
                                </p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='exp-block'>
                            <img className="stb" alt="STB logo" src={stb}></img>
                            <div className="exp-texts">
                                <p className="exp-name">Data Analyst Intern @ Singapore Tourism Board</p>
                                <br />
                                <p className="exp-desc">
                                    For the summer of 2022, I was a part of the human resources team in Singapore Tourism Board
                                    as their data analyst intern. My role was to conduct Exploratory Data Analysis and to harness
                                    insights from the organisation's expenditure costs to better their policy decisions.
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
                                <img className="utilitybillgif" alt="utility bill gif" src={utilitybillgif}></img>
                                <div>
                                    <a href="https://drive.google.com/file/d/19y5rFG9kbaYt2Wu-YRXDDhJl8CNCGpMA/view?usp=sharing"><img className="redirect-icon" alt="document icon" src={doc}></img></a>
                                    <a href="https://drive.google.com/file/d/1S1c44WtmlSBuIpScefxafWXZOH0E_J5a/view?usp=sharing"><img className="redirect-icon" alt="playbtn icon" src={playbtn}></img></a>
                                </div>
                            </div>
                            <div className="project-texts">
                                <p className="project-name">Utility Fraud Detection</p>
                                <p className="project-name" style={{color: "rgb(101, 255, 139)"}}>[Machine Learning]</p>
                                <br />
                                <p className="project-desc">
                                    An ML project implemented for the course
                                    CS3244 Machine Learning.
                                    <br />
                                    The objective of the project was to identify fraudulent clients that are manipulating utility meters in Tunisia. 
                                    My main contributions include feature engineering, mitigating dataset imbalance, fine-tuning of models' hyperparameters,
                                    and evaluation process of model performances.
                                </p>
                            </div>
                        </div>
                        <div className="techstack techstack-1">
                            <div className="techstack">
                                <div className="techstack-tag"><div>Python</div></div>
                                <div className="techstack-tag"><div>pandas</div></div>
                                <div className="techstack-tag"><div>NumPy</div></div>
                            </div>
                            <div className="techstack">
                                <div className="techstack-tag"><div>imbalanced-learn</div></div>
                                <div className="techstack-tag"><div>scikit-learn</div></div>
                            </div>
                            <div className="techstack">
                                <div className="techstack-tag"><div>matplotlib</div></div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="project-block">
                            <div className="image-blocks">
                                <img className="creditcardgif" alt="credit card gif" src={creditcardgif}></img>
                                <div>
                                    <a href="https://github.com/leezhanpeng/Credit-Card-Application-Enhancement"><img className="redirect-icon" alt="github icon" src={github}></img></a>
                                    <a href="https://github.com/leezhanpeng/Credit-Card-Application-Enhancement/blob/main/Project%20Report.pdf"><img className="redirect-icon" alt="document icon" src={doc}></img></a>
                                </div>
                            </div>
                            <div className="project-texts">
                                <p className="project-name">Credit Card Approval Automation</p>
                                <p className="project-name" style={{color: "rgb(101, 255, 139)"}}>[Machine Learning]</p>
                                <br />
                                <p className="project-desc">
                                    An ML project developed for the course
                                    IT1244 Artificial Intelligence: Technology and Impact.
                                    <br />
                                    The goal was to automate the approval of credit card applications by identifying potential
                                    credit card defaulters. My team integrated non-financial attributes of clients alongside the
                                    deployment of Semi-supervised Learning within our models.
                                </p>
                            </div>
                        </div>
                        <div className="techstack techstack-1">
                            <div className="techstack">
                                <div className="techstack-tag"><div>Python</div></div>
                                <div className="techstack-tag"><div>pandas</div></div>
                                <div className="techstack-tag"><div>NumPy</div></div>
                            </div>
                            <div className="techstack">
                                <div className="techstack-tag"><div>Keras</div></div>
                                <div className="techstack-tag"><div>scikit-learn</div></div>
                            </div>
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
                                    A software engineering project done during the summer of 2022 as part of the course
                                    CP2106 Independent Software Development Project.
                                    <br />
                                    The project is an online multiplayer browser game website that involves fullstack development.
                                    It was an interesting project as this was my first exposure to SWE practices and also
                                    the use of Git and Github for version control. Had a lot of fun developing the project!
                                </p>
                            </div>
                        </div>
                        <div className="techstack techstack-2">
                            <div className="techstack">
                                <div className="techstack-tag"><div>React</div></div>
                                <div className="techstack-tag"><div>Node.js</div></div>
                            </div>
                            <div className="techstack">
                                <div className="techstack-tag"><div>MongoDB</div></div>
                                <div className="techstack-tag"><div>Unity</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={ref.courses}></div>
                <div className="courses scroll-appear">
                    <div className="courses-title">
                        <p>Courses</p>
                        <br />
                    </div>
                    <div className="courses-para">
                        <p className="courses-desc">
                            Listed below are all the courses that I have taken, as well as courses that I plan to take in NUS.
                        </p>
                        <div className="courses-block">
                            <b className="semester-title">
                                Year 1 Semester 1
                            </b>
                            <div className="courses-list-div">
                                <ul className="courses-list">
                                    <li>CS1010S Programming Methodology <b>A-</b></li>
                                    <li>HSA1000 Asian Interconnections <b>S</b></li>
                                    <li>HSH1000 The Human Condition <b>S</b></li>
                                    <li>MA2001 Linear Algebra I <b>A-</b></li>
                                    <li>MA2002 Calculus <b>A-</b></li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courses-block">
                            <b className="semester-title">
                                Year 1 Semester 2
                            </b>
                            <div className="courses-list-div">
                                <ul className="courses-list">
                                    <li>CFG1002 Career Catalyst <b>CS</b></li>
                                    <li>DSA1101 Introduction to Data Science <b>A</b></li>
                                    <li>DTK1234 Design Thinking <b>A+</b></li>
                                    <li>ES1103 English for Academic Purposes <b>A</b></li>
                                    <li>HSI1000 How Science Works, Why Science Works <b>A-</b></li>
                                    <li>HSS1000 Understanding Social Complexity <b>S</b></li>
                                    <li>ST2131 Probability <b>A+</b></li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courses-block">
                            <b className="semester-title">
                                Year 2 Semester 1
                            </b>
                            <div className="courses-list-div">
                                <ul className="courses-list">
                                    <li>CFG1003 Financial Wellbeing - Introduction <b>CS</b></li>
                                    <li>CP2106 Independent Software Development Project (Orbital) <b>CS</b></li>
                                    <li>CS2040 Data Structures and Algorithms <b>A+</b></li>
                                    <li>CS2100 Computer Organisation <b>A-</b></li>
                                    <li>DSA2101 Essential Data Analytics Tools: Data Visualisation <b>A</b></li>
                                    <li>IT1244 Artificial Intelligence: Technology and Impact <b>A</b></li>
                                    <li>MA2311 Techniques in Advanced Calculus <b>A-</b></li>
                                    <li>ST2132 Mathematical Statistics <b>B+</b></li>

                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courses-block">
                            <b className="semester-title">
                                Year 2 Semester 2
                            </b>
                            <div className="courses-list-div">
                                <ul className="courses-list">
                                    <li>CFG1004 Financial Wellbeing - Art and Science of Investing <b>CS</b></li>
                                    <li>CS1231 Discrete Structures <b>A+</b></li>
                                    <li>CS2030 Programming Methodology II <b>A+</b></li>
                                    <li>CS2106 Introduction to Operating Systems <b>B+</b></li>
                                    <li>DSA2102 Essential Data Analytics Tools: Numerical Computation <b>A-</b></li>
                                    <li>HSI2002 Inquiry into Current Sporting Beliefs and Practices <b>A+</b></li>
                                    <li>SP1541 Exploring Science Communication Through Popular Science <b>A+</b></li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courses-block">
                            <b className="semester-title">
                                Year 2 Special Term I & II
                            </b>
                            <div className="courses-list-div">
                                <ul className="courses-list">
                                    <li>DSA3310 FOS undergraduate Professional Internship Programme 2ST <b>CS</b></li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courses-block">
                            <b className="semester-title">
                                Year 3 Semester 1
                            </b>
                            <div className="courses-list-div">
                                <ul className="courses-list">
                                    <li>CFG3001 Career Advancement <b>CS</b></li>
                                    <li>CS2102 Database Systems <b>A-</b></li>
                                    <li>CS2103 Software Engineering <b>A-</b></li>
                                    <li>CS3243 Introduction to Artificial Intelligence <b>A-</b></li>
                                    <li>CS3244 Machine Learning <b>A-</b></li>
                                    <li>DSA3102 Essential Data Analytics Tools: Convex Optimisation <b>A</b></li>
                                    <li>ST3131 Regression Analysis <b>B</b></li>
                                    <li>ST3248 Statistical Learning I <b>B+</b></li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courses-block">
                            <b className="semester-title">
                                Year 3 Semester 2 <div style={{color: "rgb(80, 200, 120)"}}>[In Progress]</div>
                            </b>
                            <div className="courses-list-div">
                                <ul className="courses-list">
                                    <li>CLC1101 Engaging and Building Communities</li>
                                    <li>CS4243 Computer Vision and Pattern Recognition</li>
                                    <li>DAO1704X Decision Analytics using Spreadsheets</li>
                                    <li>DSA3101 Data Science in Practice</li>
                                    <li>DSA4213 Natural Language Processing for Data Science</li>
                                    <li>HS2914 How to Get Humans and Machines to Talk to Each Other</li>
                                    <li>ST3247 Simulation</li>
                                    <li>ST4248 Statistical Learning II</li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courses-block">
                            <b className="semester-title">
                                Year 4 Semester 1 <div style={{color: "rgb(255, 255, 143)"}}>[To be Confirmed]</div>
                            </b>
                            <div className="courses-list-div">
                                <ul className="courses-list">
                                    <li>CS4225 Big Data Systems for Data Science</li>
                                    <li>CS4246 AI Planning and Decision Making</li>
                                    <li>DSA426X Sense-Making Case Analysis: - </li>
                                    <li>ST4250 Multivariate Statistical Analysis</li>
                                    <li>ST4253 Applied Time Series Analysis</li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="courses-block">
                            <b className="semester-title">
                                Year 4 Semester 2 <div style={{color: "rgb(255, 255, 143)"}}>[To be Confirmed]</div>
                            </b>
                            <div className="courses-list-div">
                                <ul className="courses-list">
                                    <li>HS29XX - </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
 
export default Information;