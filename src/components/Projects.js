import React, {Component} from "react";

import projects from "../data/projects.json";
import DocumentTitle from "react-document-title";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: projects.data
        };
    }

    componentDidMount() {
        TweenMax.staggerFrom('.project-item', 2, {y: -100, opacity: 0, ease: Expo.easeOut}, 0.3);
    }

    render() {

        return (
            <div className="row">
                <DocumentTitle title={document.title.replace('Official','My Projects')} />
                {this.state.posts.map((item, index) =>
                    <div className="project-item col-sm-3" key={index}>
                        <div className="card">
                            <div className="card-block">
                                <a href={item.url} target="_blank">
                                    <img className="card-img-top img-fluid" src={item.urlToImage} alt="Card image cap"/>
                                </a>
                                <p className="card-text">{item.title}</p>
                                <a href={item.url} target="_blank" className="btn btn-secondary">Details</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};