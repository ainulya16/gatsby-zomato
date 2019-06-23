import React from 'react';
import {
 string, arrayOf, any, oneOfType, node,
} from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Container from './Container';
import Section from './Section';


const Layout = ({
  description,
  lang,
  meta,
  keywords,
  title,
  children,
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
        <React.Fragment>
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
        <div
          style={{
            margin: '0 auto',
          }}
        >
          {children}
        </div>
        </React.Fragment>
      );
    }}
  />
);


Layout.defaultProps = {
  description: null,
  lang: 'en',
  meta: [],
  keywords: [],
  title: '',
};

Layout.propTypes = {
  description: string,
  lang: string,
  meta: arrayOf(any),
  keywords: arrayOf(string),
  title: string,
  children: oneOfType([node, arrayOf(node)]).isRequired,
};

export default Layout;

export {
  Container,
  Section,
};