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
                <DocumentTitle title={document.title.replace('Official', 'Skills')}/>
                <div className="col-md-4 animated-down">
                    <div className="section-sidebar">
                        <h2><span className="point">Skills</span></h2>
                        <div className="opacity-box">
                            <p>I am inspired by creating great work with people who are as passionate as I am about
                                building something awesome.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6 animated-down">
                            <div className="advantages-box">
                                <h4>Web Development</h4>
                                <div className="opacity-box">
                                    <p>Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis,
                                        PostgreSQL, WebStorm. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animated-down">
                            <div className="advantages-box">
                                <h4>UI\UX Design</h4>
                                <div className="opacity-box">
                                    <p>Photoshop, Illustrator, Sketch, Axure, XMind, Prototyping, Wireframing, User
                                        Research, Usability Testing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animated-down">
                            <div className="advantages-box">
                                <h4>Frontend Development</h4>
                                <div className="opacity-box">
                                    <p>HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal, Phonegap / Cordova, Ionic,
                                        Foundation, Angular.js.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animated-down">
                            <div className="advantages-box">
                                <h4>Consulting &amp; SEO Audit</h4>
                                <div className="opacity-box">
                                    <p>Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics,
                                        ChartBeat, CrazyEgg.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};