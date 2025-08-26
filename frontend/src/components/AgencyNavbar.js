import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function AgencyNavbar() {
    const { id } = useParams();
    const [agency, setAgency] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAgency() {
            try {
                const response = await fetch(`http://localhost:8080/api/agency/${id}/profile`);
                const data = await response.json();
                setAgency(data);
            } catch (error) {
                console.error("Failed to fetch agency profile:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchAgency();
    }, [id]);

    return (
        <nav className="navbar navbar-expand-lg bg-light border-bottom px-4">
            <div className="container-fluid d-flex justify-content-between align-items-center">

                {/* Left: Nav Links */}
                <div className="collapse navbar-collapse show">
                    <ul className="navbar-nav gap-2">
                        <li className="nav-item">
                            <NavLink
                                to={`/agency/${id}/home`}
                                end
                                className={({ isActive }) =>
                                    `nav-link px-2 ${isActive ? "fw-semibold border-bottom border-secondary" : "text-secondary"}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to={`/agency/${id}/home/van-management`}
                                className={({ isActive }) =>
                                    `nav-link px-2 ${isActive ? "fw-semibold border-bottom border-secondary" : "text-secondary"}`
                                }
                            >
                                Vans
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to={`/agency/${id}/home/driver-management`}
                                className={({ isActive }) =>
                                    `nav-link px-2 ${isActive ? "fw-semibold border-bottom border-secondary" : "text-secondary"}`
                                }
                            >
                                Drivers
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to={`/agency/${id}/home/view-profile`}
                                className={({ isActive }) =>
                                    `nav-link px-2 ${isActive ? "fw-semibold border-bottom border-secondary" : "text-secondary"}`
                                }
                            >
                                View Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Right: Agency Profile */}
                <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-person-fill text-secondary fs-5"></i>
                    <span className="text-secondary small fw-semibold">
                        {
                            loading
                                ? 'Loading...'
                                : agency
                                    ? agency.name
                                    : 'Agency'
                        }
                    </span>
                </div>

            </div>
        </nav>
    );
}

export default AgencyNavbar;
