import React from "react"
import FoodPost from "./FoodPost"

export default function FoodPosts({ foodPosts }) {
  return foodPosts.map((article, index) => (
    <FoodPost article={article} key={index} />
  ))
}
