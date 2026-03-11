import { NavLink, useParams } from "react-router-dom";

function HomePage() {
    let {username} = useParams();
    return (
    <div>
            <h1 style={{ textAlign: 'center', marginTop: 40 }}>Welcome !</h1>
            <p style={{ textAlign: 'center', marginTop: 12 }}>
            This is our homepage. You can click to the link below for more information about us and how to contact us.
            </p>
        <ul>
            <li><NavLink to='/about' style={{ color: '#1890ff', textDecoration: 'none' }}>About Us</NavLink></li>
            <li><NavLink to='/contact' style={{ color: '#1890ff', textDecoration: 'none' }}>Contact</NavLink></li>
            <li><NavLink to='/dashboard' style={{ color: '#1890ff', textDecoration: 'none' }}>Dashboard</NavLink></li>
        </ul>
    </div>
  );
}

export default HomePage