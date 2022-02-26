import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Pagination.css';

type Props = {
  page: number;
  nextPageFn: (page: number) => void;
  prevPageFn: (page: number) => void;
};

const Pagination = ({ page, nextPageFn, prevPageFn }: Props) => {
  return (
    <Container fluid="sm">
      <Row style={{ justifyContent: 'center' }}>
        <Col className="pagination-link prev-link">
          {page > 1 ? (
            <Button
              variant="link"
              onClick={() => prevPageFn(page)}
              className="page-button"
            >
              {`< Previous`}
            </Button>
          ) : null}
        </Col>
        <Col className="pagination-link next-link">
          <Button
            variant="link"
            onClick={() => nextPageFn(page)}
            className="page-button"
          >
            {`Next >`}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Pagination;
