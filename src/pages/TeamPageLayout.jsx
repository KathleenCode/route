import { Outlet } from "react-router-dom";

export default function TeamPageLayout() {
  return (
    <>
    <h2 style = {{ color: "tomato", marginBottom: "1rem"}}>Meet the team</h2>

    <Outlet />
    </>
  );
}
