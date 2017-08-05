
import React from 'react'
import ReactDOM from 'react-dom'

import {
//    HashRouter as Router,
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import {
    Pages,
    MainNav
} from "./config/SiteRouter";



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
            </nav>
            <div className="container-fluid">
                <Pages/>
            </div>
        </div>
    </BrowserRouter>
);

ReactDOM.render(<OktayBaskus />, document.getElementById('main'));
