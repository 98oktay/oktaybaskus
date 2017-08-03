import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class About extends Component {

	render(){

		return (

			<div>
				<h1>www.oktaybaskus.com.tr</h1>
				<div> Hello React</div>
				<Link to="/topics">Topics</Link>

			</div>

		);
	}
};