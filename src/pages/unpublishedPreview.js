import React from "react";
import HomePageTemplate from "./index";

export const UnpublishedPage = props => {
  // const previewData = window.__PRISMIC_PREVIEW_DATA__;

  // => Perform any logic from previewData to determine the correct page or template component to use.

  return <HomePageTemplate {...props} />;
};

export default UnpublishedPage;
