import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import avatar from '../assets/images/avatar.png'

export default class SEO extends PureComponent {
	static propTypes = {
		title: PropTypes.string,
		image: PropTypes.string,
		url: PropTypes.string,
		description: PropTypes.string,
		isPost: PropTypes.bool,
	}

	static defaultProps = {
		title: 'Mario Arranz',
		// image: `https://marioarranz.com${avatar}`,
		url: 'https://marioarranz.com/',
		description: 'Mario Arranz - Developer',
		isPost: false
	}

	render() {
		const { image, url, description, isPost } = this.props	
		const title = (this.props.title === "" ? "" :  `${this.props.title} · `) + "Mario Arranz"
		const schemaOrgJSONLD = [
		  	{
				'@context': 'http://schema.org',
				'@type': 'WebSite',
				'sameAs': [
					'https://twitter.com/marioarranzr',
					'https://www.github.com/marioarranzr',
					'https://www.linkedin.com/in/marioarranz/?locale=en_US',
				],
				url: url,
				name: title,
				alternateName: description,
		  	}
		]
		
		if (isPost) {
		  	schemaOrgJSONLD.push([
		    	{
					'@context': 'http://schema.org',
					'@type': 'BreadcrumbList',
					'sameAs': [
						'https://twitter.com/marioarranzr',
						'https://www.github.com/marioarranzr',
						'https://www.linkedin.com/in/marioarranz/?locale=en_US',
					],
					itemListElement: [
						{
							'@type': 'ListItem',
							position: 1,
							item: {
								'@id': url,
								name: title,
								image: image,
							}
						}
					]
		    	},
				{
					'@context': 'http://schema.org',
					'@type': 'BlogPosting',
					'sameAs': [
						'https://twitter.com/marioarranzr',
						'https://www.github.com/marioarranzr',
						'https://www.linkedin.com/in/marioarranz/?locale=en_US',
					],
					url: url,
					name: title,
					alternateName: `${url} | Mario Arranz`,
					headline: title,
					image: {
						'@type': 'ImageObject',
						url: image
					},
					description,
				}
		  	])
		}

		return (
			<Helmet>				
				<title>{ title }</title>
				<meta name="description" content={ description }/>
				<meta name="image" content={ image }/>
				<script type="application/ld+json">
				  {JSON.stringify(schemaOrgJSONLD)}				  
				</script>		

				<meta property="og:url" content={url} />
      		<meta property="og:type" content={ isPost ? "article" : "website" }/>
      		<meta property="og:title" content={title} />
		      <meta property="og:description" content={description} />
		      <meta property="og:image" content={image} />	     		 

		      <meta name="twitter:card" content="summary_large_image" />
		      <meta name="twitter:site" content="@marioarranzr" />
		      <meta name="twitter:creator" content="@marioarranzr" />		      
		      <meta name="twitter:title" content={title} />		      
		      <meta name="twitter:description" content={description} />
		      <meta name="twitter:image" content={image} />     
			</Helmet>
		)
	}
}

