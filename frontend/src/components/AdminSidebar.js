import { NavLink } from "react-router-dom";

function AdminSidebar() {
    return (
        <div
            className="d-flex flex-column bg-dark text-white main-content"
            style={{
                height: "100vh",                // Full height of viewport
                overflowY: "auto",              // Enable scroll if needed
                padding: "1rem 0",
                boxSizing: "border-box"
            }}
        >
            <h4 className="mb-4 px-3">Admin Dashboard</h4>

            <NavLink
                to="customer-management"
                className={({ isActive }) =>
                    `text-white text-start px-3 py-2 w-100 nav-link border-0 ${isActive ? "bg-secondary bg-opacity-100" : "bg-secondary bg-opacity-50"
                    }`
                }
                style={{ borderRadius: 0 }}
            >
                Customer Management
            </NavLink>

            <NavLink
                to="agency-management"
                className={({ isActive }) =>
                    `text-white text-start px-3 py-2 w-100 nav-link border-0 ${isActive ? "bg-secondary bg-opacity-100" : "bg-secondary bg-opacity-50"
                    }`
                }
                style={{ borderRadius: 0 }}
            >
                Agency Management
            </NavLink>
            <NavLink
                to="van-management"
                className={({ isActive }) =>
                    `text-white text-start px-3 py-2 w-100 nav-link border-0 ${isActive ? "bg-secondary bg-opacity-100" : "bg-secondary bg-opacity-50"
                    }`
                }
                style={{ borderRadius: 0 }}
            >
                Van Management
            </NavLink>


            
        </div>


    );
}

export default AdminSidebar;
