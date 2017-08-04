
import React from 'react'
import ReactDOM from 'react-dom'

import {
    HashRouter as Router,
    //BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './components/Home';
import Posts from './components/Posts';

// Pages

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const NotFound = () =>
    <div>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
    </div>

const OktayBaskus = () => (
    <Router>
        <div>

            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/posts">Topics</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <hr/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/posts" component={Posts}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    <OktayBaskus />
    ,
  document.getElementById('main')
);
