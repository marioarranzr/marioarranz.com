import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import get from 'lodash/get'

import Article from '../components/Article'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Container = styled.main`
	display: flex;
    background: #fbf8f3;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`

const PostsWrapper = styled.div`
	max-width: 1060px;
	margin: 0 auto;
`

  export default class Blog extends React.Component {
	render() {
        const { data } = this.props
        const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
        return (
			<Layout socialLinks={this.props.data.hasura.social} location={this.props.location}>
                <SEO title="Blog" url={ siteUrl }/>
                <Container className="HeaderBlog Page">
                    <div className="container">
                        <div className="row center-xs">
                            <div className="HeaderBlog__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
                                <h2 className="HeaderBlog__title Page__title">Blog</h2>
                                {/*
                                <p className="HeaderBlog__description Page__description">About programming and more.</p>
                                */}
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <PostsWrapper>
                        {data.allDevArticles.edges
                        .sort(
                            ({ node: { article: postA } }, { node: { article: postB } }) =>
                                -postA.published_at.localeCompare(postB.published_at)
                            )
                        .map((articleEdge, key) => (
                            <Article key={key} article={{ ...articleEdge.node.article }} />
                        ))}
                    </PostsWrapper>
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
