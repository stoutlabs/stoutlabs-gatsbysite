import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <h2 style={{ paddingTop: '3rem' }}>404 Error: Page Not Found</h2>

    <p style={{ padding: '2rem 0' }}>
      Hey, who&rsquo;s driving this thing?! This page doesn&#39;t exist...
    </p>

    <p>
      <Link to="/" alt="back to home">
        &gt; Back to home
      </Link>
    </p>
    
    <p>
      <Link to="/blog" alt="back to home">
        &gt; Check out the blog?
      </Link>
    </p>
  </Layout>
);

export default NotFoundPage;
