import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import HomePage from "./pages/HomePage"
import TopRatedPage from './pages/TopRatedPage'
import UpcomingMoviePage from './pages/UpcomingMoviePage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import SearchPage from './pages/SearchPage'

import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    children:[
      {path: "", element: <HomePage/>},
      {path: "top-rated", element: <TopRatedPage/>},
      {path: "upcoming-movie", element: <UpcomingMoviePage/>},
      {path: "movie/:id", element: <MovieDetailsPage/>},
      {path: "search", element: <SearchPage /> },
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App