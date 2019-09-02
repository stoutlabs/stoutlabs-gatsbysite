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

export default PreviewPage;
