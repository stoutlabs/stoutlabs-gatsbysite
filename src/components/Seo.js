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
      url: url,
      name: title,
      alternateName: config.title,
      author: {
        '@type': 'Person',
        name: 'Daniel Stout'
      },
      description:
        'StoutLabs is a web development and design company in Kingsport, TN.',
      publisher: 'StoutLabs'
    }
  ];

  if (url === config.url) {
    return [
      ...schemaOrgJSONLD,
      {
        '@context': 'http://schema.org',
        '@type': 'LocalBusiness',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kingsport',
          addressRegion: 'TN',
          postalCode: '37664',
          streetAddress: '1509 Lamont St.'
        },
        description:
          'Web design and development, digital marketing, and consulting. Located in the Tri-Cities, TN.',
        name: 'StoutLabs',
        telephone: '423-343-4274',
        openingHours: 'Mo,Tu,We,Th,Fr 10:00-18:00',
        image: config.image,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '36.542',
          longitude: '-82.536'
        },
        sameAs: [
          'http://www.facebook.com/stoutlabs',
          'http://www.twitter.com/stoutlabs',
          'https://plus.google.com/u/1/117064599559622613582'
        ]
      }
    ];
  }

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
        '@type': 'Article',
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
          '@type': 'WebPage',
          '@id': url
        },
        datePublished: datePublished,
        publisher: {
          '@type': 'Organization',
          name: 'StoutLabs',
          logo: {
            '@type': 'ImageObject',
            width: 226,
            height: 60,
            url: config.publisherlogo
          }
        }
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
        datePublished: datePublished
      }
    ];
  }

  return schemaOrgJSONLD;
};

const SEO = ({ postData, postImage, isProjectPage, isBlogPage }) => {
  const postMeta = postData.frontmatter || {};

  const title = isBlogPage
    ? postMeta.title + ' | StoutLabs Blog'
    : postMeta.title
      ? postMeta.title
      : config.title;

  const description =
    postMeta.description || postData.excerpt || config.description;

  const image = postImage ? `${config.url}${postImage}` : config.image;

  const url = isBlogPage
    ? `${config.url}${path.sep}blog${postData.fields.slug}`
    : config.url;

  const datePublished = isBlogPage ? postMeta.date : false;

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
      <meta
        name="google-site-verification"
        content="1Uqm6h9_iawEMYdHmb86lBBUQv_1CJTzeXmcOiLuOpo"
      />

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
