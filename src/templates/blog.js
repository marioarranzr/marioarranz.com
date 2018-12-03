// import React from 'react';
// import Helmet from 'react-helmet';

// const Entry = props => {
//   const postNode = props.data.markdownRemark;
//   const post = postNode.frontmatter;

//   return (
//     <article 
//       style={{
//         gridColumn: '2',
//         boxShadow: '0 0 120px rgba(0, 0, 0, 0.1)',
//         borderRadius: '0 0 1rem 1rem',
//         padding: '3rem 3rem'
//       }}>
//       blog
//       <Helmet title={`${post.title} | Blog`} />
//       <div>
//         <h1>{post.title}</h1>
//         <h2>{post.date}</h2>
//         <div
//           dangerouslySetInnerHTML={{ __html: postNode.html }}
//         />
//       </div>
//     </article>
//   );
// }
// export default Entry;

// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `;
