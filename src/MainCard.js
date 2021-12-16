import Card from "react-bootstrap/Card"
import CardImage from "./Images/card_food.png"
import CardImage1 from "./Images/card_sport.png"
import CardImage2 from "./Images/card_drink.png"
import CardGroup from "react-bootstrap/CardGroup"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function MainCard() {
  return (

    <div className="main_card">
    <CardGroup >
      <Row>
        <Col>
          <Card className="card border-0 rounded-pill">
            <Card.Img variant="top" src={CardImage} style={{
              opacity: 1,
              display: "block",
              transition: "0.5s ease",
              color: "white",
              borderRadius: "4px"
            }} />
            <Card.Body>
              <Card.Title 
                  style={{
                    textAlign: "center"
                  }}
              >
                <Card.Link
                  href="/food"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "Tenor Sans",
                  }}
                >
                  Food
                </Card.Link>
              </Card.Title>
            </Card.Body>
          </Card>
          <div className="card_hr">
            <hr />
          </div>
        </Col>

        <Col>
          <Card className="card border-0">
            <Card.Img variant="top" src={CardImage1} style={{
              opacity: 1,
              display: "block",
              transition: "0.5s ease",
              color: "white",
              borderRadius: "4px"

            }} />
            <Card.Body>
              <Card.Title 
              style={{
                textAlign: "center"
              }}
              >
                <Card.Link
                  href="/excercises"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "Tenor Sans",
                    textAlign: "center",
                  }}
                >
                  Excercises
                </Card.Link>
              </Card.Title>
            </Card.Body>
          </Card>
          <div className="card_hr">
            <hr />
          </div>
        </Col>

        <Col>
          <Card className="card border-0">
            <Card.Img variant="top" src={CardImage2} style={{
              opacity: 1,
              display: "block",
              transition: "0.5s ease",
              color: "white",
              borderRadius: "4px"
            }} />
            <Card.Body>
              <Card.Title 
              style={{
                textAlign: "center"
              }}
              >
                <Card.Link
                  href="/drinks"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "Tenor Sans",
                    textAlign: "center",
                    borderRadius: "4px"
                  }}
                >
                  Drinks
                </Card.Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <div className="divider_main_card" >
          <hr></hr>
        </div>
       </Row>
       
    </CardGroup>
    </div>
  );
}

    
