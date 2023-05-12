import BannerImg from "../assets/img/banner-img.svg";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ContactPage } from "../pages/ContactPage";
export const Banner = () => {
  return (
    <section className="banner" >
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <h1>GET YOUR <br/>ESSENTIALS <br/>BEFORE TIME!!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod idunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis rcitation ullamco laboris nisi ut aliquip ex
              eanhbjhvjhvmn
            </p>
            <Button variant="danger">Contact</Button>
            <Button variant="outline-danger">Contact</Button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={BannerImg} alt="banner-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
