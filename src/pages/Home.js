import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Home = () => {
  return (
    <>
      <section>
        <Container fluid className="img1">
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formEnterYourCity">
                  <Form.Label>Enter Your City </Form.Label>
                  <Form.Control type="text" placeholder="Enter City"/> 
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
