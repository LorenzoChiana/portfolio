import React, { Component } from "react";
import "./About.css";
import * as Icon from 'react-feather';
import avatar from './img/me.jpg';
import bitline from './img/bitline.png';
import beinfrastrutture from './img/BE.png';
import cosmobile from './img/cosmobile.png';
import unibo from './img/UniBo-Universita-di-Bologna.png';
import PDF from './doc/CV_ChianaLorenzo.pdf';
 
class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="flex-grid-thirds">
        <div className="col">
          <img className="sj-headshot" src={avatar} />

        </div>
        <div className="col-2">
        <p className="desc">
        My name is Lorenzo, tante cose qua da dire su di me.
        </p>
            <div className="socialmedia">
                <a href="mailto:lorenzo.chiana@gmail.com">
                    <Icon.Mail />
                </a>
                <a href="https://github.com/LorenzoChiana" target="blank">
                    <Icon.GitHub />
                </a>
                <a href="https://www.linkedin.com/in/lorenzo-chiana-a12210140/" target="blank">
                    <Icon.Linkedin />
                </a>
                <a href={PDF} target="blank">
                  <Icon.Download />
                </a>
            </div>
        </div>
      </div>
      <div className="row example-centered">
        <div className="col-md-12 example-title">
            <h2>Timeline</h2>
        </div>
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className="timeline timeline-centered">
            
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>Apr 2013</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Internship in BitLine sas</h3>
                        <p>Main activities and responsibilities: Computer assembly and repair, data entry and management of the company website.</p>
                        <p>Skills and objectives achieved: Learned business dynamics. Expanded knowledge on computer hardware components.</p>
                        <img width="100px" src={bitline} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>Jul - Aug 2013</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Summer internship in BE Infrastrutture S.R.L.</h3>
                        <p>
                            Main activities and responsibilities:
                            IT assistance both on site and remotely for the staff of the various CMC Ravenna offices.
                            RDA and ORD data management.
                            Created at the request of the company a Java program for monitoring of servers hard disks capacity.
                            Management of the corporate network alongside the company tutor.
                        </p>
                        <p>
                            Skills and objectives achieved:
                            Basic networking knowledge.
                            Management and resolution of IT issues.
                            Design and development software.
                        </p>
                        <img width="100px" src={beinfrastrutture} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>Jul 2014</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">High school diploma</h3>
                        <p>Graduated in computer science from the technical industrial institute Nullo Baldini (ITIS N. Baldini)</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>Nov - Dec 2017</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Internship in Cosmobile</h3>
                        <p>
                            Main activities and responsibilities: Design and implementation of web-based software on LAMP stacks based on a corporate framework derived from Zend Framework within the development team.
                        </p>
                        <p>
                            Skills and objectives achieved:
                            Learning to analyze and design a software, applying the main design patterns.
                            Learn to structure test plans.
                        </p>
                        <img width="100px" src={cosmobile} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>March 2017</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Bachelor's Degree</h3>
                        <p>I graduated in 2017 in Engeneering and Computer Science from Bologna University in Cesena, Italy.</p>
                        <img width="150px" src={unibo} />
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>Current</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Student at UNIBO</h3>
                        <p>Currently I'm studing computer science at master's degree course in UNIBO</p>
                        <a href="mailto:lorenzo.chiana@gmail.com">Contact me</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
      </div>
    );
  }
}
 
export default About;