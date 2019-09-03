// src/pages/preview.js
import React, { useEffect, useStaticQuery } from "react";
import { navigate, graphql } from "gatsby";
import { usePrismicPreview } from "gatsby-source-prismic";

// import { Spinner } from "../components/Spinner";

const PreviewPage = ({ location }) => {
  const { previewData, path } = usePrismicPreview(location, {
    repositoryName: "stoutlabs2018"
  });

  console.log("path: ", path);
  console.log("previewData: ", previewData);

  const tempPath = "/";
  useEffect(() => {
    if (previewData && (tempPath)) {
      console.log("path here: ", tempPath);
      console.log("previewData here: ", previewData);
      window.__PRISMIC_PREVIEW_DATA__ = previewData;
      navigate(tempPath);
    }
  }, [previewData, tempPath]);

  return <div>Loading preview...</div>;
};

// const PreviewPage = ({ location }) => {
//   const { allPrismicPage } = useStaticQuery(graphql`
//     {
//       allPrismicPage {
//         nodes {
//           uid
//         }
//       }
//     }
//   `);
//   const pageUIDs = allPrismicPage.nodes.map(node => node.uid);

//   const pathResolver = () => doc => {
//     const previewedUID = doc.prismicPage.uid;

//     if (pageUIDs.includes(previewedUID)) {
//       return previewedUID;
//     } else {
//       return "/unpublishedPreview";
//     }
//   };

//   const { previewData, path } = usePrismicPreview(location, {
//     repositoryName: "myRepoName",
//     pathResolver
//   });

//   useEffect(() => {
//     if (previewData && path) {
//       window.__PRISMIC_PREVIEW_DATA = previewData;
//       navigate(path);
//     }
//   }, [path, previewData]);

//   return <div>Loading preview...</div>;
// };

export default PreviewPage;
