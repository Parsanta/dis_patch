import reviewImg from "../assets/img/review-img.svg";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

export const HomeReview = () => {
  const reviews = [
    {
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      author: "Parsanta",
    },
    {
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: "Gungun",
    },
    {
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      author: "Manav",
    },
  ];

  return (
    <section className="Review">
      <Container className="HomeReview">
        <Row>
          <Col xs={12} md={6} xl={4}>
            <img src={reviewImg} alt="img" />
          </Col>
          <Col xs={12} md={6} xl={8} className="revText">
            <h1>WHAT PEOPLE THINK ABOUT US</h1>
            <Carousel fade variant="dark">
              {reviews.map((review, index) => (
                <Carousel.Item key={index}>
                  <Card>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <br />
                        <p>{review.review}</p>
                        <br />
                        <footer className="blockquote-footer">
                          Someone famous in{" "}
                          <cite title="Source Title">{review.author}</cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
