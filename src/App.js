import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home, {homeLoader} from "./pages/home";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import AboutPageLayout from "./pages/AboutPageLayout";
import TeamPageLayout from "./pages/TeamPageLayout";
import Team, { fetchTeamData } from "./pages/team";
import MainPageLayout from "./pages/MainPageLayout";
import TeamMember, { fetchMemberData } from "./pages/teamMember";
import TeamErrorPage from "./pages/TeamErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPageLayout />}>
      <Route index element={<Home />} loader={homeLoader}/>
      <Route path="/about" element={<AboutPageLayout />}>
        <Route 
        index 
        element={<div>This is the history page <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>} />
        <Route path="mission" element={<div>This is the mission page <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>} />
      </Route>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<TeamPageLayout />} errorElement={<TeamErrorPage />}>
        <Route index element={<Team />} loader={fetchTeamData}/>
        <Route path=":teamId" element={< TeamMember />} loader={fetchMemberData}/>
      </Route>
      <Route path="*" element={<NotFound />} />
   </Route>
  )
)

// function App() {
//   return (
//     <>
//     <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} className='head-nav'>
//       <span>ReactVite</span>
//       <ul style={{display: "flex", gap: "1rem", justifyContent: "space-between", alignItems: "center", listStyle: "none"}}>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/contact">Contact us</NavLink></li>
//         <li><NavLink to="/gallery">Gallery</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/team">Team</NavLink></li>
//       </ul>
//     </nav>

//   <div style={{ padding: "1rem 1.5rem" }}>
    
//   </div>

  
//     </>
//   );
// }

function App() {
  return < RouterProvider router={router} />;
}

export default App;
