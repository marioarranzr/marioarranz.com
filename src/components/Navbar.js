import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { isPostOrProject } from '../utils'

class Navbar extends React.Component {
	state = {
		navbarIsTop: true,
		menuIsOpen: false
	}

	static propTypes = {
		activePage: PropTypes.string,
	}

	static defaultProps = {
		activePage: '',
		navbarIsTop: true,
		menuIsOpen: false
	}

	componentDidMount() {
		const scrollListener = () => {
			let scrollPosition = document.documentElement.scrollTop
			this.setState({
				navbarIsTop: scrollPosition <= 5
			})
		}
		window.addEventListener('scroll', scrollListener)
		window.addEventListener('resize', () => {
			let width = window.innerWidth;
			if(width >= 768) {
				this.setState({
					menuIsOpen: false
				})
			}
		})
	}

	handleToggle = event => {
		this.setState((prevState, props) => {
			return {
				menuIsOpen: !prevState.menuIsOpen,
			}
		})
	}

	render() {
		const { menuIsOpen }	 = this.state
		const isPost = isPostOrProject(this.props.activePage)
		return (
			<nav className={
				"Navbar " +
				(this.props.activePage === "" ? "index " : "") +
				(menuIsOpen ? ' open ' : '') +
				(isPost ? '' : ' isPost ') +
				(this.state.navbarIsTop ? '' : 'noTop')
			}
				id="Navbar">
				<div
					onClick={ (e) => { this.setState({ menuIsOpen: false }) }}
					className={`Navbar__shadow ${menuIsOpen ? 'open' : ''}`}>
				</div>
				<div className="container">
					<Link className="Navbar__titlewrap"
						onClick={ (e) => { this.setState({menuIsOpen: false}) } }
						to="/">
						<p className="Navbar__title">Mario Arranz</p>
					</Link>
					<div className="Navbar__navwrap">
						<button onClick={ this.handleToggle }
							id="navbarToggler"
							className={`Navbar__toggler ${menuIsOpen ? 'open' : ''}`}>
							<span className="Navbar__toggler__burger-menu"></span>
						</button>
						<ul className={ `Navbar__nav ${ menuIsOpen ? 'open' : '' }` }>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) } }
									className={`Navbar__link ${ this.props.activePage === '' ? 'active' : ''}`}
									to="/">
									<svg className="icon-item" version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" role="img">
									  <path d="M33.71,17.29l-15-15a1,1,0,0,0-1.41,0l-15,15a1,1,0,0,0,1.41,1.41L18,4.41,32.29,18.71a1,1,0,0,0,1.41-1.41Z" />
									  <path d="M28,32h-5V22H13V32H8V18L6,20V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76l-2-2Z" />
									</svg>
                    Index
								</Link>
							</li>
							{/* <li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'Blog' ? 'active' : ''}`} to="/blog">
									<svg className="icon-item" version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									  <polygon points="9.6 22.88 9.6 10.6 24.4 10.6 25.98 9 8 9 8 22.88 9.6 22.88" />
									  <path d="M6,7H30V23h2V6.5A1.5,1.5,0,0,0,30.5,5H5.5A1.5,1.5,0,0,0,4,6.5V23H6Z"/>
									  <path d="M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z" />
									  <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
									</svg>
									Blog
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'Portfolio' ? 'active' : ''}`}to="/portfolio">

									<svg className="icon-item" version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									  <path d="M15,17H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,17ZM4,8v7H15V8Z" /><path d="M32,17H21a2,2,0,0,1-2-2V8a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2v7A2,2,0,0,1,32,17ZM21,8v7H32V8Z" /><path d="M15,30H4a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,30ZM4,21v7H15V21Z" /><path d="M32,30H21a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2v7A2,2,0,0,1,32,30ZM21,21v7H32V21Z" />
									  <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
									</svg>
									Portfolio
								</Link>
							</li>
							<li className='Navbar__item'>
								<Link onClick={ (e) => { this.setState({menuIsOpen: false}) }}
									className={`Navbar__link ${ this.props.activePage === 'Contact' ? 'active' : ''}`} to="/contact">
									<svg className="icon-item" version="1.1" width={36} height={36} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									  <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0L32,9.21v17.5l-7.36-7.36-1.41,1.41ZM5.31,8H30.38L17.84,20.47Z" />
									  <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
									</svg>
									Contact
								</Link>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar