// src/pages/preview.js
import React, { useEffect } from "react";
import { navigate, graphql, useStaticQuery } from "gatsby";
import { usePrismicPreview } from "gatsby-source-prismic";

// import { Spinner } from "../components/Spinner";

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
  const pageUIDs = allPrismicHomepage.nodes.map(node => node.uid);

  const pathResolver = () => doc => {
    const previewedUID = doc.uid;
    // FIXME: this is a bit broken right now for unpublished pages. Will look more into it soon!

    if (pageUIDs.includes(previewedUID)) {
      return previewedUID;
    }
    return "/previews/unpublishedPreview";
  };

  let { previewData, path } = usePrismicPreview(location, {
    repositoryName: "stoutlabs2018",
    pathResolver,
  });

  // console.log("path: ", path);
  // console.log("previewData: ", previewData);

  // fix path for homepage (Since I can't use "/" as a UID in prismic, understandably.)
  if (path === "home" || path === "homepage") {
    path = "/";
  }

  useEffect(() => {
    if (previewData && path) {
      // console.log("path here: ", path);
      // console.log("previewData here: ", previewData);
      window.__PRISMIC_PREVIEW_DATA = previewData;
      navigate(path);
    }
  }, [path, previewData]);

  return <div>Loading preview...</div>;
};

export default PreviewPage;
