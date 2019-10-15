import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, Jumbotron } from 'react-bootstrap';
import './News.css';
class News extends Component {
	state = {};
	render() {
		return (
			<div>
				<Image src='assets/smile.png' className='header-image' />
				<Container>
					<h4>News</h4>
					<Row className=' show-grid'>
						<Col xs={12} sm={8} className='main-section'>
							<h2>Women Empoweremnt</h2>
							<p align='justify'>
								I’ve just set off the metal detector at the Barajas Airport in
								Madrid, Spain, despite the fact that the one and only piece of
								metal I am wearing is a single earring the size of a pinhead.
								And I am only wearing it because it’s still a relatively new
								piercing, and if I remove it, as I have done every other piece
								of jewelry that I was wearing before I walked through the metal
								detector, in a desperate and obviously futile attempt to not
								face the possibility of being patted down, of having one more
								damn pair of hands on me that I have not chosen, that hole in my
								ear might close up. And it must remain open, because that
								piercing, along with the one beside it, and half of my tattoos,
								are part of the story no one wants to tell and too many are
								forced to: how to reclaim your body as your own. Do you know
								what it’s like to have no choice over who puts their hands on
								you or in you? I do. Do you know what it’s like to survive a
								blaze that razed your house to the ground, that left you
								wandering, desperately searching for a place that you could
								again call home — a beautiful, safe, and happy home? I do. Do
								you know why so many survivors of blazes don’t speak? I do. It’s
								because they are told there was no fire. If not for the cruelty
								and cowardice of this response, if not for the wounds such a
								response engenders, it might be almost laughable. It is too
								absurd to ever be taken seriously.
							</p>
						</Col>
						<Col xs={12} sm={4} className='sidebar-section'>
							<Image src='assets/sidebar.jpg' />
							<p>
								“The women I love and admire for their strength and grace did
								not get that way because shit worked out. They got that way
								because shit went wrong and they handled it. They handled it a
								thousand different ways on a thousand different days, but they
								handled it. Those women are my superheroes.” ― Elizabeth Gilbert
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default News;
