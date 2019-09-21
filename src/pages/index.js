import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import SocialLinks from "../components/SocialLinks";

class Index extends React.Component {
	render() {
		const { data } = this.props
		const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
			<Layout socialLinks={data.hasura.social} location={this.props.location}>
				<div>
					<SEO title="" url={ siteUrl }/>
					<main className="Header-Home">
						<div className="container">
							<div className="row center-xs">
								<div className="col-xs-12 col-lg-5 text-center" >
									<h1 className="Header-Home__title" >Hi, I&apos;m Mario Arranz<span role="img" aria-label="Hello">👋</span></h1>
									<h2 className="Header-Home__subtitle" >Backend developer</h2>
									<div className="Header-Home__icons">
										<SocialLinks socialLinks={data.hasura.social} includeCV={true}/>
									</div>
								</div>
								<div className="col-xs-12 col-lg-7">
									<div className="Rotational">
										<div className="Rotational__avatar-container">
											<Img sizes={data.avatar.sizes}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</Layout>
		)
	}
}

export const queryHome = graphql`
	query QueryHome {
		avatar: imageSharp(fluid: {originalName: { regex: "/avatar.png/" }}) {
			sizes(maxWidth: 720) {
				...GatsbyImageSharpSizes_noBase64
			}
		}      
		site {
			siteMetadata {
				title
				siteUrl
			}
		}
		hasura {
			social(where: {visible: {_eq: true}}) {
        link_url
        icon_url
				description
				isResume
      }
    }
	}
`

export default Index