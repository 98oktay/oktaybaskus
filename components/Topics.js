import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Topics extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	posts: []
        };
    }

	componentDidMount(){

		fetch("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=afe0871d806c42ceaabf1c9763e8975c")
			.then( res => res.json())
			.then(data => {
				this.setState({posts:data.articles})
			})

	}



	render(){

		return (
			<div>
				<h1>www.oktaybaskus.com.tr</h1>
				<div> Konular </div>
				<ul className="list-unstyled">
					{this.state.posts.map((item, index) => <li key={index}>
						{item.title}
						</li>)}
                    </ul>

			</div>

		);
	}
};