import React, {Component} from "react";

import projects from "../data/projects.json";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: projects.data
        };
    }

    render() {

        return (
            <div className="row">

                {this.state.posts.map((item, index) =>
                    <div className="col-sm-3" key={index}>
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