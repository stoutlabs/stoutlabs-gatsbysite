// src/pages/unpublishedPreview.js
import React from "react";

import Layout from "../../components/Layout";
import Homepage from "../index";

export const UnpublishedPage = props => {
  console.log("TCL: props", props)
  const IS_BROWSER = typeof window !== "undefined";
  const previewData = IS_BROWSER && window.__PRISMIC_PREVIEW_DATA__;
  console.log("TCL: previewData", previewData)

  // => Perform any logic from previewData to determine the correct page or template component to use.
  if(previewData.hasOwnProperty("prismicHomepage")) {
    return <Homepage />
  }


  return <Layout {...props} previewdata={previewData} />;
};

export default UnpublishedPage;
