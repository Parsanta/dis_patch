import AboutImg from '../assets/img/about-img.svg'
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
export const HomeAbout =()=>{
    return(
    <section className="About" >
      <Container className='HomeAbout'>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <h1>ABOUT DISPATCHED</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod idunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis rcitation ullamco laboris nisi ut aliquip ex
              eanhbjhvjhvmnLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod idunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis rcitation ullamco laboris nisi ut aliquip ex
              eanhbjhvjhvmnLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod idunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis rcitation ullamco laboris nisi ut aliquip ex
              eanhbjhvjhvmn
            </p>
            <Button variant="danger">Learn</Button>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <img src={AboutImg} alt="img" />
          </Col>
        </Row>
      </Container>
    </section>
    );
}