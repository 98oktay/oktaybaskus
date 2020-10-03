import React, {Component} from "react";
import DocumentTitle from "react-document-title";
import TweenMax from "gsap";
import {NavLink} from "react-router-dom";

export default class extends Component {

    componentDidMount() {
        TweenMax.staggerFrom($('.animated-down').toArray().reverse(), 2, {y: -100, opacity: 0, ease: Expo.easeOut}, 0.3);
    }

    render() {
        return (
            <div className="row">
                <DocumentTitle title={document.title.replace('Official','About Me')} />
                <div className="col-md-6 push-md-6 animated-down">
                    <div className="about-img wow slideInRight duotone-box">
                        <img src="/assets/images/profil-fotograf-oktay-baskus.jpg" className="personalImage" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 pull-md-6 animated-down">
                    <div className="about-me wow slideInLeft">
                        <div className="about-me-title">
                            <h1><span className="point">I am Oktay Başkuş</span></h1>
                        </div>
                        <div className="about-me-text">
                            <div className="opacity-box">
                                <p>I am a Web Developer located in İstanbul, Turkey. I currently work
                                    at Istanbul , located in Turkey I am looking to take on more work and to increase my skills as
                                    a Web Developer.</p>
                            </div>
                        </div>
                        <div className="about-me-info">

                            <dl className="row">
                                <dt className="col-sm-3">Date of Birth</dt>
                                <dd className="col-sm-9">10 Oct. 1989</dd>

                            </dl>
                        </div>
                        <div className="about-btns">
                            <NavLink to="/projects" className="btn btn-sm btn-secondary">My Projects</NavLink>
                            &nbsp;&nbsp;<a href="/cv" className="btn btn-sm btn-secondary">View cv</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
