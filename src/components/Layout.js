import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'

import { actualPage } from '../utils'

import 'prismjs/themes/prism.css'
import 'react-awesome-button/src/styles/styles.scss'
import './index.scss'
import { GlobalStyles, defaultTheme } from '../styles'

export default class Layout extends React.Component {
	componentDidMount() {
		require('@webcomponents/custom-elements/custom-elements.min.js')
	}

	render() {
		return (				
			<div>
				<Helmet>
					<link
					href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Noto+Serif:400,700,400italic,700italic|Playfair+Display:700" rel="stylesheet"/>
					<meta name="distribution" content="global"/>
					<meta httpEquiv="Content-Language" content="es" />
				</Helmet>
				<ThemeProvider theme={ defaultTheme }>
					<>
					<GlobalStyles/>
					<Navbar activePage={ actualPage(this.props.location.pathname) } />
					<div className="Dyamic-container">
						{ this.props.children }
					</div>
					<Footer socialLinks={this.props.socialLinks}/>
					</>
				</ThemeProvider>
			</div>			
		)
	}
}
