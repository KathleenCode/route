import { Outlet, NavLink } from "react-router-dom";

export default function MainPageLayout() {
  return (
    <>
     <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} className='head-nav'>
      <span>ReactVite</span>
      <ul style={{display: "flex", gap: "1rem", justifyContent: "space-between", alignItems: "center", listStyle: "none"}}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>
      </ul>
     </nav>

     <div style={{ padding: "1rem 1.5rem" }}>
        <Outlet />
    </div>
    </>
  )
}
