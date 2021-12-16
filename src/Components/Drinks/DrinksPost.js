import React from "react"
import ReactMarkdown from "react-markdown"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Drinks.css"

export default function DrinksPost({ article }) {
  console.log(article)
  const { name, featuredImage, description } = article.fields

  return (
    <div className="post_drinks">
      <h2 className="text-start">{name}</h2>
      <Row className="d-flex justify-content-md-start bg-light">
        <Col md={4} sm={12}>
          {featuredImage && (
            <img
              className="featuredImage"
              src={featuredImage.fields.file.url}
              alt={name}
              title={name}
            />
          )}
        </Col>

        <Col md={8} sm={12}>
          <Col className="d-inline-block justify-content-md-end mb-2">
            <ReactMarkdown>{description}</ReactMarkdown>
          </Col>
        </Col>
      </Row>
      <hr></hr>
    </div>
  )
}
