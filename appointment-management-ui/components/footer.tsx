import { Col, Container, Row } from "react-bootstrap";

export default function Footer(){
    return  (<Container>
    <Row>
      <Col sm={6} className='text-center text-sm-start mb-2 mb-sm-0'>
        <p className='m-0'>Made by <a href='https://codescandy.com/' target='_blank'>Codescandy</a></p></Col>
      <Col sm={6} className='text-center text-sm-end'>
        <p className='m-0'>Destributed by <a href='https://themewagon.com/' target='_blank'>ThemeWagon</a></p>
      </Col>
    </Row>
  </Container>);
}