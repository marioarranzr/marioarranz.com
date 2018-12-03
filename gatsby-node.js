const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    }
    createNodeField({ node, name: 'slug', value: slug });
  }
};

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     const postPage = path.resolve('src/templates/post.js');
//     const postPage2 = path.resolve('src/templates/blog.js');
//     resolve(
//       graphql(`
//         {
//           posts: allMarkdownRemark(filter: {frontmatter: {path: {eq: null}}}) {
//             edges {
//               node {
//                 fields {
//                   slug
//                 }
//               }
//             }
//           }, posts2: allMarkdownRemark(
//               filter: {frontmatter: {path: {ne: null}}}
//               sort: { order: DESC, fields: [frontmatter___date] }
//           ) {
//             edges {
//               node {
//                 excerpt(pruneLength: 250)
//                 html
//                 id
//                 frontmatter {
//                   date
//                   path
//                   title
//                 }
//               }
//             }
//           }
//         }
//       `).then(result => {
//         if (result.errors) {
//           /* eslint no-console: "off" */
//           console.log(result.errors);
//           reject(result.errors);
//         }

//         const posts = result.data.posts.edges;
//         const posts2 = result.data.posts2.edges;

//         posts.forEach(edge => {
//           createPage({
//             path: edge.node.fields.slug,
//             component: postPage,
//             context: {
//               slug: edge.node.fields.slug,
//             },
//           });
//         });

//         posts2.forEach(edge => {
//           createPage({
//             path: edge.node.frontmatter.path,
//             component: postPage2,
//             context: {},
//           });
//         });
//       })
//     );

//   });
// };
