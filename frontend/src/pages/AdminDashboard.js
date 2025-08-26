import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard(params) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 p-0">
                    <AdminSidebar />
                </div>
                <div className="col-md-9 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;