import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    query ContactInfoQuery {
      site {
        siteMetadata {
          phone
          email
        }
      }
    }
  `);

  const { phone, email } = data.site.siteMetadata;

  return (
    <div>
      <h3>Contact Us:</h3>
      <p>phone: {phone}</p>
      <p>
        email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
};

export default ContactInfo;
