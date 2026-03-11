import { NavLink } from "react-router-dom"

function Contact() {
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
      <h1 style={{ marginTop: 0, marginBottom: 10, fontSize: '2rem' }}>Contact</h1>
      <p style={{ marginTop: 0, marginBottom: 16 }}>
        This is contact  page.
      </p>

      <NavLink to='/about' style={{ color: '#1890ff', textDecoration: 'none' }}>About us</NavLink>
      <NavLink to='/' style={{ color: '#1890ff', textDecoration: 'none', marginLeft: 12 }}>Home</NavLink>
    </div>
  )
}

export default Contact