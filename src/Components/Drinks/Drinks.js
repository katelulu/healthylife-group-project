import React, { useState, useEffect } from "react"
import { client } from "../../client"
import DrinksPosts from "./DrinksPosts"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
import "./Drinks.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

export default function Drinks() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    client
      .getEntries({ content_type: "drinks" })
      .then((response) => {
        console.log(response)
        setArticles(response.items)
      })
      .catch(() => console.log("error"))
  }, [])

  return (
    <div className="App">
      <Container>
        <Row>
          <Col
            className="d-flex justify-content-md-center"
            lg={1}
            md={1}
            sm={8}
            xs={8}
          ></Col>

          <Col className="wrapper_drinks" lg={8} md={8} sm={12} xs={12}>
            <DrinksPosts drinksPosts={articles} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
