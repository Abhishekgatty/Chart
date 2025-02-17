import React from 'react';
import Layout from '../../layout/main'
import { Row, Col, Container} from "react-bootstrap"

function NotFound() {
  return (
    <Layout title="NotFound" content="d-flex justify-content-center align-items-center" footer={true}>
        <Container>
            <Row className="justify-content-center">
                <Col xl="4" lg="5" md="6" sm="8">
                    <div className="px-4">
                      <img className="w-100" src="/images/gfx/404.svg" alt="" />
                    </div>
                    <div className="tyn-text-block text-center pt-5">
                      <h2>Oops! Page does not exist</h2>
                      <p className="px-xl-4">Looks like you've stumbled upon a page that doesn't exist.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
  )
}

export default NotFound