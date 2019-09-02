// src/pages/preview.js
import React, { useEffect, useStaticQuery } from "react";
import { navigate } from "gatsby";
import { usePrismicPreview } from "gatsby-source-prismic";

export const PreviewPage = ({ location }) => {
  const { allPrismicHomePage } = useStaticQuery(graphql`
    {
      allPrismicHomepage {
        nodes {
          id
        }
      }
    }
  `);
  // const pageUIDs = allPrismicHomePage.nodes.map(node => node.uid);

  const pathResolver = () => doc => {
    // const previewedUID = doc.prismicPage.uid;

    // if (pageUIDs.includes(previewedUID)) {
    //   return previewedUID;
    // } else {
    //   return "/unpublishedPreview";
    // }
    return "homepage"
  };

  const { previewData, path } = usePrismicPreview(location, {
    repositoryName: "stoutlabs2018",
    pathResolver
  });

  useEffect(() => {
    if (previewData && path) {
      window.__PRISMIC_PREVIEW_DATA = previewData;
      navigate(path);
    }
  }, [path, previewData]);

  return <div>Loading preview...</div>;
};
