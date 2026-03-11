import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import HomePage from './HomePage'
import Dashboard from './Dashboard'
import Product from './Product'
import { RouterProvider } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'


function AnalyticsPage() {
  return (
    <div>
      <h3>Analytics</h3>
      <ul>
        <li>Visitors today: 1245</li>
      </ul>
    </div>
  )
}

function SalesPage() {

  return (
    <div>
      <h3>Sales content:</h3>
      <ul>
        <li>Total orders: 318</li>
      </ul>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "analytics",
        element: <AnalyticsPage />
      },
      {
        path: "sales",
        element: <SalesPage />
      }
    ]
  },
  {
    path: "product/:id",
    element: <Product />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
