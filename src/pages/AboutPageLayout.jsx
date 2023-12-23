import { NavLink, Outlet } from "react-router-dom";

export default function AboutPageLayout() {
    return (
    <>
    <div style={{marginBottom: "2rem", color:"#FAEED1"}}>
        <h3 style={{marginBottom: "1rem", marginTop: "1rem", color: "#C69774"}}> Welcome to the about page</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Alias maxime blanditiis sunt excepturi explicabo error autem nemo. 
         Consequatur nesciunt dolore impedit quis incidunt molestias suscipit delectus magnam. 
         Excepturi, minima vitae.
        </p>
    </div>
    <nav>
        <NavLink to="/about">Our History</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="mission">Our Mission</NavLink>
    </nav>

    <main style={{marginTop: "1rem"}}>
        <Outlet />
    </main>

    </>
    );
}