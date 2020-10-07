import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { mergePrismicPreviewData } from "gatsby-source-prismic";

import Contact from "components/Contact";
import { Footer } from "components/Footer";
import { IntroContent } from "components/IntroContent";
import Layout from "components/Layout";
import { RecentsList } from "components/Projects/RecentsList";
import Seo from "components/Seo";
import { Tools } from "components/Tools/Tools.js";

const StyledHR = styled.hr`
  border: none;
  height: 1px;
  width: 95%;
  background: linear-gradient(
    90deg,
    rgba(153, 215, 225, 0),
    rgba(153, 215, 225, 0.66),
    rgba(153, 215, 225, 0)
  );
  margin: 0.5rem auto;
`;

const IndexPage = ({ data }) => {
  const strapiContent = data.strapiHomepage;
  const strapiProjects = data.allStrapiProjects.nodes;
  const strapiFaveTools = data.allStrapiFavoriteTools.nodes;
  const strapiSkills = data.allStrapiSkills.nodes;

  const toolData = {
    faves: strapiFaveTools,
    boxes: strapiSkills,
  };

  const seoData = {
    frontmatter: {
      title: null,
    },
  };

  return (
    <Layout>
      <Seo postData={seoData} />
      <IntroContent content={strapiContent} />
      <StyledHR />
      <RecentsList projects={strapiProjects} />
      <StyledHR />
      <Tools content={toolData} />
      <StyledHR />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query homePageQuery {
    strapiHomepage {
      title
      intro
      quickBio {
        Body
      }
      seeking {
        Body
      }
      status
    }

    allStrapiProjects(sort: { order: DESC, fields: launchDate }) {
      nodes {
        updated_at
        title
        slug
        project_cats {
          title
          slug
        }
        launchDate
        description
        sourceUrl
        viewUrl
        projectThumb {
          childImageSharp {
            fluid(maxWidth: 650, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    allStrapiFavoriteTools(sort: { fields: id, order: ASC }) {
      nodes {
        title
        icon {
          childImageSharp {
            fixed(width: 40, quality: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    allStrapiSkills {
      nodes {
        Heading
        listing
      }
    }
  }
`;
