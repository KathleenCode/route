import { useRouteError } from "react-router-dom";

export default function TeamErrorPage() {
    const error = useRouteError();
  return (
    <div style = {{color: "red", textAlign: "center"}}>
     <p style = {{marginBottom: "1rem", fontSize: "2.5rem", color: "wheat"}}>TeamErrorPage</p>
     <p>{ error.message }</p>
     <p>Oops ! Something happened</p>
    </div>
  );
}
