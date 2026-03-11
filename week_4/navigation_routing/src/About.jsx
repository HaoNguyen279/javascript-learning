import { NavLink } from "react-router-dom"

function About() {
	return (
		<div
			style={{
				maxWidth: 520,
				margin: '0 auto',
				padding: '24px',
				borderRadius: 12,
				background: '#ffffff',
				color: '#213547',
				boxShadow: '0 12px 28px rgba(0, 0, 0, 0.08)',
				textAlign: 'left',
			}}
		>
            <h1 style={{ marginTop: 0, marginBottom: 10, fontSize: '2rem' }}>About</h1>
			<p style={{ marginTop: 0, marginBottom: 12 }}>
				This is about page.
			</p>

            <NavLink to='/contact' style={{ color: '#1890ff', textDecoration: 'none' }}>Contact us</NavLink>
            <NavLink to='/' style={{ color: '#1890ff', textDecoration: 'none', marginLeft: 12 }}>Home</NavLink>
			
		</div>
	)
}

export default About
