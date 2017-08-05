import React, {Component} from "react";
import axios from "axios";

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };


        axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=afe0871d806c42ceaabf1c9763e8975c')
            .then(response => {
                console.log(response.data);
                this.setState({posts: response.data.articles})
            });


    }

    componentDidMount() {


        /*
        fetch("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=afe0871d806c42ceaabf1c9763e8975c")
            .then(res => res.json())
            .then(data => {
                this.setState({posts: data.articles})
            });
        */
    }


    render() {

        return (
            <div className="row">

                {this.state.posts.map((item, index) =>
                    <div className="col-sm-4" key={index}>
                        <div className="card">
                            <a href={item.url} target="_blank">
                                <img className="card-img-top img-fluid" src={item.urlToImage} alt="Card image cap"/>
                            </a>
                            <div className="card-block">
                                <p className="card-text">{item.title}</p>
                                <a href={item.url} target="_blank" className="btn btn-secondary">Read</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};