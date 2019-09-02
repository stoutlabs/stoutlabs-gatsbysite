// src/pages/unpublishedPreview.js
import React from "react";

import Layout from "../../components/Layout";

export const UnpublishedPage = props => {
  const IS_BROWSER = typeof window !== "undefined";
  const previewData = IS_BROWSER && window.__PRISMIC_PREVIEW_DATA__;

  // => Perform any logic from previewData to determine the correct page or template component to use.

  return <Layout {...props} />;
};

export default UnpublishedPage;
