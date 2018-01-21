import React, {Component} from "react";

import projects from "../data/projects.json";
import DocumentTitle from "react-document-title";
import TweenMax from "gsap";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: projects.data
        };
    }

    componentDidMount() {
        TweenMax.staggerFrom('.animated-down, .project-item', 2, {y: -100, opacity: 0, ease: Expo.easeOut}, 0.3);
    }

    render() {

        return (
            <div>
                <DocumentTitle title={document.title.replace('Official', 'My Projects')}/>
                <h2 className="animated-down">Last Projects</h2>
                <div className="lastProjects row">
                    {this.state.posts.map((item, index) =>
                        <div className="project-item col-sm-3" key={index}>
                            <div className="card mb-4">
                                <a href={item.url} target="_blank">
                                    <img className="card-img-top img-fluid" src={item.urlToImage} alt="Card image cap"/>
                                </a>
                                <div className="card-block">
                                    <p className="card-text">{item.title}</p>
                                    {item.url ? <a href={item.url} target="_blank"
                                                   className="btn btn-secondary">Details</a> : "" }
                                    {item.videoUrl ? <a href={item.videoUrl} target="_blank"
                                                        className="btn btn-secondary">Watch</a> : "" }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
};