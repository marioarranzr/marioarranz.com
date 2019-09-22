import React from 'react'
import styled from 'styled-components'
import SocialLinks from './SocialLinks';

const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 200px;
	background: #f8f8f9;
	* {
		margin: 0;
		padding: 0;
	}
`

const Copy = styled.p`
	font-size: 13px;
	font-weight: 600;
	color: #848687;
	text-align: center;
	margin-top: 20px;
	span {
		color: #ff7763;
	}
	a {
		color: #282a2d;
		text-decoration: none;
	}
`

export default props => (
	<Container>
    <SocialLinks socialLinks={props.socialLinks} includeCV={false}/>
		<Copy>© 2019 - All rights reserved. <br></br>Made with <span>❤</span> by <a href="https://twitter.com/marioarranzr" target="_blank" rel="noopener noreferrer">Mario Arranz</a>, have a look in <a href="https://github.com/marioarranzr/marioarranz.com" target="_blank" rel="noopener noreferrer">🖥</a></Copy>
	</Container>
)