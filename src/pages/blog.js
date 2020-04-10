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
  width: 600px;
  text-shadow: 1px 1px 1px ${props => props.theme.snow};
  a {
    text-decoration: none;
    color: ${props => props.theme.snow};
  }
  img {
    transition: all 0.7s ease;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 15px #000;
    filter: grayscale(40%) sepia(1);
    &:hover {
      opacity: 0.7;
      transform: scale(1.02);
    }
  }
  @media screen and (max-width: 1024px) {
    width: 80vw;
  }
`;

const Article = ({ article }) => (
    <ArticleStyles>
      <a href={`https://dev.to${article.path}`} target="_blank">
        <img src={article.cover_image} alt={article.title} />
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        {/* <h3>{formatDate(article.published_at)}</h3> */}
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
