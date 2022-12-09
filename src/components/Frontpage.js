import React from 'react';
import '../styles/Frontpage.css';
import portrait from '../images/Portrait.jpg';
import nus from '../images/nus_logo.png';
import yjc from '../images/yjc_logo.png';
import { forwardRef } from 'react';

const Frontpage = forwardRef((props, ref) => {
    return (
        <div className="frontpage" ref={ref.home}>
            <div className="frontpage-content">
                <div className="photo">
                    <img className="opening-image" alt="Zhan Peng's face" src={portrait}></img>
                </div>
                <div className="opening-text">
                    <p style={{fontWeight: 300}}>Hello, I am</p>
                    <p style={{fontWeight: 600}}>Lee Zhan Peng</p>
                </div>
                <div className="look-bar"></div>
            </div>

            <div className="logos">
                <div className="nus-block">
                    <img className="nus" alt="NUS logo" src={nus}></img>
                    <p className="year long-form">
                        Bachelor of Science (Hons) in
                        <br className="year-break"></br>
                        <span style={{fontWeight: 600}}>
                            Data Science & Analytics
                        </span>
                        <br className="year-break"></br>
                        2nd Major in Computer Science
                        <br className="year-break"></br>
                        2021 - 2025
                     </p>
                     <p className="year short-form">
                        BSc (Hons) Data Science & Analytics
                        <br className="year-break"></br>
                        2nd Major Computer Science
                        <br className="year-break"></br>
                        2021 - 2025
                     </p>
                </div>
                <div className="yjc-block">
                    <img className="yjc" alt="YJC logo" src={yjc}></img>
                    <p className="year">
                        Yishun Junior College
                        <br className="year-break"></br>
                        GCE A-Level
                        <br className="year-break"></br>
                        2017 - 2018
                    </p>
                </div>
            </div>
        </div>
    );
});
 
export default Frontpage;