import './App.css'
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Dashboard from './Dashboard';
import Student from './Student'
import Cources from './Nested/Cources';
import Test from './Nested/Test';
import PageNotFound from './Nested/PageNotFound';

let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <>
        <Navbar />
      </>
    },
    {
      path: "/home",
      element: <>
        <Home />
        {/* <Navbar /> */}
      </>
    },
    {
      path: "/about",
      element: <>
        <About />
        {/* <Navbar /> */}
      </>
    },
    {
      path: "/dash",
      element: <>
        <Dashboard />
        {/* <Navbar /> */}
      </>,
      children : [ 
        {
          path : 'cources' ,
          element : <Cources/>
        } ,
        {
          path : 'test' ,
          element : <Test/>
        } ,
        {
          path : '*' ,
          element : <PageNotFound/>
        }
      ]
    },
    {
      path: "/student/:id",
      element: <>
        <Dashboard />
        <Student />
      </>
    }
  ]
)


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
