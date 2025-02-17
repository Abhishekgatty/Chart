import React from 'react';
import Layout from '../../layout/main'
import { Container } from 'react-bootstrap';
import { Section } from '../../layout/global';

import FaqSection from './FaqSection';
import PricingSection from './PricingSection';

function Pricing() {
  return (
    <Layout title="Pricing" content="tyn-content-page" footer={true}>
      <div className="tyn-main">
        <Section gap="lg">
          <Container>
            <PricingSection />
            <FaqSection />
          </Container>
        </Section>
      </div>
    </Layout>
  )
}

export default Pricing