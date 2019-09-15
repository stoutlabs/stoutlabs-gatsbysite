import React from "react";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const MdxContent = ({ content, className }) => (
  <div className={className}>
    <MDXRenderer>{content}</MDXRenderer>
  </div>
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
