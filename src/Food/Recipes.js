import React, { useState, useEffect } from "react"
import { client } from "../client"
import FoodPosts from "./FoodPosts"
import "./foodstyles.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Recipes() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    client
      .getEntries({ content_type: "foodRecipes" })
      .then((response) => {
        console.log(response)
        setArticles(response.items)
      })
      .catch(() => console.log("Error"))
  }, [])

  return (
    <div className="App">
      <Row className="foodRecipe-container">
        <Col
          className="foodSection section-left"
          lg={4}
          md={4}
          sm={4}
          xs={4}
        ></Col>
        <Col className="foodSection section-right" lg={8} md={8} sm={8} xs={8}>
          <div className="foodHeader">
             <h3 className="foodHeaderTitle">HEALTHY FOOD</h3>
          </div>
          <Col>
             <FoodPosts foodPosts={articles} />
          </Col>
        </Col>
      </Row>
    </div>
  )
}
