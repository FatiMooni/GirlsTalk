import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, Jumbotron } from 'react-bootstrap';
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
					<Link to='./about'>
						<Button bsStyle='primary'>About</Button>
					</Link>
				</Jumbotron>
				<Row className='text-center show-grid'>
					<Col xs={12} sm={4} className='pwerson-wrapper'>
						<Image src='assets/Capture.png' rounded className='profile-pic' />
						<h3>Fatima Zahra</h3>
						<p>
							My name is ABDICHE Fatima Zahra I’m 23 years old, an
							undergraduated software engineer at the higher school of computer
							science (ESI). I'm a goal-oriented person who cares a lot about
							details, therefore, I work harder each day to set new challenges
							for myself and break my limits into new adventures.
						</p>
					</Col>
					<Col xs={12} sm={4} className='pwerson-wrapper'>
						<Image src='assets/Capture2.png' rounded className='profile-pic' />
						<h3>Hellina Regina</h3>
						<p>
							Barton did feebly change man she afford square add. Want eyes by
							neat so just must. Past draw tall up face show rent oh mr.
							Required is debating extended wondered as do. New get described
							applauded incommode shameless out extremity but. Resembled at
							perpetual no believing is otherwise sportsman.
						</p>
					</Col>
					<Col xs={12} sm={4} className='pwerson-wrapper'>
						<Image src='assets/Capture3.png' rounded className='profile-pic' />
						<h3>Scarlet McBorg</h3>
						<p>
							Improved own provided blessing may peculiar domestic. Sight house
							has sex never. No visited raising gravity outward subject my
							cottage mr be. Hold do at tore in park feet near my case.
							Invitation at understood occasional sentiments insipidity
							inhabiting in.
						</p>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Home;
