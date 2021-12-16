import React from "react"
import ReactDOM from "react-dom"
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { StrictMode } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./Main"
import MainCard from "./MainCard"
import Recipes from "./Food/Recipes"
import ExcercisePosts from "./Components/Excercise/ExcercisePosts"
import ErrorPage from "./ErrorPage"
import Drinks from "./Components/Drinks/Drinks"

const rootElement = document.getElementById("root")

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/"
            element={
              <>
                <Main />
                <MainCard />
              </>
            }
          />
          <Route
            path="home"
            element={
              <>
                <Main />
                <MainCard />
              </>
            }
          />
          <Route path="food" element={<Recipes />} />
          <Route path="excercises" element={<ExcercisePosts />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,

  rootElement
)
