import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavbarC extends Component {
	state = {};
	render() {
		return (
			<Navbar collapseOnSelect expand='lg'>
				<Navbar.Brand href='#home'>
					<Link to='/'>Girls News</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link href='#home' to='/'>
							Home
						</Nav.Link>
						<Nav.Link href='#about' to='/about'>
							About
						</Nav.Link>
						<Nav.Link href='#news' to='/news'>
							News
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavbarC;
