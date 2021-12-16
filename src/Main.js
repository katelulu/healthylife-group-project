import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image1 from "./Images/carousel_drink_800x400.jpg"
import Image2 from "./Images/carousel_food_800x400.jpg"
import Image3 from "./Images/carousel_sport_800x400.jpg"
import Logo from "./Images/Healthy Life-logos_transparent.png"
import "./App.css";

export default function Main() {
  return (
    <Container md={2}>
      <Row className="d-flex justify-content-end">
        <Col md={8}>
          <h1>Come and be healthy with us!</h1>
          <Container className="mb-5 bg-light rounded-3 p-5">
            <Carousel
              variant="warning"
              fade
              style={{
                textAlign: "center",
              }}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Image1}
                  alt="First slide"
                  style={{ borderRadius: "4px" }}
                />
                <Carousel.Caption>
                  <h3 style={{ color: "white", fontFamily: "Tenor Sans" }}>
                    Alcohol? Why not? But with moderation!
                  </h3>
                  <p
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontFamily: "Tenor Sans",
                    }}
                  >
                    Here you can find delicious alcoholic drinks recipes. Enjoy.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Image2}
                  alt="Second slide"
                  style={{ borderRadius: "4px" }}
                />

                <Carousel.Caption>
                  <h3>Eat well. It´s delicious</h3>
                  <p
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontFamily: "Tenor Sans",
                    }}
                  >
                    Let´s prepare together healthy and amazing recipes.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Image3}
                  alt="Third slide"
                  style={{ borderRadius: "4px" }}
                />
                <Carousel.Caption>
                  <h3>Make sports. It´s necessary. And amazing!</h3>
                  <p
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontFamily: "Tenor Sans",
                    }}
                  >
                    Here you will find wonderful tips about sport.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>
        </Col>
        <div className="divider">
          <hr />
          <img className="Logo" src={Logo} alt="Logo" />
          <hr />
        </div>
      </Row>
    </Container>
  )
}
