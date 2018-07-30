import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import BlogLayout from '../components/Blog/BlogLayout';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={'/blog' + post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = 'StoutLabs Web Design & Development Blog | Posts Tagged';
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`;

    return (
      <BlogLayout>
        <section>
          <Helmet title={`${title}: ${tag} `} />
          <div className="content">
            <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
            <ul className="taglist">{postLinks}</ul>
            <p>
              <Link to="/tags">Browse all tags</Link> |{' '}
              <Link to="/blog">Back to Blog Home</Link>
            </p>
          </div>
        </section>
      </BlogLayout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
