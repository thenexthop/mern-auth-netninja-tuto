import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Nabvar";

export default function Main() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pages">
          <Outlet />
        </div>
      </main>
      <footer><small>@agaha 2023</small></footer>
    </>
  );
}
