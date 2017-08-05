import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter} from "react-router-dom";
import {MainNav, Pages} from "./config/SiteRouter";


const OktayBaskus = () => (
    <BrowserRouter>
        <div>
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <a className="navbar-brand" href="/">Oktay Başkuş</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <MainNav/>
                </div>
                <a className="nav-link text-white" href="/cv"> CV</a>
            </nav>
            <div className="container-fluid">
                <Pages/>
            </div>
        </div>
    </BrowserRouter>
);

ReactDOM.render(<OktayBaskus />, document.getElementById('main'));

Particles.init({selector: '#particlesBackground',
    color: '#ffffff',
    maxParticles: 130,
    connectParticles: true,
    responsive: [
        {
            breakpoint: 768,
            options: {
                maxParticles: 200,
                connectParticles: false
            }
        }, {
            breakpoint: 425,
            options: {
                maxParticles: 100,
                connectParticles: true
            }
        }, {
            breakpoint: 320,
            options: {
                maxParticles: 0 // disables particles.js
            }
        }
    ]
});