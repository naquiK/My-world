import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Country from './components/Country'
import Homepage from './components/Homepage'
import ErrorPage from './components/ErrorPage'
import AppLayout from './com/Layout/AppLayout'
import CountryDetails from './components/CountryDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element:<AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Homepage/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/country',
        element:<Country/>,
      },
      {
        path:'/country/:id',
        element:<CountryDetails/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
  ]
    }
  
  
])
function App() {
 

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
