import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

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

class Blog extends React.Component {
	render() {
        const { data } = this.props
        console.log(data.allDevArticles.edges)
        return (
			<Layout socialLinks={this.props.data.hasura.social} location={this.props.location}>
                <Container>
                    <SEO title="Blog" url=""/>
                    {data.allDevArticles.edges.sort(
                        ({ node: { article: postA } }, { node: { article: postB } }) =>
                            -postA.published_at.localeCompare(postB.published_at)
                        )
                        .map(({ node: { article: post } }) => (
                        <div key={post.id} style={{ margin: "16px 0 32px 0" }}>
                            <a href={post.url} className="hover">
                            <div
                                className="flex"
                                style={{
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                }}
                            >
                                <h2 className="m0" style={{ marginRight: 8 }}>
                                {post.title}
                                </h2>
                                <p
                                className="m0"
                                style={{
                                    color: "grey",
                                    textAlign: "end",
                                    flexShrink: 0,
                                    paddingTop: 8,
                                }}
                                >
                                {formatDate(post.published_at)}
                                </p>
                            </div>
                            <p className="m0" style={{ color: "grey", marginTop: 8 }}>
                                {post.description}
                            </p>
                            </a>
                        </div>
                        ))
                    }
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
    query queryBlog {
        allDevArticles {
            edges {
                node {
                    article {
                        id
                        title
                        description
                        published_at
                        url
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
