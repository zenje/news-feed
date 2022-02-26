import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import Stack from 'react-bootstrap/Stack';

function App() {
  return (
    <Container fluid="sm">
      <Row style={{ justifyContent: 'center' }}>
        <Col lg={9}>
          <header>
            <h1>Explore</h1>
          </header>
          <nav>
            <Nav defaultActiveKey="popular" as="ul">
              <Nav.Item as="li">
                <Nav.Link eventKey="popular">Popular</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="latest">Latest</Nav.Link>
              </Nav.Item>
            </Nav>
          </nav>
          <main>
            <Stack gap={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. A cras semper auctor neque vitae tempus quam
                    pellentesque. Morbi quis commodo odio aenean. Ultrices
                    gravida dictum fusce ut. Lectus quam id leo in vitae turpis
                    massa sed. Pellentesque id nibh tortor id aliquet. Arcu dui
                    vivamus arcu felis bibendum. Enim lobortis scelerisque
                    fermentum dui faucibus in ornare quam. Tincidunt vitae
                    semper quis lectus. Ac auctor augue mauris augue. Cras
                    fermentum odio eu feugiat. Nisi scelerisque eu ultrices
                    vitae.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Sapien pellentesque habitant morbi tristique senectus et.
                    Egestas congue quisque egestas diam in arcu cursus. A
                    pellentesque sit amet porttitor eget. Consequat id porta
                    nibh venenatis. Iaculis urna id volutpat lacus laoreet.
                    Feugiat pretium nibh ipsum consequat. Fames ac turpis
                    egestas maecenas pharetra. Mauris rhoncus aenean vel elit
                    scelerisque mauris. Scelerisque fermentum dui faucibus in
                    ornare quam viverra orci. Natoque penatibus et magnis dis.
                    Vulputate odio ut enim blandit volutpat maecenas volutpat
                    blandit.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Stack>
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
