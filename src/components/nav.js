import React from 'react'
import { Link } from "gatsby"

import Logo from '../images/logo-white.svg'
import './nav.css'

const Nav = () => (
	<nav id='nav'>
		<div className="menu-icons">
			<i className="icon icon-menu">&#10010;</i>
			<i className="icon icon-close">&#10006;</i>
		</div>
		<div className="logo">
			<Link to="/">
				<img src={Logo} alt="TLA Graphics Logo"/>
			</Link>
		</div>
		<ul className="nav-list">
			<li>
				<Link to="#">Services 
					<i className="icon icon-dropdown">&#10167;</i>
				</Link>
				<ul className="sub-menu">
					<li>
						<Link to="#">Visual Merchandizing 
							<i className="icon icon-dropdown">&#10167;</i>
						</Link>
					</li>
					<ul className="sub-menu">
						<li>
							<Link to="#">New Construction - Dental</Link>
						</li>
						<li>
							<Link to="#">Manufacturing Partnerships, Furnishings, Furniture, Lectern	Logos</Link>
						</li>
						<li>
							<Link to="#">Retail POP</Link>
						</li>
					</ul>
					<li>
						<Link to="#">Marketing Collateral 
							<i className="icon icon-dropdown">&#10167;</i>
						</Link>
					</li>
					<ul className="sub-menu">
						<li>
							<Link to="#">Catalogues, Brochures, Flyers</Link>
						</li>
						<li>
							<Link to="#">Backlit / Frontlit Graphics</Link>
						</li>
						<li>
							<Link to="#">Customized Branding</Link>
						</li>
						<li>
							<Link to="#">Internal Corporate Branding</Link>
						</li>
					</ul>
					<li>
						<Link to="#">Decorative Graphic Films/Accent Graphics 
							<i className="icon icon-dropdown">&#10167;</i>
						</Link>
					</li>
					<ul className="sub-menu">
						<li>
							<Link to="#">Architectural Frosting</Link>
						</li>
						<li>
							<Link to="#">Decorative Graphics, Wall Graphics Decoration</Link>
						</li>
						<li>
							<Link to="#">Security Films</Link>
						</li>
						<li>
							<Link to="#">Reception Graphics, Reception Logos</Link>
						</li>
					</ul>
					<li>
						<Link to="#">Signage 
							<i className="icon icon-dropdown">&#10167;</i>
						
						</Link>
					</li>
					<ul className="sub-menu">
						<li>
							<Link to="#">Way Finding</Link>
						</li>
						<li>
							<Link to="#">Safety Signage</Link>
						</li>
						<li>
							<Link to="#">Installation Services</Link>
						</li>
					</ul>
				</ul>
			</li>
			<li>
				<Link to="#">Blog</Link>
			</li>
			<li>
				<Link to="#">About us</Link>
			</li>
			<li>
				<Link to="#">Resource Center</Link>
			</li>
		</ul>
	</nav>
)

export default Nav