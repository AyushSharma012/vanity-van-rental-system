import { Outlet } from "react-router-dom";
import CustomerNavbar from "../components/CustomerNavbar";

function CustomerDashboard() {
  return (
    <>
      <CustomerNavbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default CustomerDashboard;
