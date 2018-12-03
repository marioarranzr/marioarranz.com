// import React from 'react';
// import Helmet from 'react-helmet';

// const Post = props => {
//   const postNode = props.data.markdownRemark;
//   const post = postNode.frontmatter;

//   return (
//     <article
//       style={{
//         gridColumn: '2',
//         boxShadow: '0 0 120px rgba(0, 0, 0, 0.1)',
//         borderRadius: '0 0 1rem 1rem',
//         padding: '3rem 3rem'
//       }}
//     >post
//       <Helmet title={`${post.title} | Blog`} />
//       <div>
//         <h1>{post.title}</h1>
//         <div
//           dangerouslySetInnerHTML={{ __html: postNode.html }}
//         />
//       </div>
//     </article>
//   );
// };

// export default Post;

// /* eslint no-undef: off */
// export const postQuery = graphql`
//   query postBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date(formatString: "DD.MM.YYYY")
//       }
//     }
//   }
// `;
