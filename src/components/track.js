import trackImg from "../assets/img/track-mob-img.svg";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Hometrack = () => {
  return (
    <section className="Track">
      <Container className="Hometrack">
        <Row>
          <Col xs={12} md={6} xl={5}>
            <img src={trackImg} alt="banner-img" />
          </Col>
          <Col xs={12} md={6} xl={7}>
            <h1>TRACK YOUR GOODS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod idunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis rcitation ullamco laboris nisi ut aliquip ex
              eanhbjhvjhvmnLorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod idunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis rcitation ullamco laboris nisi ut
              aliquip ex eanhbjhvjhvmnLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod idunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis rcitation ullamco laboris
              nisi ut aliquip ex eanhbjhvjhvmn
            </p>
            <Button variant="warning">TRACE</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
