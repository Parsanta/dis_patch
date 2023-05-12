import { Button } from "react-bootstrap";
import {Row,Col,Container} from "react-bootstrap";
import AboutPageimg from '../assets/img/AboutPageimg.svg';
import { HomeReview } from "../components/Review";
import { Choose } from "../components/Choose";
import { Partners } from "../components/Partners";
export const AboutPage = () => {
  return (
    <div className="AboutPage">
      <section className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6} xl={7}>
              <h1>DIS-PATCHED</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <Button>Our Services</Button>
              <Button>Contact Us</Button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={AboutPageimg} alt="img" />
            </Col>
          </Row>
        </Container>
      </section>
      <Partners/>
      <Choose/>
      <HomeReview/>
    </div>
  );
};
