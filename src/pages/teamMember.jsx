 import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";

 export default function TeamMember() {
    const params = useParams();
    // console.log(params);
    const teamData = useLoaderData();
    console.log("teamData", teamData);

    const navigate = useNavigate();

  return (
    <>
    <Link to = "/team" style={{marginBottom: "1rem", backgroundColor: "#151515", padding: ".7rem .9rem", color: "wheat", borderRadius: ".5rem"}}> Go back </Link>
    {/* <button style={{marginBottom: "1rem", backgroundColor: "#151515", padding: "0.9rem 0.7rem", borderRadius: ".2rem", color: "white", border: "none", cursor: "pointer"}} onClick={() => navigate(-1)}> Go back </button> */}

    <h3 style={{ color: "tomato", margin: "1rem"}}>Details for {teamData.name}</h3>
    <h4 style={{ color: "#6C5F5B", margin: "1rem"}}>A team member { params.teamId }</h4>
    <div style={{ color: "#B0926A", margin: "1rem"}}>
     <p>Full Name: {teamData.name} </p>
     <p>UserName: {teamData.username}</p>
     <p>Phone: {teamData.phone}</p>
     <p>Company name: {teamData.company.name}</p>
     <p>Website: {teamData.website}</p>
     <p>Email: {teamData.email}</p>
     <p>Address: {teamData.address.street}</p>
    </div>
    </>
  );
}

export const fetchMemberData = async ({ params }) => {

    const id = params.teamId;

    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
   
    if(!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
}
