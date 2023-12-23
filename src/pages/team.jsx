import { useLoaderData, Link } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function Team() {
//   const [ team, setTeam ] = useState([]);

//     // const teamData = useLoaderData();
//     // console.log("---", teamData);

//     useEffect(() => {
//       const fetchTeamData = async() => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         setTeam(await response.json());

//       }

//       fetchTeamData()
//     }, []);

const team = useLoaderData();

  return (
    <>
    <div style={{color: "#A9B388", marginBottom:"1rem"}} >Team</div>
    {team.map((member) => (
      <Link to={member.id.toString()} key = {member.id} style = {{display: "block", listStyle: "none", backgroundColor: "#151515", marginBottom: "1rem", padding: "1.5rem", borderRadius: "0.5rem", color: "gray"}}>
        <p>Full Name: {member.name}</p>
        <p>Email of Member: {member.email}</p>
        <p>Address of Member: {member.address.city}</p>
      </Link>
    ))}
    </>
  );
}


// loader request

export const fetchTeamData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
   
    if(!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
}