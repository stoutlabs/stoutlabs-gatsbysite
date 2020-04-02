// src/pages/preview.js
import React, { useEffect } from "react";
import { useStaticQuery, navigate, graphql } from "gatsby";
import { usePrismicPreview } from "gatsby-source-prismic";

export const PreviewPage = ({ location }) => {
  const { allPrismicHomePage } = useStaticQuery(graphql`
    query {
      allPrismicHomepage {
        nodes {
          id
        }
      }
    }
  `);
  const pageUIDs = allPrismicHomePage
    ? allPrismicHomePage.nodes.map((node) => node.uid)
    : [];

  console.log("PreviewPage -> pageUIDs", pageUIDs);
  const pathResolver = () => (doc) => {
    console.log("doc: ", doc);
    const previewedUID = doc.uid || "/";

    if (pageUIDs.includes(previewedUID)) {
      return previewedUID;
    }
    return "/previews/unpublishedPreview";

    // return "/";
  };

  const { previewData, path } = usePrismicPreview(location, {
    repositoryName: "stoutlabs2018",
    pathResolver,
  });

  useEffect(() => {
    if (previewData && path) {
      window.__PRISMIC_PREVIEW_DATA = previewData;
      navigate(path);
    }
  }, [path, previewData]);

  return <div>Loading preview...</div>;
};

export default PreviewPage;
