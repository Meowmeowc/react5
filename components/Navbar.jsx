import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
export default function () {
	return (
		<div className='navbar'>
			<h1>
				Navbar
			</h1>
			<ul>
				<li>
					<NavLink exact to='/'>Home </NavLink>
				</li>
				<li>
					<NavLink exact to='/contact'>Contact</NavLink>
				</li>
				<li>
					<NavLink exact to='/about'>About</NavLink>
				</li>
			</ul>
		</div>
	)
}
