/**
 * Created by Oktay on 8/5/2017.
 */

import React from "react";
import {Route, Switch} from "react-router-dom";
import NavItem from "../components/NavItem";


import About from "../components/About";
import Projects from "../components/Projects";
import News from "../components/News";
import Skills from "../components/Skills";
import Experience from "../components/Experience";


/*
Pages
    About Me
        İsim bilgi sosyal resimler
    Skills
        Web Development / Frontend / React / Android
    Work Experience
        Modanisa, touch, icon ...
    Projects
        ...
        Awards
    Tech News (API)

*/


const NotFound = () =>
    <div className="c">
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
    </div>;

export const MainNav = () =>
    <ul className="navbar-nav mr-auto">
        <NavItem exact to="/">About Me</NavItem>
        <NavItem to="/skills">Skills</NavItem>
        <NavItem to="/experience">Experience</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/news">Tech News</NavItem>
        <li className="nav-item"><a className="nav-link" href="/cv"> CV</a></li>
    </ul>;

export const Pages = () =>
    <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/experience" component={Experience}/>
        <Route path="/news" component={News}/>
        <Route path="/projects" component={Projects}/>
        <Route path="*" component={NotFound}/>
    </Switch>;


export default Pages
