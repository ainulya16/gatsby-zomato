import React from 'react';
import { Container, Section } from '../../components/Layout';
import SEO from '../../components/Seo';

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <Section className="flex-center" style={{ minHeight: '500px' }}>
      <div className="text-center">
        <h2 className="margin-bottom-l margin-top-xl">PAGE NOT FOUND</h2>
        <p>You just hit a route that doesn&#39;t exist.</p>
      </div>
    </Section>
  </Container>
);

export default NotFoundPage;
