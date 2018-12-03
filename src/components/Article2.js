import React from 'react';
import Link from 'gatsby-link';

const Article2 = ({ title, date, excerpt, path }) => {
  const firstChar = title.charAt(0);

  return (
    <article
    style={{
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      alignItems: 'center',
      marginBottom: '4rem'
    }}
    >
      <h2
        style={{
          marginTop: '2rem'
        }}
      >
        <span
          style={{
            position: 'absolute',
            fontSize: '8rem',
            transform: 'translate(-50%, -50%)',
            opacity: 0.05,
            userSelect: 'none',
            zIndex: -1
          }}
        >{firstChar}</span>
        <Link to={path}>{title}</Link>
      </h2>
      <h4
        style={{
          marginBottom: '0',
          textAlign: 'right'
        }}
      >{date}</h4>
      <p
        style={{
          gridColumn: '-1 / 1',
          marginTop: '1.35rem',
          marginBottom: '0'
        }}
      >{excerpt}</p>
    </article>
  );
};

export default Article2;
