import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return (
    <Container fluid="sm">
      <Row style={{ justifyContent: 'center' }}>
        <Col lg={9}>{children}</Col>
      </Row>
    </Container>
  );
};

export default AppContainer;
