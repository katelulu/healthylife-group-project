import React from "react"
import DrinksPost from './DrinksPost';

export default function DrinksPosts({ drinksPosts }) {

  return drinksPosts.map((drinks_article, index) => (

  <DrinksPost article={drinks_article} key={index} />
));
}
