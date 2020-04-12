import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ArticleStyles = styled.article`
  align-self: center;
  text-shadow: 1px 1px 1px;
  a {
    text-decoration: none;
  }
  img {
    max-width: 80%;
    transition: all 0.7s ease;
    box-shadow: 0 0 15px #000;
  }
  @media screen and (max-width: 1024px) {
    width: 80vw;
  }
  .column {
    float: left;
    width: 50%;
    padding: 10px;
    height: 300px; 
  }
  
`;

export default class Article extends PureComponent {
    render() {
        const { article } = this.props
        return (
            <ArticleStyles>
                <a href={`https://dev.to${article.path}`} target="_blank">
                    <div>
                    <div className="column">
                        <img src={article.cover_image} alt={article.title}/>
                    </div>
                    <div className="column">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        {/* <h3>{formatDate(article.published_at)}</h3> */}
                    </div>
                    </div>
                </a>
            </ArticleStyles>
        )
    }
}