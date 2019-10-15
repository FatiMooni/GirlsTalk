import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';
class About extends Component {
	state = {};
	render() {
		return (
			<div>
				<Image src='assets/top.jpg' className='header-image' />
				<Container>
					<Row className='text-center show-grid'>
						<Col xs={12} sm={14} smOffset={2}>
							<Image src='assets/Capture.png' className='about-profile-pic ' />
							<h3>Fatima Zahra aka. TIMA</h3>
							<p align='justify'>
								My name is ABDICHE Fatima Zahra I’m 23 years old, an
								undergraduated software engineer at the higher school of
								computer science (ESI). I'm a goal-oriented person who cares a
								lot about details, therefore, I work harder each day to set new
								challenges for myself and break my limits into new adventures. I
								have a wide range of interests. Reading is at the top of the
								list , most likely books and Novels either in Arabic or English,
								I also like writing because I believe that this hobby releases
								our thoughts and helps us to discover hidden inner-sides, which
								reminds me of blogging, another pastime that I really admire , I
								didn't start a blog yet but it’s one of my future plans ,
								perhaps it will be about computers and technologies or it might
								be a personal blog .. i didn't decide for now but I take it as
								one of the reasons that make me want to enhance my writing
								skills. I am a very honest and an optimistic person that cherish
								the teamwork and exchanging experiences for that reason I’m a
								member of many clubs, most of the time as a designer or an
								organizer.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default About;
