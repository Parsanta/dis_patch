import ChooseImg from "../assets/img/choose-img.svg";
import whyUs from "../assets/img/choose-bg.svg";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
export const Choose = () => {
  return (
    <section className="Choose">
      <Container>
        <Row>
          <Col xs={12} md={5} xl={4}>
            <img src={ChooseImg} alt="img" />
          </Col>
          <Col xs={12} md={7} xl={8}>
            <h1>why CHOOSE us</h1>
            <Carousel fade variant="dark">
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={whyUs} alt="First slide" />
                <Carousel.Caption>
                  <h1>Delivery</h1>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod idunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis rcitation ullamco laboris nisi ut
                    aliquip ex eanhbjhvjhvmn Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod idunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    rcitation ullamco laboris nisi ut aliquip ex eanhbjhvjhvmn
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={whyUs} alt="Second slide" />

                <Carousel.Caption>
                  <h1>Quality</h1>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod idunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis rcitation ullamco laboris nisi ut
                    aliquip ex eanhbjhvjhvmn. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod idunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    rcitation ullamco laboris nisi ut aliquip ex eanhbjhvjhvmn
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={whyUs} alt="Third slide" />

                <Carousel.Caption>
                  <h1>DEMO</h1>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod idunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis rcitation ullamco laboris nisi ut
                    aliquip ex eanhbjhvjhvmn Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod idunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    rcitation ullamco laboris nisi ut aliquip ex eanhbjhvjhvmn
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
