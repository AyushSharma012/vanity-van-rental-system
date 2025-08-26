import { Outlet } from "react-router-dom";
import AgencyNavbar from "../components/AgencyNavbar"; // adjust the path if needed

function AgencyDashboard() {
  return (
    <div className="d-flex flex-column main-content" style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <AgencyNavbar />

      <div
        className="flex-grow-1 p-4"
        style={{
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AgencyDashboard;
