import React, {Component} from "react";
import DocumentTitle from "react-document-title";
import TweenMax from "gsap";

export default class extends Component {

    componentDidMount() {
        TweenMax.staggerFrom('.animated-down', 2, {
            y: -100,
            opacity: 0,
            ease: Expo.easeOut
        }, 0.3);
    }

    render() {
        return (
            <div className="row">
                <DocumentTitle title={document.title.replace('Official', 'Experience')}/>
                <div className="col-md-4 animated-down">
                    <div className="section-sidebar">
                        <h2><span className="point">Experience</span></h2>
                        <div className="opacity-box">
                            <p>I partner with startups, organizations and Fortune 500 companies to build digital
                                products
                                that help clients overcome challenges and create lasting connections with
                                millions of people every day.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 right-box">
                    <div className="row animated-down">
                        <div className="col-md-8">
                            <div className="about-row">
                                <h4>Frontend Developer</h4>
                                <h5 className="color-h4">Modanisa Inc.</h5>
                                <div className="opacity-box">
                                    <p>Designed and developed user-friendly website, including optimized check-out
                                        page that increased user clicks, and subsequently customer purchases by 20%.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-date">
                                <p>May, 2017 — Present</p>
                            </div>
                        </div>
                    </div>
                    <div className="row animated-down">
                        <div className="col-md-8">
                            <div className="about-row">
                                <h4>Full Stack Developer</h4>
                                <h5 className="color-h4">Touch Digital Communication.</h5>
                                <div className="opacity-box">
                                    <p>Leading a small team on a variety of development projects and delivering
                                        solutions to meet and exceed clients’ briefs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-date">
                                <p>July, 2015 — April, 2016</p>
                            </div>
                        </div>
                    </div>
                    <div className="row animated-down">
                        <div className="col-md-8">
                            <div className="about-row">
                                <h4>Web Developer</h4>
                                <h5 className="color-h4">ICON Perception Management Inc.</h5>
                                <div className="opacity-box">
                                    <p>Revamped web application security applications, minimizing hacker
                                        attacks from 2.3% to 0.02%.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-date">
                                <p>May, 2011 — July, 2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="row animated-down">
                        <div className="col-md-8">
                            <div className="about-row">
                                <h4>Graphic Designer</h4>
                                <h5 className="color-h4">Medyanet Bilişim A.Ş.</h5>
                                <div className="opacity-box">
                                    <p>Revamped web application security applications, minimizing hacker
                                        attacks from 2.3% to 0.02%.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-date">
                                <p>Dec, 2010 — April, 2011</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};