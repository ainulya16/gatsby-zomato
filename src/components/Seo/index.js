import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title,
}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={({ site }) => {
      const metaDescription = description || site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              property: 'og:title',
              content: title,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:creator',
              content: site.siteMetadata.author,
            },
            {
              name: 'twitter:title',
              content: title,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: 'keywords',
                    content: keywords.join(', '),
                  }
                : [],
            )
            .concat(meta)}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  description: null,
  lang: 'en',
  meta: [],
  keywords: [],
  title: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.any),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default SEO;
