import React, {Component} from "react";
import DocumentTitle from "react-document-title";
import TweenMax from "gsap";

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
                        <img src="/assets/images/oktay-baskus-ofice.jpg" className="personalImage" alt=""/>
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
                                    at .. , located in .. I am looking to take on more work and to increase my skills as
                                    a Web Developer.</p>
                            </div>
                        </div>
                        <div className="about-me-info">

                            <dl className="row">
                                <dt className="col-sm-3">Date of Birth</dt>
                                <dd className="col-sm-9">10 Oct. 1989</dd>

                                <dt className="col-sm-3">Phone</dt>
                                <dd className="col-sm-9">+90 544 209 65 00</dd>

                                <dt className="col-sm-3">Email</dt>
                                <dd className="col-sm-9">oktay@yandex.com</dd>

                                <dt className="col-sm-3">Social</dt>
                                <dd className="col-sm-9 social-icons">
                                    <a target="_blank" href="https://www.facebook.com/" className="fa fonts-icons fa-facebook"></a>
                                    <a target="_blank" href="https://twitter.com/" className="fa fonts-icons fa-twitter"></a>
                                    <a target="_blank" href="https://www.instagram.com/" className="fa fonts-icons fa-instagram"></a>
                                    <a target="_blank" href="https://www.linkedin.com/" className="fa fonts-icons fa-linkedin"></a>
                                    <a target="_blank" href="https://www.behance.net/" className="fa fonts-icons fa-behance"></a>
                                    <a target="_blank" href="https://dribbble.com/" className="fa fonts-icons fa-dribbble"></a>
                                    <a target="_blank" href="https://medium.com/" className="fa fonts-icons fa-medium"></a>
                                    <a target="_blank" href="https://github.com/" className="fa fonts-icons fa-github"></a>
                                    
                                </dd>

                            </dl>
                        </div>
                        <div className="about-btns">
                            <a data-toggle="modal" data-target="#contact-modal" href="/cv" className="btn btn-secondary">My Projects</a>
                            <a href="/cv" className="btn btn-secondary">View cv</a>
                        </div>
                    </div>
                </div>
                {/*<div className="text-white text-center">
                 <DocumentTitle title={document.title.replace('Official','About Me')} />
                 <img src="/cv/resources/images/oktay-baskus.png" className="personalImage rounded"/>
                 <h1>www.oktaybaskus.com.tr</h1>
                 <div>Software Developer</div>
                 </div>*/}
            </div>
        );
    }
};