import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai1 from './Bai1.jsx'
import Bai2 from './Bai2.jsx'
import Bai3 from './Bai3.jsx'
import Bai4 from './Bai4.jsx'
import Bai5 from './Bai5.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/bai1",
    element: <Bai1 />
  },
    {
    path: "/bai2",
    element: <Bai2 />
  },
      {
    path: "/bai3",
    element: <Bai3 />
  },
        {
    path: "/bai4",
    element: <Bai4 />
  },
          {
    path: "/bai5",
    element: <Bai5 />
  },
  
  // {
  //   path: "/about",
  //   element: <About />
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />
  // },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
