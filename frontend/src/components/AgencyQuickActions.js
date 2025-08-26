import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function AgencyQuickActions() {
    const { id } = useParams();
    const navigate = useNavigate();

    const actions = [
        {
            title: "Manage Vans",
            icon: "bi-truck-front-fill",
            link: `/agency/${id}/home/van-management`
        },
        {
            title: "Manage Drivers",
            icon: "bi-person-badge-fill",
            link: `/agency/${id}/home/driver-management`
        },
        {
            title: "View Profile",
            icon: "bi-person-lines-fill",
            link: `/agency/${id}/home/view-profile`
        }
    ];

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-light fw-semibold">Quick Actions</div>
            <div className="card-body d-flex flex-column gap-2">
                {actions.map((action, idx) => (
                    <button
                        key={idx}
                        onClick={() => navigate(action.link)}
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-start gap-2"
                    >
                        <i className={`bi ${action.icon} fs-5`}></i>
                        {action.title}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AgencyQuickActions;
