// src/pages/preview.js
import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { usePrismicPreview } from "gatsby-source-prismic";

// import { Spinner } from "../components/Spinner";

const PreviewPage = ({ location }) => {
  const { previewData, path } = usePrismicPreview(location, {
    repositoryName: "stoutlabs2018"
  });

  console.log("path: ", path);
  console.log("previewData: ", previewData);

  useEffect(() => {
    const tempPath = "/";
    if (previewData && (path || tempPath)) {
      console.log("path here: ", path);
      console.log("previewData here: ", previewData);
      window.__PRISMIC_PREVIEW_DATA__ = previewData;
      navigate(path);
    }
  }, [previewData, path]);

  return <div>Loading preview...</div>;
};

export default PreviewPage;
