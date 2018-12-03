import React from 'react';
import Link from 'gatsby-link';

const Article = ({ title, date, html, path }) => {
  return (
    <article>
      <h2
        style={{
          marginTop: '2rem'
        }}
      >
        <Link to={path}>{title}</Link>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: html }} ></div>
    </article>
  );
};

export default Article;
