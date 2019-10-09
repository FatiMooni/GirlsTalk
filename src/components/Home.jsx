import React, { Component } from 'react';
import {
	Jambotron,
	Container,
	Row,
	Col,
	Image,
	Button,
	Jumbotron
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
	state = {};
	render() {
		return (
			<Container>
				<Jumbotron>
					<h2>Girls News Website</h2>
					<p>This basically a first try with react-bootstrap web dev</p>
					<Link to='./About'>
						<Button bsStyle='primary'>About</Button>
					</Link>
				</Jumbotron>
			</Container>
		);
	}
}

export default Home;
