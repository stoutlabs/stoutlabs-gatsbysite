import React from "react";
import Img from "gatsby-image";

const Image = ({
  src,
  fixed,
  fluid,
  alt,
  objectFit = "cover",
  objectPosition = "50% 50%",
  ...props
}) =>
  src ? (
    <img
      width="100%"
      height="100%"
      src={src}
      loading="lazy"
      style={{ objectFit, objectPosition }}
      alt={alt ? alt : ""}
      {...props}
    />
  ) : (
    <Img {...props} fluid={fluid} fixed={fixed} />
  );

export default Image;