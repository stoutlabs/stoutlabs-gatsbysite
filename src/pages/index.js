import React, { Component } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { mergePrismicPreviewData } from "gatsby-source-prismic";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import IntroContent from "../components/IntroContent";
import Layout from "../components/Layout";
import RecentsList from "../components/Projects/RecentsList";
import Seo from "../components/Seo";
import Tools from "../components/Tools/Tools.js";

const IS_BROWSER = typeof window !== "undefined";

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

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    };
  }

  render() {
    const previewData = IS_BROWSER && window.__PRISMIC_PREVIEW_DATA__;
    const staticData = this.props.data.prismicHomepage.data;

    // const content = this.props.data.prismicHomepage.data;
    const content = mergePrismicPreviewData({ staticData, previewData });

    const { main_title: title, featured_projects } = content;

    //console.log('projects_index: ', content.featured_projects);
    const introData = {
      title: title,
      introBox1: content.intro_content_1,
      introBox2: content.intro_content_2,
      introSummary: content.intro_summary,
      currently: content.currently
    };

    const toolData = {
      faves: content.best_tools,
      boxes: content.tools_boxes
    };

    const seoData = {
      frontmatter: {
        title: null
      }
    };

    return (
      <Layout>
        <Seo postData={seoData} />
        <IntroContent content={introData} />
        <StyledHR />
        <RecentsList projects={featured_projects} />
        <StyledHR />
        <Tools content={toolData} />
        <StyledHR />
        <Contact />
        <Footer />
      </Layout>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query homePageQuery {
    prismicHomepage {
      data {
        main_title
        intro_content_1 {
          html
        }
        intro_content_2 {
          html
        }
        intro_summary {
          html
        }
        currently {
          html
        }
        featured_projects {
          project {
            document {
              ... on PrismicProject {
                uid
                data {
                  title
                  thumbnail {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 650, quality: 85) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                  full_image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 800, quality: 81) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                  body {
                    html
                  }
                  tools
                  url {
                    url
                  }
                  source {
                    url
                  }
                }
              }
            }
          }
        }
        best_tools {
          document {
            ... on PrismicToolbelt {
              id
              data {
                toolbelt_title
                toolbelt_item {
                  tool_name
                  logo {
                    localFile {
                      childImageSharp {
                        fixed(width: 40, quality: 90) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        tools_boxes {
          box {
            document {
              ... on PrismicToolbelt {
                data {
                  toolbelt_title
                  toolbelt_item {
                    tool_name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
