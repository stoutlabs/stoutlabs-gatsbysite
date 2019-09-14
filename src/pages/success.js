import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "components/Layout";

const StyledSuccess = styled.div`
  padding: 2rem 0;

  h2 {
    font-size: 3rem;
    margin: 0 0 2rem;
  }
`;

export const Success = () => (
  <Layout>
    <StyledSuccess className="success">
      <h2>Email Sent!</h2>
      <p>Thanks for contacting me. I'll get back to you soon!</p>

      <p style={{ fontStyle: "italic" }}>
        Note: This new setup is still in a "testing" phase... so if you don't hear back after a few
        hours, please feel free to email me at daniel@stoutlabs.com!
      </p>

      <p>
        <Link to="/">Back to site ></Link>
      </p>
    </StyledSuccess>
  </Layout>
);

export default Success;
