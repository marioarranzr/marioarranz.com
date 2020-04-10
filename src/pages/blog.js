import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import get from 'lodash/get'

import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Container = styled.main`
	display: flex;
    background: #fbf8f3;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	min-height: 380px;
`

const ArticleStyles = styled.article`
  align-self: center;
  text-shadow: 1px 1px 1px;
  a {
    text-decoration: none;
  }
  img {
    transition: all 0.7s ease;
    height: 40%;
    width: 40%;
    box-shadow: 0 0 15px #000;
  }
  @media screen and (max-width: 1024px) {
    width: 80vw;
  }
`;

const Article = ({ article }) => (
    <ArticleStyles>
            <a href={`https://dev.to${article.path}`} target="_blank">
                <div><img src={article.cover_image} alt={article.title} /></div>
                <div> 
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    {/* <h3>{formatDate(article.published_at)}</h3> */}
                </div>
            </a>
    </ArticleStyles>
  );
  

class Blog extends React.Component {
	render() {
        const { data } = this.props
        const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
        return (
			<Layout socialLinks={this.props.data.hasura.social} location={this.props.location}>
                <Container>
                    <SEO title="Blog" url={ siteUrl }/>
                    {data.allDevArticles.edges
                    .sort(
                        ({ node: { article: postA } }, { node: { article: postB } }) =>
                            -postA.published_at.localeCompare(postB.published_at)
                        )
                    .map((articleEdge, key) => (
                        <Article key={key} article={{ ...articleEdge.node.article }} />
                    ))}
                </Container>
            </Layout>
        )
    }
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  })
}

export const queryBlog = graphql`

    query QueryBlog {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        allDevArticles {
            edges {
                node {
                    article {
                        id
                        title
                        description
                        published_at
                        url
                        cover_image
                        path
                    }
                }
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

export default Blog
