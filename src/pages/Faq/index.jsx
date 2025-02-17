import React from 'react';
import Layout from '../../layout/main'
import { Col, Container, Row } from 'react-bootstrap';
import { Section } from '../../layout/global';
import QuestionAnswers from './QuestionAnswers';
import QuestionForm from './QuestionForm';

function Faq() {
  return (
    <Layout title="Faq" content="tyn-content-page" footer={true}>
      <div className="tyn-main">
        <Section gap="lg">
          <Container>
            <Section.Head center className="pb-0">
              <h2 className="h1">Frequently Asked Questions</h2>
              <p>Here is some answer for few quetion.</p>
            </Section.Head>
            <Section.Content>
              <Row className="g-gs">
                <Col xl="8" lg="7">
                  <QuestionAnswers />
                </Col>
                <Col xl="4" lg="5">
                  <QuestionForm />
                </Col>
              </Row>
            </Section.Content>
          </Container>
        </Section>
      </div>
    </Layout>
  )
}

export default Faq