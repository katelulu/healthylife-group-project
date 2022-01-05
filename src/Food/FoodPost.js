import React from "react"
import ReactMarkdown from "react-markdown"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function FoodPost({ article }) {
  console.log(article)
  const { foodName, foodImage, foodDescription } = article.fields
  return (
    <div className="foodPost">
      <h2 className="foodTitle">{foodName}</h2>

      <Row className="foodSection-main">
        <Col className="foodImage md={6} sm={12}">
          {foodImage && (
            <img
              src={foodImage.fields.file.url}
              alt={foodName}
              title={foodName}
            />
          )}
        </Col>
        <Col className="foodRecipes md={6} sm={12}">
          <ReactMarkdown>{foodDescription}</ReactMarkdown>
        </Col>
      </Row>
    </div>
  )
}
