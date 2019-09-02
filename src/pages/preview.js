// src/pages/preview.js
import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { usePrismicPreview } from "gatsby-source-prismic";

// import { Spinner } from "../components/Spinner";

const PreviewPage = ({ location }) => {
  const { previewData, path } = usePrismicPreview(location, {
    repositoryName: "stoutlabs2018"
  });

  useEffect(() => {
    if (previewData && path) {
      window.__PRISMIC_PREVIEW_DATA__ = previewData;
      navigate(path);
    }
  }, [previewData, path]);

  return <div>Loading preview...</div>;
};

export default PreviewPage;
