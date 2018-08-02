import path from 'path';
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import config from '../../config';

const getSchemaOrgJSONLD = ({
  isProjectPage,
  isBlogPage,
  url,
  title,
  image,
  description,
  datePublished
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: config.title
    }
  ];

  if (isBlogPage) {
    return [
      ...schemaOrgJSONLD,
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': url,
              name: title,
              image
            }
          }
        ]
      },
      {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        url,
        name: title,
        alternateName: config.title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image
        },
        description,
        author: {
          '@type': 'Person',
          name: 'Daniel Stout'
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': config.url
        },
        datePublished
      }
    ];
  }

  if (isProjectPage) {
    return [
      ...schemaOrgJSONLD,
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': url,
              name: title,
              image
            }
          }
        ]
      },
      {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        url,
        name: title,
        alternateName: config.title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image
        },
        description,
        author: {
          '@type': 'Person',
          name: 'Daniel Stout'
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': config.url
        },
        datePublished
      }
    ];
  }

  return schemaOrgJSONLD;
};

const SEO = ({ postData, postImage, isProjectPage, isBlogPage }) => {
  const postMeta = postData.frontmatter || {};

  //const title = postMeta.title || config.title;
  const title = isBlogPage
    ? postMeta.title + ' | StoutLabs Blog'
    : postMeta.title
      ? postMeta.title
      : config.title;
  const description =
    postMeta.description || postData.excerpt || config.description;
  const image = postImage ? `${config.url}${postImage}` : config.image;
  const url = postData.fields.slug
    ? `${config.url}${path.sep}${postData.fields.slug}`
    : config.url;
  const datePublished = isBlogPage ? postMeta.datePublished : false;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPage,
    isProjectPage,
    url,
    title,
    image,
    description,
    datePublished
  });

  return (
    <Helmet title={title}>
      {/* General tags */}
      <html lang="en" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isProjectPage ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any
  }).isRequired,
  postImage: PropTypes.string
};

SEO.defaultProps = {
  isProjectPage: false,
  postImage: null
};

export default SEO;
