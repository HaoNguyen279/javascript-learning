import './App.css'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import HomePage from './HomePage'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'

function AnalyticsPage() {
  return (
    <div>
      <h3>Analytics</h3>
      <ul>
        <li>Visitors today: 1,245</li>
        <li>Conversion rate: 4.2%</li>
        <li>Bounce rate: 31%</li>
      </ul>
    </div>
  )
}

function SalesPage() {
  const navigate = useNavigate();

  function navigateToAnalytics(){
    navigate('/dashboard/analytics')
}
  return (
    <div>
      <h3>Sales content:</h3>
      <button onClick={navigateToAnalytics}>View Analytics</button>
      <ul>
        <li>Total orders: 318</li>
        <li>Revenue: $12,450</li>
        <li>Top product: React Course</li>
      </ul>
    </div>
  )
}



function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='/dashboard' element={<Dashboard />}>
        <Route index element={<p>Choose Analytics or Sales.</p>} />
        <Route path='analytics' element={<AnalyticsPage />} />
        <Route path='sales' element={<SalesPage />} />
      </Route>
    </Routes>
  )
}

export default App