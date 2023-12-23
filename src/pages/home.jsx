import { useLoaderData } from "react-router-dom";

export default function Home() {
    const { todos } = useLoaderData();
    console.log(todos);
    return ( 
    <>
    <div style={{padding: "2rem"}}>
       {
        todos.map((tod) => (
          <div style={{padding: "2rem", margin: "1rem", border: "2px solid #6B240C", borderRadius: "3rem"}} key={tod.id}>
            <p>{tod.todo}</p>
            <p>{tod.completed}</p>
          </div>
        )
        )
       }
    </div>
    </>
)
}

export async function homeLoader() {
    const response = await fetch('https://dummyjson.com/todos');
    return response.json();
}