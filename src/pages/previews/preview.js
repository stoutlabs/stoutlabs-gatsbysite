// src/pages/preview.js
import React, { useEffect } from "react";
import { navigate, graphql, useStaticQuery } from "gatsby";
import { usePrismicPreview } from "gatsby-source-prismic";

// import { Spinner } from "../components/Spinner";

// const PreviewPage = ({ location }) => {
//   const { previewData, path } = usePrismicPreview(location, {
//     repositoryName: "stoutlabs2018"
//   });

//   console.log("path: ", path);
//   console.log("previewData: ", previewData);

//   const tempPath = "/";
//   useEffect(() => {
//     if (previewData && (tempPath)) {
//       console.log("path here: ", tempPath);
//       console.log("previewData here: ", previewData);
//       window.__PRISMIC_PREVIEW_DATA__ = previewData;
//       navigate(tempPath);
//     }
//   }, [previewData, tempPath]);

//   return <div>Loading preview...</div>;
// };

const PreviewPage = ({ location }) => {
  const { allPrismicHomepage } = useStaticQuery(graphql`
    {
      allPrismicHomepage {
        nodes {
          uid
        }
      }
    }
  `);
  // const pageUIDs = allPrismicPage.nodes.map(node => node.uid);
  const pageUIDs = allPrismicHomepage.nodes.map(node => node.uid);

    console.log("path: ", path);
    console.log("previewData: ", previewData);

  const pathResolver = () => doc => {
    const previewedUID = doc.prismicHomepage.uid;

    if (pageUIDs.includes(previewedUID)) {
      return previewedUID;
    } else {
      return "/unpublishedPreview";
    }
  };

  let { previewData, path } = usePrismicPreview(location, {
    repositoryName: "stoutlabs2018",
    pathResolver
  });

  // fix path for homepage (Since I can't use "/" as a UID in prismic, understandably.)
  if(path === "home" || path === "homepage"){
    patch = "/";
  }

  useEffect(() => {
    if (previewData && path) {
      console.log("path here: ", tempPath);
      console.log("previewData here: ", previewData);
      window.__PRISMIC_PREVIEW_DATA = previewData;
      navigate(path);
    }
  }, [path, previewData]);

  return <div>Loading preview...</div>;
};

export default PreviewPage;
