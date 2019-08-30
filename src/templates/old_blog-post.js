import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import BlogLayout from '../components/Blog/BlogLayout';
import Post from '../components/Blog/Post';
import { HTMLContent } from '../components/Content';
import Seo from '../components/Seo';
import '../assets/styles/dracula.css';

const BlogPost = ({ data, pageContext }) => {
  const { mdx: post } = data;
  //console.log('context: ', pageContext);
  console.log("post: ", post);

  return (
    <BlogLayout>
      <Seo
        postData={post}
        isBlogPage={true}
        postImage={post.frontmatter.featureimg ? post.frontmatter.featureimg.childImageSharp.fluid.src : null}
      />
      <Post
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        prev={pageContext.previous}
        next={pageContext.next}
        featureimg={post.frontmatter.featureimg || null}
        timetoread={post.timeToRead}
        slug={post.fields.slug}
        allNode={post}
        shareImg={
          post.frontmatter.featureimg ? post.frontmatter.featureimg.childImageSharp.fluid.src : null
        }
      />
    </BlogLayout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object
  })
};

export default BlogPost;

// export const pageQuery = graphql`
//   query BlogPostByID($id: String!) {
//     mdx(id: { eq: $id }) {
//       id
//       html
//       fields {
//         slug
//       }
//       timeToRead
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title

//         description
//         tags
//         featureimg {
//           childImageSharp {
//             fluid(maxWidth: 900, quality: 80) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
