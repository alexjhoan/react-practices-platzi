import React from 'react'
import './styles/Navbar.css'
import logo from '../images/logo.svg'

export class Navbar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<a href="/" className="Navbar__band">
						<img src={logo} alt="logo" className="Navbar__band-logo" />
						<span className="font-weight-light">Plazi</span>
						<span className="font-weight-bold">Conf</span>
					</a>
				</div>
			</div>
		)
	}
}

export default Navbar