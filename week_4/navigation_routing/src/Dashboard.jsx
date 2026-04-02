import { Routes, Route, Outlet, useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate();
  function navigateToAnalytics(){
    navigate('/dashboard/analytics')
}
  function navigateToSales(){
    navigate('/dashboard/sales')
}
  return (
    <>
      <p>Dashboard Content</p>
      <button onClick={navigateToAnalytics}>Analytics</button>
      <button onClick={navigateToSales}>Sales</button>
      <Outlet />
    </>
  )
}

export default Dashboard