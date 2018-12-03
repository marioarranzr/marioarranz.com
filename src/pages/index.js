import React from 'react';
import Article from '../components/Article';
import Article2 from '../components/Article2';

const IndexPage = props => {
  // const postEdges = props.data.posts.edges;
  // const postEdges2 = props.data.posts2.edges;

  return (
    <div
      style= {{
        gridColumn: '2',
        boxShadow: '0 0 120px rgba(0, 0, 0, 0.1)',
        borderRadius: '0 0 1rem 1rem',
        padding: '3rem 3rem'
      }} 
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
      </div>
      {/* {postEdges.map(post => (
        <Article
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          html={post.node.html}
          key={post.node.fields.slug}
          path={post.node.fields.slug}
        />
      ))}
      <h2>
        Blog: 
      </h2>
      {postEdges2.map(post2 => (
        <Article2
          title={post2.node.frontmatter.title}
          date={post2.node.frontmatter.date}
          excerpt={post2.node.excerpt}
          key={post2.node.fields.slug}
          path={post2.node.frontmatter.path}
        />
      ))} */}
    </div>
  );
};

export default IndexPage;

/* eslint no-undef: off */
// export const IndexQuery = graphql`
//   query IndexQuery {
//     posts: allMarkdownRemark(filter: {frontmatter: {path: {eq: null}}}) {
//       edges {
//         node {
//           excerpt(pruneLength: 250)
//           html
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD.MM.YYYY")
//             title
//           }
//         }
//       }
//     }, posts2: allMarkdownRemark(
//       filter: {frontmatter: {path: {ne: null}}}
//       sort: { order: DESC, fields: [frontmatter___date] }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 250)
//           html
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD.MM.YYYY")
//             path
//             title
//           }
//         }
//       }
//     }
//   }
//   `;
